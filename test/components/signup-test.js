import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Component from '../../src/components/SignUp'

describe('SignUp', () => {
  it('renders the SignUp component', () => {
  	const wrapper = mount(<SignUp />);
  	expect(wrapper.find(SignUp)).to.have.length(1);
  });

  xit('renders a signup text input field for name', () => {
  	const wrapper = shallow(
  		<div>
  		</div>
  		);
  	expect(wrapper.text()).to.include.text
  });

  xit('renders a signup text input field for password', () => {
  	const wrapper = shallow(
  		<div>
  		</div>
  		);
  	expect(wrapper.text()).to.include.text
  })
})