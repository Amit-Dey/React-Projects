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