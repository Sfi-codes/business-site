const Contact = () => {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', flexDirection: 'column', padding: ' 100px', border: '1px solid black'
        }}>
            <h1>Send us a message</h1>
            <form style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                <input placeholder="Email"></input>
                <input placeholder="Telephone"></input>
                <input placeholder="Message"></input>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact