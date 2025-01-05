import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../data';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div>
      <h2>Blogs Page</h2>
      <section>
        {blogs.map(blog => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Blogs;
