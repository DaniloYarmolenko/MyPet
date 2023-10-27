import React, {useState} from 'react'

import './BasketInMenu.css'

const BasketInMenu = ({openModal, setOpenModal, renderBasketInMenu, setIsBasket}) => {

    const array = [];








    if (renderBasketInMenu.title) {
        setIsBasket(true);
        array.push(renderBasketInMenu);
    }



    return (
        <div onClick={() => setOpenModal(false) } className={openModal ? "modal active" : 'modal'}>
            <div  className="modal__basket_content" onClick={e => e.stopPropagation()}>
                    <h1>{array[0]?.title}</h1>
                    <h1>{array[0]?.renderPrice}</h1>
                    <h1>{array[0]?.renderSize}</h1>
                    <button >del</button>
            </div>
        </div>
    )
}

export default BasketInMenu