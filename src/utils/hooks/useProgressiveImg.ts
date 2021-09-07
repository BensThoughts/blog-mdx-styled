import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/utils/hooks/store';
import { setImgLoaded, selectImgBySrc } from '@app/store/imgCacheSlice';

const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

export default function useProgressiveImg(lowQualitySrc: string, highQualitySrc: string) {
  const imgSrc = useAppSelector(state => selectImgBySrc(state, highQualitySrc));
  const dispatch = useAppDispatch();

  let src;
  let blur;

  if (imgSrc) {
    src = highQualitySrc;
    blur = false;
  } else {
    src = lowQualitySrc;
    blur = true;
  }

  useEffect(() => {
    if (!imgSrc) {
      const img = new Image();
      img.src = highQualitySrc;
    
      img.onload  = () => {
        // setSrc(highQualitySrc);
        dispatch(setImgLoaded({imgSrc: highQualitySrc}));
      };
    }
  }, [dispatch, lowQualitySrc, highQualitySrc, imgSrc])

  return [src, blur] as const;
}