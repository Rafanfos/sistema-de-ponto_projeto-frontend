import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { StyledCalendar } from './style';
import { BsFillCalendarEventFill } from 'react-icons/bs'

interface ICalendarWindowProps {
  callback: (dateString: string)=>void
}

export default function CalendarWindow({callback}:ICalendarWindowProps) {

  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false)
  
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const styledCalendarRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if (buttonRef?.current) {
      setButtonHeight(buttonRef?.current.clientHeight)
    }
  },[])

  useEffect(()=>{
    if (isFirstRender) {
      const dateString = calendarDate.toLocaleString('pt-BR',{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
      callback(dateString)
    } else {
      setIsFirstRender(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[calendarDate])


  const handleButtonClick = () => {
    buttonRef.current?.classList.toggle("active")
  }

  const handleCalendarIsOpen = () => {
    if (calendarIsOpen || buttonRef.current?.classList.contains("active")) {
      return(
        <Calendar
          onChange={
            setCalendarDate
          }
          selectRange={true}
          maxDate={new Date()}
          value={calendarDate}
        />
      )
    }
  }

  return (
    <StyledCalendar buttonHeight={buttonHeight} ref={styledCalendarRef}>
          <div className='calendar-container'
            onMouseLeave={()=>setCalendarIsOpen(false)}
            onClick={()=>handleButtonClick()}
          >
            <button 
              className='btn-open-calendar' 
              onMouseEnter={()=>{setCalendarIsOpen(true)}}
              ref={buttonRef}
              ><BsFillCalendarEventFill/>
            </button>
            {handleCalendarIsOpen()}
          </div>
    </StyledCalendar>
  );
}