import React, {useState, useRef} from 'react'
import './style.sass';
import Layout from './Components/Layout';
import SelectName from './Components/SelectName';
import AccordionMenu from './Components/AccordionMenu/AccordionMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import TypographyMenu from './Components/TypographyMenu/TypographyMenu';
import TextField from './Components/TextField/TextField';
import { useForm } from 'react-hook-form';
import RadioButton from './Components/ButtonsCheckRadio/RadioButton';
import ChekBoxButton from './Components/ButtonsCheckRadio/ChekBoxButton';
import ButtonUi from './Components/ButtonUi/ButtonUi';
import { data } from './Components/DataGrig';
import Header from './Components/Header/Header';

function App() {

  const [activeBox, setActiveBox] = useState('radio1')

  const [active, setActive] = useState(0);

  const [activeName, setACtiveName] = useState(false);

  const scrollNavRefs = useRef();

  const getElementIndex = (element) => {
    const parent = element.parentNode;
    return [...parent.children].indexOf(element)
  }

  const scrollHandler = () => {
    if (!scrollNavRefs.current) return
    const rectNav = scrollNavRefs.current.getBoundingClientRect();
    const el = document.elementFromPoint(rectNav.width / 2, rectNav.height / 10)
    if(!el || el.tagName !== 'SECTION') return
    const newIndex =  getElementIndex(el)
    const rect = el.getBoundingClientRect();
    setActive(newIndex);
  };

  const {register, handleSubmit, setError, getValues, formState: {errors}} = useForm({defaultValues: {
      email: ''
  }})

  const [click, setClick] = useState(false);

  const onAwayClick = () => {
    return activeName !== false ? setACtiveName(!activeName) : '' 
  || getValues().email === '' && click ? setClick(false) : ''
  }

return (
    <div className="App" onScroll={scrollHandler} ref={scrollNavRefs} onClick={onAwayClick}>
      
      <Header/>

      <div className='container' >  
       
        <SideMenu active={active} getElementIndex={getElementIndex} setActive={setActive}/>
       
        <div className='wrapper' >
          
          <section className='harangue' id='0' >
          
            <div className='harangue__title' >
                Тестовое задание
            </div>
              <div className='harangue__subtitle'>Уровень: junior</div>
            <div className='harangue__descr'>
                Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку.
                В шапке страницы укажи своё ФИО, так всем будет удобнее.
                В менюхе под иконкой бургером мы хотели бы также видеть твои данные.
                Ну что, поехали?
            </div>
            
          </section>
          <section className='grid' id='1'>
          
              <div className='harangue__title' >
                  Сетка
              </div>
            
              <div className='harangue__descr' style={{marginTop: '24px'}}>
                Задание предполагает адаптивную вёрстку. 
                Используется 3 состояния в зависимости от устройства. 
                Сетка «резиновая» — переменной ширины.
              </div>
          
              <div className='layout' >
                  { data.map( (e, i) =>
                    <Layout 
                      key={i}
                      title={e.title} 
                      content={e.content}
                      column={e.column}
                      width={e.width}
                      space={e.title}
                      img={e.img}
                    />
                  )}
              </div>
          </section>

          <section className='typography' id='2' >

            <div className='harangue__title' style={{marginTop: '80px'}}>
                  Типографика
            </div>
          
            <div className='harangue__descr' style={{marginTop: '24px'}}>
                  Используется шрифт Graphik. 
                  На телефонах стили типографики переопределяются
            </div>
                
            <TypographyMenu />

          </section>
          <section className='ui' id='3'>
              <div className='harangue__title' style={{fontSize: '32px', textTransform: 'uppercase'}}>
                  ui
              </div>
              <div className='layout' style={{marginBottom: '100px'}}>
                  Текстовое поле  
              </div>
                <TextField 
                  register={register} 
                  handleSubmit={handleSubmit} 
                  getValues={getValues} 
                  errors={errors} 
                  setError={setError}
                  click={click}
                  setClick={setClick}
                />
              <div className='layout' style={{marginTop: '64px', marginBottom: '24px'}}>
                    Выпадающий список 
              </div>
              <div className='harangue__descr' style={{marginTop: '24px', marginBottom: '48px'}}>
                    Компонент состоит из текстового поля и выпадающей подсказки
              </div>
            
              <SelectName active={activeName} setACtive={setACtiveName}/>

              <div className='layout' style={{marginTop: '232px', marginBottom: '76px'}}>
                    Кнопка 
              </div>

              <ButtonUi marginBottom={64} bool={false}/>
              <ButtonUi marginBottom={0} bool={true}/>

              <div className='layout' style={{marginBottom: '32px'}}>
                    Чекбокс, радиобаттон
              </div>
              <div className='ui__buttonWrap'>
                <div className='ui__buttonWrap__wrap'>
                  <ChekBoxButton bool={true} state={false}/>
                  <ChekBoxButton bool={false} state={false}/>
                  <ChekBoxButton bool={false} state={true}/>
                </div>
                <div className='ui__buttonWrap__wrap'>
                  <RadioButton bool={true} />
                  <RadioButton bool={false} state='radio1' active={activeBox} setActive={setActiveBox} />
                  <RadioButton bool={false} state='radio2' active={activeBox} setActive={setActiveBox} />
                </div>
              </div>
              <div className='layout' style={{marginBottom: '12px'}}>
                  Аккордеон
              </div>
                <AccordionMenu/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
