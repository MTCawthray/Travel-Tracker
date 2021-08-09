export function fetchData(file) {
  return fetch(`http://localhost:3001/api/v1/${file}`).then(response => response.json());
}

export function postBooking(trip) {
  let body = {
    "id": trip.id,
    "userID": trip.userID,
    "destinationID": trip.destinationID,
    "travelers": trip.travelers,
    "date": trip.date,
    "duration": trip.duration,
    "status": trip.status,
    "suggestedActivities": trip.suggestedActivities
  }
  return fetch(`http://localhost:3001/api/v1/trips`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })
}