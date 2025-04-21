const Banner = () => {
  const style = {
    border: "1px solid black",
  };
  return (
    <div style={style}>
      <div style={{ paddingTop: "25%", paddingBottom: "25%" }}>
        <h1>Your trusted IT partner for growth</h1>
        <button>Enquire about IT support</button>
      </div>
    </div>
  );
};

export default Banner;
