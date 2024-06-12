import {useContext, Fragment, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {CategoryContext} from "../../context/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [categories, setCategories] = useState({});
  //  const { categoriesMap } = useContext(CategoryContext);
  useEffect(() => {
    if (categoriesMap !== undefined) {
      const getCategories = async () => {
        const cteg = await categoriesMap;
        setCategories(cteg);
      };
      getCategories();;
    }
  }, [categoriesMap]);

  return (
    <>
      <Fragment>
        {Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
        <Outlet />
      </Fragment>
    </>
  );
};

export default CategoriesPreview;
