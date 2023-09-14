import React, { useEffect } from 'react';
import LeftAccentedH2Text from '../shared/LeftAccentedH2Text';
import BlogListItem from './BlogListItem';

export default function BlogList({ postList }) {
  return (
    <>
      <div className="">
        <LeftAccentedH2Text text="Latest from Newsboqs" isUppercase={true} />
      </div>

      <div className="flex flex-wrap overflow-hidden ">
        {postList &&
          postList.map((post, i) => (
            <div
              key={post.id}
              className="my-1 md:w-full overflow-hidden lg:w-1/3 xl:w-1/3"
            >
              <BlogListItem post={post} isFullWidth={true} />
            </div>
          ))}
      </div>
    </>
  );
}
