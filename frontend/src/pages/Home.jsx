import React from 'react'
import { Navbar } from '../component/Navbar'
import { CategoryMenu } from '../component/CategoryMenu'
import { Fooditem } from '../component/Fooditem'
import { Cart } from '../component/Cart'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <CategoryMenu/>
        <Fooditem/>
        <Cart/>
    </div>
  )
}
