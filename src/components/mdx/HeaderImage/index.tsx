// import Image from 'next/image';

interface HeaderImageProps {
  src: string,
  alt: string,
  width: string,
  height: string
}

export default function HeaderImage(props: HeaderImageProps) {
  return (
    <div className="max-w-sm mx-auto md:max-w-4xl">
      <img src={props.src} alt={props.alt} width={props.width} height={props.height} className="object-contain" />
    </div>
  )
}