import React from 'react';
import tinycolor from 'tinycolor2';
import {Link} from 'react-router'

import PROJECTS from '../projects'


class Projects extends React.Component {

  render() {

    let color = this.props.color

    return (
      <section className="projects container">
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

    let renderItems = PROJECTS.map((item) => {
      return <Item key={item.id} id={item.id} title={item.title} text={item.text} imageSmall={item.imageSmall} color={color} />
    })

    return (
        <ul className="projects__list">

          {renderItems}

        </ul>
    )
  }
}


class Item extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isMobile: false
    }
  }

  onResize() {
    if (window.innerWidth <= 768) {
      this.setState({isMobile: true})
    } else {
      this.setState({isMobile: false})
    }
  }

  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({isMobile: true})
    } else {
      this.setState({isMobile: false})
    }
    window.addEventListener("resize", this.onResize.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize.bind(this))
  }

  render() {

    let color = this.props.color

    let styles = {
      overlay: {
        background: tinycolor(color).darken(20).toString()
      },
      img: {
        backgroundImage: `url(${this.props.imageSmall})`
      },
      dscr: {
        color: (this.state.isMobile) ? tinycolor(color).darken(20).toString() : '#fff'
      }
    }

    return (
      <li className="projects__item item box">
        <Link to={`/work/project/${this.props.id}`} className="item__link">
          <div className="item__overlay" style={styles.overlay}></div>
          <div className="item__img" style={styles.img}><div className="item__img-overlay"></div></div>
          <div className="item__description" style={styles.dscr}>
            <h3 className="item__title">{this.props.title}</h3>
            <p className="item__text">{this.props.text}</p>
            <strong className="item__btn" style={styles.dscr}>Узнать больше...</strong>
          </div>
        </Link>
      </li>
    )
  }
}
