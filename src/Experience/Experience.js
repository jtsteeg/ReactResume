import React from 'react';
import styles from './Experience.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.experience}>
        <h1> Experience: </h1>
        <h3> Microsoft</h3>
        <h4> Datacenter Technician </h4>
            <p class="date"> 2017 - Current. Promoted to Senior in July 2021.</p>
            <ul>
                <li> Updates and standardizes processes and procedures for local and global operations.</li>
                <li> Oversees safety briefings across multiple shifts.</li>
                <li> Facilitates the distribution of new technical knowledge across a variety of MS platforms.</li>
                <li> Manages day to day DC operations with the highest standards of integrity, respect, and accountability. </li>
            </ul>
            <h3> Atos</h3>
            <h4> Datacenter Technician Lead</h4>
            <p class="date"> 2015 - 2017</p>
            <ul>
                <li> Supervised and developed a team of 4-5 Datacenter Technicians.</li>
                <li> Dispatched daily service ticket activity, customer calls and service level agreements.</li>
                <li> Tracked deployments and coordinated with project management team to ensure successful completion before deadline.   </li>
            </ul>
            <h3> Egltech</h3>
            <h4> Helpdesk Support Technician</h4>
            <p class="date"> 2014 - 2015</p>
            <ul>
                <li> Deployed OS and essential software  on client workstations.</li>
                <li> Provided remote support to clients using Kaseya and Bomgar.</li>
            </ul>        
      </div>
    );
  }
}
