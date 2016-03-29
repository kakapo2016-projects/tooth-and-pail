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

// use sinon spy to test to see if the sort function fires the changeFilter 
// function passed doen from App.js


// Test for 'Almost there'
// dummy data for expected: 90% and above
//compare with actual apply filter function
// use mocha and chai

var dummyData = [{received:4900, target:5000},
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
