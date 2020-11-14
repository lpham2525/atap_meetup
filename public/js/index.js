async function getEvents () {
  // Get data from API
  const response = await fetch('api/events')
  // Parse the data from the API as JSON
  const events = await response.json()

  // Get reference to event list div so it can be populated
  const eventList = document.getElementById('eventList')
  if (!eventList) {
    console.log("Couldn't find event list")
  }

  for (const ev of events.evs) {
  // For each event in the list, make new vent div and populate it with details

    // This section is a super basic react component

    // Create new div
    const newEvent = document.createElement('div')
    newEvent.className = 'event'
    newEvent.innerHTML = '<h3>' + ev.name + "</h3><div class='evDescription'><span class='date'>" + ev.date + '</span></div>'

    // Put element in event list on page
    eventList.appendChild(newEvent)
  }
}

window.onload = function initState () {
  // once page loads, grab the data to display on the site
  getEvents()
}
