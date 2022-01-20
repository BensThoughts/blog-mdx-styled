import ArticleTweet from '../ArticleTweet';

type ArticleFooterProps = {
  title: string,
  permaLink: string,
  tags?: string[],
} & React.HTMLAttributes<HTMLDivElement>

export default function ArticleFooter({permaLink, title, tags, ...rest}: ArticleFooterProps) {
  const tweetTags = tags ? tags.map((tag) => '#' + tag).join(' ') : undefined;
  const tweetTagMessage = tweetTags ? `\n\n ${tweetTags} \n\n` : '';
  const tweetMessage = `I just finished reading ${title} by @bensthoughts Check it out! ${tweetTagMessage}`;

  return (
    <div className="flex justify-center items-center" {...rest}>
      <ArticleTweet
        permaLink={permaLink}
        tweetMessage={tweetMessage}
      />
    </div>
  );
}
