import TRIPS from "@/trips";
import Head from "next/head";
import { PropsWithChildren } from "react"
import Banner from "./Banner";
import PhotoAlbum from "./PhotoAlbum";

type TripBlogProps = PropsWithChildren<{
    trip: string;
}>

export default function TripBlog(props: TripBlogProps) {
    const trip = TRIPS[props.trip]

    return <div>
        <Head>
            <title>My Trip to {trip.name}</title>
            <meta name="description" content={`Travel blog about my trip to ${trip.name}!`} />
            <meta name="keywords" content={`travel, blog, pictures, trip, ${trip.name}`} />
        </Head>
        <Banner img={trip.bannerImage} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, marginBottom: 24, alignItems: 'center' }}>
            <h1>My Trip to {trip.name}</h1>
            {trip.photoAlbumLink && <PhotoAlbum photoAlbumLink={trip.photoAlbumLink} />}
        </div>
        {props.children}

    </div>
}