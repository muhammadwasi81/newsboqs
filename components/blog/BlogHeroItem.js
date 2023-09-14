import React from 'react';
import {
  handlePlaceholderImageIfNeeded,
  truncateExcerpt,
} from '../../lib/utils';
import NextLink from 'next/link';
import NextImage from 'next/image';

export default function BlogHeroItem({ post }) {
  // if (post == null) {
  //   return <></>;
  // }
  return (
    <div className={`w-full ml-1 p-1 cursor-pointer mb-8 md:mb-0 `}>
      <NextLink prefetch={false} href={post?.slug || '#'}>
        <div className="w-full">
          <div className="h-72 w-full relative">
            <NextImage
              fill="fill"
              object-fit="cover"
              src={handlePlaceholderImageIfNeeded(
                post?.featuredImage?.node?.mediaItemUrl
              )}
              alt={`Cover Image for ${post?.title}`}
            />
          </div>
          <h5 className=" uppercase mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500 line-clamp-2 hover:text-accent-color">
            {post?.title}
          </h5>
        </div>
      </NextLink>
      <p className="mt-2  text-secondary-100 leading-loose text-sm">
        {post?.author?.node?.name || 'Editorial Team'}
      </p>

      <p
        className="mt-2 line-clamp-5 text-secondary-100 leading-loose text-sm"
        dangerouslySetInnerHTML={{
          __html: truncateExcerpt(post?.excerpt),
        }}
      ></p>
    </div>
  );
}
