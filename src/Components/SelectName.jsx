import React, {useState} from "react";
import s from './TextField/TextField.module.sass'

export default function SelectName({active, setACtive}) {

    const dataSelect = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Vsevold'}
    ]

    const [value, setValue] = useState('');

    const onClick = () => {

        setACtive(!active) 
    }

    const onNameClick = (category) => {

        setACtive(!active) 

        setValue(category.name)
    }

    return (
        <div className={`${s.ui__form} ${s.ui__form__select}`} >
            <div onClick={onClick} 
                className={
                   value === '' && !active ? `${s.ui__form__input} ${s.ui__form__input__hover}` : `${s.ui__form__input__click} ${s.ui__form__input}` 
                }
            >      
                {value}
                <div className={active ? `${s.ui__select__btn__active} ${s.ui__select__btn}` : `${s.ui__select__btn}`}> 
                </div>
            </div>


            <span className={s.ui__form__input__span }>
                Выберите что-нибудь
            </span>
            <div className={active ? `${s.ui__select__height} ${s.ui__select}` : `${s.ui__select}`}> 
                
                    {active &&
                        <div > 
                            {
                                dataSelect.map((category, i) =>
                                
                                    <div key={i} className={value === category.name ? `${s.ui__select__active} ${s.ui__select__item}` : `${s.ui__select__item}`} 
                                        onClick={()=> onNameClick(category)}
                                    >
                                        {category.name}
                                    </div> 
                                    
                                )
                            }
                        </div>
                    }
                
            </div>
        </div>
        
    )
}