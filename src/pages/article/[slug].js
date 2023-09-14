import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

import { isEmpty } from 'lodash';
import { handlePlaceholderImageIfNeeded, sanitize } from '../../../lib/utils';
import PostLayout from '../../../components/layouts/post-layout';
import AccentHorizontalBar from '../../../components/shared/AccentHorizontalBar';
import BlogSmallItem from '../../../components/blog/BlogSmallItem';
import { useRouter } from 'next/router';
import PageSpinner from '../../../components/shared/PageSpinner';
import Seo from '../../../components/shared/SEO';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import SocialShareIcons from '../../../components/shared/SocialShareIcons';

const HorizontalAdSpot = dynamic(
  () => import('../../../components/shared/ads/HorizontalAdSpot'),
  {
    ssr: false,
  }
);

const InArticleAdSpot = dynamic(
  () => import('../../../components/shared/ads/InArticleAds'),
  {
    ssr: false,
  }
);

export default function Post({ data }) {
  //   const [category, setCategory] = useState(null);
  const [isTitleVisble, setTitleVisibilityStatus] = useState(true);
  // const [data, setPostItem] = useState(null);

  const router = useRouter();

  return (
    <>
      <PostLayout
        title={sanitize(data?.title) || ''}
        coverImage={data?.coverImage}
        isScrollSidebar={isTitleVisble}
        seoData
      >
        <div className="mb-4 bg-white">
          <VisibilitySensor
            partialVisibility={true}
            onChange={(vis) => setTitleVisibilityStatus(vis)}
          >
            <>
              <h1
                id="post-title"
                className="font-extrabold text-3xl md:text-6xl sm:mb-12 "
                dangerouslySetInnerHTML={{ __html: sanitize(data?.title) }}
              ></h1>
              <div className="my-3 block sm:hidden">
                {/* <SocialShareIcons /> */}
              </div>
            </>
          </VisibilitySensor>

          <div className="my-4">
            {data?.category && (
              <span className=" h-full flex items-center font-bold text-black uppercase  pl-3 border-l-2 border-accent-color">
                {data?.category?.name}
              </span>
            )}
          </div>
          {/* <InArticleAdSpot /> */}
          <article
            id="post-content"
            className="py-2 max-w-full prose md:prose-lg"
            dangerouslySetInnerHTML={{
              __html: sanitize(data?.content || ''),
            }}
          ></article>
        </div>

        <div className="w-full">{/* <HorizontalAdSpot />{" "} */}</div>
      </PostLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const uri = params?.slug ?? '/';
  try {
    // Make a GET request to your API endpoint
    const response = await axios.get(
      `http://localhost:9100/api/articles/${uri}`
    );

    // Process the data from the API response
    const data = response.data;

    console.log(data);

    return {
      props: {
        data: data || [],
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
      revalidate: 5,
    };
  }
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${process.env.BACKEND_URL}/articles`);

  const pathsData = [];

  data &&
    data?.map((post) => {
      if (!isEmpty(post?.slug)) {
        pathsData.push({ params: { slug: post?.slug } });
      }
    });
  // console.log(pathsData)
  return {
    paths: pathsData,
    fallback: true,
  };
}
