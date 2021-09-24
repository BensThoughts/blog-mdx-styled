// import styled from '@emotion/styled';

// import TestSVG from './test.svg';


// const toBase64 = (str: string) =>
//   typeof window === 'undefined' ?
//     Buffer.from(str).toString('base64') :
//     window.btoa(str);

// const Noise = styled.div`
//   width: 800px;
//   height: 200px;
//   background: linear-gradient(20deg, rebeccapurple, transparent),
//     url(data:image/svg+xml,${box});
//   filter: contrast(170%) brightness(200%);
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   width: 800px;
//   height: 200px;
//   background: moccasin;
//   mix-blend-mode: multiply;
// `;

// const GradientBox = styled.div`
//   width: 800px;
//   height: 200px;
//   background: linear-gradient(112deg, rgba(0, 0, 255, 1), rgba(0, 0, 0, 0)), url(data:image/svg+xml;base64,${toBase64(box())});
//   filter: brightness(200%) contrast(170%);
// `;

export default function GrainyGradient() {
  return (
    <div style={{isolation: 'isolate'}}>
      {/* <TestSVG /> */}
    </div>
  );
}
