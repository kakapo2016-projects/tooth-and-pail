import React from 'react'
import ReactDOM from 'react-dom'
import {Chart} from 'react-google-charts'

export default React.createClass ({

  getInitialState: function() {
    return {
      BarChart: {
        data: [],
        chartType: "",
        options : {}
      }
    };
  },
  componentDidMount: function() {
    var ChartData =  {
     dataArray : [
     ['Amount', 'Number of Donations', { role: 'style' }],
         ['Under $10', 432, '#b87333'],            // RGB value
         ['$10-25', 5404, 'silver'],            // English color name
         ['$25-50', 2342, 'gold'],
         ['$50-100', 802, 'color: #e5e4e2' ], // CSS-style declaration
         ['$100-250', 94, 'color: #e5e4e2' ],
         ['more than $250', 8, 'color: #e5e4e2' ]
         ],
         options : {
          title: "Donations",
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        }
      };
      var BarChart = {
        data : ChartData.dataArray,
        options: ChartData.options,
        chartType: "BarChart",
        div_id: "BarChart"
      };




      this.setState({
        'BarChart': BarChart
      });

    },

    render: function() {



      return (

              <div className="Examples">
      <h3> Bar Chart </h3>
      <Chart chartType={this.state.BarChart.chartType} width={"500px"} height={"300px"} data={this.state.BarChart.data} options = {this.state.BarChart.options} graph_id={this.state.BarChart.div_id} />
      </div>
        )

    }
  


  
})
