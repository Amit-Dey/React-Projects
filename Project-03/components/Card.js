export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.item.img}></img>
            {props.openSpots == 0 &&  <h4 className="tag">{props.item.status}</h4>}
            <div className="review">
                <div className="r-row">
                    <img className="star"></img>
                    <p className="rating">{props.item.rating}</p>
                    <p className="no-of-rating">({props.item.sells})</p>
                    <p className="country">{props.item.country}</p>
                </div>
                <p className="p-review">{props.item.title}</p>
                <p className="price"><span>From ${props.item.price}</span> / person</p>
            </div>

        </div>
    )
}