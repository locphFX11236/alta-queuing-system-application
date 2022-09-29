import { Moment } from 'moment';

const ShowMonth = (rootDate: Moment): any => {
    const startDay: Moment = rootDate.clone().startOf('month').startOf('week'); // Lấy thông tin ngày đầu của tuần chứa ngày đầu tiên của tháng.
    const endDay: Moment = rootDate.clone().endOf('month').endOf('week'); // Lấy thông tin ngày cuối của tuần chứa ngày cuối cùng của tháng.
    const day: Moment = startDay.clone().subtract(1, 'day'); // Lấy thông tin ngày sẽ render, bắt đầu từ ngày trước (startDay).
    const currentMonth: any = []; // Sẽ là mảng render thông tin tháng, chứa các mảng render thông tin tuần.

    while(day.isBefore(endDay, 'day')) { // Vòng lập chạy cho đến khi (day) đến trước ngày (endDay).
        currentMonth.push(
            Array(7).fill(0).map( () => day.add(1, 'day').clone() ) // Ngày đầu tiên được nạp vào mảng là (day) + 1 ngày.
        )
    };

    return currentMonth; // = [ [ Tuần 1 ], [ 2 ], ... ]
};

export default ShowMonth;