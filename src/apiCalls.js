export function fetchData(file) {
  return fetch(`http://localhost:3001/api/v1/${file}`).then(response => response.json());
}

export function postBooking(newTrip) {
  let body = {
    "id": newTrip.id,
    "userID": newTrip.userID,
    "destinationID": newTrip.destinationID,
    "travelers": newTrip.travelers,
    "date": newTrip.date,
    "duration": newTrip.duration,
    "status": newTrip.status,
    "suggestedActivities": newTrip.suggestedActivities
  }
  console.log(typeof body.id);
  console.log(body)
  return fetch(`http://localhost:3001/api/v1/trips`, {
    'method': "POST",
    'body': JSON.stringify(body),
    'headers': {
      'Content-type': 'application/json'
    }
  })
}