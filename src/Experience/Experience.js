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
                <li> Ensures Microsoft Visio is installed on all production equipment.</li>
                <li> Responsible for 100% increase of bees in the workplace.</li>
                <li> Personally taste tests all cabling prior to installation</li>
                <li> Rebuilt company toaster to run AI powered blockchain</li>
            </ul>
            <h3> Atos</h3>
            <h4> Datacenter Technician Lead</h4>
            <p class="date"> 2015 - 2017</p>
            <ul>
                <li> Supervised and developed a team of 4-5 feral wallabies.</li>
                <li> Successfully accomplished lunch every day</li>
                <li> Messaged Steve Wozniak on linkedIn, Steve if your reading this please respond re: my app idea  </li>
            </ul>
            <h3> Egltech</h3>
            <h4> Helpdesk Support Technician</h4>
            <p class="date"> 2014 - 2015</p>
            <ul>
                <li> Deployed OS and all sorts of stuff on client workstations.</li>
                <li> Provided remote support to clients using cryptic, passive-aggressive telegrams.</li>
            </ul>        
      </div>
    );
  }
}
