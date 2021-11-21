import styles from './App.module.css';
import Title from './Title/Title';
import Background from './Background/Background';
import Picture from './Picture/Picture';
import Experience from './Experience/Experience';
import CertsEducation from './Certs+Education/Certs+Education';

function App() {
  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Picture />
      <Experience />
      <CertsEducation />
    </div>
  );
}

export default App;
