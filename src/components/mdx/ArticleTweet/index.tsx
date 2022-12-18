import {Twitter} from '@app/components/Icons/Brands';
import UnderlineLinkWithIcon from '@app/components/UnderlineLinkWithIcon';

type ArticleTweetProps = {
  permaLink: string,
  tweetMessage: string,
}

export default function ArticleTweet({permaLink, tweetMessage}: ArticleTweetProps) {
  const tweetHref = `https://twitter.com/intent/tweet?${new URLSearchParams({
    url: permaLink,
    text: tweetMessage,
  })}`;
  return (
    <UnderlineLinkWithIcon
      target="popup"
      onClick={() => window.open(tweetHref, 'popup', 'left=50,top=100,width=800,height=600')}
      rel="noreferrer noopener"
      href={tweetHref}
      className="md:self-end"
      text="Tweet this article"
      icon={<Twitter className="text-secondary" />}
    />
  );
}
