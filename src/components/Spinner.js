import React, { Component } from 'react'
import Hourglass from './Hourglass.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Hourglass} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
