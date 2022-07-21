export default function Card(props) {
    return (
        <div className="card-row">
            <div className="card-img">
                <img src={props.item.imageUrl}></img>
            </div>
            <div className="card-content">
                <div className="top">
                    <div className="flex">
                        <img src="./images/location-logo.png"></img>
                        <h5>{props.item.location}</h5>
                        <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h2>{props.item.title}</h2>
                </div>
                <div className="bottom">
                    <h5>{props.item.startDate} - {props.item.endDate}</h5>
                    <p>{props.item.description}</p>
                </div>
            </div>


        </div>
    )
}