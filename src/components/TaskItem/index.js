import React from 'react'
import './styles.css'
import { Button, Modal } from 'antd'

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  showModal () {
    this.setState({modalVisible: true})
  }
  hideModal (state) {
    console.log(this.props.children)
    this.setState({modalVisible: false})
  }
  buildForm (args) {
    return (
      args.map((arg, index) => (
        <div key={index}>
          <div>{arg}</div>
          <input type="text" name={index} />
        </div>
        ))
      )
  }
  render () {
    return (
      <div className="TaskItem">
        <div className="TaskItem-icon"><img src={this.props.icon} className="TaskItem-icon" /></div>
        <div className="TaskItem-button">
          <Button type="primary" onClick={() => this.showModal()}>{this.props.name}</Button>
        </div>
        <Modal 
          title={this.props.name} 
          visible={this.state.modalVisible} 
          onOk={(e) => this.hideModal(e)}
          onCancel={(e) => this.hideModal(e)}
          okText="OK"
          cancelText="Cancel"
          >
          {this.props.form && this.buildForm(this.props.form)}
        </Modal>
      </div>
      )
  }
}