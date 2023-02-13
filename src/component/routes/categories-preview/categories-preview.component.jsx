
import { Fragment } from 'react';
import CategoryPreview from '../../category-preview/category-preview.component';
import { selectCategoriesMap ,  selectCategoriesIsloading } from '../../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/spinner.component';

const CategoriesPreview =() => {
   
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading =useSelector(selectCategoriesIsloading);
    return (
      <Fragment>
        {isLoading ? (<Spinner/>) : (
          Object.keys(categoriesMap).map((title) => {
                const product = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={product}/>
          })
        )}
      </Fragment>            
    );
};

export default CategoriesPreview ;
