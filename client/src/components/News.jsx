import React from 'react';
import NewsPost from './NewsPost';
import newsData from '../data/NewsData';

const News = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-[1100px]">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {newsData.map((post, index) => (
            <NewsPost key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
