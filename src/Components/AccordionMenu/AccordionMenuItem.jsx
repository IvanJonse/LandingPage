import React, {useState} from 'react'
import s from './AccordionMenu.module.sass'

const AccordionMenuItem = ({itemBool, text}) => {

const [item, setItem] = useState(itemBool)

return (
    <div className={item ? `${s.accordion__item__active} ${s.accordion__item}` : `${s.accordion__item}`}>
        <div className={s.accordion__item__wrap} onClick={()=> setItem(!item)}>
            <div className={item ? `${s.accordion__item__title__active} ${s.accordion__item__title}` : `${s.accordion__item__title}`}>
                <b>Аккордеон</b> 
            </div>
            <div className={item ? `${s.accordion__item__btn} ${s.accordion__item__btn__active}`:`${s.accordion__item__btn}`}>
            </div>
        </div>
        {   
           
                <div className={item ? `${s.accordion__item__text__active} ${s.accordion__item__text}` : `${s.accordion__item__text}`}>
                    {text}
                </div>
           
        }
  </div>
  )
}
export default AccordionMenuItem