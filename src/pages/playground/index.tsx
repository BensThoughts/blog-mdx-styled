import {
  GrainyGradient,
  SVGTerminal,
  Kells,
  Magnify,
} from '@app/components/Playground';

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
'line-height:1.25;shape-inside:url(#rect13319);white-space:pre';
export default function AboutPage() {
  return (
    <MaxWidthWrapper>
      <SVGTerminal />
      <div className="w-32 h-32">
        <Magnify />
      </div>
    </MaxWidthWrapper>
  );
}
