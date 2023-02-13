import './component/directory/directory.style.scss';

import { useEffect } from "react";
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { useDispatch } from 'react-redux';
import Home from './component/routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './component/navigation/navigation.component';
import Authentication from './component/routes/authenntication/authentication.component';
import Shop from './component/routes/shop/shop.component'
import CheckOut from './component/routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {


      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));

    });

    return unsubscribe;

  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/home' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='/checkout' element={<CheckOut />} />

      </Route>
    </Routes>

  )
}

export default App;