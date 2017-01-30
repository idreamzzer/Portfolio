import React from 'react';

import '../assets/sass/work.sass'

import Projects from '../components/Projects'

class Work extends React.Component {

  render() {

    let color = this.props.color

    return (
      <div className="work content__page">
        <div className="container">
          <Projects color={color} />
        </div>
      </div>
    );
  }

}

export default Work;
