import React , {useState} from "react";
import s from './ButtonsCheckRadio.module.sass'
import check from '../../assets/check.svg'

export default function ChekBoxButton({bool, state}) {

        const [active, setActive] = useState(state)

    return (
        
        <div className={s.ui__buttonWrap__item}  onClick={()=> !bool ? setActive(!active) : '' }>   
           
                <button 
                    disabled={bool} 
                    className={
                        active ?  `${s.ui__buttonWrap__item__box__activeCheck} ${s.ui__buttonWrap__item__box}` : `${s.ui__buttonWrap__item__box}`
                    }   
                > 
               
                    { 
                        active ?

                            <img className={s.ui__buttonWrap__item__box__imgCheck} src={check} alt='check'/>  

                        : ''
                    }
                 
                </button>
                    
                <button disabled={bool} className={s.ui__buttonWrap__item__label}> Выбери меня! </button>
           
        </div>
    )
}