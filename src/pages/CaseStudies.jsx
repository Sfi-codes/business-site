import Gallery from "../components/Gallery";

const Services = () => {

    const container = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderRadius: '4px',
        padding: '30px'
    }

    const column = {
        flexGrow:'1',
        maxWidth:'50%',
    }
    return (
        <div style = {container}>
        <div style = {column}>
        <h1>Case studies</h1>  
        </div>  
        <div style = {column}>
        <p>Managed IT Services for a Growing Manufacturing Firm.</p>
        <p>A mid-sized manufacturing company faced frequent network downtime and lacked proactive IT support, impacting productivity. Our managed IT services provided 24/7 monitoring and rapid issue resolution, resulting in 99.9% uptime and a 40% reduction in IT-related disruptions.</p>
        <p>Cloud Migration and Optimization for an E-commerce Business</p>
        <p>An e-commerce client struggled with outdated on-premise servers causing slow website performance during peak sales periods. We migrated their infrastructure to a scalable cloud platform, improving uptime to 99.9% and reducing infrastructure costs by 30%, enhancing customer experience significantly.
        </p>
        <p>Backup and Disaster Recovery for a Healthcare Provider</p>
        <p>A healthcare organization needed to strengthen data protection and comply with HIPAA regulations amid rising cybersecurity threats. Our cloud backup and disaster recovery solution ensured zero data breaches in the first year and enabled rapid recovery from any incidents, maintaining compliance and business continuity.
        </p>
        </div>     

        </div>    )
}

export default Services