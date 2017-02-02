import React from 'react';
import tinycolor from 'tinycolor2'
import Radium from 'radium'

import '../assets/sass/social.sass'

const SOCIALS = [
  {href: 'https://twitter.com/idreamzzer', className: 'twitter'},
  {href: 'https://vk.com/dreamzzer', className: 'vk'},
  {href: 'https://github.com/idreamzzer', className: 'github'},
  {href: 'mailto:idreamzzer@gmail.com', className: 'envelope-o'}
]

class Social extends React.Component {

  render() {

    let color = this.context.color

    let styles = {
      item: {
        boxShadow: `0px 0px 10px ${tinycolor(color).darken(10).toString()}`
      },
      link: {
        background: tinycolor(color).darken(15).toString(),
        ':hover': {
          background: tinycolor(color).darken(12).toString()
        },
        ':active': {
          background: tinycolor(color).darken(18).toString()
        }
      },
    }

    let items = SOCIALS.map((item, i) => {
      return <li key={i} className="social__item" style={styles.item}>
        <a key={i} href={item.href} className={`social__link ${this.props.size === 'big' ? 'social__link--big' : ''}`} style={styles.link} target="_blank"><i className={`fa fa-${item.className}`} aria-hidden="true"></i></a>
      </li>
    })

    return (
      <div className={`social ${this.props.class}`}>
        {(this.props.title) ? <h2 className="title" style={{color}}>{this.props.title}</h2> : null}
        <ul className="social__list">
          {items}
        </ul>
      </div>
    );
  }

}

Social.contextTypes = {
  color: React.PropTypes.string
};

export default Radium(Social);
