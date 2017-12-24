import React from 'react';
import CSSModule from 'react-css-modules';
import { Link } from 'react-router';
import styles from './Home.css';

class Home extends React.Component {
  render() {
    return <div styleName="home-page">Home page</div>;
  }
}

export default CSSModule(Home, styles);
