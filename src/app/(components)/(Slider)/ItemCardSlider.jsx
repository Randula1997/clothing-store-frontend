import React from 'react'
import CategoryBodyContent from '../(BodyContent)/CategoryBodyContent'
import ItemCard from '../(ItemCard)/ItemCard';
import cardOne from '../../../assets/images/item_card_cloth.png'
import cardTwo from '../../../assets/images/item_card_shoes.png'
import cardThree from '../../../assets/images/item_card_cosmetics.png'
import cardFour from '../../../assets/images/item_card_watch.png'
import cardFive from '../../../assets/images/item_card_Jewelry.png'

function ItemCardSlider() {
  return (
    <CategoryBodyContent>
        <div className="w-fit px-2 py-5 flex justify-start items-center gap-4">
            <ItemCard itemImg={cardOne} itemName="Item name" itemPrice="13$"/>
            <ItemCard itemImg={cardTwo} itemName="Item name" itemPrice="9$"/>
            <ItemCard itemImg={cardThree} itemName="Item name" itemPrice="17$"/>
            <ItemCard itemImg={cardFour} itemName="Item name" itemPrice="12$"/>
            <ItemCard itemImg={cardFive} itemName="Item name" itemPrice="8$"/>
            <ItemCard itemImg={cardOne} itemName="Item name" itemPrice="13$"/>
            <ItemCard itemImg={cardTwo} itemName="Item name" itemPrice="9$"/>
        </div>
    </CategoryBodyContent>
  )
}

export default ItemCardSlider