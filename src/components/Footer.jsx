const Footer = () => {
  return (

    <footer style={{
      display: 'flex',
      justifycContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '30px'
    }}>
      <div style={{ display: "flex", gap: '10px' }}>
        <a>Privacy policy</a>
        <a>Cookie Policy</a>
      </div>
      <p>@Copyright by none 2025</p>
    </footer>);
};

export default Footer;
