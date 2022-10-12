function YearNode({ data }) {
    return (
        <>
            <div style={{ /*filter: data.done ? "grayscale(0)": "grayscale(0.8)",*/ width: '160px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, color: "#fff", borderRadius: 14, border: "0px solid #000", fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                {data.label}
            </div>
        </>
    );
}

export default YearNode;