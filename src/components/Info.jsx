import Button from "./button/Button";

const Info = () => {
	const style = {
	border: '1px solid white',
	padding: '100px 0px 100px 0px',
  backgroundColor: 'white',
  borderRadius: '4px'
	}

	return (
<div style = {style}>
<div style = {{padding: "30px"}}>
          <h2>Reliable IT support in Birmingham</h2>
            <p>
                We are dedicated to offering IT support to Birmingham businesses. We
                support businesses by leveraging technology to meet your required
                business needs. Our client-orientated approach allows for a seamless
                partnership between our skilled engineers and you to create and
                implement specialised IT and cyber security solutions.
            </p>
            <Button text = 'Read more'/>
            </div>
</div>
	)
}

export default Info