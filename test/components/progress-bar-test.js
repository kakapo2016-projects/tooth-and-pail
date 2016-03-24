import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProgressBar from '../../src/components/ProgressBar'

describe('ProgressBar', () => {
  it('should render a progress bar in a span', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.find('#ProgressBar')).to.have.length(1)
  })
})