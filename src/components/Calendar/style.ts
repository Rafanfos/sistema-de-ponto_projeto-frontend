import styled from "styled-components";

interface ICalendarProps {
    buttonHeight: number
}

export const StyledCalendar = styled.div`

    .calendar-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn-open-calendar{
        padding: 5px 10px;
        background-color: var(--grey-4);
        border-radius: 4px;
        border: 1px solid transparent;
    }
    .active{
        border: 1px solid var(--grey-1);
    }
    .react-calendar{
        border-radius: 5px;
        overflow: hidden;
        position: absolute;
        transform: translateY(${(props:ICalendarProps) => props.buttonHeight + 2}px);
    }
    .react-calendar__navigation{
        background-color: var(--color-primary);
        button{
            color: var(--color-light);
            font-weight: 600;
            transition: .1s;
        }
        button:hover{
            background-color: var(--color-light) !important;
            color: var(--color-primary);
            border: 1px solid var(--color-primary);
        }
        button:focus{
            background-color: var(--color-primary);
        }
        button:disabled{
            color: var(--color-primary);
            background-color: var(--color-primary) !important;
        }
    }
    .react-calendar__tile{
        transition: .1s;
    }
    .react-calendar__tile:disabled{
        transition: .1s;
    }
    .react-calendar__tile--now{
        background-color: var(--grey-2);
        color: var(--grey-1);
    }
    .react-calendar__tile--now:hover{
        background-color: var(--grey-3) !important;
        color: var(--grey-1) !important;
        
    }
    .react-calendar__tile--active{
        background-color: var(--color-secondary);
    }
    @media screen and (max-width: 330px){
        .react-calendar{
        width: 90vw;
        margin: 0 auto;
    }
    }
`