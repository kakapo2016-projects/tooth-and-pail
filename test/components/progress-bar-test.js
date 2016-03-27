import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProgressBar from '../../src/components/ProgressBar'

describe('ProgressBar', () => {
  it('should render a progress bar in a span', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.find('#ProgressBar')).to.have.length(1)
  })

  it('has a received prop', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.props().received).to.be.defined
  })
  it('has a target prop', () => {
    const wrapper = shallow(React.createElement(ProgressBar))
    expect(wrapper.props().target).to.be.defined
  })
  it('has a received value of 80', () => {
    const wrapper = shallow(React.createElement(ProgressBar, {received: '80'}))
    expect(wrapper.find('#ProgressBar').first()).to.have.text('$80 out of $ raised!')
  })
  it('has a target value of 5000', () => {
    const wrapper = shallow(React.createElement(ProgressBar, {target: '5000'}))
    expect(wrapper.find('#ProgressBar').first()).to.have.text('$ out of $5000 raised!')
  })
})

// example on testing for progress bar found
// describe('ProgressBar', () => {
//   it('renders into document w/o blowing up', () => {
//     expect(true).to.equal(true);
//     const component = renderIntoDocument(<ProgressBar />);

//     expect(component).to.be.ok;
//   });

//   describe('#defaultLabel', () => {
//     it('outputs expected result', () => {
//       const max = 50;
//       const value = 20;
//       const percent = 40;

//       expect(defaultLabel(percent, max, value)).to.equal('40%');
//     });
//   });

//   describe('#calculatePercentage', () => {
//     it('displays expected result', () => {
//       const max = 80;
//       const min = 20;
//       const value = 60;

//       expect(calculatePercentage(value, min, max)).to.be.closeTo(66.6, .1);
//     });

//     it('correct when value is at max', () => {
//       const max = 1020;
//       const min = 0;
//       const value = 1020;

//       expect(calculatePercentage(value, min, max)).to.equal(100);
//     });
    
//     it('correct when value is at min', () => {
//       const max = 100;
//       const min = 0;
//       const value = 0;

//       expect(calculatePercentage(value, min, max)).to.equal(0);
//     });
//   });
// });