import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    slug: '#',
    excerpt: 'This is the excerpt for Blog Post 1...',
    coverImage:
      'https://img.freepik.com/free-photo/photo-canal-city_1163-159.jpg?w=826&t=st=1691587548~exp=1691588148~hmac=cf3ace4ca5d5c53945acf3acdaaad31159903323027b92b633c3e2a8d8290f5b',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    slug: '#',
    excerpt: 'This is the excerpt for Blog Post 2...',
    coverImage:
      'https://img.freepik.com/free-vector/hand-drawn-coliseum_1168-328.jpg?w=740&t=st=1691587588~exp=1691588188~hmac=63e09fe8e58aac4b449b81d3647cbea21a799a2bb240b522b95a7f73d3c3e5cd',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    slug: '#',
    excerpt: 'This is the excerpt for Blog Post 2...',
    coverImage:
      'https://img.freepik.com/free-photo/street-scape-positano-italy_1268-20518.jpg?w=826&t=st=1691587615~exp=1691588215~hmac=3180bd4a6e5041a56de365fb08acf0c61a0c9c1c3cfe1c58d02c6b39b05938fa',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    slug: '#',
    excerpt: 'This is the excerpt for Blog Post 2...',
    coverImage:
      'https://img.freepik.com/free-vector/hand-drawing-italy-elements-set_1284-36109.jpg?w=740&t=st=1691587690~exp=1691588290~hmac=4edae44cbb78dc1ba7d865d085c5328c078f5bcdbf707f376fe1da4409c94f8b',
  },
  {
    id: 5,
    title: 'Blog Post 5',
    slug: '#',
    excerpt: 'This is the excerpt for Blog Post 2...',
    coverImage:
      'https://img.freepik.com/free-photo/beautiful-view-small-town-mountains-during-sunset-brazil_181624-39388.jpg?w=826&t=st=1691589357~exp=1691589957~hmac=074789299b1dc7ec8617c33b18fd425b1cf2ee71f71e7174e318af2d38b965c7',
  },
];

export default function SlidingHeroSection({ posts = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % blogPosts.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let progressTimer;

    if (activeSlide === blogPosts.length) {
      // When on a new slide, reset the progress to 0
      setProgressPercentage(0);
    }

    if (progressPercentage < 100) {
      progressTimer = setInterval(() => {
        setProgressPercentage((prevPercentage) => (prevPercentage + 1) % 100);
      }, 45.599); // Adjust the interval as needed
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [activeSlide, progressPercentage]);

  return (
    <div className="relative bg-white overflow-hidden h-96">
      {posts?.map((post, index) => (
        <div
          key={post.id}
          className={`w-screen bg-accent-color relative object-fit bg-cover bg-center slide ${
            index === activeSlide ? 'active' : ''
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgb(0 0 0 / 80%)),url('${
              post ? post?.coverImage : ''
            }')`,
          }}
        >
          <div className="w-full h-full flex items-end p-12">
            <div className="container mx-auto flex flex-col">
              <NextLink prefetch={false} href={`article/${post?.slug}`}>
                <div className="w-full">
                  <h1 className="text-2xl md:text-4xl line-clamp-3 uppercase text-white font-extrabold ">
                    {post ? post?.title : ''}
                  </h1>
                </div>
              </NextLink>
              <p className=" text-white text-lg capitalize  mt-2 font-bold">
                {post?.user?.name || 'Editorial Team'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
