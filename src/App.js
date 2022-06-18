import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RegionPicker from './components/RegionPicker';
import Country from './components/Country';

function App() {
  const[selectedRegion,setselectedRegion] = useState(null);


  const onRegionPickHandler = (region) => {
    setselectedRegion(region);
  };

  const clearselectedRegionHandler = () =>{
    setselectedRegion(null)
  };

  return (
    <>
      <Navbar />

      {selectedRegion ? 
       (<Country clearselectedRegionHandler={clearselectedRegionHandler} 
      selectedRegion={selectedRegion} /> ) :   (<RegionPicker  onRegionPickHandler={onRegionPickHandler}/> )} 
    </>
  );
};

export default App;
