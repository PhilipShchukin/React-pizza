import React from 'react';
import './scss/app.scss';
import Header from './components/Header'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {
  Route,
  Routes,
} from 'react-router-dom';

export const SearchContext =  React.createContext()

function App() {

  const [searchValue, setSearchValue] = React.useState('')

   return (
    <div class="wrapper"> 
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header/>
      <div class="content"> 
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/cart' element={<Cart />}/>
            <Route  path='*' element={<NotFound />}/>
          </Routes>
        </div>
        </SearchContext.Provider>
    </div>
  );
}

export default App;
