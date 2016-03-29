// CLEANED

import React from 'react'
import { Chart } from 'react-google-charts'
import getRequest from '../getRequest.js'

export default React.createClass ({
  getInitialState: function () {
    return {
      ColumnChart: {
        data: [],
        chartType: "",
        options : {}
      }
    }
  },

  componentDidMount: function () {
    getRequest('http://localhost:3000/donations', this.dbSetState)
  },

  dbSetState: function (err, data) {
    // what does this do? 
    // it is very mysterious 
    // and long...
    // refactor into small functions
    this.setState({sizedata: data})
    let originalData = this.state.sizedata
    let u10 = 0
    let ten = 0
    let twentyfive = 0
    let fifty = 0
    let hundred = 0
    let twofifty = 0
    for (let i = 0; i < originalData.length; i++) {
      if (originalData[i].amount < 10) {
        u10++
      } else if (originalData[i].amount < 26) {
        ten++
      } else if (originalData[i].amount < 51) {
        twentyfive++
      } else if (originalData[i].amount < 101) {
        fifty++
      } else if (originalData[i].amount < 251) {
        hundred++
      } else {
        twofifty++
      }
    }
    let u10arr = ['Under $10', u10, '#b71c1c']
    let tenarr = ['$10-25', ten, '#b71c1c']
    let twentyfivearr = ['$25-50', twentyfive, '#b71c1c']
    let fiftyarr = ['$50-100', fifty, '#b71c1c']
    let hundredarr = ['$100-250', hundred, '#b71c1c']
    let twofiftyarr = ['more than $250', twofifty, '#b71c1c']
    let allData = []

    allData.push([
      'Amount',
      'Number of Donations',
      { role: 'style' }],
      u10arr,
      tenarr,
      twentyfivearr,
      fiftyarr,
      hundredarr,
      twofiftyarr
    )

    let ChartData = {}
    ChartData.dataArray = allData
    ChartData.options = {title: "Donations", legend: { position: "none" }}
    let ColumnChart = {
      data : ChartData.dataArray,
      options: ChartData.options,
      chartType: "ColumnChart",
      div_id: "ColumnChart"
    }
    this.setState({
      'ColumnChart': ColumnChart
    })
  },

  render: function () {
    return (
      <div className="Size">
        <Chart
          chartType={this.state.ColumnChart.chartType}
          width={"1000px"}
          height={"500px"}
          data={this.state.ColumnChart.data}
          options = {this.state.ColumnChart.options}
          graph_id={this.state.ColumnChart.div_id}/>
      </div>
    )
  }
})
