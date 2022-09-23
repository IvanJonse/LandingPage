import React, {useState} from 'react'
import TypographyDescr from '../TypographyDescr/TypographyDescr';
import s from './TypographyMenu.module.sass'

const TypographyMenu = () => {

    const [tab, setTab] = useState('deskTop');

    return (
        <>
            <div className={s.typography__menu}>
                <ul className={s.typography__menu__ul}>
                    <li onClick={() => {
                        setTab('deskTop')
                        }} className={tab === 'deskTop' ? `${s.typography__menu__item__active} ${s.typography__menu__item}` : `${s.typography__menu__item}`}
                    >
                        Десктоп
                    </li>
                    <li onClick={() => {
                        setTab('phone')
                        }} className={tab === 'phone' ? `${s.typography__menu__item__active} ${s.typography__menu__item}` : `${s.typography__menu__item}`}
                    >
                        Телефон
                    </li>
                </ul>      
            </div>
            { tab === 'deskTop' 
                ?
                  <TypographyDescr tab={tab} h1='48' h2='32' h3='24' h4='18' p1='24' p2='18' p3='16' p4='14'/> 
                : <TypographyDescr tab={tab} h1='32' h2='28' h3='20' h4='18' p1='20' p2='18' p3='16' p4='14'/> 
            }  
        </>
    )
}

export default TypographyMenu