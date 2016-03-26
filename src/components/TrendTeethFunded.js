import React from 'react'
import ReactDOM from 'react-dom'
import {Chart} from 'react-google-charts'
import getRequest from '../getRequest.js'

export default React.createClass ({

 
  getInitialState: function() {
    return {
      PieChart: {
        data: [],
        chartType: "",
        options : {}
      }
    };
  },
  componentDidMount: function() {
    console.log("Is this the originalData?", this.props)
    getRequest('http://localhost:3000/recipients', this.dbSetState)

  },


  dbSetState: function(err, data) {
    this.setState({sizedata: data})
    var originalData = this.state.sizedata
    var ChartData =  {
     dataArray : [
     ['Treatment Status', 'Number'],
         ['Fully Funded', 0],            // RGB value
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
      };
      var total = originalData.length
      var completed = 0
      for (var i = 0; i < originalData.length; i++){
        if (originalData[i].received >= originalData[i].target){
          completed++
        }
      }
      var inProgress = total - completed
      ChartData.dataArray[1][1] = completed
      ChartData.dataArray[2][1] = inProgress
      var PieChart = {
        data : ChartData.dataArray,
        options: ChartData.options,
        chartType: "PieChart",
        div_id: "PieChart"
      };




      this.setState({
        'PieChart': PieChart
      });

    },

    render: function() {



      return (
        <div className="Examples">
        <Chart chartType={this.state.PieChart.chartType} width={"450px"} height={"450px"} data={this.state.PieChart.data} options = {this.state.PieChart.options} graph_id={this.state.PieChart.div_id} />
        </div>
        )

    }
    


    
  })
