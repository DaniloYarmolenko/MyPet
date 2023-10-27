import React, {useState} from 'react';
import CardManu from "../CardManu/CardManu";
import Styles from './MainManu.module.css'
import MoreSettings from "../MoreSettings/MoreSettings";


const MainManu = ({renderMainManu, setRenderBasketInMenu}) => {
    const [cardData, setCardData] = useState({image: '', title: '', price: ''})
    const card = [
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 1},
        {image: './img/burger_miaso_kotleta_93265_1920x1080.jpg', title: '1231', price: '10$-20$',id: 2},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 3},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 4},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 5},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 6},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 7},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 8},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 9},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 10},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 11},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 12},
    ]
    const free = [
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 1},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 2},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 3},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 4},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 5},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 6},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 7},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 8},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 9},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 10},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 11},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 12},
    ]
    const drinks = [
        {image: './img/Hamburger_(black_bg).jpg', title: '123123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 1},
        {image: './img/Hamburger_(black_bg).jpg', title: '12333', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 2},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 3},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 4},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 5},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 6},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 7},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 8},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 9},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 10},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 11},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: {'XS':  '10$', 'S':  '12$', 'M':  '15$', 'L':  '20$'}, id: 12},
    ]

    const snaks = [
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 1},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 2},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 3},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 4},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 5},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 6},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 7},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 8},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 9},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 10},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 11},
        {image: './img/Hamburger_(black_bg).jpg', title: '123', price: '10$-20$', id: 12},
    ]



    const renderCard = (props) => {
       return props.map(item => <CardManu setCardData={setCardData} key={item.id} image={item.image} title={item.title} alt={item.title} price={item.price}/>)
    }

    const propsUpCard = ({title, image, price}) =>  {
        return  <MoreSettings title={title} image={image} price={price} setRenderBasketInMenu={setRenderBasketInMenu}/>
    }


    return (
        <div>
            <div className={Styles.container}>
                <div className={Styles.flex}>
                    <div className={Styles.cards}>
                        {(renderMainManu === 'Burger') ? renderCard(card) : (renderMainManu === 'Free') ? renderCard(free) : (renderMainManu === 'Drinks') ? renderCard(drinks) : renderCard(snaks)}
                    </div>
                    <div className="">
                        {cardData.title ?propsUpCard(cardData):<h1></h1>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainManu;