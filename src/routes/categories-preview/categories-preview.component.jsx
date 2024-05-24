import { useContext, Fragment } from 'react';

import { CategoryContext } from '../../context/category.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
