import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Gallery from '../../src/components/Gallery'
import GalleryPhoto from '../../src/components/GalleryPhoto'

describe('Gallery', () => {
  const props = { gallery :[
    { name : "John",
      imgurl : "http://john.jpg",
      target : 1000,
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
  ]}

  var dummyData = [
    {received:4900, target:5000},
    {received:10, target:5000},
    {received:500, target:5000},
    {received:4000, target:5000},
    {received:6500, target:6700},
    {received:300, target:10000},
  ]

  var expectedData = [
    {received:4900, target:5000},
    {received:6500, target:6700}
  ]

  var realData = dummyData.filter(function(x) {
    var percentageFunded = ((x.received/x.target)*100)
    return percentageFunded >= 90
  })

  let props2 = {
    gallery: dummyData,
    galleryFilter: {value: 2, primaryText: "Almost There"}
  }

  it('actual percentage is equal to expected percentage', () => {
     const wrapper = mount(React.createElement(Gallery, props2))
     expect(wrapper.find(GalleryPhoto)).to.have.length(2)
  })
})
