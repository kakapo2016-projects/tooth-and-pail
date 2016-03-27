import chai, { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import ProfilePhoto from '../../src/components/ProfilePhoto'

describe('ProfilePhoto', () => {
  it('renders a profile photo', () => {
     const wrapper = shallow(React.createElement(ProfilePhoto))
     expect(wrapper.find('span.profilePhoto')).to.be.length(1)
  })

  it('has an image', () => {
    const wrapper = mount(<ProfilePhoto />)
    expect(wrapper.find('img')).to.be.length(1)
  })

  it('has an image url property', () => {
    let props = {imgurl: 'imgurl'}
    const wrapper = mount(React.createElement(ProfilePhoto, props))
    expect(wrapper).to.have.prop('imgurl')
  })
})
