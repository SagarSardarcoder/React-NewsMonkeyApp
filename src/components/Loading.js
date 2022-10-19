import React, { Component } from 'react'
import pinwheel from './Pinwheel.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={pinwheel} alt='loading'/>
      </div>
    )
  }
}
