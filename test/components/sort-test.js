import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Sort from '../../src/components/Sort'

describe('Sort', () => {
  it('should render a Sort component', () => {
    const wrapper = shallow(React.createElement(Sort))
    expect(wrapper.find('.sort')).to.have.length(1)
    expect(wrapper.find('DropDownMenu')).to.have.length(1)
  })
})

// Test for 'Almost there'
// dummy data for expected: 90% and above
//compare with actual  apply filter function
// use mocha and chai

var dummyData = 
