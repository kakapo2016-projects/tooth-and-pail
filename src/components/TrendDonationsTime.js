// CLEANED

import React from 'react'
import ReactDOM from 'react-dom'
import { Chart } from 'react-google-charts'
import getRequest from '../getRequest.js'
import _ from 'lodash'

export default React.createClass ({
  getInitialState: function () {
    return {
      DonationsChart: {
        rows:[],
        columns:[],
        chartType: ""
      }
    }
  },

  componentDidMount: function () {
    getRequest('http://localhost:3000/donations', this.dbSetState)
  },

  dbSetState: function(err, data) {
    this.setState({timedata: data})
    let originalData = this.state.timedata
    let allRows = []
    for (let i = 0; i < originalData.length; i++) {
      let date = originalData[i].createdAt
      date = new Date(date)
      let amount = originalData[i].amount
      let newArr = []
      newArr.push(date, amount)
      allRows.push(newArr)
    }
    function Comparator(a,b){
      if (a[0] < b[0]) return -1
      if (a[0] > b[0]) return 1
      return 0
    }
    allRows.sort(Comparator)
    for (let j = 1; j < allRows.length; j++) {
      allRows[j][1] = allRows[j][1] + allRows[j-1][1]
    }
    this.setState({'allRows': allRows})
    this.createChart()
  },

  createChart: function () {
    let DonationData = {
      columns : [
        { label : "Date of Donation", type: "date" },
        { label : "Cumulative Donations", type: "number" }
      ],
      rows : []
    }
    DonationData.rows = this.state.allRows
    let DonationsChart =  {
      rows : DonationData.rows,
      columns : DonationData.columns,
      options : {title: "Donations", hAxis: {title: 'Date'}, vAxis: {title: 'Cumulative Donations ($)'}, colors:['#b71c1c'] },
      chartType : "LineChart",
      div_id: "Donations"
    }
    this.setState({
      'DonationsChart': DonationsChart
    })
  },

  render: function () {
    return (
      <div className="Donations">
        <Chart
          chartType={this.state.DonationsChart.chartType}
          width={"1000px"}
          height={"500px"}
          rows={this.state.DonationsChart.rows}
          columns={this.state.DonationsChart.columns}
          options={this.state.DonationsChart.options}
          graph_id={this.state.DonationsChart.div_id}/>
      </div>
    )
  }
})
