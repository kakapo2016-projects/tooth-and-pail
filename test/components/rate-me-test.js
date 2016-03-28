import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import RateMe from '../../src/components/RateMe.js'

describe('RateMe', () => {
  const props = { rating : 3 }

  it('renders a current rating', () => {
    const wrapper = shallow(React.createElement(RateMe, props))
    expect(wrapper.find('span.currentRating')).to.be.length(1)
  })

  it('renders a current rating as per the rating props passed in', () => {
    const wrapper = shallow(React.createElement(RateMe, props))
    expect(wrapper.find('.currentRating').first()).to.have.text('Current Rating : 3')
  })

  it('renders the rating teeth', () => {
    const wrapper = shallow(React.createElement(RateMe, props))
    expect(wrapper.find('div.clickableTeeth')).to.be.length(1)
  })

  it('renders 5 teeth', () => {
    const wrapper = shallow(React.createElement(RateMe, props))
    expect(wrapper.find('.toothMed').to.have.length(5))
  })
})
