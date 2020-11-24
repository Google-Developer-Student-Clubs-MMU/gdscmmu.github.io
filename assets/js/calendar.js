document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap',
        initialView: 'dayGridMonth',
        showNonCurrentDates: false,
        contentHeight: 600,
        
        googleCalendarApiKey: 'AIzaSyDmQU1J6rYkKTp85d7G5MkkSEyDZ5pyygo',
        events: {
            googleCalendarId: 'r9qv95ek58u07ektu1lo59cpio@group.calendar.google.com'
        }
    });
    calendar.render();
  });

//    (gCal API key) 
//    p5asbedeh1i1gqq7djj2lgfvb0@group.calendar.google.com(calID)