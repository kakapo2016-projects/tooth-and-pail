import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Login from '../../src/components/Login'

describe('Login', () => {
  it('should render a login form', () => {
    const wrapper = shallow(React.createElement(Login))
    expect(wrapper.find('form')).to.have.length(1)
    expect(wrapper.find('TextField')).to.have.length(2)
    expect(wrapper.find('RaisedButton')).to.have.length(1)
  })
})
