import React from 'react';
import tinycolor from 'tinycolor2';

import Social from '../components/Social'
import ContactForm from '../components/ContactForm'

import '../assets/sass/contact.sass'

class Contact extends React.Component {



  render() {

    let color = this.context.color

    let styles = {
      title: {
        color
      },
      link: {
        color: tinycolor(color).darken(20).toString()
      }
    }

    return (
      <div className="contact content__page">

        <div className="contact__wrapper">

          <ContactForm class="box contact__contact-form" />

          <div className="contact__col">
            <div className="box contact__contacts">
              <h2 className="title" style={styles.title}>Контакты</h2>
              <a style={styles.link} href="mailto:idreamzzer@gmail.com" target="_blank" className="contact__link">Почта: idreamzzer@gmail.com</a>
              <a style={styles.link} href="stype:dreamzz92" target="_blank" className="contact__link">Skype: dreamzz92</a>
              <a style={styles.link} href="tel:89189688292" target="_blank" className="contact__link">Телефон: +7(918)968-82-92</a>
            </div>

            <Social class="box contact__social" title="Социальные сети" color={this.props.color} size="big" />

          </div>

        </div>

      </div>
    );
  }

}

Contact.contextTypes = {
  color: React.PropTypes.string
}

export default Contact;
