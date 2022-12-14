function initCalender() {
    let temp = '';
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()

    var Calendar = FullCalendar.Calendar;
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
    height:570,
    locale:temp,
    eventTimeFormat: { // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false
      },
    windowResize: function(arg) {
        // alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
    },
    selectable: true,
    headerToolbar: {
        right  : 'prevYear prev next nextYear today',
        center: '',
        left : 'title'
    },
    //timeZone: 'UTC',
        editable: true,
        initialView: 'dayGridMonth',
        eventMaxStack: 1,
        initialDate: '2022-11-22',
    events: [
        {
        title  : 'event1',
        start  : '2022-11-02',
        allDay : false ,
        },
        {
        
        start  : '2022-11-02',
        end    : '2022-11-03',
        title  : 'azsxczcxzx',
        allDay : false 
        },
        {
        title  : 'event3',
        start  : '2022-11-03T12:30:00',
        end  : '2022-11-03T02:30:00',
        allDay : false // will make the time show
        },
        {
            
            start  : '2022-11-02T02:30',
            title  : 'event3',
            allDay : false 
        },
        

    ],
    // dayMaxEventRows: true, // for all non-TimeGrid views
    // views: {
    //   timeGrid: {
    //     dayMaxEventRows: 2, // adjust to 6 only for timeGridWeek/timeGridDay
    //     dayMaxEvents:2,
        
    //   }
    // },
    eventOverlap:false,
    eventColor: 'red',
    eventTextColor: 'red',
    eventSize:2,
    // eventClick: function(info) {
    //   alert('Event: ' + info.event.title);
    //   // change the border color just for fun
    //   info.el.style.borderColor = 'red';
    // },
    dateClick: function(info) {
        alert('a day has been clicked!'+info.dateStr);
    },
    
    themeSystem: 'bootstrap',
    //Random default events
    
    editable  : false,
    droppable : false
    });

    calendar.render();
}

$('.fc-title').css('color', 'red');

function displayTimesheet() {
    
    $.ajax({
        type: "GET",
        url: "https://r9mjde4m5j.execute-api.eu-central-1.amazonaws.com/mock/employeebookedlist?todate=sunt",
        dataType: "json",
        success: function(successdata) {
           console.log("object", successdata);
        },
        error: function (error) {
            alert('error; '+(error));
        }
    });
}