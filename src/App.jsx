import React from 'react'
import { NameAndSearch, Search } from './Components';
import Restaurants from './Components/Restaurant';
const App = () => {
  return (
    <>
    <div className="container">
      <NameAndSearch />
      <Search />
      <Restaurants />
    </div>  
    </>
  );
}

export default App