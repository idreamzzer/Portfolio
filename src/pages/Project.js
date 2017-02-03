import React from 'react';
import {Link} from 'react-router'
import Radium from 'radium'


import PROJECTS from '../data/PROJECTS'

import '../assets/sass/project.sass'

class Project extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      project: {},
      prevProject: '',
      nextProject: '',
      isImageOverlayActive: false,
      isLinkHover: false
    }

    this.onHoverImage = this.onHoverImage.bind(this)
    this.onLeaveImage = this.onLeaveImage.bind(this)
    this.onHoverLink = this.onHoverLink.bind(this)
    this.onLeaveLink = this.onLeaveLink.bind(this)
  }

  componentDidMount() {
    let projectName = this.props.params.name
    let project = PROJECTS.filter((item) => {
      return item.dirName === projectName
    })[0]

    let projectId = Number(project.id)
    let prevProject, nextProject
    let lastIndex = PROJECTS.length - 1


    if (projectId !== 0) {
      prevProject = PROJECTS[projectId - 1].dirName
    } else {
      prevProject = PROJECTS[lastIndex].dirName
    }

    if (projectId === lastIndex) {
      nextProject = PROJECTS[0].dirName
    } else {
      nextProject = PROJECTS[projectId + 1].dirName
    }

    this.setState({project, prevProject, nextProject})
  }

  onHoverImage() {
    this.setState({isImageOverlayActive: true})
  }
  onLeaveImage() {
    this.setState({isImageOverlayActive: false})
  }
  onHoverLink() {
    this.setState({isLinkHover: true})
  }
  onLeaveLink() {
    this.setState({isLinkHover: false})
  }

  render() {
    let {dirName, title, subtitle, image, descr} = this.state.project
    let {prevProject, nextProject} = this.state
    let color = this.context.color

    let isImageOverlayActive = this.state.isImageOverlayActive ? 'project__image-overlay--active' : ''

    let styles = {
      navBtn: {
        color: color
      },
      overlay: {
        background: color
      },
      title: {
        color: color
      },
      btn: {
        color: this.state.isLinkHover ? '#fff' : color,
        background: this.state.isLinkHover ? color : '#fff',
        borderColor: color
      },
      tech: {
        background: color,
        color: '#fff'
      }
    }

    let renderTech = this.state.project.tech
    ? <ul className="project__tech">{this.state.project.tech.map((item, i) => {
      return <li key={i} className="project__tech-item" style={styles.tech}>{item}</li>
    })}</ul>
    : null

    return (
      <div className="project content__page">
        <div className="container">
          <div className="project__wrapper">

            <div className="project__nav">
              <Link to={`/work/${prevProject}`} style={styles.navBtn} className="project__nav-btn project__nav-btn--prev box">назад</Link>
              <Link to={`/work/${nextProject}`} style={styles.navBtn} className="project__nav-btn project__nav-btn--next box">вперед</Link>
            </div>

            <section className="project__main">
              <div className="project__image-box box">
                <Link to={`/work/${dirName}/demo`} target="_blank" style={styles.overlay} className={`project__image-overlay ${(isImageOverlayActive)}`} onMouseOver={this.onHoverImage} onMouseLeave={this.onLeaveImage} >Посмотреть демо</Link>
                <img src={image} alt={title} className="project__image" />
              </div>

              <div className="project__info box">
                <h2 className="project__title" style={styles.title}>{title}</h2>
                <p className="project__subtitle">{subtitle}</p>
                <div className="project__description">
                  <p className="project__description-text">{descr}</p>
                  {renderTech}
                </div>
                <Link to={`/work/${dirName}/demo`} target="_blank" className="project__demo btn" style={styles.btn} onMouseOver={this.onHoverLink} onMouseLeave={this.onLeaveLink}>Посмотреть демо</Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }

}

Project.contextTypes = {
  color: React.PropTypes.string
};

export default Radium(Project);
