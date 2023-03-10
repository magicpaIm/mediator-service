/** @format */

class SocketHelper {
  constructor(socket) {
    this.socket = socket
    this.busy = false
  }

  getState = () => {
    console.log('---------------------------->', this.busy)
    return this.busy
  }
  sendMessage = (event, message) => {
    if (event !== 'send-screenshot') console.log({event}, {message})
    if (event === 'status') {
      if (message === 'loading') this.busy = true
      else this.busy = false
    }
    this.socket.emit(event, message)
  }

  sendSuccessMessage = (message) => {
    this.sendMessage('message', {
      response_code: true,
      message: message,
      type: 'success',
    })
  }

  sendFailureMessage = (message) => {
    this.sendMessage('message', {
      response_code: false,
      message: message,
      type: 'error',
    })
  }

  sendWarnMessage = (message) => {
    this.sendMessage('message', {
      response_code: false,
      message: message,
      type: 'warning',
    })
  }
}

module.exports = SocketHelper
