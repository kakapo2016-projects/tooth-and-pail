import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import Home from '../../src/components/Home'

describe('Home', () => {
  it('should render home elements', () => {
    const wrapper = shallow(React.createElement(Home))
    expect(wrapper.find('Header')).to.have.length(1)
    expect(wrapper.find('Login')).to.have.length(1)
    expect(wrapper.find('SignUp')).to.have.length(1)
  })
})
