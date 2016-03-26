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
      var originalData = [{"recipientID":"1","name":"Jeff","imgURL":"https://i.ytimg.com/vi/OzVaVVjnjEI/maxresdefault.jpg","received":0,"target":1000,"sobStory":"Rah rah rah","createdAt":"2016-03-26 06:05:52"},{"recipientID":"2","name":"Martin","imgURL":"http://1.bp.blogspot.com/-bi3Zn6jq4MM/TwEfw9ZKRXI/AAAAAAAAB1M/jG66N193504/s1600/Funny+Teeth5.JPG","received":0,"target":3000,"sobStory":"bad life dah","createdAt":"2016-03-26 06:05:52"},{"recipientID":"3","name":"Anne","imgURL":"http://i.dailymail.co.uk/i/pix/2015/12/17/23/2F78BF0F00000578-0-image-m-11_1450396660957.jpg","received":100,"target":4000,"sobStory":"I feel sorry for myself","createdAt":"2016-03-26 06:05:52"},{"recipientID":"4","name":"Jaws","imgURL":"http://i.telegraph.co.uk/multimedia/archive/02910/James-Bond-jaws_2910844b.jpg","received":4000,"target":4000,"sobStory":"I got hit by a bus","createdAt":"2016-03-26 06:05:52"},{"recipientID":"5","name":"Logan","imgURL":"http://id3442.securedata.net/cosmetic-dentistry/images/tetracycline%20teeth%20before%20veneers.jpg","received":100,"target":4000,"sobStory":"blah lbha blah","createdAt":"2016-03-26 06:05:52"},{"recipientID":"6","name":"Carol","imgURL":"http://www.healthable.org/wp-content/uploads/2013/11/Teeth-Discoloration.jpg","received":100,"target":4000,"sobStory":"blah lbha blah","createdAt":"2016-03-26 06:05:52"}]
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
