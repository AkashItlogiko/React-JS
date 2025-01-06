import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../data';
const Blog = () => {
  const { title } = useParams();
  const [bodyData, setBodydata] = useState('');
  useEffect(() => {
    const blogData = blogsData.filter(blog => blog.title === title);
    console.log(blogData);
    setBodydata(blogData[0].body);
  }, []);
  return (
    <div>
      <h1>{title} page</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, 5000)}</p>
    </div>
  );
};

export default Blog;
