import { expect } from 'chai'
import chai from 'chai'
import { shallow, render, mount } from 'enzyme'
import { spy } from 'sinon'
import React from 'react'
import sinonChai from 'sinon-chai'

import DonateForm from '../../src/components/DonateForm'

chai.use(sinonChai)

describe('DonateForm', () => {
  it('should render a donation form in a span', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('#DonateForm')).to.have.length(1)
  })
  const props = {
    received : 300,
    target : 300
  }
})

describe('DonateButton', () => {
  it('should render a raised button', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('RaisedButton')).to.have.length(1)
  })
})



