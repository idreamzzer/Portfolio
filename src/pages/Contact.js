import React from 'react';

import Social from '../components/Social'

import '../assets/sass/contact.sass'

class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      message: ''
    }
  }

  onChangeEmail(e) {
    let email = e.target.value
    this.setState({email})
  }
  onChangeMessage(e) {
    let message = e.target.value
    this.setState({message})
  }

  sendMessage(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div className="contact content__page container">

        <form onSubmit={this.sendMessage.bind(this)} >
          <input type="email" placeholder="Введите почту" onChange={this.onChangeEmail.bind(this)} />
          <textarea placeholder="Ваше сообщение" onChange={this.onChangeMessage.bind(this)} />
          <input type="submit" value="Отправить" />
        </form>

        <Social color={this.props.color} />

      </div>
    );
  }

}

export default Contact;
