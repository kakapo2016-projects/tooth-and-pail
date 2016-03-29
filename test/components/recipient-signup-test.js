import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import RecipientSignup from '../../src/components/RecipientSignup'

describe('RecipientSignup', () => {
  it('shows a signup form in a div', () => {
    const wrapper = shallow(React.createElement(RecipientSignup))
    expect(wrapper.find('#RecipientForm')).to.have.length(1)
  })
  it('should show a page heading with the style h2', () => {
    const wrapper = shallow(React.createElement(RecipientSignup))
    expect(wrapper.find('h2')).to.have.length(2)
  })
  it('should show the text Submit Your Teeth in the heading', () => {
  const wrapper = shallow(React.createElement(RecipientSignup))
  expect(wrapper.closest('h2')).to.have.text("Submit Your Teeth")
  })
  it('should show a raised button to submit the form and a different one for login if appropriate', () => {
  const wrapper = shallow(React.createElement(RecipientSignup))
  expect(wrapper.find('RaisedButton')).to.have.length(2)
  })
  it('should show a flat button to upload photos', () => {
  const wrapper = shallow(React.createElement(RecipientSignup))
  expect(wrapper.find('FlatButton')).to.have.length(1)
  })
  it('should show 3 text fields', () => {
  const wrapper = shallow(React.createElement(RecipientSignup))
  expect(wrapper.find('TextField')).to.have.length(3)
  })
})
