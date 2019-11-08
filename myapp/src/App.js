import React,{Component} from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
// import echarts from 'echarts' 
// import echarts from 'echarts/lib/echarts'
// eslint-disable-next-line
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React */}
//         {/* </a> */}
//         <div>sadfsafd</div>
//       </header>
//     </div>
//   );
// }
class App extends Component{

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // var myChart1 = echarts.init(document.getElementById('main1'));
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  //   myChart1.setOption({
  //     title: { text: 'ECharts 入门示例' },
  //     tooltip: {},
  //     xAxis: {
  //         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","毛巾"]
  //     },
  //     yAxis: {},
  //     series: [{
  //         name: '销量',
  //         type: 'line',
  //         data: [5, 20, 36, 10, 10, 20,10]
  //     }]
  // });
  echarts.registerTheme('my_theme', {
    backgroundColor: '#f4cccc'
  });
}

getOption = ()=>{
  let option = {
      title: {
          text: '用户订单',
          x: 'center'
      },
      tooltip : {
          trigger: 'item',
          //提示框浮层内容格式器，支持字符串模板和回调函数形式。
          formatter: "{a} <br/>{b} : {c} ({d}%)" 
      },
      legend: {
          orient: 'vertical',
          top: 20,
          right: 5,
          data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
      },
      series : [
          {
              name:'订单量',
              type:'pie',
              data:[
                  {value:1000, name:'星期一'},
                  {value:1500, name:'星期二'},
                  {value:2000, name:'星期三'},
                  {value:2500, name:'星期四'},
                  {value:3000, name:'星期五'},
                  {value:2300, name:'星期六'},
                  {value:1600, name:'星期日'}
              ],
          }
      ]
  }
  return option;
}

  render(){
    return(
      <div>
        <div id="main" style={{ width: "auto", height: 400 }}></div>
        <ReactEcharts option={this.getOption()} style={{height: '300px', width: '100%'}} className='echarts-for-echarts' theme='my_theme' />
      </div>
    )
  }
}


export default App;
