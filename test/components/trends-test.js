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
  
  it ('should show three raised buttons for switching between graphs', () => {
    const wrapper = shallow(React.createElement(Trends))
    expect(Wrapper.find('RaisedButton')).to.have.length(3)
  })
})
