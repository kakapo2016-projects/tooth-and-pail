import chai, { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

import PhotoFooter from '../../src/components/PhotoFooter'

chai.use(chaiEnzyme())


describe('PhotoFooter', () => {

  it('renders a footer', () => {
     const wrapper = shallow(React.createElement(PhotoFooter))
     expect(wrapper.find('div.photoFooter')).to.be.length(1)
  })
  it('has a name prop', () => {
    const wrapper = shallow(React.createElement(PhotoFooter))
    expect(wrapper.props().name).to.be.defined
  })
  it('has corret name passed per the props', () => {
    const wrapper = shallow(React.createElement(PhotoFooter, {name: "Fred"}))
    expect(wrapper.find('.photo-footer-name').first()).to.have.text('Fred')
  })

})
