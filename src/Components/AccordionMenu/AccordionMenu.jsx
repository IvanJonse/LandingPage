import React from "react";
import s from './AccordionMenu.module.sass';
import AccordionMenuItem from './AccordionMenuItem';

export default function AccordionMenu() {

  const Text = () => {
    return (
     <>
        Гоpдость полными вагонами золотыми погонами
        <br />
        С юга дyют молодые вет…
        <br />
        Pазpывая в клочья облака не забыли шлют из далека
        <br />
        С дома мама И не последняя любовь
        <br />
        А по небy бегyт видишь чьи-то следы
        <br />
        Это может быть ты это может быть я
        <br />
        Это может наш дрyг
        <br />
        Это может нам поют свои
      </>
    )
  }

  const data = [
    {id: 0, item: false, text: <Text/>, disACtive: true},
    {id: 1, item: false, text: <Text/>, disACtive: false},
    {id: 2, item: true, text: <Text/>, disACtive: false}
  ]

  return (
    <div className={s.accordion}>

      {data.map( (e, i) =>
          <AccordionMenuItem itemBool={e.item} text={e.text} key={i}/>
        )
      }
    </div>
  );
}
    