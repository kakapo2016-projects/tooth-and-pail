import React from 'react'
import ReactDOM from 'react-dom'


export default React.createClass({
  render() {
    return (
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Submit</button>
        </form>
      );
    }
  })
  



