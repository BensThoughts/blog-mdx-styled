// import {keyframes} from '@emotion/react';
import Pill from '@app/components/Pill';
import {useAnimation, m} from 'framer-motion';
import Link from 'next/link';
import {useEffect, useState} from 'react';

type BlogCardProps = {
  slug: string
  date?: string
  title: string
  description?: string
  tags?: string[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export default function BlogCard({
  slug = '',
  title = '',
  date,
  description = '',
  tags = [],
  className,
  ...rest
}: BlogCardProps) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (focused || hovered) {
      setActivated(true);
    } else {
      setActivated(false);
    }
  }, [hovered, focused]);

  useEffect(() => {
    if (activated) {
      controls.start('activated');
    } else {
      controls.start('notActivated');
    }
  }, [activated, controls]);

  const container = {
    notActivated: {
      // y: 0,
    },
    activated: {
      // y: -10,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0,
      },
    },
  };

  const pill = {
    notActivated: {
      y: 0,
    },
    activated: {
      y: [0, -10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Link
      href={`/blog/${slug}`}
      scroll={true}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="relative block no-underline w-full h-full rounded-md
      border-2 border-secondary bg-primary/80 transition-transform ease-in-out
      duration-300 hover:-translate-y-3"
    >
      <m.div
      // slug={slug}
        initial="notActivated"
        animate={controls}
        variants={container}
      >
        <div className="flex flex-col gap-4 justify-start px-2 py-4 h-full md:p-4">
          <div>
            {title && <div className="text-2xl">{title}</div>}
            {date && <div className="italic">{date}</div>}
          </div>
          {description && <div className="text-base">{description}</div>}
          {tags && <div className="flex flex-col justify-end h-full">
            <div className="flex flex-wrap gap-x-2 gap-y-4 justify-start">
              {tags.map((tag, idx) => (
                <m.div variants={pill} key={tag}>
                  <Pill>
                    <span className="text-secondary">#</span>
                    {tag}
                  </Pill>
                </m.div>
              ))}
            </div>
          </div>}
        </div>
      </m.div>
    </Link>
  );
}
