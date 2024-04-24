






import React from 'react'

function AddEmployee() {
  return (
    <div>index</div>
  )
}

export default AddEmployee







// import * as React from "react";
// import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Legend3D, Category3D, Tooltip3D, ColumnSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';

// import './index.css'

// export let pointRender = (args) => {
//     let selectedTheme = window.location.hash.split('/')[1]; 
//     selectedTheme = selectedTheme ? selectedTheme : 'Material';
// };

// export let data1 = [{ x: "Jan", y: 137429 }, { x: "Feb", y: 80308 }, { x: "Mar", y: 76418 }, { x:  "Apr", y: 52849 }, { x: "May", y: 47234 }, { x: "Jun", y: 31041 }, { x: "Jul", y: 22449 }, { x:"Aug", y: 18733 },{ x:"Sept", y: 18733 },{ x:"Oct", y: 18733 },{ x:"Nov", y: 18733 },{ x:"Dec", y: 18733 }];

// const SAMPLE_CSS = `
//     .control-fluid {
//         padding: 0px !important;
//     }`;

// const AddEmployee = () => {
//     const onChartLoad = (args) => {
//         let chart = document.getElementById('charts');
//         chart.setAttribute('title', '');
//     };

//     const labelRender = (args) => {
//         if (args.axis.name === 'primaryYAxis') {
//             let value = Number(args.text) / 1000;
//             args.text = (typeof value === 'number' && !isNaN(value)) ? String(value) + 'k' : args.text;
//         }
//     };

//     const load = (args) => {
//         let selectedTheme = window.location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
//     };

//     return (
//         <div className='control-pane container-Element-graph'>
//             <style>{SAMPLE_CSS}</style>
//             <div className='control-section'>
//                 <Chart3DComponent id='charts' style={{ textAlign: "center" }} axisLabelRender={labelRender.bind(this)} legendSettings={{ enableHighlight: true, visible: false }} primaryXAxis={{
//                     valueType: 'Category',
//                     labelRotation: -45,
//                     labelPlacement: 'BetweenTicks'
//                 }} wallColor='transparent' height="400" pointRender={pointRender.bind(this)} primaryYAxis={{
//                     maximum: 150000, interval: 30000
//                 }} load={load.bind(this)} enableRotation={true} rotation={7} tilt={10} depth={100} tooltip={{ enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' }} width={Browser.isDevice ? '100%' : '75%'} title='Top Selling Electric Cars in China' loaded={onChartLoad.bind(this)}>
//                     <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, Category3D, Highlight3D]}/>
//                     <Chart3DSeriesCollectionDirective>
//                         <Chart3DSeriesDirective dataSource={data1} xName='x' columnSpacing={0.1} yName='y' type='Column'>
//                         </Chart3DSeriesDirective>
//                     </Chart3DSeriesCollectionDirective>
//                 </Chart3DComponent>
//             </div>
//         </div>
//     );
// };

// export default AddEmployee;
