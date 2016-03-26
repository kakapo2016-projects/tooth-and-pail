import React from 'react'
import ReactDOM from 'react-dom'
import {Chart} from 'react-google-charts'

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
    var ChartData =  {
     dataArray : [
     ['Treatment Status', 'Number'],
         ['Fully Funded', 18],            // RGB value
         ['In Progress', 902]
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
