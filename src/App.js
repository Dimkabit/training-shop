
import styles from'./wrapper.module.scss';
import Header from './components/header';
import Footer from './components/footer/footer';
import {MainPage} from './pages/main-page/main-page';
import { MenProductsPage } from './pages/products-page/men-products-page';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/product-page/product-page';


function App() {
  return (
    <div data-test-id='app' className={styles.wrapper}>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/women' element={<MenProductsPage page={'women'} />} />
        <Route path='/men' element={<MenProductsPage page={"men"} />} exact />
        <Route path='/men/:id' element={<ProductPage page={"Men"} />} expect />
              <Route path='/women/:id' element={<ProductPage page={"Women"} />} expect />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
