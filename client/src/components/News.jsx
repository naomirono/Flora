import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsPost from './NewsPost';

const News = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch blog data from backend API
    axios.get('http://localhost:3000/api/blog') // Replace with your backend URL
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Blog <span className='text-green-900'>Posts</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogData.map((post, index) => (
            <NewsPost key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
