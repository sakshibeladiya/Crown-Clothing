
import { useEffect } from 'react';
import {Routes , Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import '../shop/shop.styles.scss';
import Category from '../route/category.component.jsx';
import { fetchCategoriesAsync } from '../../../store/categories/category.action';
import {useDispatch} from 'react-redux';

const Shop =() => {

  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchCategoriesAsync());
  },[]); 

    return (
    <div className='shop-container'>
      <Routes >
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element= {<Category/>}/>
      </Routes>
    </div>            
);
};

export default Shop;


