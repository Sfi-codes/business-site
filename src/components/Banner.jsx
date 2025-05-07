import Button from "./button/Button";

const Banner = () => {
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div>
        <h1>Your trusted IT partner for growth</h1>
        <p>Business Name- provides IT support and managed services tailored to help small businesses run efficiently</p>
        <Button text = "Enquire about IT support" />
      </div>
      <img src="src/assets/freepix/banner.jpg" width = "100%"></img>
    </div>
  );
};

export default Banner;
