import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
      <h1 className={styles.title}>Jacob Steeg Resume</h1>
      <h2 className={styles.rainbow_text_animated}> Graphic Design is my passion</h2>
    </div>
  );
}

export default Title;