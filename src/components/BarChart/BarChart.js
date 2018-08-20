import chaosIcon from "../../img/chaosIcon.png";
import exaltIcon from "../../img/exaltIcon.png";
import React from "react";
import './BarChart.css';

//chaos Item = Base Currency
// BaseCurrencyEquivalent = e.g. this item is worth 100 gold.
// AdditionalComparisonEquivalent =
//

class BarChart extends React.Component {

    scaleRange = (valueToScale, maxInRange) => { //Scales Number in Range r1 to Number in Range r2
        let r1 = [0, maxInRange];
        let r2 = [0, 100];
        return (valueToScale - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
    }



    render() {
        let scaleValue = Math.max(...this.props.data.map(item => (1 / item.worth)));
        console.log(scaleValue)
        return (
          <div>
              <div className="BarGraph" id="chart">
                  {this.props.data.map(item =>

                    (<div className={this.scaleRange((1 / item.worth), scaleValue) > 5 ? ("BarGraph-bar") : ("BarGraph-bar-small")}
                          key={item.name}
                          style={{height: this.scaleRange((1 / item.worth), scaleValue)+'%'}}>
                          <div className="BarGraph-bar-title">{item.name} <br/>
                              {item.worth}:1c <br/>
                              <img src={item.icon} alt={item.name}/>
                          </div>

                          <div className="BarGraph-bar-info">10
                              <img src={chaosIcon} width="32" height="32"/>
                              = {Math.round(10 / item.worth)}
                              <img src={item.icon} width="32" height="32"/></div>
                          <div className="BarGraph-bar-info">
                              <button color="info" onClick={() => this.props.removeBar(item.name)}>Remove</button>
                          </div>
                      </div>
                    ))}

              </div>
              <div className="BarGraph" id="underneath">
              </div>
          </div>)
    };
}
export default BarChart;