import { ResponsiveLine } from '@nivo/line';


import HandleData from '../../../../core/data/api/handleData';
import { areaJSON } from '../../../../core/data/dummy';
import { linearGradientDef } from '@nivo/core';
import TooltipComponent from './tooltip';

const Chart = (): JSX.Element => {
    const dataOjb = HandleData(areaJSON);
    const yScaleValue = [ 0, 1000, 2000, 3000, 4000, 5000, 6000 ];

    return(
            <ResponsiveLine
                data={dataOjb}
                colors={dataOjb[0].color}
                margin={{ top: 50, right: 30, bottom: 60, left: 65 }}
                curve="monotoneX"
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'tháng',
                    legendOffset: 30,
                    legendPosition: 'start'
                }}
                yScale={{
                    type: 'linear',
                    max: 6000,
                    stacked: false
                }}
                axisLeft={{
                    tickSize: 5,
                    tickValues: yScaleValue,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: -30,
                    legend: 'sl',
                    legendPosition: 'start'
                }}
                gridYValues={yScaleValue}
                tooltip={TooltipComponent}
                enableGridX={false}
                enablePoints={false}
                enableCrosshair={false}
                enableArea={true}
                useMesh={true}
                defs={[
                    linearGradientDef('linear', [
                        { offset: 0, color: 'inherit' },
                        { offset: 100, color: 'inherit', opacity: 0.2 },
                    ])
                ]}
                fill={[
                    { match: { id: "num-count" }, id: 'linear' },
                ]}
            />
    )
};

export default Chart;