import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';

const TreeStatistics = () => {
  const treePlantingData = [
    { year: 2019, treesPlanted: 1000 },
    { year: 2020, treesPlanted: 2500 },
    { year: 2021, treesPlanted: 4000 },
    { year: 2022, treesPlanted: 6000 },
  ];

  const graphData = [
    { year: 2019, treesPlanted: 1000 },
    { year: 2020, treesPlanted: 2500 },
    { year: 2021, treesPlanted: 4000 },
    { year: 2022, treesPlanted: 6000 },
  ];

  const formatYearTick = (tick) => {
    return tick.toString();
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl text-gray-800 font-semibold mt-4 text-center">Tree Planting <span className='text-green-900'>Statistics</span></h2>
        <div className="flex">
          <div className="w-1/2">
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={20}
            >
              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick}`}
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                }}
              />
              <VictoryAxis
                tickFormat={formatYearTick}
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                }}
              />
              <VictoryBar
                data={treePlantingData}
                x="year"
                y="treesPlanted"
                style={{
                  data: { fill: '#014737' },
                }}
              />
            </VictoryChart>
          </div>
          <div className="w-1/2 ml-6">
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={20}
            >
              <VictoryAxis
                tickFormat={formatYearTick}
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick}`}
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                }}
              />
              <VictoryLine
                data={graphData}
                x="year"
                y="treesPlanted"
                style={{
                  data: { stroke: '#014737' },
                }}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeStatistics;