import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu'

import Sort from '../../src/components/Sort'

// describe('Sort', () => {
//   it('should render a Sort component', () => {
//     const wrapper = mount(React.createElement(Sort))
//     const span = wrapper.find('.sort')
//     expect(span).to.have.length(1)
//   })
// })

// describe('<Sort />', () => {
//   it('should render a Sort component', () => {
//     const item = mockItem();
//     const wrapper = shallow(<Sort item={item} />);
//     expect(wrapper.find(Sort)).to.have.length(items.length);
//   });
//
// })

describe('Sort', () => {
  it('should render a Sort component', () => {
    const wrapper = shallow(React.createElement(Sort))
    expect(wrapper.find(Sort)).to.have.length(1)
  })
})
