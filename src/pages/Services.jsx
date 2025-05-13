import Gallery from "../components/Gallery";
import Contact from "..//pages/Contact";
import Button from "../components/button/Button";

const Services = () => {
    return (
        <div>
            <h1>Evolve your IT systems</h1>
            <p>Technology is the heartbeat of your business vitality. It drives success by delivering seamless systems, clear communication, and smooth collaboration. To ensure this heartbeat stays strong and ready for the future, you need a powerful IT strategy that enhances transparency, boosts productivity, and strengthens security. Whether you’re expanding rapidly, innovating boldly, transitioning platforms, or bouncing back from setbacks, we’re here to support you every step of the way.</p>
            <Gallery />
            <div>
                <h1>We are here to help grow your business</h1>
<Button text = 'Request a meeting' link = 'contact' element = {<Contact/>}/>            </div>
        </div>
    )
}

export default Services