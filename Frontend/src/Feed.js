// src/Feed.js
import React, { useState, useEffect } from 'react';
import './Blog.css'; // Your existing CSS import
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/feed'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
  <h1 style={{ textAlign: 'center' }}>Reflections</h1>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {posts.map((post) => (
      <li key={post._id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h3 style={{ color: '#333' }}>{post.title}</h3>
        <p style={{ color: '#666' }}>{post.content}</p>
      </li>
    ))}
  </ul>
</div>

  );
};

export default Feed;
