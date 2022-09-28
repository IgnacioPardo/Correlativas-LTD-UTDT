import { Handle, Position } from 'react-flow-renderer';

function CourseNode({ data }) {
    return (
        <>
            {data.hasLeft ? <Handle type="target" position={Position.Left} /> : null}
            <div style={{ /*filter: data.done ? "grayscale(0)": "grayscale(0.8)",*/ width: '160px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, color: data.foreground, background: data.background, borderRadius: 14, border: "1px solid #000", fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                {data.label}
            </div>
            {data.hasRight ? <Handle type="source" position={Position.Right} /> : null}
        </>
    );
}

export default CourseNode;