import React from 'react'
import ButtonUi from '../ButtonUi/ButtonUi';
import s from './TextField.module.sass'

const TextField = ({register, handleSubmit, getValues, errors, click, setClick}) => {
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const errror = errors.email?.message === undefined 

    const inputClass = click  ? 
                    errror?  `${s.ui__form__input__click} ${s.ui__form__input}` : `${s.ui__form__input__error} ${s.ui__form__input__click} ${s.ui__form__input}`
                  : errror?  `${s.ui__form__input} ${s.ui__form__input__hover}` : `${s.ui__form__input__error} ${s.ui__form__input} ${s.ui__form__input}`   

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className={s.ui__form}>
                    <input 
                        className={inputClass}
                        onClick={()=> getValues().email === '' ? setClick(true) : ''}
                        onKeyUp={()=> getValues().email === '' ? setClick(false) : setClick(true)}
                    
                        name='email'
                    
                        {...register('email', 
                            {
                                required: 'Required field!', pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неверный формат E-mail!'
                            }
                            }
                        )
                        }  
                    />
                    
                    <span className={
                        errors.email?.message === undefined && 
                            click === false  ? 
                            `${s.ui__form__input__span}` : 
                            errors.email?.message !== undefined ? 
                            `${s.ui__form__input__span__error} ${s.ui__form__input__span} ${s.ui__form__input__span}` : 
                            `${s.ui__form__input__span}`
                      }
                    >
                        Email      
                    </span>
                
                    <ButtonUi 
                        marginLeft={24} 
                        bool={getValues().email === undefined || errors.email?.message !== undefined ? true : false}
                    />

                
                    {
                        errors.email?.message !== undefined && 
                        <p className={s.errorMessage}>
                            {errors.email?.message}
                        </p>
                    }
                </div>
            </form>

           
        </>
    )
}

export default TextField