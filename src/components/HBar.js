// CLEANED

import React from 'react'
import ProgressBar from './ProgressBar'
import ReactCSS from 'reactcss'
import d3 from 'd3'

let Bar = React.createClass({
  getInitialState: function () {
    var shade = this.props.flash === "true" ? 0.7 : 0
    return { shade }
  },

  getDefaultProps: function () {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  componentDidMount: function () {
    setTimeout(() => {
      if (this.isMounted()) this.setState({ shade: 0 })
    }, 150)
  },

  render: function () {
    let style = this.props.fillColor ?
      { fill: shadeColor(this.props.fillColor, this.state.shade) } : {}
    return (
      <rect
        className={this.props.focused ? 'focused' : ''}
        width={this.props.width} height={this.props.height}
        y={this.props.offset} x={this.props.x}
        onMouseOver={this.props.over}
        onMouseOut={this.props.out}
        style={style}
      />
    )
  }
})

let HBar = React.createClass({
  getDefaultProps: function () {
    return {
      width: 900,
      height: 100,
      data: [
        {v: 10, label: 'RECEIVED'},
        {v: 30, label: 'TARGET'}
      ]
    }
  },

  getInitialState: function () {
    return {
      hovered: null
    }
  },

  render: function () {
    let props = this.props
    let hbar = this

    //Save space for labels before the chart
    this.xBase = this.props.textPosition === 'fitted' ? 0 : this.props.width / 8

    hbar.scales()
    let data = this.props.data

    if (this.props.sort === 'ascending') data.sort(function (p, q) {return p.v - q.v} )
    if (this.props.sort === 'descending') data.sort(function (p, q) {return q.v - p.v} )

    // { this.props.data.map(x => console.log( 'key', x.v, x.label )) }
    this.props.data[0].v = this.props.received
    this.props.data[1].v = this.props.target

    return (
      <svg className="HBar" width={this.props.width} height={this.props.height}>
        <g>
          {data.map((point, i) =>
            <Bar key={point.label + i}
              width={hbar.xScale(point.v)} height={hbar.yScale.rangeBand()}
              x={hbar.xBase}
              offset={hbar.yScale(i)}
              over={hbar.over.bind(hbar, i)}
              out={hbar.out}
              focused={hbar.state.hovered == i || hbar.props.focus - 1 == i}
              fillColor={hbar.props.barColor}
              flash={hbar.props.flash}
            />
          )}
        </g>
        <line className="axis"
          x1={this.xBase} y1="0" x2={this.xBase} y2={this.yScale.rangeExtent()[1]}
          style={{
            strokeWidth: (this.props.width * 0.002) + 'px',
            visibility: this.props.axis === 'false' ? 'hidden' : 'visible'
          }}
        />
        { this.drawTexts() }
      </svg>
    )
  },

  drawTexts: function () {
    let texts = []
    // One specific bar should have its label and value
    if (this.props.focus != undefined){
      let i = +this.props.focus - 1
      texts.push(this.drawText(i, this.props.data[i]))
      if (this.state.hovered != undefined && this.state.hovered != i) {
        texts.push(this.drawText(+this.state.hovered, this.props.data[i], 'hover'))
      }
    } else { // All bars should have
      texts = texts.concat(this.props.data.map((point, i) => {
        return this.drawText(i, point)
      }))
    }

    return (
      <g>
        {texts}
      </g>
    )
  },

  drawText: function(i, point, type){
    let v = point.v

    if (this.props.formatter){
      v = this.props.formatter(v)
    }

    let x = this.xScale(point.v) + this.xBase,
        y = this.yScale(i) + this.yScale.rangeBand() / 2,
        style = {fontSize: this.yScale.rangeBand() * 0.6 + 'px'},
        margin = this.props.width * 0.03,
        className = `texts ${type || ''}`

    if (this.props.textPosition === 'fitted'){
      let wide = x > this.props.width / 2

      return (
        <g key={point.label + i} className={className} style={style}>
          <text className="inside"
            y={y}
            x={x - margin}
            textAnchor="end" >
            {wide ? point.label : ''}
          </text>
          <text className="right"
            y={y}
            x={x + margin}
            textAnchor="start" >
            {wide ? v : point.label + ', ' + v}
          </text>
        </g>
      )

    } else {
      return (
        <g key={point.label + i} className={className} style={style}>
          <text className="left"
            y={y}
            x={this.xBase - margin}
            textAnchor="end" >
            {point.label}
          </text>
          <text className="right"
            y={y}
            x={x + margin}
            textAnchor="start" >
            {v}
          </text>
        </g>
      )
    }
  },

  over: function (i) {
    this.setState({
      hovered: i
    })
  },

  out: function () {
    this.setState({
      hovered: null
    })
  },

  scales: function () {
    let w = this.props.width
    this.xScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data, function(p){return p.v})])
      .range([0, (w - this.xBase) * 0.8])

    this.yScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeBands([0, this.props.height], 1/3, 1/2)
  }
})

/* Helper */
function shadeColor (color, percent) {
    let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1)
}

module.exports = HBar
