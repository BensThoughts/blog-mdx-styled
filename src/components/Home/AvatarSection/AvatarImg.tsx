import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';
import {buildImageUrl} from 'cloudinary-build-url';

type AvatarImgProps = {
  className?: string;
}

const imagePath = 'v1634879054/blog/home/bust_blue_small_wrjvyl.jpg';

const imgSrcSmall = buildImageUrl(imagePath, {
  cloud: {
    cloudName: 'bensthoughts',
  },
  transformations: {
    quality: 10,
    resize: {
      type: 'thumb',
      width: 240,
      height: 240,
    },
  },
});

const imgSrcLarge = buildImageUrl(imagePath, {
  cloud: {
    cloudName: 'bensthoughts',
  },
  transformations: {
    quality: 'auto',
    resize: {
      type: 'thumb',
      width: 240,
      height: 240,
    },
  },
});

export default function AvatarImg({className}: AvatarImgProps) {
  const [src, blur] = useProgressiveImage(imgSrcSmall, imgSrcLarge);

  return (
    <div className={`z-20 mt-10 bg-transparent md:mt-0 transition-all ease-in-out duration-300 ${className}`}>
      {/* <ImageBackground tabIndex={0}> */}
      <div
        className="w-[240px] h-[240px] rounded-md overflow-hidden"
      >
        {/* <picture>
          <source srcSet={imgSrc} /> */}
        <img
          src={src}
          alt="Bust Image"
          className="relative"
          width="240"
          height="240"
          style={{
            filter: blur ? 'blur(10px)' : 'none',
            transition: blur ? 'none' : 'filter 0.2s ease-out',
            // margin: '-5px -10px -10px -5px'
          }}
        />
        {/* </picture> */}
      </div>
      {/* </ImageBackground> */}
    </div>
  );
}
