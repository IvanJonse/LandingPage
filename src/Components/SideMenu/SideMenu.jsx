import React from 'react';
import s from './SideMenu.module.sass';

export default function SideMenu({active, setActive, getElementIndex}) {

    const scrollToIndex = (event) => {
        const navLi = event.target.parentNode;
        const index = getElementIndex(navLi);
        setActive(index);
    };

    const list = [
        { text: 'Напутственное слово'},
        { text: 'Сетка'},
        { text: 'Типографика'},
        { text: 'UI'},
    ]

    return (
      
            <ul className={s.sideMenu__list} >
                {
                    list.map( (item, i )=>
                        <li className={s.sideMenu__list__item} key={i} >
                            <a onClick={scrollToIndex} href={`#${i}`}  className={`${s.sideMenu__list__item__link} ${active === i ? s.sideMenu__list__item__link__active : '' }`}>
                                {item.text}
                            </a>
                        </li>
                    )
                }
            </ul>

    )
}