import { expect } from 'chai'
import chai from 'chai'
import { shallow, render, mount } from 'enzyme'
import { spy } from 'sinon'
import React from 'react'
import sinonChai from 'sinon-chai'

import DonateForm from '../../src/components/DonateForm'

chai.use(sinonChai)

// describe('DonateForm', () => {
//   const props = { getValue: spy() }
//   const expected = 'test.value'

//   it('should pass the value of the input field to the donateFunction function when the button is clicked', () => {
//     const wrapper = mount(React.createElement(DonateForm))
//     let input = wrapper.find('TextField')
//     input.get(5).value = expected
//     let button = wrapper.find('RaisedButton')
//     button.simulate('keyDown', onClick)
//     spy.assert.calledOnce(donateFunction)
//   })
// })

describe('DonateForm', () => {
  it('should render a donation form in a span', () => {
    const wrapper = shallow(React.createElement(DonateForm))
    expect(wrapper.find('#DonateForm')).to.have.length(1)
  })
  const props = {
    received : 300,
    target : 300
  }
  xit('should display Fully Funded when received >= target', () => {
    const wrapper = shallow(React.createElement(DonateForm), props)
    expect(wrapper.find('div.fullyFunded')).to.have.length(1)
    expect(wrapper.find('div.fullyFunded')).to.have.text('Fully Funded')
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

