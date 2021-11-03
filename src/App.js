import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AuthContext from "./Context/AuthContext";
import About from './pages/About/About';
import AddPackage from "./pages/AddPackage/AddPackage";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import ManageAllBooks from "./pages/ManageAllBooks/ManageAllBooks";
import MyPackage from "./pages/MyPackage/MyPackage";
import NotFound from './pages/NotFound/NotFound';
import OurPackages from './pages/OurPackages/OurPackages';
import PackageDetail from "./pages/PackageDetail/PackageDetail";

export const TourContext = createContext();
const App = () => {
   const [tourPackages, setTourPackages] = useState([]);
   useEffect( () => {
     fetch('https://ghastly-broomstick-24724.herokuapp.com/packages')
     .then( res => res.json())
     .then( data => {
      setTourPackages(data);
     })
   }, []);

  return (
    <>
    <AuthContext>
    <TourContext.Provider value={[tourPackages]}>
     <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <PrivateRoute path='/packages'>
              <OurPackages />
            </PrivateRoute>
            <PrivateRoute path='/package/detail/:id'>
              <PackageDetail />
            </PrivateRoute>
            <Route path='/Contact'>
              <Contact />
            </Route>
            <PrivateRoute path='/my-package'>
              <MyPackage />
            </PrivateRoute>
            <PrivateRoute path='/manage-books'>
              <ManageAllBooks />
            </PrivateRoute>
            <PrivateRoute path='/add-package'>
             <AddPackage />
            </PrivateRoute>
            <Route path='/login'>
             <Login />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
     </Router>
     </TourContext.Provider>
     </AuthContext>
    </>
  );
}

export default App;
