import React from 'react'
import shape from '../../assets/shape.svg'
import logo from '../../assets/logo.svg'
import './Menu.sass';

export default function Menu () {
    
        return (
            <div className='App__isOpen'>
                <div className='App__isOpen__left'>
                    <div className='App__isOpen__left__img'>
                        <img className='App__isOpen__left__img__item' src={logo} alt='logo'/>
                    </div> 
                    <div className='App__isOpen__left__inner'>
                    <div className='App__isOpen__left__title'>
                        Задание выполнил
                    </div>
                    <div className='App__isOpen__left__main'>
                        Кенн
                        <br/>
                        Иван Юрьевич
                    </div>
                    <div className='App__isOpen__left__descr'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                    </div>
                    <a href='tel: +7-900-056-59-81' className='App__isOpen__left__phone'>
                        +7 (900) 056-59-81
                    </a>
                    <a target="_blank" href='https:/www.vk.com' className='App__isOpen__left__link'>
                        <div className='App__isOpen__left__link__img'>
                            <img src={shape} alt="link" className='App__isOpen__left__link__img__item'/>
                        </div> 
                        <div className='App__isOpen__left__link__text'>Ссылка на соцсеть/мессенджер</div>
                    </a>
                </div>
                </div>
            </div> 
        )


}