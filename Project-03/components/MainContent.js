
export default function MainContent() {
    const Data = [
        {
            id: 1,
            img: "./images/image_1.png",
            title: "Life lessons with Katie Zaferes",
            status: "SOLD OUT",
            rating: 5.0,
            sells: 6,
            country: "USA",
            price: 136,
            openSpots:0,
        },
        {
            id: 2,
            img: "./images/image_2.png",
            title: "Learn wedding photography",
            status: "ONLINE",
            rating: 5.0,
            sells: 30,
            country: "USA",
            price: 125,
            openSpots:0,
            
        },
        {
            id: 3,
            img: "./images/image_3.png",
            title: "Group Mountain Biking",
            status: "ONLINE",
            rating: 4.8,
            sells: 2,
            country: "USA",
            price: 50,
            openSpots:1,
        },
        {
            id: 1,
            img: "./images/image_1.png",
            title: "Life lessons with Katie Zaferes",
            status: "SOLD OUT",
            rating: 5.0,
            sells: 6,
            country: "USA",
            price: 136,
            openSpots:0,
        },
        {
            id: 2,
            img: "./images/image_2.png",
            title: "Learn wedding photography",
            status: "ONLINE",
            rating: 5.0,
            sells: 30,
            country: "USA",
            price: 125,
            openSpots:0,
        },
        {
            id: 3,
            img: "./images/image_3.png",
            title: "Group Mountain Biking",
            status: "ONLINE",
            rating: 4.8,
            sells: 2,
            country: "USA",
            price: 50,
            openSpots:1,
        },
        
        
    ]
    const card = Data.map(item=>{
        return(
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="main">
            <div className="hero-section">
                <img className="hero-img"></img>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <div className="down">
                {card}
                
            </div>
        </div>
    )
}