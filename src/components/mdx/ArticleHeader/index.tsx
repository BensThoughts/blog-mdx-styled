import styled from '@emotion/styled';
import Date from '@app/components/mdx/Date';
import H1 from '@app/components/mdx/H1';
import AnimatedUnderline from '@app/components/AnimatedUnderline';
import {Twitter} from '@app/components/Icons/Brands';

const UnderLineController = styled.a`
  &:hover ${AnimatedUnderline}::after {
    transform: scaleX(1);
    opacity: 1;
  }

  &:focus ${AnimatedUnderline}::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

type ArticleHeaderProps = {
  title: string;
  date: string;
  readTime: number;
  permaLink: string;
  className?: string;
}

export default function ArticleHeader({
  title,
  date,
  readTime,
  permaLink,
  className = '',
}: ArticleHeaderProps) {
  const tweetMessage = `I'm reading ${title} by @bensthoughts Check it out!\n\n`;
  const tweetHref = `https://twitter.com/intent/tweet?${new URLSearchParams({
    url: permaLink,
    text: tweetMessage,
  })}`;

  return (
    <div className={`w-full max-w-4xl mx-auto flex justify-center ${className}`}>
      <div>
        <H1 className="md:my-3">
          {title}
        </H1>
        <div className="flex flex-col gap-y-2  md:flex-row md:justify-between">
          <div className="flex flex-row justify-between md:flex-col">
            <Date dateString={date} />
            <p className="italic font-light">
            Read time: {readTime} min.
            </p>
          </div>
          <UnderLineController
            target="popup"
            onClick={() => window.open(tweetHref, 'popup', 'left=20,top=20,width=800,height=600')}
            rel="noreferrer noopener"
            href={tweetHref}
            className="md:self-end inline-block content-center"
          >
            <AnimatedUnderline className="text-icon-secondary inline-block content-center mr-2">
              Tweet this article
            </AnimatedUnderline>
            <span className="inline-block content-center pb-1 text-secondary"><Twitter size={20} /></span>
          </UnderLineController>
        </div>

      </div>
    </div>
  );
}
