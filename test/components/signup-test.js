import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import SignUp from '../../src/components/SignUp'

describe('SignUp', () => {
  it('renders the SignUp component', () => {
  	const wrapper = mount(<SignUp />)
  	expect(wrapper.find(SignUp)).to.have.length(1);
  })
})
