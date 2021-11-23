import React from 'react';
import styles from './Experience.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.experience}>
        <h1> Experience: </h1>
        <h3> Microsoft</h3>
        <h4> Data Center Technician </h4>
            <p class="date"> 2017 - Current. Promoted to Senior in July 2021.</p>
            <ul>
                <li> Coordinates safety and security compliance across multiple shifts in a 24/7 environment.</li>
                <li> Performs shift-based tactical management tasks such as prioritizing ticketing queues, working to resolve escalations, and clearing blocking issues to enable continued delivery of datacenter support activities.</li>
                <li> Performs cable installations, hardware installations, testing, and troubleshooting using standard datacenter processes.</li>
                <li> Assists Datacenter Inventory and Asset Management Team with shipping/receiving and inventory management to address high work volumes.</li>
            </ul>
            <h3> Atos</h3>
            <h4> Data Center Technician Lead</h4>
            <p class="date"> 2015 - 2017</p>
            <ul>
                <li> Plan, manage and communicate end-to-end project plans with Client and Vendor Teams.</li>
                <li> Encourage team to share lessons learned, best practices, and innovations on process/procedures and tools to improve efficiencies and productivity.</li>
                <li> Monitor and control daily service ticket activity, customer calls and service level agreements.</li>
            </ul>
            <h3> Egltech</h3>
            <h4> Helpdesk Support Technician</h4>
            <p class="date"> 2014 - 2015</p>
            <ul>
                <li> Deployed OS and essential software on client workstations.</li>
                <li> Provided remote support to clients over the help desk with Kaseya and Bomgar.</li>
            </ul>        
      </div>
    );
  }
}
