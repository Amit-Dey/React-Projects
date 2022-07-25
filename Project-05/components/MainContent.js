export default function MainContent() {
    function handelOnClick(){
        console.log("I was clicked")
    }
    return (
        <div className="main">
            <div className="input">
                <input className="left_input" type="text" value="Top heading"></input>
                <input className="right_input" type="text" value="Bottom heading"></input>
            </div>
            <button onClick={handelOnClick}>
                <p>Get a new meme image</p>
                <img src="./images/image_icon.png"></img>
            </button>
            <div className="content">
                <img src="./images/content.png"></img>
                <h1 className="top_heading">First heading</h1>
                <h1 className="bottom_heading">Second heading</h1>
            </div>
        </div>
    )
}