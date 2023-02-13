
import { Link } from 'react-router-dom';
import '../category-preview/category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { selectCategoriesIsloading } from '../../store/categories/category.selector'; 
import { useSelector } from 'react-redux';


const CategoryPreview = ({title , products}) => {
    const isLoading = useSelector(selectCategoriesIsloading);
    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to = {title}> {title.toUpperCase()} </Link>
            </h2>
            <div className='preview'>
                { isLoading ? (<Spinner/> ): (

                    products 
                    .filter((_, idx) => idx<4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )
                }
            </div>
        </div>
    );
};

export default CategoryPreview;