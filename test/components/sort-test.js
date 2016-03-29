import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu'

import Sort from '../../src/components/Sort'

describe('Sort', () => {
  it('should render a Sort component', () => {
    const wrapper = mount(React.createElement(Sort))
    const span = wrapper.find('.sort')
    expect(span).to.have.length(1)
  })
})
