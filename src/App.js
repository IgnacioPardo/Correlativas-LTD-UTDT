import './App.css';
import React, { useCallback, useState } from 'react';
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

const nodeTypes = { course: CourseNode };

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

var full_edges = [];
initialEdges.forEach(e => full_edges.push([e.source, e.target]))

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

function updateNodes(nodeSetter, edgeSetter, id, pathview) {
  if (!pathview) {
    nodeSetter(initialNodes);
  }
  else {
    nodeSetter(filterNodes(id));
  }
  edgeSetter(initialEdges);
}

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const [pathview, setPathview] = useState(true);
  const [label, setLabel] = useState("Clickea en una materia para ver todas sus correlativas");
  return (
    <div className="App">
      <div>
        <img 
          style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10, zIndex: 10, objectFit: 'cover' }}
          src="micro_ditella_dark.png" 
          alt="MicroDiTella" 
          width="120" 
          height="120"
          onClick={(event) => window.open("https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534", '_blank', 'noopener,noreferrer')} />
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
        }}>
          {label}
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
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        onNodeClick={(event, element) => { 
          updateNodes(setNodes, setEdges, element.id, pathview); 
          setPathview(!pathview) 
          if (!pathview){
            setLabel("Clickea en una materia para ver todas sus correlativas")
          }
          else{
            setLabel("Clickea en cualquier materia para resetear vista")
          }
        }}
      >
        <Controls
          style={{ color: '#4A4A4A', backgroundColor: '#181818', borderRadius: '2px', padding: '5px'}}
          onFitView={() => updateNodes(setNodes, setEdges, null, false)}
          showInteractive={false}
        >
          <ControlButton onClick={() => updateNodes(setNodes, setEdges, null, false)}>
            <>⌘</>
          </ControlButton>
        </Controls>
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default App;
