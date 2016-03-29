import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import Home from '../../src/components/Home'

describe('Home', () => {
  it('should render home elements', () => {
    const wrapper = shallow(React.createElement(Home))
    // use mount and the componet directly https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
    expect(wrapper.find('Header')).to.have.length(1)
    expect(wrapper.find('Login')).to.have.length(1)
    expect(wrapper.find('SignUp')).to.have.length(1)
  })
})
