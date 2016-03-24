import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import PhotoFooter from '../../src/components/PhotoFooter'

describe('<PhotoFooter />', () => {
  it('renders a footer', () => {
     const wrapper = shallow(React.createElement(PhotoFooter))
     expect(wrapper.find('div.photoFooter')).to.be.length(1)
  })
  it('has a name prop', () => {
    const wrapper = shallow(React.createElement(PhotoFooter))
    expect(wrapper.props().name).to.be.defined
  })
  xit('the text contains the name', () => {
    const wrapper = shallow(React.createElement(PhotoFooter))
    // expect(wrapper.find('div.photoFooter')).to.
  })
})
