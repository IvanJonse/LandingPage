import React from 'react'
import s from './ButtonUi.module.sass'

const ButtonUi = ({bool, marginBottom, marginLeft}) => {
  return (
    <>
        <button 
            disabled={bool} 
            type='submit' 
            style={
                {
                    'marginBottom': 
                    `${marginBottom !== undefined  ? marginBottom + 'px' : 0}`, 
                    'marginLeft': `${marginLeft !== undefined  ? marginLeft + 'px' : 0}`
                }
            } 
            className={s.ui__btn}
        >
                Отправить
        </button>
    </>
  )
}


export default ButtonUi