import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import * as styles from './Post.scss';

export default function Post(props) {
  return (
    <article className={props.post.removed ? styles.postDeleted : styles.post}>
      <PostHeader
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
        onRemove={props.onRemove}
      />
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Media: {props.post.likes / 2}
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};