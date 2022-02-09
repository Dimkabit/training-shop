
import styles from'./wrapper.module.scss';
import Header from './components/header';
import MainBlock from './components/header/main-block/main-block';

function App() {
  return (
    <div className={styles.wrapper}>
     
      <Header />
      <MainBlock />
    </div>
  );
}

export default App;
