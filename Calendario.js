function getEventsTest(){
    let calendar = CalendarApp.getDefaultCalendar();
    let day = new Date();
    let events = calendar.getEventsForDay(day);
    Logger.log('Number of events today'+events.length);
    let endCheck = new Date (day.getTime() + (1000*60*60*24*7));
    let events2 = calendar.getEvents(day, endCheck);
    Logger.log('Number of events today'+events2.length);
    let options = {search:'Apps'}
    let events3 = calendar.getEvents(day, endCheck, options)
    Logger.log('Number of events today'+events2.length);
    
}

function createNewCal(){
    let name = "Test 1";
    let options = {
    summary: 'New testing calendar',
    color: CalendarApp.Color.TURQOISE
    }
    let calendar = CalendarApp.createCalendar(name, options)
    Logger.log('Created "%s" with ID "%s".',calendar.getName(), calendar.getId());
}

function easyEvent(){
    let calendar = CalendarApp.getDefaultCalendar();
    let event = calendar.createEventFromDescription('Learn apps script,MONDAY at 4PM');
}