import React from "react";
import '../style.sass';

export default function Layout (props) {
    return (
        <>
            <div className='layout__title'>
                {props.title}
            </div>
            <div className='layout__descr'>
                <div className='layout__descr__item'>
                    Контент
                    <br />
                  <span className='layout__descr__item__count'>{props.content}</span>
                </div>
                <div className='layout__descr__item'>
                    Колонок
                    <br />
                  <span className='layout__descr__item__count'>{props.column}</span>
                </div>
                <div className='layout__descr__item'>
                    Ширина колонки
                    <br />
                  <span className='layout__descr__item__count'>{props.width}</span>
                </div>
                <div className='layout__descr__item'>
                    Межколонник
                    <br />
                  <span className='layout__descr__item__count'>{props.space}</span>
                </div>
            </div>
            <div className='layout__image'>
              <img className='layout__image__item' src={props.img} alt="" />
            </div>
        </>
    )
}