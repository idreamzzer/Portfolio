import React from 'react';

import Social from '../components/Social'
import ContactForm from '../components/ContactForm'

import '../assets/sass/contact.sass'

class Contact extends React.Component {



  render() {
    return (
      <div className="contact content__page container">

        <ContactForm  />

        <Social color={this.props.color} />

      </div>
    );
  }

}

export default Contact;
