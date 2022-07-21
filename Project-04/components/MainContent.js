export default function MainContent() {
    const Data = [
        {
            title: "Eiffel Tower",
            location: "Paris",
            googleMapsUrl: "https://goo.gl/maps/Mhwo1rcRirpyoMSy6",
            startDate: "28 Jan, 2021",
            endDate: "04 Fab, 2021",
            description: "The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.",
            imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"
        },
        {
            title: "Mount Fuji",
            location: "Japan",
            googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
            startDate: "12 Jan, 2021",
            endDate: "24 Jan, 2021",
            description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
            imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
        },
        {
            title: "Niagara Falls",
            location: "Canada & USA",
            googleMapsUrl: "https://goo.gl/maps/jTDJFrG9fwkVuwAe8",
            startDate: "06 Jan, 2021",
            endDate: "11 Jan, 2021",
            description: "On the border between the United States and Canada, these great falls have been drawing explorers and travelers for centuries. Just over an hour from the city of Toronto, Niagara Falls is easy to get to, and the town is a fun place to spend a night or two.",
            imageUrl: "https://images.unsplash.com/photo-1606516397986-1eeb79e8c052"
        },
        {
            title: "Central Park",
            location: "United States",
            googleMapsUrl: "https://g.page/central-park-ny?share",
            startDate: "01 Jan, 2021",
            endDate: "04 Jan, 2021",
            description: "Loved by generations of New Yorkers and by people from around the world, Central Park is one of the most famous public spaces in the world. Backdrop to countless movies and television shows, the park's walkways, lakes, and historical sights have been drawing city dwellers and visitors since it was first created in 1858.",
            imageUrl: "https://www.planetware.com/wpimages/2022/02/world-top-rated-tourist-attractions-central-park-new-york-city.jpg"
        },
    ]

    const card = Data.map(item=>{
        return(
            <Card
                item={item}
            />
        )
    })

    return (
        <div className="main">
            {card}
        </div>
    )

}