import Image from 'next/image';

interface HeaderImageProps {
  src: string,
  alt: string,
  width: string,
  height: string
}

export default function HeaderImage(props: HeaderImageProps) {
  return (
    <div className="max-w-sm md:max-w-4xl">
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  )
}