const Navigation = () => {
    const style = {
      display: "inline",
    };
    
    return (
      <nav style={{display: 'grid', gridTemplateColumns: '33.3% 33.3% 33.3%', paddingBottom: '30px'}}>
        <img src="src/assets/react.svg"></img>
        <ul>
          <li style={style}>
            <a href="src/pages/Home.jsx">Home</a>
          </li>{" "}
          <li style={style}>
            <a href="src/pages/Services.jsx">Services</a>
          </li>{" "}
          <li style={style}>
            <a href="src/pages/About.jsx">About</a>
          </li>{" "}
          <li style={style}>
            <a href="src/pages/Contact.jsx">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };

  export default Navigation