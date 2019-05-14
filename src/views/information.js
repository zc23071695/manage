import React from 'react'
import store from '../store/store.js'
// import { objectMethod } from '@babel/types'
// import './js/jquery'
class InfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', sex: '', age: '' }
  }
  handleChange = event => {
    // this.setState({ name: event.target.value })
    switch (event.target.name) {
      case 'name':
        this.setState({ name: event.target.value })
        break
      case 'age':
        this.setState({ age: event.target.value })
        break
      case 'sex':
        this.setState({ sex: event.target.value })
        break
      default:
        console.log(1)
    }
  }
  submit = e => {
    e.preventDefault()
    store.dispatch({
      type: 'ADD_EMPLOYEE',
      new_employ: this.state
    })
    console.log(111)
  }
  render() {
    return (
      <form>
        <label>
          姓名:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          性别:
          <input
            type="text"
            name="sex"
            value={this.state.sex}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          年龄:
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="提交" onClick={this.submit} />
      </form>
    )
  }
}
class Information extends React.Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
  }

  render() {
    store.subscribe(() => this.setState(store.getState()))
    console.log(this.state.employee)
    let info = this.state.employee
    const list = info.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.sex}</td>
        <td>{item.age}</td>
      </tr>
    ))

    return (
      <>
        <table border={1} cellSpacing={0} width={200}>
          <tbody>{list}</tbody>
        </table>
        <InfoForm />
      </>
    )
  }
}
export default Information
