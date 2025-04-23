const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: "30px",
      }}
    >
      <img src="src/assets/react.svg"></img>
      <div style={{ flexGrow: '1', justifyItems: 'center'}}>
      <ul style={{display: 'flex', listStyle: 'none', gap: '20px'}}>
        <li>
          <a href="src/pages/Home.jsx">Home</a>
        </li>
        <li>
          <a href="src/pages/Services.jsx">Services</a>
        </li>
          <li>
            <a href="src/pages/Contact.jsx">Case Studies</a>
          </li>
          <li>
          <a href="src/pages/About.jsx">About</a>
        </li>
        <li>
          <a href="src/pages/Contact.jsx">Contact</a>
        </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navigation;
