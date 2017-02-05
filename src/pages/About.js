import React from 'react';
import {Link} from 'react-router'
import { Circle } from 'rc-progress';
import tinycolor from 'tinycolor2'

import '../assets/sass/about.sass'

import { RESUMELIST, SERVICELIST, SKILLSLIST, ADVSKILLSLIST, TESTIMONIALS } from '../data/ABOUTME'


class About extends React.Component {

  render() {

    return (
      <div className="about content__page">
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <AboutMe color={this.props.color} />
            </div>

            <div className="col-md-6">
              <Resume color={this.props.color} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <Service color={this.props.color} />
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <Skills color={this.props.color} />
            </div>

            <div className="col-md-6">
              <AdvSkills color={this.props.color} />
            </div>

          </div>


          {/* <Testimonials color={this.props.color} /> */}

        </div>
      </div>
    );
  }

}

export default About;




class AboutMe extends React.Component {

  constructor(props) {
    super(props)


    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseOver(e) {
    e.target.style.color = this.props.color
  }
  onMouseLeave(e) {
    e.target.style.color = '#fff'
  }

  render() {
    let color = this.props.color

    let styles = {
      link: {
        borderColor: tinycolor(color).lighten(20).toString(),
        color: '#fff'
      }
    }

    return (
      <section className="about-me section box">
        <h2 className="section__title" style={{color}}>Обо мне</h2>
        <h3 className="about-me__name" style={{color}}>Усков Алексей</h3>
        <p className="about-me__job-name">Веб-разработчик</p>
        <div className="about-me__description">
          <p>Мне 24 года и я из города Краснодара. Занимаюсь веб-разработкой более года.</p>
          <p>В 2015 году я окончил высшее учебное заведение - ИМСИТ по специальности «ПO ВТ и АС». В процессе учёбы я заинтересовался Веб-технологиями. С тех пор это увлечение стало для меня главным: я изучил множество литературы, прочитал уйму статей на русском и иностранных языках, прошёл различные онлайн курсы, провел бесчисленное количество часов за просмотром видео-уроков и мастер-классов от настоящих профессионалов этого дела!</p>
          <p>Я продолжаю совершенствоваться в этой области и с огромным удовольствием получаю новые знания! Спасибо, что зашли и оценили мой труд!</p>
        </div>
        <div className="about-me__link-group" style={{backgroundColor: color}}>
          <Link to="/work" className="about-me__link btn" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={styles.link}>Мое портфолио</Link>
          <Link to="/contact" className="about-me__link btn" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={styles.link}>Связаться со мной</Link>
        </div>
      </section>
    );
  }

}



class Resume extends React.Component {

  render() {
    let color = this.props.color

    let items = RESUMELIST ? RESUMELIST.map((item, i) => {
      return <li key={i} className="resume__item">
                <div className="resume__line" style={{backgroundColor: color}}></div>
                <h3 style={{color}}>{item.title}</h3>
                <span>{item.date}</span>
                <p>{item.descrition}</p>
             </li>
    })
    : null

    return (
      <section className="resume section box">
        <h2 className="section__title" style={{color}}>Резюме</h2>
        <ul className="resume__list">
          {items}
        </ul>
      </section>

    );
  }

}




class Service extends React.Component {

  render() {

    let color = this.props.color

    // dafug need fix it later
    let servicelist = SERVICELIST ? SERVICELIST.map((item, i) => {
      return <li key={i} className="services__item">
        <h3 className="services__title" style={{color}}>{item.direction}</h3>
        {item.list ? <ul className="services__sublist"> {item.list.map((serviceitem, j) => {
                          return <li key={j} className="services__subitem">
                            <h4 className="services__subtitle" style={{color: tinycolor(color).darken(30).toString()}}>{serviceitem.title}</h4>
                            <div className="services__line" style={{borderColor: color}}></div>
                            <span className="services__price" style={{color}}>{serviceitem.price}</span>
                          </li>
                        })}
                     </ul>
                   : null}
      </li>
    })
    : null

    return (
      <section className="services section box">
        <h2 className="section__title" style={{color}}>Услуги</h2>
        <ul className="services__list">
          {servicelist}
        </ul>
      </section>
    );
  }
}



class Skills extends React.Component {

  render() {
    let color = this.props.color

    let skillsitems = SKILLSLIST ? SKILLSLIST.map((item, i) => {
      return <li key={i} className="skills__item">
        <Circle className="skills__circle" percent={item.percent} strokeWidth="4" strokeColor={color} />
        <span className="skills__title" style={{color: tinycolor(color).darken(30).toString()}}>{item.title}</span>
      </li>
    })
    : null

    return (
      <section className="skills section box">
        <h2 className="section__title" style={{color}}>Навыки</h2>
        <ul className="skills__list">
          {skillsitems}
        </ul>
      </section>

    );
  }
}



class AdvSkills extends React.Component {

  render() {
    let color = this.props.color

    let advskillsitems = ADVSKILLSLIST ? ADVSKILLSLIST.map((item, i) => {
      return <li key={i} className="advskills__item" style={{backgroundColor: color, color: '#fff'}}>
        <h5 className="advskills__text">{item}</h5>
      </li>
    })
    : null
    return (
      <section className="advskills section box">
        <h2 className="section__title" style={{color}}>Дополнительно</h2>
        <h3 className="advskills__subtitle" style={{color: tinycolor(color).darken(40).toString()}}>Знаком с технологиями</h3>
        <ul className="advskills__list">
          {advskillsitems}
        </ul>
        <h3 className="advskills__subtitle" style={{color: tinycolor(color).darken(40).toString()}}>Владею языками</h3>
        <ul className="advskills__lang">
          <li><span style={{color}}>Русский язык</span> - родной язык</li>
          <li><span style={{color}}>Английский язык</span> - чтение технической документации, редко со словарем</li>
        </ul>
        <div className="advskills__other">
          <h3 className="advskills__subtitle" style={{color: tinycolor(color).darken(40).toString()}}>Прочее</h3>
          <p>Знаком с различными <span style={{color}}>Linux</span> диструбутивами на уровне администрирования сервера(этот сайт расположен и настроен на <span style={{color}}>VPS</span>).</p>
        </div>
      </section>
    );
  }

}




class Testimonials extends React.Component {

  render() {
    let color = this.props.color

    let items = TESTIMONIALS ? TESTIMONIALS.map((item, i) => {
      return <li key={i}>
        <span>{item.image}</span>
        <h3>{item.name}</h3>
        <p>{item.text}</p>
      </li>
    })
    : null

    return (
      <section className="services section box">
        <h2 className="section__title" style={{color}}>Отзывы</h2>
        <ul>
          {items}
        </ul>
      </section>
    );
  }

}
