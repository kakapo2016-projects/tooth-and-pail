import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import GalleryPhoto from '../../src/components/GalleryPhoto'
import PhotoFooter from '../../src/components/PhotoFooter'

describe('<GalleryPhoto />', () => {
  it('renders a gallery photo', () => {
     const wrapper = shallow(React.createElement(GalleryPhoto))
     expect(wrapper.find('div.galleryPhoto')).to.be.length(1)
  })
  it('contains a photoFooter component', () => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.find(PhotoFooter)).to.be.length(1)
  })
  it(' has a name property',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })
})
