import React from 'react'
import ReactDOM from 'react-dom'
import { Chart } from 'react-google-charts'
import getRequest from '../getRequest.js'
import url from '../../config.js'

console.log("url", url)
export default React.createClass ({
  getInitialState: function() {
    return {
      PieChart: {
        data: [],
        chartType: "",
        options : {}
      }
    }
  },

  componentDidMount: function () {
    getRequest(url + '/recipients', this.dbSetState)
  },

  dbSetState: function (err, data) {
    this.setState({sizedata: data})
    let originalData = this.state.sizedata
    let total = originalData.length
    let completed = 0
    for (let i = 0; i < originalData.length; i++){
      if (originalData[i].received >= originalData[i].target) {
        completed++
      }
    }
    this.setState({'total': total})
    this.setState({'completed': completed})
    this.createChart()
  },

  createChart: function (){
    console.log("createChart")
    let ChartData =  {
      dataArray : [
      ['Treatment Status', 'Number'],
      ['Fully Funded', 0],
      ['In Progress', 0]
      ],
      options : {
        title: "Treatment Statuses",
        legend: { position: "none" },
        slices: {
          0: { color: 'grey' },
          1: { color: '#b71c1c' }
        }
      }
    }
    let inProgress = this.state.total - this.state.completed
    console.log("pie chart data", inProgress)
    ChartData.dataArray[1][1] = this.state.completed
    ChartData.dataArray[2][1] = inProgress
    console.log("pie chart data", inProgress, ChartData)
    var PieChart = {
      // data : ChartData.dataArray,
      // options: ChartData.options,
      chartType: "PieChart",
      div_id: "PieChart"
    }
    PieChart.data = ChartData.dataArray
    PieChart.options = ChartData.options
    (console.log("pie chart", PieChart))
    this.setState({
      'PieChart': PieChart
    })
  },

  render: function () {
    return (
      <div className="Funded">
        <Chart
          chartType={this.state.PieChart.chartType}
          width={"450px"}
          height={"450px"}
          data={this.state.PieChart.data}
          options = {this.state.PieChart.options}
          graph_id={this.state.PieChart.div_id}/>
      </div>
    )
  }
})
