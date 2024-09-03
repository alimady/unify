import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
 import moment from 'moment';
export default function DateFilter() {
  const [StartDate, setStartDate] = React.useState<Dayjs | null>();
  const [EndDate, setEndDate] = React.useState<Dayjs | null>();
  const client=useQueryClient()
    
  useEffect(()=>{
    client.setQueryData(["dates"],{StartDate,EndDate})
  },[StartDate,EndDate])
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
      <DatePicker
          label="From :"
          value={StartDate ?? dayjs()}
          onChange={(newValue) => setStartDate(newValue)}
        />

        <DatePicker
          label="To :"
          value={EndDate ?? dayjs()}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
