import React from 'react'
import Item from './Item'
import './ItemList.css'



export default function ItemList({ items,addToCart} ) {


    return (
        items.map(item => {

           return <Item item = {item} key={item.face} addToCart = {addToCart} />
       })
    )
}
