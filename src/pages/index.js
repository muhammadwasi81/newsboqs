import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import BlogList from './../../components/blog/BlogList';
import SlidingHeroSection from './../../components/home/SlidingHeroSection';
import AccentHorizontalBar from './../../components/shared/AccentHorizontalBar';
import VerticalAddSpot from './../../components/shared/ads/VerticalAddSpot';
import Footer from './../../components/shared/Footer';
import Header from './../../components/shared/Header';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import { MainMenu } from '../../data';
import articles from './articles.json'
const HorizontalAdSpot = dynamic(
  () => import('./../../components/shared/ads/HorizontalAdSpot'),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isHeroVisible, setHeroVisibility] = useState(true);
  const data = {
    latestPost: articles
  };
  return (
    <>
      <Header fixedHeight={true} menuData={MainMenu} showAdSpace={false} />
      <VisibilitySensor
        partialVisibility={true}
        onChange={(vis) => setHeroVisibility(vis)}
      >
        <SlidingHeroSection posts={[...data?.latestPost?.slice(0, 5)]} />
      </VisibilitySensor>
      <div id="page-wrapper" className="w-full mx-auto py-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2 overflow-hidden">
            <div className="my-3 px-3 w-full overflow-hidden md:w-3/4">
              <section className="mb-16">
                <BlogList
                  postList={
                    [...data?.latestPost].filter(
                      (x, i) => x != null && i > 4
                    ) || []
                  }
                />
              </section>

              {/* <HorizontalAdSpot /> */}
            </div>

            <div className="my-3 px-3 w-full md:w-1/4  relative">
              <div
                className={`w-full ${isHeroVisible ? 'sm:relative' : 'sm:fixed sm:top-0'
                  }`}
                style={{ height: 'calc(100vh - 200px)' }}
              >
                <AccentHorizontalBar w="w-16" />
                <div className="w-full">
                  {/* <VerticalAddSpot />
                  <VerticalAddSpot />
                  <VerticalAddSpot />
                  <HorizontalAdSpot /> */}
                </div>
                {/* <VerticalAddSpot />
                <VerticalAddSpot />
                <VerticalAddSpot /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    // Make a GET request to your API endpoint
    const response = await axios.get(`${process.env.BACKEND_URL}/articles`);

    // Process the data from the API response
    const data = response.data;

    console.log(data)
    // Construct the homePageData object similar to what you had
    const homePageData = {
      latestPost: data,
    };

    return {
      props: {
        data: homePageData || {},
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: {},
      },
      revalidate: 5,
    };
  }
}