import React from 'react';

class Overlay extends React.Component {

  render() {
    return (
      <div className="main__overlay">
        <div className="main__overlay-wrapper">
          
          <div className="main__overlay-part main__overlay-part--top"></div>
          <div className="main__overlay-part main__overlay-part--right"></div>
          <div className="main__overlay-part main__overlay-part--bottom"></div>
          <div className="main__overlay-part main__overlay-part--left"></div>

        </div>
      </div>
    );
  }

}

export default Overlay;
