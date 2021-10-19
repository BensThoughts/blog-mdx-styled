type VideoProps = {
  src: string,
  type: string,
  width: number,
  height: number,
}

export default function Video({
  src,
  type,
  width,
  height,
}: VideoProps) {
  return (
    <video width={width} height={height} autoPlay loop>
      <source src={src} type={type} />
    </video>
  );
}
