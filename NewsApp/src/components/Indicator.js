import React from 'react';
import './Indicator.css';

function Indicator (props) {
  var indicatorValue = props.indicator;
  var url = props.url;

  var indicatorCss = ''
    if (indicatorValue < 0) {
      indicatorCss += "negative";
    } else if (indicatorValue === 0) {
      indicatorCss += "neutral";
    } else {
      indicatorCss += "positive";
    }

    var indicatorProperty = `btnIndicator ${indicatorCss} btn-block`

    function readMore() {
      window.open(url,'_blank')
    }
  return (
    <div>
      <a id='readMore' className={indicatorProperty} href={props.url} target='_blank' onClick={readMore} ><h4>Read More...</h4></a>
    </div>

  );
}



export default Indicator;
