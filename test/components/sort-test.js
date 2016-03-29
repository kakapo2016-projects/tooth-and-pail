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
    // expect(wrapper.contains(<DropDownMenu/>)).to.have.length(1)
  })
})

// Test for 'Almost there'
// dummy data for expected: 90% and above
//compare with actual apply filter function
// use mocha and chai

var dummyData = [
  {received:4900, target:5000},
  {received:10, target:5000},
  {received:500, target:5000},
  {received:4000, target:5000},
  {received:6500, target:6700},
  {received:300, target:10000},
]

var expectedData = [{received:4900, target:5000},
                    {received:6500, target:6700}
                    ]

var realData = dummyData.filter(function(x) {
  var percentageFunded = ((x.received/x.target)*100)
  return percentageFunded >= 90
  });

// var dummyData =
