import {Twitter} from '@app/components/Icons/Brands';
import AnimatedLinkWithIcon from '@app/components/AnimatedLinkWithIcon';


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
    <AnimatedLinkWithIcon
      target="popup"
      onClick={() => window.open(tweetHref, 'popup', 'left=50,top=100,width=800,height=600')}
      rel="noreferrer noopener"
      href={tweetHref}
      className="md:self-end"
      text="Tweet this article"
      icon={<Twitter className="text-secondary" />}
    />
    // <UnderLineController
    //   target="popup"
    //   onClick={() => window.open(tweetHref, 'popup', 'left=50,top=100,width=800,height=600')}
    //   rel="noreferrer noopener"
    //   href={tweetHref}
    //   className="md:self-end inline-block content-center"
    // >
    //   <AnimatedUnderline className="text-icon-secondary inline-block content-center mr-2">
    //   Tweet this article
    //   </AnimatedUnderline>
    //   <span className="inline-block content-center pb-1 text-secondary"><Twitter size={20} /></span>
    // </UnderLineController>
  );
}
