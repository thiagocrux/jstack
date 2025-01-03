import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Header.css';
console.log(styles.title);

import Button from './Button';
import { ThemeContext } from './ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.children,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
