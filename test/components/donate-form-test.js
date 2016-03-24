import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import DonateForm from '../../src/components/DonateForm'

describe('DonateForm', () => {
  it('should render a donation form in a span', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('#DonateForm')).to.have.length(1)
  })
})

describe('DonateButton', () => {
  it('should render a raised button', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('RaisedButton')).to.have.length(1)
  })
})

describe('InputField', () => {
  it('should render an input field', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('TextField')).to.have.length(1)
  })
})

describe('InputField', () => {
  it('should render an input field with the type of number', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('#donateInput')).to.have.attr('type', 'number')
  })
})