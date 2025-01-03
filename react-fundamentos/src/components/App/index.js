import React, { createContext, useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 10,
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Sub#03',
      likes: 50,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title#04',
      subtitle: 'Sub#04',
      likes: 50,
      read: false,
      removed: false,
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

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana <button onClick={handleRefresh}>Atualizar</button>
        </Title>
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
            removed: post.removed,
          }}
          onRemove={handleRemovePost}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
