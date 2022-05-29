import React from 'react'
import "./style.css"
//import maggi from './maggi.jpg';
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category
    })
  ),
  "All",
]
console.log(uniqueList)

const Restaurant = () => {

    //const myStyle = {color:"red"}
    const [menuData, setMenuData] = React.useState(Menu)
    console.log(menuData)

    const [menuList, setMenuList] = React.useState(uniqueList)

    const filterItem = (category) => {
      if(category==="All"){
        setMenuData(Menu)
        return
      }
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category
      })

      setMenuData(updatedList)
    }
    return (
      <> 
        <Navbar  filterItem = {filterItem} menuList={menuList}/>
        <MenuCard menuData = {menuData} />
      </>
    )  
}

export default Restaurant
