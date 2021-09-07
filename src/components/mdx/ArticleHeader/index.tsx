import Date from '@app/components/mdx/Date';
import H1 from '@app/components/mdx/H1';

type ArticleHeaderProps = {
  title: string;
  date: string;
  readTime: string;
}

export default function ArticleHeader({
  title,
  date,
  readTime
}: ArticleHeaderProps) {
  return (
    <div className="w-full max-w-4xl m-auto flex justify-center">
      <div>
        <H1 className=" md:my-3">
          {title}
        </H1>
        <div className="mt-3 mb-4 flex flex-row justify-between md:flex-col">
          <Date dateString={date} />
          <p className="italic font-light">
            Read time: {readTime} min.
          </p>
        </div>
      </div>
    </div>
  );
}