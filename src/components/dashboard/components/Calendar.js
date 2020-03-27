import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import eventsList from "./TestData";
import moment from 'moment-timezone';
import { Container } from '../styles';
import { useDispatch, useSelector } from 'react-redux';

 

export default class CalendarApp extends Component {
  
        constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
       
        this.state = {        
            calendarWeekends: true,
           calendarEvents: eventsList, 
                      
            currentEvent: []
            }
        }          
          // componentWillMount() {

          //  const { eventData } = useSelector(state => state.events);

           // console.log("eventData: " + eventData);

           //}

    render() {
      return (
        <Container>
          
        <div className="calendar-app" style={{ height: 600, width: 700, marginTop:100, marginBottom:50 }}>
        
          <div className="calendar-app-calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              editable= {true}
              header={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              //events = {this.getEventData}
              dateClick={this.handleDateClick}
              eventClick={this.handleEventClick}
            />
          </div>
        </div></Container>
      );
    }
    // Routes
    routeChange(evtId,urlPath) {
      let path = urlPath + evtId;
      this.props.history.push(path);
    }
    // Add a new event
    handleDateClick = arg => {
      if (window.confirm("Would you like to add an event to " + moment(arg.dateStr).format('MM/DD/YYYY') + " ?")) {    
        
        this.routeChange("","/") 

      }
    }
    
    // Update an event. 
   handleEventClick = arg => {
      //this.currentEvent = useSelector(state => state.events);
      if (window.confirm("Would you like to modify this event? ID# " )) {
        this.routeChange(66,"/edit-task/")  
      }

      
    }

  }
  
