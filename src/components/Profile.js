import React from 'react';
import tinycolor from 'tinycolor2'

import Social from './Social'

import '../assets/sass/profile.sass'

class Profile extends React.Component {

  render() {
    let color = this.props.color

    let styles = {
      profile: {
        color: tinycolor(color).darken(60).toString()
      },
      avatar: {
        background: `url(${this.props.avatar})`,
        backgroundSize: `cover`,
        borderColor: tinycolor(color).lighten(10).toString(),
        boxShadow: `0px 0px 10px ${tinycolor(color).lighten(10).toString()}`
      },
      link: {
        color: tinycolor(color).darken(40).toString()
      }
    }

    return (
      <div className="profile" style={styles.profile}>
        <div className="profile__avatar" style={styles.avatar}></div>
        <span className="profile__nickname">DreamZz</span>
        <span className="profile__twittername"><a style={styles.link} href="https://twitter.com/idreamzzer" className="profile__link" target="_blank">@idreamzzer</a></span>
        <h2 className="profile__fullname">Усков Алексей</h2>
        <p className="profile__bio">Web-разработчик</p>
        <div className="profile__social">
          <Social socials={this.props.socials} color={this.props.color} />
        </div>
      </div>
    );
  }

}


export default Profile;
