import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import SobStory from '../../src/components/SobStory'

describe('SobStory', () => {
  it('renders the SobStory component', () => {
  	const wrapper = mount(<SobStory />);
  	expect(wrapper.find(SobStory)).to.have.length(1);
  });

  it('renders a sob story in the component div', () => {
  	const wrapper = shallow(
  		<div>
  		</div>
  		);
  	expect(wrapper.text()).to.include.text
  })
})
