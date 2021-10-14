import ArticleTweet from '../ArticleTweet';

type ArticleFooterProps = {
  title: string,
  permaLink: string,
} & React.HTMLAttributes<HTMLDivElement>

export default function ArticleFooter({permaLink, title, ...rest}: ArticleFooterProps) {
  const tweetMessage = `I just finished reading ${title} by @bensthoughts Check it out!\n\n`;

  return (
    <div className="flex items-center justify-center" {...rest}>
      <ArticleTweet
        permaLink={permaLink}
        tweetMessage={tweetMessage}
      />
    </div>
  );
}