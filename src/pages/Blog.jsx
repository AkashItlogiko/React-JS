import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from '../data';
const Blog = () => {
    const {title} =useParams();
    const location = useLocation();
   
    // const[bodyData,setBodydata]=useState("")
//     useEffect(()=>{
// const blogData = blogsData.filter((blog)=>blog.title===title);
// setBodydata(blogData[0].body);
//     },[])
    return (
        <div>
          <h1>{title} page</h1>
          <p>{location.state.body.slice(0,500)}</p>
          <p>{location.state.body.slice(501,5000)}</p>
        </div>
    );
};

export default Blog;