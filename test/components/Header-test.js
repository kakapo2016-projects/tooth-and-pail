import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('should render a Header', () => {
    const wrapper = shallow(React.createElement(Header))
    expect(wrapper.find('header')).to.have.length(1)
  })
})
