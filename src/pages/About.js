import React from 'react';
import {Link} from 'react-router'

import '../assets/sass/about.sass'



const RESUMELIST = [
  {
    'title': 'Учеба в академии ИМСИТ',
    'date': '2010-2015',
    'descrition': 'Учеба по специальности "Разработка вычислительной техники и автоматизированных систем" с присвоением квалификации "Инженер".'
  },
  {
    'title': 'Изучение веб-разработки и работа на фрилансе',
    'date': '2015-2017',
    'descrition': 'Чтение технической литературы, просмотр видеоуроков и прохождение онлайн-курсов. Параллельно работа на фрилансе.'
  },
  {
    'title': 'Ваша компания может быть здесь',
    'date': '2017-20__',
    'descrition': 'Постижение дзена в области веб-программирования.'
  }
]

const SERVICELIST = [
  {
    direction: 'Создание сайтов',
    list: [
      {
        title: 'Landing-page',
        price: '0000'
      },
      {
        title: 'Сайт-визитка',
        price: '0000'
      },
      {
        title: 'Интернет-магазин',
        price: '00000'
      }
    ]
  }
]

const SKILLSLIST = [
  {
    title: 'HTML5',
    percent: '90'
  },
  {
    title: 'CSS3',
    percent: '85'
  },
  {
    title: 'JavaScript',
    percent: '79'
  },
  {
    title: 'Jquery',
    percent: '62'
  },
  {
    title: 'React',
    percent: '75'
  },
  {
    title: 'Photoshop',
    percent: '31'
  }
]

const TESTIMONIALS = [
  {
    name: 'Василий',
    image: 'some image',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Василий',
    image: 'some image',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Василий',
    image: 'some image',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    name: 'Василий',
    image: 'some image',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

class About extends React.Component {

  render() {

    return (
      <div className="about content__page">
        <div className="container">
          <section className="about-me section box">
            <h2 className="section__title">Обо мне</h2>
            <h3 className="about-me__name">Усков Алексей</h3>
            <p className="about-me__job-name">Веб-разработчик</p>
            <p className="about-me__description">Мне 24 года и я из города Краснодара. Занимаюсь веб-разработкой более года.
              <br />
              В 2015 году я окончил высшее учебное заведение - ИМСИТ по специальности «ПO ВТ и АС». В процессе учёбы я заинтересовался Веб-технологиями. С тех пор это увлечение стало для меня главным: я изучил множество литературы, прочитал уйму статей на русском и иностранных языках, прошёл различные онлайн курсы, провел бесчисленное количество часов за просмотром видео-уроков и мастер-классов от настоящих профессионалов этого дела!
              <br />
              Я продолжаю совершенствоваться в этой области и с огромным удовольствием получаю новые знания! Спасибо, что зашли и оценили мой труд!
            </p>
            <div className="about-me__link-group">
              <Link to="/work" className="about-me__link btn">Мое портфолио</Link>
              <Link to="/contact" className="about-me__link btn">Связаться со мной</Link>
            </div>
          </section>

          <section className="resume section box">
            <h2 className="section__title">Резюме</h2>
            <ResumeList />
          </section>

          <section className="services section box">
            <h2 className="section__title">Услуги</h2>
            <ServiceList />
          </section>

          <section className="services section box">
            <h2 className="section__title">Навыки</h2>
            <SkillsList />
          </section>

          <section className="services section box">
            <h2 className="section__title">Отзывы</h2>
            <Testimonials />
          </section>
        </div>
      </div>
    );
  }

}

export default About;




class ResumeList extends React.Component {

  render() {
    let items = RESUMELIST ? RESUMELIST.map((item, i) => {
      return <li key={i}>
                <h3>{item.title}</h3>
                <span>{item.date}</span>
                <p>{item.descrition}</p>
             </li>
    })
    : null

    return (
      <ul>
        {items}
      </ul>
    );
  }

}




class ServiceList extends React.Component {

  render() {
    let servicelist = SERVICELIST ? SERVICELIST.map((item, i) => {
      return <li key={i}>
        <h3>{item.direction}</h3>
        <ServiceItems items={item.list} />
      </li>
    })
    : null

    return (
      <ul>
        {servicelist}
      </ul>
    );
  }
}
class ServiceItems extends React.Component {

  render() {
    let serviceitems = this.props.items ? this.props.items.map((item, i) => {
      return <li key={i}>
        <h4>{item.title}</h4>
        <span>{item.price}</span>
      </li>
    })
    : null

    return (
      <ul>
        {serviceitems}
      </ul>
    );
  }
}




class SkillsList extends React.Component {

  render() {
    let skillsitems = SKILLSLIST ? SKILLSLIST.map((item, i) => {
      return <li key={i}>
        <h5>{item.title}</h5>
        <span>{item.percent}%</span>
      </li>
    })
    : null

    return (
      <ul>
        {skillsitems}
      </ul>
    );
  }
}




class Testimonials extends React.Component {

  render() {
    let items = TESTIMONIALS ? TESTIMONIALS.map((item, i) => {
      return <li key={i}>
        <span>{item.image}</span>
        <h3>{item.name}</h3>
        <p>{item.text}</p>
      </li>
    })
    : null

    return (
      <ul>
        {items}
      </ul>
    );
  }

}
