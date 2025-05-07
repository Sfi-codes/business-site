const Gallery = () => {
  const gridLayout = {
    display: "flex",
    justifyContent: 'center',
    gap: '10px',
    paddingTop: '30px'
  };

  const content = {
    width:'150px',
    textAlign: 'center',
    border: "1px solid black",
  };
  return (
    <div style ={{borderTop: "1px solid lightgrey",paddingTop:"30px", paddingBottom: "30px"}}>
      <h2 style={{textAlign: "center"}}>Our services</h2>
      <div style={gridLayout}>
        <div style={content}>
          <img src="src/assets/react.svg" width ="100px"></img>
          <div>IT Managed Services</div>
          {/*<p> IT managed services involve outsourcing your entire IT operations to a third-party provider who proactively manages, monitors, and maintains your IT infrastructure. This includes network management, software updates, security monitoring, help desk support, and business continuity planning. Managed services help businesses reduce costs, improve system reliability, and access expert IT skills without the need for large in-house teams, all under clear service level agreements (SLAs) that ensure predictable, high-quality support.</p>*/}
        </div>
        <div style={content}>
          <img src="src/assets/react.svg" width ="100px"></img>
          <div>Cloud Solutions</div>
          {/*<p> Cloud solutions provide flexible, scalable, and cost-effective computing resources delivered over the internet. They allow businesses to quickly deploy applications, scale infrastructure up or down based on demand, and reduce capital expenditures on hardware. Cloud platforms enhance collaboration by enabling anytime, anywhere access to data and applications, improve security through advanced encryption and multi-factor authentication, and automate updates to keep systems current and protected.</p>*/}
        </div>
        <div style={content}>
          <img src="src/assets/react.svg" width ="100px"></img>
          <div>Backup & Disaster Recovery</div>
          {/*<p> Disaster recovery services ensure your business can quickly recover IT systems and data after disruptions such as cyberattacks, hardware failures, or natural disasters. These services replicate and back up critical data to secure offsite or cloud environments, enabling rapid failover to secondary systems with minimal downtime. Disaster recovery plans include failback procedures to restore operations to the primary site and are essential for maintaining business continuity, data integrity, and regulatory compliance.</p>*/}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
