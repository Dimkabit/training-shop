
import styles from'./wrapper.module.scss';
import Header from './components/header';
import MainBlock from './components/header/main-block/main-block';
import Advantage from './components/advantage/advantage';
import Woomen from './components/woomen/woomen';
import Men from './components/men/men';


function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainBlock />
      <Advantage />
      <Woomen />
      <Men />
    </div>
  );
}

export default App;
