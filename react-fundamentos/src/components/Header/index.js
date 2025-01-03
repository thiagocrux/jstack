import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';
import Title from '../Title';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.children,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
