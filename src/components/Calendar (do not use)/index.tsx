import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { StyledCalendar } from './style';
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { InputDefault } from '../InputDefault';

export default function CalendarWindow() {

  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [placeholderDate, setPlaceholderDate] = useState('Escolher data')

  console.log(calendarDate.toLocaleString('pt-BR',{
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }))

  

  return (
    <StyledCalendar>
          <h2>{calendarDate.toString()}</h2>
          <div className='calendar-container'
            onMouseLeave={()=>setCalendarIsOpen(false)}
          >
            {/* <button className='calendar-icon' onMouseEnter={()=>{setCalendarIsOpen(true)}}><BsFillCalendarEventFill/></button> */}
            {/* <input onMouseEnter={()=>{setCalendarIsOpen(true)}} /> */}
            <InputDefault 
              onMouseEnter={()=>{setCalendarIsOpen(true)}}
              placeholder={placeholderDate}
            />
            {calendarIsOpen && 
              <Calendar
                onChange={
                  setCalendarDate
                }
                onClickDay={()=>{
                  return setPlaceholderDate(calendarDate.toLocaleString('pt-BR',{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    }))
                }}
                selectRange={true}
                maxDate={new Date()}
                value={calendarDate}
              />}
          </div>
    </StyledCalendar>
  );
}

/* ()=>{
                  setPlaceholderDate(calendarDate
                    .toLocaleString('pt-BR',{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  }).replace(","," - "))
                } */