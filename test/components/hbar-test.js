import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import HBar from '../../src/components/HBar'

describe('HBar', () => {
  it('renders into document without blowing up', () => {
    const wrapper = mount(<HBar />);
    expect(wrapper.find('HBar')).to.be.length(1)
	});
})
