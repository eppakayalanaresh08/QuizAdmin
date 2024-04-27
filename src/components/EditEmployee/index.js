// import React from 'react'

// function EditEmployee() {
//   return (
//     <div>index</div>
//   )
// }

// export default EditEmployee










// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// // var CanvasJSReact = require('@canvasjs/react-charts');
 
// const CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class EditEmployee extends Component {
// 	render() {
// 		const options = {
// 			title: {
// 				text: "Basic Column Chart"
// 			},
// 			data: [
// 			{
// 				// Change type to "doughnut", "line", "splineArea", etc.
// 				type: "column",
// 				dataPoints: [
// 					{ label: "Apple",  y: 10  },
// 					{ label: "Orange", y: 15  },
// 					{ label: "Banana", y: 25  },
// 					{ label: "Mango",  y: 30  },
// 					{ label: "Grape",  y: 28  }
// 				]
// 			}
// 			]
// 		}

// 		return (
// 		<div className='continerChart'>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
// export default EditEmployee;      


import React from 'react'

import {BarChart,ResponsiveContainer,Bar} from 'recharts'



// const data = [
//   {
//     name: 'Jan',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Feb',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'March',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Ap',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Jun',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'July',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Aug',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function EditEmployee() {
  return (
    // <div>index</div>
    <ResponsiveContainer>
      <BarChart>
        <Bar>
 
        </Bar>
      </BarChart>

      </ResponsiveContainer>
  )
}

export default EditEmployee