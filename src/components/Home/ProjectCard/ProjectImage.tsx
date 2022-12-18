import {buildImageUrl} from 'cloudinary-build-url';
import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';

type ProjectImageProps = {
  cloudinaryImgPath: string,
  imgAlt: string,
  href: string,
  width: number,
  height: number,
}

export default function ProjectImage({
  cloudinaryImgPath,
  imgAlt,
  href,
  width,
  height,
}: ProjectImageProps) {
  const imgSrcLowRes = buildImageUrl(cloudinaryImgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 10,
      resize: {
        type: 'thumb',
        width: width,
        height: height,
      },
    },
  });
  const imgSrcHighRes = buildImageUrl(cloudinaryImgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 'auto',
      resize: {
        type: 'thumb',
        width: width,
        height: height,
      },
    },
  });
  const [src, blur] = useProgressiveImage(imgSrcLowRes, imgSrcHighRes);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[460px] h-[255px] after:content-[''] after:absolute
                 after:-z-[1] after:top-0 after:left-0 bg-image-overlay/70 group"
    >
      <img
        alt={imgAlt}
        src={src}
        // blur={blur}
        // style={{
        //   filter: blur ? 'blur(10px)' : 'grayscale(100%) contrast(1) brightness(90%)',
        //   transition: blur ? 'none' : 'filter 0.2s ease-out',
        //   // margin: '-5px -10px -10px -5px'
        // }}
        width={width}
        height={height}
        className={`relative object-fill z-[2] mix-blend-multiply transition-all
                   duration-200 ease-out hover:mix-blend-normal hover:grayscale-0
                   hover:brightness-100 group-focus:mix-blend-normal group-focus:grayscale-0
                   group-focus:brightness-100
                    ${blur ? 'blur-[10px]' : 'grayscale contrast-100 brightness-90'}
        `}
      />
    </a>
  );
}
