import React from 'react';
import tinycolor from 'tinycolor2';
import Radium from 'radium';

import PROJECTS from '../projects'


class Projects extends React.Component {

  render() {

    let color = this.props.color

    return (
      <section className="projects">
        <div className="projects__filter"></div>
        <div className="projects__wrapper">

          <List color={color} />

        </div>
      </section>
    )
  }

}

export default Projects;


class List extends React.Component {

  render() {

    let color = this.props.color

    let renderItems = PROJECTS.map((item, i) => {
      return <Item key={i} title={item.title} text={item.text} imageSmall={item.image.small} color={color} />
    })

    return (
        <ul className="projects__list">

          {renderItems}

        </ul>
    )
  }
}


class Item extends React.Component {

  render() {

    let color = this.props.color

    let styles = {
      overlay: {
        background: tinycolor(color).darken(20).toString()
      },
      img: {
        background: `url(${this.props.imageSmall})`
      }
    }

    return (
      <li className="projects__item item box">
        <div className="item__overlay" style={styles.overlay}></div>
        <div className="item__img" style={styles.img}></div>
        <div className="item__description">
          <h3 className="item__title">{this.props.title}</h3>
          <p className="item__text">{this.props.text}</p>
          <strong className="item__btn">Узнать больше...</strong>
        </div>
      </li>
    )
  }
}
