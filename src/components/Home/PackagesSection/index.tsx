import PackageCard from './PackageCard';

export default function PackagesSection() {
  return (
    <>
      <b className="flex justify-center items-center w-full">These are npm packages that I have created and maintain.</b>
      <div className="grid gap-4 grid-cols-[1fr] md:grid-cols-[1fr,1fr]">
        <PackageCard
          href="https://www.npmjs.com/package/next-mdx-filesystem"
          title="next-mdx-filesystem"
          description="A fully typed library to get .mdx files into next.js. next-mdx-filesystem will recursively read through a directory of your choosing and give you back .mdx/directory metadata that is easy to consume in a React component"
        />
        <PackageCard
          href="https://www.npmjs.com/package/zero-rabbit"
          title="zero-rabbit"
          description="A client library for RabbitMQ. Zero Rabbit lets you control which channel you publish/consume on while connected to an amqp server. This is very important for applications that need to listen to more than one queue at a time."
        />
      </div>
    </>
  );
}
