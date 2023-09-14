import React from 'react';
import NextLink from 'next/link';

export default function HeroSection({ data, post = {} }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="w-screen h-96 bg-accent-color relative object-fit bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(201,73,44,0.8)),url('${
            post ? post?.coverImage : ''
          }')`,
        }}
      >
        <div className="w-full h-full flex items-end p-12">
          <div className="container mx-auto flex flex-col">
            <NextLink prefetch={false} href={post?.slug}>
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
    </div>
  );
}
