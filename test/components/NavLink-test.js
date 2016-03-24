import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import NavLink from '../../src/components/NavLink'

describe('Template', () => {
  it('should render a link', () => {
    const wrapper = shallow(React.createElement(NavLink))
    expect(wrapper.find('Link')).to.have.length(1)
  })
})
