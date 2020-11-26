document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    function mobilecheck()
    {
        if (window.innerWidth >=768)
        {
            return false;
        }
        else
        {
            return true;
        }
    };

    var calendar = new FullCalendar.Calendar(calendarEl, {
        
        eventDidMount: function(info)
        {
            if (-1 != info.event.title.indexOf("Node.js"))
            {
                info.el.style.color = 'grey';
            }
            if (-1 != info.event.title.indexOf("Flutter"))
            {
                info.el.style.color = 'green';
            }
            if (-1 != info.event.title.indexOf("Guest Lecture"))
            {
                info.el.style.color = 'brown';
            }
            var s = moment(info.event.start).format("HH:mm");
            var e = moment(info.event.end).format("HH:mm");
            $(info.el).tooltip({
                title: 'Time: ' + s + '-' + e
            });
        },
        headerToolbar:
        {
            right: 'prev,next',
            left: 'today',
            center: 'title',
        },
        buttonText:
        {   
            today: 'Today',
            next: '>',
            prev: '<',
        },
        bootstrapFontAwesome: false,
        // disabled due to the animation 
        // bootstrapFontAwesome:
        // {
        //     prev: 'fa-chevron-left',
        //     next: 'fa-chevron-right',
        // },
        themeSystem: 'bootstrap',
        initialView: mobilecheck() ? 'listMonth': 'dayGridMonth',
        showNonCurrentDates: false,
        contentHeight: 600,
        displayEventTime: false,
        googleCalendarApiKey: config.API_KEY,
        events: {
            googleCalendarId: config.CALENDAR_ID,
        },

        eventClick: function(info)
        {
            info.jsEvent.preventDefault(); //prevent redirect to google calendar onclick
        }
        
    });
    calendar.render();
  });
//TODO browser detection