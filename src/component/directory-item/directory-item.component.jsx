import { useNavigate } from 'react-router-dom';
import {Body , BackgroundImagee, DirectoryItemContainer} from '../directory-item/directory-item.styles'



const DirectoryItems =({category}) =>{

  const{title, imageUrl , route} = category;
  const Navigate = useNavigate();
  const  onNavigateHandler = () => Navigate(route);

  return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImagee imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>  
      </Body> 
    </DirectoryItemContainer>
  )}

export default DirectoryItems;