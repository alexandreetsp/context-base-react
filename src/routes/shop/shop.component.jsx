import { Routes, Route } from 'react-router-dom';

import './shop.scss';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
import Category from '../Category/category.component';


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;