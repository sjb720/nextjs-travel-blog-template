type BannerProps = {
    img: string
}

export default function Banner(props: BannerProps) {
 return <div style={{height:300, width:'100%', borderRadius: 8, background: `url("${props.img}")`, backgroundPosition: 'center', backgroundSize: 'cover'}}/>
}