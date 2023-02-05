import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  size: {width:number,height:number};
  options?: any
  type:"line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar";
  series: Array<{name:string,data:Array<any>}>;
};

const CMChart = ({  size, type, series, options }: Props) => {
  
  return (
    <>
      <Chart
        options={options}
        series={series}
        type={type}
        height={size.height}
        width={size.width}
      />
    </>
  );
};

export default React.memo(CMChart);
