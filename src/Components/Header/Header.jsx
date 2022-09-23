import React, {useState} from 'react'
import './Header.sass'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import { CSSTransition } from "react-transition-group";
import Menu from '../Menu/Menu';

export default function ()  {

    const [open, setOpen] = useState(false);

  return (
    <header className="App__header">
        <div className='App__header__inner'>
            <div className='App__header__logo'>
              <div className='App__header__logo__img'>
                <img className='App__header__logo__img__item' src={logo} alt='logo'/>
              </div>
              <div className='App__header__logo__title'>
                <div className='App__header__logo__title__bold'>Кенн</div>
                <div className='App__header__logo__title__small'>Иван Юрьевич</div>
              </div>
            </div>
          
            {  !open &&
              <div className='App__header__menu' onClick={() => setOpen(true)}>
                <img className='App__header__menu__item' src={menu} alt='menu'/>
              </div>
            }

             { open &&
                <div className='App__isOpen__close' onClick={() => setOpen(false)}></div>
             }
          
            <CSSTransition in={open} classNames='show' timeout={300} unmountOnExit>
              <Menu/>
            </CSSTransition>
        </div>
    </header>

  )
}
