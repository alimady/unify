import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type labelType={
    label:string
}
export default function DateFilter({label}:labelType) {
  const [StartDate, setStartDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [EndDate, setEndDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>

      <DatePicker
          label="From :"
          value={StartDate}
          onChange={(newValue) => setStartDate(newValue)}
        />

        <DatePicker
          label="To :"
          value={EndDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
