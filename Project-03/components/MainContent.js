export default function MainContent() {
    return (
        <div className="main">
            <div className="hero-section">
                <img className="hero-img"></img>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <div className="down">
                <Card
                    img="./images/image_1.png"
                    status="SOLD OUT"
                    rating="5.0"
                    sells="6"
                    country="USA"
                    description="Life lessons with Katie Zaferes"
                    price="136"

                />
                <Card
                    img="./images/image_2.png"
                    status="ONLINE"
                    rating="5.0"
                    sells="30"
                    country="USA"
                    description="Learn wedding photography"
                    price="125"
                />
                <Card
                    img="./images/image_3.png"
                    status="ONLINE"
                    rating="4.8"
                    sells="2"
                    country="USA"
                    description="Group Mountain Biking"
                    price="50"
                />
                
            </div>
        </div>
    )
}