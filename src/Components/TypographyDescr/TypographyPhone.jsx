import React from "react";
import s from './TypographyDescr.module.sass';

export default function TypographyPhone () {

    const data = [
        {title: 'Заголовок H1, 32/40, bold'},
        {title: 'Заголовок H2, 28/36, bold'},
        {title: 'Заголовок H3, 20/28, medium'},
        {title: 'Заголовок H4, 18/28, medium'},
        {title: 'Лид P_Lead, 20/28, regular'},
        {title: 'Крупный текст P_18, 18/28, regular'},
        {title: 'Основной текст P_16, 16/24, regular'},
        {title: 'Впомогательный текст P_14, 14/20, regular'}
    ]
     
    return (
        <>
            { data.map((e, i) => 
            
                <div key={i} className={s.typography__descr__item__title}>
                    {e.title}
                </div>
                )

            }
        </>
    )
}