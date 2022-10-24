const RenderUseServices: Record<string, string> = {
    'm': 'Khám mắt',
    'rhm': 'Khám răng hàm mặt',
    'tmh': 'Khám tai mũi họng',
    'tm': 'Khám tim mạch',
    "s-pk": 'Khám sản - Phụ khoa',
    "hh": 'Khám hô hấp',
    "tq": 'Khám tổng quát',
};

export const MessagePop = ({values}: any) => (
    <>
        <h3>Số thứ tự được cấp</h3>
        <h2>{values.countNumber}</h2>
        <p>DV: {RenderUseServices[values.useService]} (tại quầy số 1)</p>
    </>
);

export const DescriptionPop = ({values}: any) => (
    <>
        <p>Thời gian cấp: {values.startTime}</p>
        <p>Hạn sử dụng: {values.endTime}</p>
    </>
);