import { ResponsiveRadialBar } from '@nivo/radial-bar';

import './radialBar.css';

const RadialBar = ({dataObj}: any): JSX.Element => {
    const data = [ ...dataObj.data ];
    const colors = [ ...dataObj.color ];

    return (
        <div className='radial-bar' >
            <ResponsiveRadialBar
                data={data.reverse()}
                maxValue={dataObj.amount}
                endAngle={360}
                innerRadius={0.33}
                padding={0.5}
                colors={colors.reverse()}
                cornerRadius={10}
                enableTracks={true}
                tracksColor={'#EAEAEC'}
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                isInteractive={false}
            />
        </div>
    );
};

export default RadialBar;