'use client';

import Link from 'next/link';

export default function Diagram({
  header,
  Title,
  description,
  href
}: {
  header: string;
  Title: string;
  description: string;
  href?: string | undefined;
}): JSX.Element {
  const defaultClassName = 'grid';
  const clickableClassName =
    'transition grid hover:bg-gray-100 hover:rounded-xl hover:shadow-md';

  return (
    <>
      <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
        <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
        <p className="flex justify-left items-left mt-1 text-md">{header}</p>
      </div>
      <div className="flex justify-left">
        <div className="grid">
          <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
          <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
        </div>
        <div className={href ? clickableClassName : defaultClassName}>
          {href ? (
            <Link href={href} target="_blank">
              <p
                className={
                  'flex justify-left items-left mx-10 text-md' +
                  (description.length ? ' mt-1' : ' mt-4')
                }
              >
                {Title}
              </p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">
                {description}
              </p>
            </Link>
          ) : (
            <>
              <p
                className={
                  'flex justify-left items-left mx-10 text-md' +
                  (description.length ? ' mt-1' : ' mt-4')
                }
              >
                {Title}
              </p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">
                {description}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
