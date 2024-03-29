import React from "react";

function CircleChart({ percentage, innerText }) {
  const absPercentage = Math.abs(percentage).toString();
  const percentageStr = percentage.toString();
  let classes = "";

  if (percentage < 0) {
    classes = "danger-stroke circle-chart__circle--negative";
  } else if (percentage > 0 && percentage <= 30) {
    classes = "success-stroke";
  } else {
    classes = "success-stroke";
  }

  return (
    <svg
      className="circle-chart"
      viewBox="0 0 33.83098862 33.83098862"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle-chart__background"
        cx="16.9"
        cy="16.9"
        r="15.9"
      />
      <circle
        className={`circle-chart__circle ${classes}`}
        strokeDasharray={`${absPercentage},100`}
        cx="16.9"
        cy="16.9"
        r="15.9"
      />
      <g className="circle-chart__info">
        <text className="circle-chart__percent" x="12.9" y="15.5">
          {percentageStr}%
        </text>
        {innerText && (
          <text className="circle-chart__subline" x="16.91549431" y="22">
            {innerText}
          </text>
        )}
      </g>
    </svg>
  );
}

export default CircleChart;
