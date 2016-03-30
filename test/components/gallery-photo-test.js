import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme())

import GalleryPhoto from '../../src/components/GalleryPhoto'
import PhotoFooter from '../../src/components/PhotoFooter'

describe('GalleryPhoto', () => {
  it('renders a gallery photo', () => {
     const wrapper = shallow(React.createElement(GalleryPhoto))
     expect(wrapper.find('div.galleryPhoto')).to.be.length(1)
  })

  it('contains a photoFooter component', () => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.find(PhotoFooter)).to.be.length(1)
  })

  it('has a name property',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })

  it('has to be clickable',() => {
    const wrapper = mount(React.createElement(GalleryPhoto))
    let hasClicked = false
    let galleryClick = () => hasClicked = true
  })

  it('has to send a query to the database',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })

  it('has to pull the query from the database',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })
})
