import Head from "next/head";
import { Inter } from "next/font/google";
import Blog from '../blogs/denver/article.mdx'
import Link from "next/link";
import TRIPS from "@/trips";
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Travel Blog</title>
        <meta name="description" content="Who Asked? Travel blog!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="trip-grid">
        {Object.keys(TRIPS).map(key => {
          const trip = TRIPS[key];
          return <TripButton name={trip.name} img={trip.bannerImage} href={`/trips/${key}`} />
        })
        }
      </div>
    </>
  );
}

type TripButtonProps = {
  img: string,
  name: string,
  href: string,
}

function TripButton(props: TripButtonProps) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={props.href} style={{ textDecorationLine: 'none' }}>
    <div style={{ background: "black", color: 'white', borderRadius: 8, overflow: 'hidden', }}>
      <div style={{ height: 300, background: `url("${props.img}")`, backgroundPosition: 'center', backgroundSize: 'cover', display:'flex', alignItems:'center'  }}>
        <div style={{ width:'100%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: isHovering ? 32 : 24, transition: 'font-size 0.5s', textShadow: "#000 1px 0 10px" }}>
          {props.name}
        </div>
      </div>

    </div>
  </Link>

}