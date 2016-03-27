import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProgressBar from '../../src/components/ProgressBar'

describe('ProgressBar', () => {
  it('should render a progress bar in a span', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.find('#ProgressBar')).to.have.length(1)
  })

  it('has a received prop', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.props().received).to.be.defined
  })
  it('has a target prop', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.props().target).to.be.defined
  })
  it('has a received value of 80', () => {
    const wrapper = shallow(React.createElement(ProgressBar, {received: '80'}))
    expect(wrapper.find('#ProgressBar').first()).to.have.text('$80 out of $ raised!')
  })
  it('has a target value of 5000', () => {
    const wrapper = shallow(React.createElement(ProgressBar, {target: '5000'}))
    expect(wrapper.find('#ProgressBar').first()).to.have.text('$ out of $5000 raised!')
  })
})

