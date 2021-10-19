import ArticleTweet from '../ArticleTweet';

type ArticleFooterProps = {
  title: string,
  permaLink: string,
  tags: string[],
} & React.HTMLAttributes<HTMLDivElement>

export default function ArticleFooter({permaLink, title, tags, ...rest}: ArticleFooterProps) {
  const tweetTags = tags.map((tag) => '#' + tag).join(' ');
  const tweetMessage = `I just finished reading ${title} by @bensthoughts Check it out! \n\n ${tweetTags} \n\n`;

  return (
    <div className="flex items-center justify-center" {...rest}>
      <ArticleTweet
        permaLink={permaLink}
        tweetMessage={tweetMessage}
      />
    </div>
  );
}
