import React from 'react';
import $ from 'jquery';
import tinycolor from 'tinycolor2'
import Radium from 'radium'
import CSSTransition from 'react-addons-css-transition-group'

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

  componentDidMount() {
    this.refs.input.focus()
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

    let color = this.context.color

    let styles = {
      btn: {
        color,
        outlineColor: color,
        borderColor: '#aaa',
        ':hover': {
          color: '#fff',
          background: color
        }
      },
      input: {
        outlineColor: color
      },
      alert: {
        background: tinycolor(color).darken(10).toString()
      }
    }

    return (
      <form className={`contact-form ${this.props.class}`} onSubmit={this.sendMessage.bind(this)} >
        <h2 className="title" style={{color}}>Напишите мне</h2>

        <label htmlFor="username" className="contact-form__label">Имя</label>
        <input id="username" style={styles.input} className="contact-form__username input" ref="input" value={this.state.username} placeholder="Василий" onChange={this.onChangeName.bind(this)} />
        <label htmlFor="email" className="contact-form__label">Почта</label>
        <input id="email" style={styles.input} className="contact-form__email input" type="email" value={this.state.email} placeholder="example@gmail.com" onChange={this.onChangeEmail.bind(this)} />
        <label htmlFor="message" className="contact-form__label">Сообщение</label>
        <textarea id="message" style={styles.input} className="contact-form__message input" value={this.state.message} placeholder="Хочу с тобой работать! :)" onChange={this.onChangeMessage.bind(this)} />
        <input className="contact-form__submit btn" style={styles.btn} type="submit" value="Отправить" />

        <CSSTransition
          transitionName="transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {(this.state.didSend) ? <div className="contact-form__alert alert" style={styles.alert}>Сообщение успешно отправлено</div> : null}
        </CSSTransition>
      </form>
    );
  }

}

ContactForm.contextTypes = {
  color: React.PropTypes.string
};

export default Radium(ContactForm);
