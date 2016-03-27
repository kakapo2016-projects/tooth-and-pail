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

  it('should display data', () => {
    const wrapper = shallow(React.createElement(HBar))
    var data = this.props.data
    expect(wrapper.props.data).to.be.equal
  })

  xit('should display labeled target donations', () => {
    const wrapper = shallow(React.createElement(HBar))
    console.log('target', this.props)
    expect(wrapper.props.data).to.be.equal
  })
});

// this.props.data[0].v = this.props.received
//     this.props.data[1].v = this.props.target