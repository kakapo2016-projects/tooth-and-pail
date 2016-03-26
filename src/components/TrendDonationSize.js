import React from 'react'
import ReactDOM from 'react-dom'
import {Chart} from 'react-google-charts'

export default React.createClass ({

  getInitialState: function() {
    return {
      ColumnChart: {
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
          bar: {groupWidth: "300%"},
          legend: { position: "none" },
        }
      };
      var ColumnChart = {
        data : ChartData.dataArray,
        options: ChartData.options,
        chartType: "ColumnChart",
        div_id: "ColumnChart"
      };




      this.setState({
        'ColumnChart': ColumnChart
      });

    },

    render: function() {



      return (

      <div className="Examples">
      <Chart chartType={this.state.ColumnChart.chartType} width={"1000px"} height={"600px"} data={this.state.ColumnChart.data} options = {this.state.ColumnChart.options} graph_id={this.state.ColumnChart.div_id} />
      </div>
        )

    }
  


  
})
