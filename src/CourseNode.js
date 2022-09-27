import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { left: 10 };

function CourseNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div style={{ width: '160px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, color: data.foreground, background: data.background, borderRadius: 14, border: "1px solid #000", fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                {data.label}
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    );
}

export default CourseNode;