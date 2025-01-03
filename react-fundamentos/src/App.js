import React, { createContext, useState } from 'react';

import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

import './index.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Sub#03',
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#04',
      subtitle: 'Sub#04',
      likes: 50,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#$0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 0,
      },
    ]);
  }

  function handleRemovePost(id) {
    setPosts((prevState) => prevState.filter((post) => id !== post.id));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
            likes: post.likes,
            read: post.read,
          }}
          onRemove={handleRemovePost}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
