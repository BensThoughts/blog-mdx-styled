import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/utils/hooks/store';
import { setImgLoaded, selectImgById } from '@app/store/imgCacheSlice';

export default function useProgressiveImg(lowQualitySrc: string, highQualitySrc: string) {
  const imgSrc = useAppSelector(state => selectImgById(state, highQualitySrc));
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
    const img = new Image();
    img.src = highQualitySrc;
  
    img.onload  = () => {
      // setSrc(highQualitySrc);
      dispatch(setImgLoaded({id: highQualitySrc, lowQualitySrc: lowQualitySrc, highQualitySrc: highQualitySrc}));
    };
  }, [dispatch, lowQualitySrc, highQualitySrc])

  return [src, blur] as const;
}