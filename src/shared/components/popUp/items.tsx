const RenderUseServices: Record<string, string> = {
    'm': 'Khám mắt',
    'rhm': 'Khám răng hàm mặt',
    'tmh': 'Khám tai mũi họng',
    'tm': 'Khám tim mạch',
    "s-pk": 'Khám sản - Phụ khoa',
    "hh": 'Khám hô hấp',
    "tq": 'Khám tổng quát',
};

const RenderRooms: Record<string, string> = {
    'm': 'tại phòng số 1',
    'rhm': 'tại phòng số 2',
    'tmh': 'tại phòng số 3',
    'tm': 'tại phòng số 4',
    "s-pk": 'tại phòng số 5',
    "hh": 'tại phòng số 6',
    "tq": 'tại phòng số 7',
};

export const MessagePop = ({values}: any) => (
    <>
        <h3>Số thứ tự được cấp</h3>
        <h2>{values.countNumber}</h2>
        <p>DV: {RenderUseServices[values.useService]} {RenderRooms[values.useService]}</p>
    </>
);

export const DescriptionPop = ({values}: any) => (
    <>
        <p>Thời gian cấp: {values.startTime}</p>
        <p>Hạn sử dụng: {values.endTime}</p>
    </>
);