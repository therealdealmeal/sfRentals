$(document).ready(function() {

		$('#calendar').fullCalendar({

			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek'
			},
			navLinks: true, // can click day/week names to navigate views
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2017-02-01'
				}
				]
		});
		$('#calendar').fullCalendar('gotoDate');
	});
