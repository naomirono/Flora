import React from 'react';

const NewsPost = ({ post }) => {
  return (
    <div className="p-6">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-4">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <button className="bg-green-900 text-white rounded-md px-4 py-2 font-bold hover:bg-green-800">
        Read More
      </button>
    </div>
  );
};

export default NewsPost;

