import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import HBar from '../../src/components/HBar'

describe('HBar', () => {
  it('renders into document without blowing up', () => {
    const wrapper = mount(<HBar />);
    expect(wrapper('HBar')).to.have.length(1)
	});

  xit('should display 1st bar', () => {
    const wrapper = mount(React.createElement(<HBar />))
    expect(wrapper.find('HBar')).to.be.instanceof(this.props.received)
  });

  xit('should display correct number of bars', () => {
    expect(this.prop.data).to.be(true)
  })

  xit('should display a bar showing how much has been received', () => {
    const wrapper = shallow(React.createElement(<HBar />))
    expect(wrapper).to.have.state(this.props)
  });

  xit('should display a bar showing target amount', () => {
    expect(this.props.data[1].v).to.have.ref('TARGET')
  });

  xit('should find the data', () => {
    expect(data.length).to.equal(2)
  })
})
