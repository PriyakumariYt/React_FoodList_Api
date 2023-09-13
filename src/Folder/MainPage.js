import React, { useState } from 'react'

import Dishes from "./Dishes"
import Navb from "./Navb"
import "./styles.css"
import DishCard from './DishCard'
const uniqueList =[
  ...new Set(
    Dishes.map((curElem)=>{
    return curElem.category;
  })
  ),
 "All",
]
const MainPage = () => {
  // menudata
  const [foodData,setFoodData]= useState(Dishes);
  const [foodList, setFoodList] =useState(uniqueList);
  const filterItem =(category)=>{
    if(category ==="All"){
      setFoodData(Dishes);
      return;
    }
    const updatedList = Dishes.filter((curElem)=>{
      return curElem.category===category;
    });
    setFoodData(updatedList);
  } 
  return (
    <>
    <Navb filterItem={filterItem} foodList={foodList}  />
  <DishCard foodData={foodData}  />
    </>
  )
}

export default MainPage;

