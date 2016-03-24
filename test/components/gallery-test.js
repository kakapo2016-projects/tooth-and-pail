import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Gallery from '../../src/components/Gallery'
import GalleryPhoto from '../../src/components/GalleryPhoto'

describe('Gallery', () => {
  it('renders a gallery', () => {
     const wrapper = shallow(React.createElement(Gallery))
     expect(wrapper.find('div.gallery')).to.be.length(1)
  })
  it('renders a galleryPhoto', () => {
     const wrapper = shallow(React.createElement(Gallery))
     expect(wrapper.find('div.galleryPhoto')).to.be.length(1)
  })
})
