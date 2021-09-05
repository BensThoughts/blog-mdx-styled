import { useEffect, useState } from 'react'

export default function useProgressiveImg(lowQualitySrc: string, highQualitySrc: string) {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload  = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  const blur = src === lowQualitySrc;
  return [src, blur] as const;
}