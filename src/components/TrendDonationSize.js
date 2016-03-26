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
    // var ChartData =  {
    //  dataArray : [
    //  ['Amount', 'Number of Donations', ],
    //      ['Under $10', 432, '#b71c1c'],            // RGB value
    //      ['$10-25', 5404, '#b71c1c'],            // English color name
    //      ['$25-50', 2342, '#b71c1c'],
    //      ['$50-100', 802, '#b71c1c' ], // CSS-style declaration
    //      ['$100-250', 94, '#b71c1c' ],
    //      ['more than $250', 8, '#b71c1c' ]
    //      ],
    //      options : {
    //       title: "Donations",

    //       legend: { position: "none" },
    //     }
    //   };
      var originalData = [{"donationID":"d1","donorID":"1111","recipientID":"1","amount":10,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d2","donorID":"2222","recipientID":"2","amount":20,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d3","donorID":"3333","recipientID":"3","amount":30,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d4","donorID":"1111","recipientID":"4","amount":40,"createdAt":"2016-03-26 06:05:51"},{"donationID":"d5","donorID":"2222","recipientID":"5","amount":50,"createdAt":"2016-03-26 06:05:51"}]
      // var originalData = this.props.sizedata
      console.log(originalData)
      var u10 = 0
      var ten = 0
      var twentyfive = 0
      var fifty = 0
      var hundred = 0
      var twofifty = 0
      for (var i=0; i < originalData.length; i++) {
        console.log(typeof originalData[i].amount)
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
      console.log("u10", u10, "ten", ten, twentyfive, fifty)
      var u10arr = ['Under $10', u10, '#b71c1c']
      var tenarr = ['$10-25', ten, '#b71c1c']
      var twentyfivearr = ['$25-50', twentyfive, '#b71c1c']
      var fiftyarr = ['$50-100', fifty, '#b71c1c']
      var hundredarr = ['$100-250', hundred, '#b71c1c']
      var twofiftyarr = ['more than $250', twofifty, '#b71c1c']
      var allData = []
      allData.push(['Amount', 'Number of Donations', { role: 'style' }], u10arr, tenarr, twentyfivearr, fiftyarr, hundredarr, twofiftyarr)
      console.log(allData)
      var ChartData = {}
      ChartData.dataArray = allData
      ChartData.options = {title: "Donations", legend: { position: "none" }}
      console.log("ChartData", ChartData)

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
      <Chart chartType={this.state.ColumnChart.chartType} width={"1000px"} height={"500px"} data={this.state.ColumnChart.data} options = {this.state.ColumnChart.options} graph_id={this.state.ColumnChart.div_id} />
      </div>
        )

    }
  


  
})
