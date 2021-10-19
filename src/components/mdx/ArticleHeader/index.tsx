import Date from '@app/components/mdx/Date';
import H1 from '@app/components/mdx/H1';
import ArticleTweet from '@app/components/mdx/ArticleTweet';

type ArticleHeaderProps = {
  title: string;
  date: string;
  readTime: number;
  permaLink: string;
  tags: string[];
  className?: string;
}

export default function ArticleHeader({
  title,
  date,
  readTime,
  permaLink,
  tags,
  className = '',
}: ArticleHeaderProps) {
  const tweetTags = tags.map((tag) => '#' + tag).join(' ');
  const tweetMessage = `I'm reading ${title} by @bensthoughts Check it out! \n\n ${tweetTags} \n\n`;

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
          <ArticleTweet
            permaLink={permaLink}
            tweetMessage={tweetMessage}
          />
        </div>
      </div>
    </div>
  );
}
