import React from 'react'
import ReactDOM from 'react-dom'
import {Chart} from 'react-google-charts'

export default React.createClass ({


  getInitialState: function() {
    return {
      DonationsChart: {
        rows:[],
        columns:[],
        chartType: ""
      }
    }},

    componentDidMount: function() {
      var DonationData = {
        columns : [
        {
          label : "Date of Donation",
          type: "date"
        },
        {
          label : "Cumulative Donations",
          type: "number"
        }
        ],
        rows : []
      };
      var originalData = [{"donationID":"d1","donorID":"1111","recipientID":"1","amount":10,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d5","donorID":"2222","recipientID":"5","amount":50,"createdAt":"2016-03-26 06:05:51"},{"donationID":"d2","donorID":"2222","recipientID":"2","amount":20,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d3","donorID":"3333","recipientID":"3","amount":30,"createdAt":"2016-03-26 06:05:50"},{"donationID":"d4","donorID":"1111","recipientID":"4","amount":40,"createdAt":"2016-03-26 06:05:51"}]
      var allRows = []
      for (var i=0; i<originalData.length; i++){
        var date = originalData[i].createdAt
        date = new Date(date)
        console.log("What about this?", typeof date)
        console.log("all the rows", date, typeof date)
        var amount = originalData[i].amount        
        var newArr = []
        newArr.push(date, amount)
        console.log("Is this a date?", newArr[0], typeof newArr[0] )
        allRows.push(newArr)
      }
      function Comparator(a,b){
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      }
      allRows.sort(Comparator)
      console.log("Are these sorted?", allRows)
      for (var j=1; j<allRows.length; j++){
        allRows[j][1] = allRows[j][1] + allRows[j-1][1]
      }
      console.log("Are these accumulating?", allRows, typeof allRows[0][0])
      DonationData.rows = allRows

      var DonationsChart =  {
        rows : DonationData.rows,
        columns : DonationData.columns,
        options : {title: "Donations", hAxis: {title: 'Date'}, vAxis: {title: 'Cumulative Donations ($)'}, colors:['#b71c1c'] },
        chartType : "LineChart",
        div_id: "Donations"

      };




      this.setState({
        'DonationsChart': DonationsChart
      });

    },

    render: function() {

      return (
        <div className="Examples">
        <Chart chartType={this.state.DonationsChart.chartType} width={"1000px"} height={"500px"} rows={this.state.DonationsChart.rows} columns={this.state.DonationsChart.columns} options = {this.state.DonationsChart.options} graph_id={this.state.DonationsChart.div_id}  />
        </div>
        );
    }






  })

