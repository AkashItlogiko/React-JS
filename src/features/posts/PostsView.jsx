import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
  const { isLoading, posts, error } = useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map(post => {
          const { title, body } = post;
          return (
            <section>
              <article>
                <h5>{title}</h5>
                <h5>{body}</h5>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default PostsView;
