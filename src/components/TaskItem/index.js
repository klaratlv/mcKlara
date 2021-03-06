import React from 'react'
import './styles.css'
import { Button, Modal } from 'antd'

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      args: []
    }
  }
  showModal () {
    this.setState({modalVisible: true})
  }
  cancel () {
    this.setState({modalVisible: false})
  }
  ok (state) {
    console.log(this.state)
    this.setState({loading: true})
    this.props.ok(this.state.args)
      .then(() => {
        this.setState({modalVisible: false})
      })
      .then(() => {
        this.setState({loading: false})
      })
  }
  valueChanged (e) {
    let args = this.state.args;
    args[e.target.name] = e.target.value
    this.setState({ args })
  }
  onMouseEnter (e) {
    this.setState({hovering: true})
  }
  onMouseLeave (e) {
    this.setState({hovering: false})
  }
  buildForm (args) {
    return (
      <form>
       {
        args.map((arg, index) => (
          <div key={index}>
            <div>{arg}</div>
            <input type="text" name={index} onChange={(e) => this.valueChanged(e)} />
          </div>
          ))
       }
      </form>
    )
  }
  render () {
    return (
      <div className="TaskItem" onMouseLeave={(e) => this.onMouseLeave(e)} onMouseEnter={(e) => this.onMouseEnter(e)}>
        <div className="TaskItem-icon"><img src={this.props.icon} className="TaskItem-icon" /></div>
        <div className="TaskItem-button">
          <Button type={this.state.hovering ? 'primary' : 'default'} onClick={() => this.showModal()}>{this.props.name}</Button>
        </div>
        <Modal 
          title={this.props.name} 
          visible={this.state.modalVisible} 
          onOk={(e) => this.ok(e)}
          onCancel={(e) => this.cancel(e)}
          okText="OK"
          cancelText="Cancel"
          >
          {this.props.form && this.buildForm(this.props.form)}
        </Modal>
      </div>
      )
  }
}