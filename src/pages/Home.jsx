import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import BusinessProcess from "../components/BusinessProcess"

const Home = () => {

    return (
        <div>
            <Banner />
            <h2>Reliable IT support in Birmingham</h2>
            <p>
                We are dedicated to offering IT support to Birmingham businesses. We
                support businesses by leveraging technology to meet your required
                business needs. Our client-orientated approach allows for a seamless
                partnership between our skilled engineers and you to create and
                implement specialised IT and cyber security solutions.
            </p>
            <Gallery />
            <BusinessProcess />
        </div>
    )
}

export default Home