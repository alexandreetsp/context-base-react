import {Routes, Route} from "react-router-dom";

import "./shop.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../Category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategory} from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments('categories');
      dispatch(setCategory(categories));
    };

    getCategoriesMap()

  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
