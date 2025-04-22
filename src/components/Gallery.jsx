const Gallery = () => {
  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    height: "300px",
    columnGap: '0.3%'
  };

  const content = {
    paddingTop: "25%",
    paddingBottom: "25%",
    border: "1px solid black",
  };
  return (
    <div>
      <h2>Our services</h2>
      <div style={gridLayout}>
        <div style={content}>
          <img src="src/assets/react.svg"></img>
          <div>IT Managed Services</div>
        </div>
        <div style={content}>
          <img src="src/assets/react.svg"></img>
          <div>Cloud Solutions</div>
        </div>
        <div style={content}>
          <img src="src/assets/react.svg"></img>
          <div>Backup & Disaster Recovery</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
