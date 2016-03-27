import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import SignUp from '../../src/components/SignUp'

describe('SignUp', () => {
  it('renders the SignUp component', () => {
  	const wrapper = shallow(React.createElement(SignUp))
    expect(wrapper.find('form')).to.have.length(1)
    expect(wrapper.find('TextField')).to.have.length(4)
    expect(wrapper.find('RaisedButton')).to.have.length(1)
  })
})
