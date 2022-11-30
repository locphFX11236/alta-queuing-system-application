import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';

import TooltipComponent from './tooltip';
import { SelectDashState } from '../../../../core/featuresRedux/hookRedux';
import { render } from './select';

const Chart = ({select}: {select: string}): JSX.Element => {
    const data: any = SelectDashState().showChart;
    const dataObj = [ ...data ].filter((d) => d.id === `num-count-${select}`);

    return (
        <ResponsiveLine
            data={dataObj}
            colors={dataObj[0].color}
            margin={{ top: 50, right: 30, bottom: 60, left: 65 }}
            curve="monotoneX"
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: render[select],
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
                tickValues: dataObj[0].yScaleValue,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -30,
                legend: 'sl',
                legendPosition: 'start'
            }}
            gridYValues={dataObj[0].yScaleValue}
            tooltip={TooltipComponent}
            enableGridX={false}
            enablePoints={false}
            enableCrosshair={false}
            enableArea={true}
            useMesh={true}
            defs={[
                linearGradientDef('linear', [
                    { offset: 0, color: 'inherit', opacity: 1 },
                    { offset: 100, color: 'inherit', opacity: 0.1 },
                ])
            ]}
            fill={[{ match: "*", id: 'linear' }]}
        />
    )
};

export default Chart;