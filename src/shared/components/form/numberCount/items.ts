export const StartCount = (setting: any) => {
    let count = setting.values.v1.from ?? 1;
    if (setting.mode.includes('v2')) count = setting.values.v2;
    return (20100000 + count);
};

export const RenderUseServices: Record<string, string> = {
    'm': 'Khám mắt',
    'rhm': 'Khám răng hàm mặt',
    'tmh': 'Khám tai mũi họng',
    'tm': 'Khám tim mạch',
    "s-pk": 'Khám sản - Phụ khoa',
    "hh": 'Khám hô hấp',
    "tq": 'Khám tổng quát',
};

export const RenderSources: Record<string, string> = {
    "kio": 'Kiosk',
    "sys": 'Hệ thống',
};