import { useLocation, useParams } from 'react-router-dom';

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>{title} page</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, 5000)}</p>
    </div>
  );
};

export default Blog;
