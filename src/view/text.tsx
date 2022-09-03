import { ResponsiveRadialBar } from '@nivo/radial-bar';

import { statisticJSON } from '../data/dummy';
import HandleData from '../data/handle';

let Choice: number = 2;

const dataObj = HandleData(statisticJSON)[Choice];

const RadialBarColor = {
    tracksColor: '#EAEAEC',
    customColor: [
        [ '#7E7D88', '#FF7506' ],
        [ '#7E7D88', '#4277FF' ],
        [ '#F178B6', '#7E7D88', '#35C75A' ]
    ]
};

export const MyResponsiveRadialBar = () => (
    <div style={{position: 'absolute', width: 60, height: 60}} >
        <ResponsiveRadialBar
            data={dataObj.data}
            maxValue={dataObj.amount}
            endAngle={360}
            innerRadius={0.33}
            padding={0.5}
            colors={RadialBarColor.customColor[Choice]}
            cornerRadius={10}
            enableTracks={true}
            tracksColor={RadialBarColor.tracksColor}
            enableRadialGrid={false}
            enableCircularGrid={false}
            radialAxisStart={null}
            circularAxisOuter={null}
        />
    </div>
)