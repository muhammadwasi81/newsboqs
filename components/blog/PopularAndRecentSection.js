import React, { useEffect, useState } from 'react';
import LeftAccentedH2Text from '../shared/LeftAccentedH2Text';
import BlogHeroItem from './BlogHeroItem';
import BlogListItem from './BlogListItem';
import BlogSmallItem from './BlogSmallItem';
import NextLink from 'next/link';
export default function PopularAndRecent({ posts, title, categorySlug }) {
  const [hightLightPost, setHightLightPost] = useState({});

  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      const nodes = posts?.nodes || [];
      const postItems = [...nodes];
      const firstPost = postItems.shift();
      // console.log('postItems code', postItems)
      setHightLightPost(firstPost);
      setOtherPosts(postItems);
    }
  }, []);

  const nodes = posts?.nodes || [];
  const IpostItems = [...nodes];
  const IfirstPost = IpostItems.shift();

  return (
    <div>
      <NextLink
        prefetch={false}
        href={categorySlug ? `/category/${categorySlug}` : '#'}
      >
        <div>
          <LeftAccentedH2Text text={title || ''} isCapitalize />
        </div>
      </NextLink>
      <div className="w-full flex  flex-col md:flex-row  justify-between md:space-x-6">
        {/* <div className="w-full md:w-3/5 flex flex-col">
          <BlogHeroItem post={hightLightPost || {}} />
        </div> */}

        <div className="w-full md:w-3/5 flex flex-col">
          <BlogHeroItem post={IfirstPost || {}} />
        </div>
        <div className="w-full md:w-2/5 md:flex  flex-row md:flex-col md:justify-between ">
          {IpostItems && IpostItems.length > 0 ? (
            IpostItems.map((post, i) => (
              <div key={i}>
                <BlogSmallItem post={post} />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        {/* <div className="w-full md:w-2/5 md:flex  flex-row md:flex-col md:justify-between ">
          {otherPosts && otherPosts.length > 0 ? (
            otherPosts.map((post, i) => <div key={i}><BlogSmallItem post={post}  /></div>)
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </div>
  );
}
