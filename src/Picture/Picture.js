import React from 'react';
import styles from './Picture.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src="/pfp2.png" alt="Jacob Steeg (right)" className={styles.img}/>
      </div>
    );
  }
}
