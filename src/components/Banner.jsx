import Button from "./button/Button";
import Contact from "..//pages/Contact";

const Banner = () => {
  const style = {
    display: 'flex',
  };

const button = () => {
  return <div>

  </div>
}
  return (
    <div style={style}>
      <div>
        <h1>Your trusted IT partner for growth</h1>
        <p>Business Name- provides IT support and managed services tailored to help small businesses run efficiently</p>
          <Button text = "Enquire about IT support" link = 'contact' element = {<Contact/>}/>
      </div>
      <img src="src/assets/freepix/banner/20945551-Photoroom.png" width = "100%"></img>
    </div>
  );
};

export default Banner;
