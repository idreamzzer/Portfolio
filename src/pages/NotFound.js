import React from 'react';
import {Link} from 'react-router'

class NotFound extends React.Component {

  render() {
    return (
      <div className="unknown content__page">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">

            <div className="unknown__box box">
              <strong>404</strong>
              <span>Извините, страница не найдена.<br />Если желаете помочь проекту, то сообщите об ошибке.</span>
              <Link to="contact">Сообщить</Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default NotFound;
