import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Gallery from '../../src/components/Gallery'
import GalleryPhoto from '../../src/components/GalleryPhoto'

describe('Gallery', () => {
  const props = [
    { name : "John",
      imgurl : "http://john.jpg",
      target : 1000
      received : 0,
      recipientid : 1111
    },
    { name : "Sue",
      imgurl : "http://sue.jpg",
      target :  3000,
      received : 0,
      recipientid : 2222
    },
    { name : "Anne",
      imgurl : "http://anne.jpg",
      target : 4000,
      received : 100,
      recipientid : 3333
    }
  ]
  it('renders a gallery', () => {
     const wrapper = shallow(React.createElement(Gallery))
     expect(wrapper.find('div.gallery')).to.be.length(1)
  })
  it('renders a galleryPhoto', () => {
     const wrapper = shallow(React.createElement(Gallery), props)
     expect(wrapper.find('div.galleryPhoto')).to.be.length(3)
  })
  // it('renders a galleryPhoto', () => {
  //    const wrapper = shallow(React.createElement(Gallery))
  //    expect(wrapper.find('div.galleryPhoto')).to.be.length(1)
  // })
})
