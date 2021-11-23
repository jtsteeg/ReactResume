import React from 'react';
import styles from './Picture.module.css';
import profilePic from '../Images/pfp2.png';
import secretImage from '../Images/cowboys.png';


export default class App extends React.Component {
  render() {
    return (
      <div className={styles.parent}>
        <img src={profilePic} alt="Jacob Steeg (right)" className={styles.img}/>
        <img src={secretImage} alt="secret" className={styles.img2}/>
      </div>
    );
  }
}
