import Trip from "./types/trip";

const TRIPS : Record<string, Trip> = {
    denver:{
        // The name of your trip
        name: "Denver",
        // One image to describe your whole trip
        bannerImage: "/trips/denver/mountain.jpg",
        // Link an online photo album here!
        photoAlbumLink: "https://google.com"
    },
    vegas:{
        name: "Las Vegas",
        bannerImage: "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
        }
}

export default TRIPS;