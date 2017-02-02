import React from 'react';
import {Link} from 'react-router'
import PROJECTS from '../projects'

class Project extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    let projectId = this.props.params.projectId
    let project = PROJECTS.filter((item) => {
      return item.id === projectId
    })[0]
    let projectsCount = PROJECTS.length
    let prevProject, nextProject
    let id = Number(projectId)
    if (id === 1) {
      prevProject = projectsCount
    } else {
      prevProject = id - 1
    }
    if (id === projectsCount) {
      nextProject = 1
    } else {
      nextProject = id + 1
    }
    this.setState({project, prevProject, nextProject})
  }

  render() {
    let {title, text, imageBig} = this.state.project
    let {prevProject, nextProject} = this.state

    return (
      <div className="project content__page">
        <div className="container">
          <Link to="/work">Вернуться</Link>
          <section className="box">
            <img src={imageBig} alt="project" />
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
          <Link to={`/work/project/${prevProject}`} >prev</Link>
          <Link to={`/work/project/${nextProject}`} >next</Link>
        </div>

      </div>
    );
  }

}

export default Project;
