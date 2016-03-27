import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import HBar from '../../src/components/HBar'
import D3 from 'd3'

describe('HBar', () => {
  it('renders into document without blowing up', () => {
    expect(true).to.equal(true);
    expect(HBar).to.be.ok;
	})

  xit('has a received prop', () => {
    const wrapper = shallow(React.createElement(HBar))
    expect(wrapper.props().received).to.be.defined
  })

  xit('has a target prop', () => {
    const wrapper = shallow(React.createElement(HBar))
    console.log('target', this.props)
    expect(wrapper.props.data).to.be.equal
  })
});

