
import styles from'./wrapper.module.scss';
import Header from './components/header';
import Footer from './components/footer/footer';
import MainPage from './pages/main-page/main-page';
import MenProductsPage from './pages/products-page/men-products-page';
import WoomenProductsPage from './pages/products-page/woomen-products-page';
import ProductPage from './pages/product-page/product-page';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div data-test-id='app' className={styles.wrapper}>
      <Header />
      	<Routes>
          <Route index element = {<MainPage />} />
          <Route path='/' element = {<MainPage />} />
          <Route path='/WoomenProductsPage' element={<WoomenProductsPage />} />
          <Route path='/MenProductsPage' element={<MenProductsPage />} />
          <Route path='/ProductPage' element={<ProductPage />} />
		   </Routes>
      <Footer />
    </div>
  );
}

export default App;
