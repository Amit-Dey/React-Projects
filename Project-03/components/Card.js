export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img}></img>
            <h4 className="tag">{props.status}</h4>
            <div className="review">
                <div className="r-row">
                    <img className="star"></img>
                    <p className="rating">{props.rating}</p>
                    <p className="no-of-rating">({props.sells})</p>
                    <p className="country">{props.country}</p>
                </div>
                <p className="p-review">{props.description}</p>
                <p className="price"><span>From ${props.price}</span> / person</p>
            </div>

        </div>
    )
}