import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const TreeStatistics = () => {
  const treePlantingData = [
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4 text-center">Tree Planting <span className='text-green-900'>Statistics</span></h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-1 md:order-1">
            <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick}`}
                label="Trees Planted"
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                  axisLabel: { fontSize: 12, padding: 40, fill: '#718096' },
                }}
              />
              <VictoryAxis
                tickFormat={formatYearTick}
                label="Year"
                style={{
                  axis: { stroke: '#718096' },
                  tickLabels: { fontSize: 10, fill: '#718096' },
                  axisLabel: { fontSize: 12, padding: 30, fill: '#718096' },
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
          <div className="md:w-1/2 ml-0 md:ml-10 order-2 md:order-2">
            <p className="text-lg text-gray-700 mt-6 md:mt-0">
              Welcome to our tree planting journey! This graph showcases our impressive tree planting achievements over the years, highlighting our commitment to environmental sustainability. From the year 2019 to 2022, our dedicated efforts have resulted in the planting of a remarkable number of trees. In 2019, we planted 1,000 trees, and our dedication only grew from there. The following year, 2020, saw a significant leap with 2,500 trees planted. Undeterred by challenges, in 2021, we furthered our impact by planting 4,000 trees. Our proudest achievement yet was in 2022, where a remarkable 6,000 trees found their home in the earth. These statistics represent more than just numbers; they symbolize our shared commitment to preserving and enriching the environment. As we move forward, we remain steadfast in our mission, continuing to plant and nurture trees for a greener and healthier planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeStatistics;
