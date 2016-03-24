import chai, { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

import PhotoFooter from '../../src/components/PhotoFooter'

chai.use(chaiEnzyme())


describe('<PhotoFooter />', () => {

  it('renders a footer', () => {
     const wrapper = shallow(React.createElement(PhotoFooter))
     expect(wrapper.find('div.photoFooter')).to.be.length(1)
  })
  it('has a name prop', () => {
    const wrapper = shallow(React.createElement(PhotoFooter))
    expect(wrapper.props().name).to.be.defined
  })
  xit('has a name of fred', () => {
    const wrapper = shallow(React.createElement(PhotoFooter, {name: "fred"}))
    // console.log("wrapper props", wrapper.props())
    expect(wrapper.find('div.photoFooter').first()).to.have.text('fred')
  })

})
