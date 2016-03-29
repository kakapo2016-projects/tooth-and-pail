import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'

import Trends from '../../src/components/Trends'
import TrendDonationSize from '../../src/components/TrendDonationSize'
import TrendDonationsTime from '../../src/components/TrendDonationsTime'
import TrendTeethFunded from '../../src/components/TrendTeethFunded'

describe('Trends', () => {
  it('should show trends information in a div', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(wrapper.find('#Trends')).to.have.length(1)
  })
  it('should show a page heading with the style h2', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(wrapper.find('h2')).to.have.length(1)
  })
  it('should show the text Trends in the heading', () => {
  const wrapper = shallow(React.createElement(Trends))
  expect(wrapper.find('h2')).to.have.text("Trends")
  })
  it('should show three raised buttons for moving between graphs', () => {
  const wrapper = shallow(React.createElement(Trends))
  expect(wrapper.find('RaisedButton')).to.have.length(3)
  })
})
describe('TrendDonationSize', () => {
  it('should show trend in a div', () => {
    const wrapper = shallow(React.createElement(TrendDonationSize))
    expect(wrapper.find('.Size')).to.have.length(1)
  })
})
describe('TrendDonationsTime', () => {
  it('should show trend in a div', () => {
    const wrapper = shallow(React.createElement(TrendDonationsTime))
    expect(wrapper.find('.Donations')).to.have.length(1)
  })
})
describe('TrendTeethFunded', () => {
  it('should show trend in a div', () => {
    const wrapper = shallow(React.createElement(TrendTeethFunded))
    expect(wrapper.find('.Funded')).to.have.length(1)
  })
})