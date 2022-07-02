import React,{useEffect,useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings,setListings]=useState([])
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res=>res.json())
    .then(data=>{setListings(data)
        console.log(listings)
    })

  },[])
  function handleDelete(id){
    const newList=listings.filter((list)=>list.id!==id)
    setListings(newList)
  }
  function search(term){
    console.log(term+" in main app")
    const newList=listings.filter(list=>list.description.toLowerCase().includes(term.toLowerCase()))
    setListings(newList)
  }

  return (
    <div className="app">
      <Header search={search} />
      <ListingsContainer listings={listings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
