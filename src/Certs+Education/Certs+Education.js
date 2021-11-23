import React from 'react';
import styles from './Education.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.certsedu}>
        <h1>Certs+Education</h1>
        <h2> Education</h2>
            <h3> Hope College</h3>
            <h4> BA Computer Science</h4>
            <p class="date"> 2011-2015 </p>
            <h2> Licenses and Certifications</h2>
            <ul>
                <li> Git Essential Training: The Basics</li>
                <li> Git: Branches, Merges, and remotes</li>
                <li> HTML Essential Training</li>
                <li> Microsoft Datacenter Operations Breakfix Specialist</li>
                <li> Comptia Network+</li>
            </ul>
      </div>
    );
  }
}
