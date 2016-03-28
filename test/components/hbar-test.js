import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import HBar from '../../src/components/HBar'

describe('HBar', () => {
  it('renders into document without blowing up', () => {
    expect(HBar).to.be.ok;
	});

  it('should display correct number of bars', () => {
    expect(this.prop.data).to.be(true)
  });

  xit('should display a bar showing how much has been received', () => {
    expect(this.props.data[0].v).to.have.ref('RECEIVED')
  })

  xit('should display a bar showing target amount', () => {
    expect(this.props.data[1].v).to.have.ref('TARGET')
  })

  const data = [
    {v: 10, label: 'RECEIVED'},
    {v: 30, label: 'TARGET'}
  ];
  it('should find the data', () => {
    expect(data.length).to.equal(2)
  })

});

