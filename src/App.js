import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  ControlButton,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import CourseNode from './CourseNode.js';
import { nodes as initialNodes, edges as initialEdges } from './courses';
import { toPng } from 'html-to-image';

const nodeTypes = { course: CourseNode };

const onInit = (reactFlowInstance, setReactFlowInstance) => {
  setReactFlowInstance(reactFlowInstance)
  document.querySelector('.reactFlowBackgroundPattern').onClick = () => {
    console.log("background clicked");
  }
}

var lefts = [];
var rights = [];
var full_edges = [];
initialEdges.forEach(e => {
  full_edges.push([e.source, e.target])
  lefts.push(e.target);
  rights.push(e.source);
})

var ids = [];
initialNodes.forEach(n => {
  ids.push(n.id)
  if (lefts.includes(n.id)) {
    n.data.hasLeft = true;
  }
  if (rights.includes(n.id)) {
    n.data.hasRight = true;
  }
});

var corrAmm = {};
var corrAmmLis = [];
ids.forEach(
  (id) => {
    var thisPath = path(id);
    corrAmm[id] = thisPath.length - 1;
    corrAmmLis.push([id, thisPath.length - 1])
  }
)
corrAmmLis = corrAmmLis.sort(function (a, b) {
  return b[1] - a[1];
})

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function forward_path(n, edges) {
  var nodes = [];
  edges.forEach(function (edge) {
    if (edge[0] === n) {
      nodes.push(edge[1]);
      forward_path(edge[1], edges).forEach(function (node) {
        nodes.push(node);
      });
    }
  });
  return nodes.filter(onlyUnique);
}

function backward_path(n, edges) {
  var nodes = [];
  edges.forEach(function (edge) {
    if (edge[1] === n) {
      nodes.push(edge[0]);
      backward_path(edge[0], edges).forEach(function (node) {
        nodes.push(node);
      });
    }
  });
  return nodes.filter(onlyUnique);
}

function path(n) {
  return forward_path(n, full_edges).concat(backward_path(n, full_edges)).concat([n]);
}

function filterNodes(id) {
  var nodes = [];
  initialNodes.forEach(function (node) {
    if (path(id).includes(node.id)) {
      nodes.push(node);
    }
  });
  return nodes;
}

function course_by_id(id) {
  var course = null;
  initialNodes.forEach(function (node) {
    if (node.id === id) {
      course = node;
    }
  });
  return course;
}

function downloadImage(dataUrl) {
  const a = document.createElement('a');
  a.setAttribute('download', 'Correlativas_LTD_UTDT.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const screenshot = () => {
  toPng(document.querySelector('.react-flow'), {
    filter: (node) => {
      // we don't want to add the minimap and the controls to the image
      if (
        node?.classList?.contains('react-flow__minimap') ||
        node?.classList?.contains('react-flow__controls')
      ) {
        return false;
      }

      return true;
    },
  }).then(downloadImage);
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const [pathview, setPathview] = useState(true);
  const [label, setLabel] = useState("Clickea en una materia para ver todas sus correlativas");
  const [preLabel, setPreLabel] = useState("");
  const [clickedCourse, setClickedCourse] = useState("");

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  //const [fitView, setFitView] = useState((e) => {console.log(e)});

  const updateNodes = (id, reducedView) => {
    setPathview(reducedView)
    if (reducedView) {
      setNodes(filterNodes(id));
    }
    else {
      setNodes(initialNodes);
    }
    setEdges(initialEdges);
  }

  const reset = () => {
    updateNodes(null, false)
    setLabel("Clickea en una materia para ver todas sus correlativas")
  }

  useEffect(() => {
    if (reactFlowInstance) {
      reactFlowInstance.fitView({ duration: 800, padding: 0.1, center: true });

    }
  }, [nodes, reactFlowInstance]);

  return (
    <div className="App">
      <div>
        <img
          style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10, zIndex: 10, objectFit: 'cover' }}
          src="micro_ditella_dark.png"
          alt="MicroDiTella"
          width="80"
          height="80"
          onClick={(event) => window.open("https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534", '_blank', 'noopener,noreferrer')} />
      </div>
      <div style={{
        position: 'absolute',
        top: '60px',
        width: "100vw",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#aaa",
        fontFamily: '"Inter", sans-serif',
      }}>
        <div style={{
          backgroundColor: "#1E1E1E",
          padding: "2px",
          borderRadius: "5px",
          width: 'auto',
          height: 'auto',
          zIndex: 20,
          fontFamily: '"Inter", sans-serif',
        }}>
          {label}
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: "100vw",
        zIndex: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#aaa",
        fontFamily: '"Inter", sans-serif',
      }}>
        <div style={{
          backgroundColor: "#1E1E1E",
          padding: "2px",
          borderRadius: "5px",
          width: 'auto',
          height: 'auto',
          zIndex: 20,
          fontFamily: '"Inter", sans-serif',
          color: "#FFDD55",
          display: 'flex',
          textDecoration: 'none !important',
        }}>
          <a style={{
            fontFamily: '"Inter", sans-serif',
            color: "#FFDD55",
            display: 'flex',
            textDecoration: 'none !important',
          }} href='https://github.com/IgnacioPardo/Correlativas-LTD-UTDT'>
            <svg style={{ width: "20px", marginRight: 8, fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            GitHub
          </a>
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={true}
        nodesConnectable={false}
        onConnect={onConnect}
        onInit={(instance) => onInit(instance, setReactFlowInstance)}
        fitView={true}
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        onClick={(e) => {
          if (e.target.className === "react-flow__pane react-flow__container"){
            reset()
          }
        }}
        onNodeClick={(event, element) => {
          if (clickedCourse !== element.id){
            setClickedCourse(element.id);
            updateNodes(element.id, true);
            setClickedCourse(element.id);
            if (!pathview) {
              setLabel("Clickea en una materia para ver todas sus correlativas")
            }
            else {
              setLabel("Clickea en cualquier materia para resetear vista")
            }
          }
          else{
            reset()
          }
        }}
        onNodeMouseEnter={(event, element) => {
          setPreLabel(label)
          if (element.id !== clickedCourse) {
            if (corrAmm[element.id] > 1) {
              setLabel("Clickea en " + course_by_id(element.id).data.label.props.children + " para ver sus " + corrAmm[element.id] + " correlativas")
            }
            else if (corrAmm[element.id] === 1) {
              setLabel("Clickea en " + course_by_id(element.id).data.label.props.children + " para ver su correlativa")
            }
            else {
              setLabel(course_by_id(element.id).data.label.props.children + " no tiene correlativas")
            }
          }
          else {
            if (corrAmm[element.id] > 1) {
              setLabel(course_by_id(element.id).data.label.props.children + " tiene " + corrAmm[element.id] + " correlativas")
            }
            else if (corrAmm[element.id] === 1) {
              setLabel(course_by_id(element.id).data.label.props.children + " tiene 1 correlativa")
            }
            else if (corrAmm[element.id] === 0) {
              setLabel(course_by_id(element.id).data.label.props.children + " no tiene correlativas")
            }
            else{
              setLabel("Clickea en una materia para ver todas sus correlativas");
            }
          }
        }}
        onNodeMouseLeave={(event, element) => {
          setLabel("Clickea en una materia para ver todas sus correlativas")
          
        }}
      >
        <Controls
          style={{ color: '#4A4A4A', backgroundColor: '#181818', borderRadius: '2px', padding: '5px', zIndex: 100 }}
          //onFitView={() => updateNodes(setNodes, setEdges, null, false, setPathview)}
          showInteractive={false}
        >
          <ControlButton onClick={reset}

            onMouseEnter={() => {
              setPreLabel(label);
              setLabel("Resetear vista")
            }}
            onMouseLeave={() => {
              setLabel(preLabel)
            }}
          >
            <>⌘</>
          </ControlButton>
          <ControlButton onClick={screenshot}
            style={{
              transform: 'rotate(180deg)',
            }}
            onMouseEnter={() => {
              setPreLabel(label);
              setLabel("Descargar imagen")
            }}
            onMouseLeave={() => {
              setLabel(preLabel)
            }}
          >
            <>⏏︎</>
          </ControlButton>
        </Controls>
        <Background color="#aaa" gap={16} className="reactFlowBackgroundPattern" />
      </ReactFlow>
    </div>
  );
}

export default App;
