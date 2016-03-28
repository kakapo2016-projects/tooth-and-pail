import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'

import Trends from '../../src/components/Trends'

describe('Trends', () => {
  it('should show trends information in a div', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(wrapper.find('#Trends')).to.have.length(1)
  })
  it('should show a page heading with the style h2', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(wrapper.find('h2')).to.have.length(1)
  })
  it('should show the text Recent Activity in the heading', () => {
  const wrapper = shallow(React.createElement(Trends))
  expect(wrapper.find('h2')).to.have.text("Trends")
  })
  it ('should show three raised buttons for switching between graphs', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(Wrapper.find('RaisedButton')).to.have.length(3)
  })
})
