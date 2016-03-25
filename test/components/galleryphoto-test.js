import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme())

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

  it('has a name property',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })

  xit('has a photo in the gallery photo',() => {
    const wrapper = mount(React.createElement(GalleryPhoto), {imageurl: 'https://40.media.tumblr.com/72d44ec8d7decd6eb2b931b6055c336b/tumblr_n1sgn0Kc6s1shf8zxo2_400.jpg'})
    console.log("---->", wrapper.props)
    expect(wrapper.contains([<img src='https://40.media.tumblr.com/72d44ec8d7decd6eb2b931b6055c336b/tumblr_n1sgn0Kc6s1shf8zxo2_400.jpg' />]).to.be.length(1))
  })

  it('has to render a link to each profile photo',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.find('src')).to.match('url')
  })

  it('has to be clickable',() => {
    const wrapper = mount(React.createElement(GalleryPhoto))
    let hasClicked = false
    let galleryClick = () => hasClicked = true
  })

  xit('has to send a query to the database',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })

  xit('has to pull the query from the database',() => {
    const wrapper = shallow(React.createElement(GalleryPhoto))
    expect(wrapper.props().name).to.be.defined
  })
})


