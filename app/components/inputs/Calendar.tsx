// 'use client';

// import {  DateRange, Range, RangeKeyDict } from "react-date-range"

// interface CalendarProps {
//     value: Range;
//     onChange: (value: RangeKeyDict) => void;
//     disabledDates?: Date[]
// }



// const Calendar: React.FC<CalendarProps> = ({
//     value,
//     onChange,
//     disabledDates
// }) => {
//   return (
//     <DateRange

//     />
//       )
// }

// export default Calendar;

'use client';

import { DateRange, Range, RangeKeyDict} from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  value: Range,
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates
}) => {
  return ( 
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
   );
}
 
export default DatePicker;