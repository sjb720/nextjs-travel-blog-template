import { Home, Info, Plane } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { usePathname } from 'next/navigation'

export default function PageLayout(props: PropsWithChildren) {
    const pathname = usePathname()
    console.log(pathname)
    return <div>
        <div style={{ padding: 24, display:'flex', justifyContent:'space-between' }}>
            <Link style={{ display: 'inline-flex', color: "white", gap: 8, alignItems: 'center' }} href={"/"}>
                {pathname === "/" ?
                    <>
                        <Plane />
                        Where to?
                    </>
                    :
                    <>
                        <Home />
                        Take me home
                    </>

                }
            </Link>
            <Link style={{ display: 'inline-flex', color: "white", gap: 8, alignItems: 'center' }} href={"/about"}>
                <Info />
                About me
            </Link>
        </div>


        <div style={{ padding: 24 }}>
            {props.children}
        </div>
    </div>
}