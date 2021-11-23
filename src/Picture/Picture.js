import React from 'react';
import styles from './Picture.module.css';


export default class App extends React.Component {
  render() {
    return (
      <div className={styles.parent}>
        <img src={process.env.PUBLIC_URL + '/pfp2.png'}  alt="Jacob Steeg (right)" className={styles.img}/>
        <img src={process.env.PUBLIC_URL + '/frog.png'} alt="secret" className={styles.img2}/>
      </div>
    );
  }
}
