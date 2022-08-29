import { ResponsiveRadialBar } from '@nivo/radial-bar';

import data from '../../../data/dataStatistic.json';

const StaCouJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

let Choice: number = 2;

const dataObj = JSON.parse(StaCouJSON)[Choice];

const RadialBarColor = {
    tracksColor: '#EAEAEC',
    customColor: [
        [ '#7E7D88', '#FF7506' ],
        [ '#7E7D88', '#4277FF' ],
        [ '#F178B6', '#7E7D88', '#35C75A' ]
    ]
};

console.log(dataObj);

export const MyResponsiveRadialBar = () => (
    <div style={{width: 60, height: 60}} >
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
            isInteractive={false}
        />
    </div>
);