import React, { useEffect, useState } from 'react';
import {
  handlePlaceholderImageIfNeeded,
  sanitize,
  truncateExcerpt,
} from '../../lib/utils';
import NextLink from 'next/link';
import NextImage from 'next/image';

export default function BlogListItem({ post, isFullWidth }) {
  const [category, setCategory] = useState(null);
  // const getCategory = (categories) => {
  //   let categoryItems = categories.map((x) => ({
  //     name: x?.name,
  //     slug: x?.slug,
  //   }));
  //   setCategory(categoryItems[0]);
  // };

  useEffect(() => {
    if (post && post['categories']) {
      // getCategory(post["categories"]);
      setCategory(post['categories'][1]);
    }
  }, []);
  // console.log(post['categories'][1]);

  return (
    <div
      className={`w-full ${
        isFullWidth ? 'w-full' : 'sm:w-1/3'
      } border-r border-gray-200 cursor-pointer mt-4 sm:mt-0`}
    >
      <NextLink prefetch={false} href={`article/${post?.slug}` || '#'}>
        <div className="w-full realative">
          <div className="aspect-w-16 aspect-h-9 relative">
            <NextImage
              fill="fill"
              object-fit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={handlePlaceholderImageIfNeeded(post?.coverImage)}
              alt={`Cover Image for ${post?.title}`}
            />
          </div>
        </div>
        <div className="p-5">
          <div className="mt-4">
            {category && (
              <NextLink
                prefetch={false}
                href={`category/${category?.slug || ''}`}
              >
                <div className="underline h-full flex items-center font-light text-black capitalize">
                  {category?.name}
                </div>
              </NextLink>
            )}
          </div>
          <h5 className="mt-6 line-clamp-2 md:h-14 max-h-16 text-xl font-bold transition duration-300 group-hover:text-primary-500 hover:text-accent-color hover:underline">
            {post?.title}
          </h5>
          <div
            className="mt-2 line-clamp-3  text-secondary-100 leading-loose text-sm"
            dangerouslySetInnerHTML={{
              __html: truncateExcerpt(post?.excerpt),
            }}
          ></div>
        </div>
      </NextLink>
    </div>
  );
}
