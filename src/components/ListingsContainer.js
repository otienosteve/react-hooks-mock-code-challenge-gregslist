import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings,handleDelete}) {
  return (
    <main>
      <ul className="cards">
     {listings.map((list)=><ListingCard key={list.id} {...list} handleDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
