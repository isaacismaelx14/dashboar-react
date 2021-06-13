function Spinner({ variant }) {
  return (
    <div className="useBootstrap loading">
      <div style={{ transform: "scale(2)", marginTop: "30px" }}>
        <div className={"spinner-border text-" + variant} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
