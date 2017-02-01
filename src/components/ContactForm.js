import React from 'react';
import $ from 'jquery';

class ContactForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      message: '',
      didSend: false
    }
  }

  onChangeName(e) {
    let username = e.target.value
    this.setState({username})
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
    let {username, email, message} = this.state

    $.ajax({
      type: 'POST',
      url: '/sendmail',
      data: {username, email, message}
    })

    this.setState({username: '', email: '', message: '', didSend: true})

    setTimeout(() => this.setState({didSend: false}), 3000)
  }

  render() {

    return (
      <form onSubmit={this.sendMessage.bind(this)} >
        <input value={this.state.username} placeholder="Введите имя" onChange={this.onChangeName.bind(this)} />
        <input type="email" value={this.state.email} placeholder="Введите почту" onChange={this.onChangeEmail.bind(this)} />
        <textarea value={this.state.message} placeholder="Ваше сообщение" onChange={this.onChangeMessage.bind(this)} />
        <input type="submit" value="Отправить" />
        {(this.state.didSend) ? <div>Сообщение успешно отправлено</div> : null}
      </form>
    );
  }

}

export default ContactForm;
