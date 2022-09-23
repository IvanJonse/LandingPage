import React from "react";
import s from './TypographyDescr.module.sass';

export default function TypographyDeskTop () {

const data = [
   {title: 'Заголовок H1, 48/56, bold'},
   {title: 'Заголовок H2, 32/40, bold'},
   {title: 'Заголовок H3, 24/32, medium'},
   {title: 'Заголовок H4, 18/28, medium'},
   {title: 'Лид P_Lead, 24/32, regular'},
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