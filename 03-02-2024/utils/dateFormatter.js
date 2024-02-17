export function formatDate(date) {
  return moment(date).format("DD-MM-YYYY");
}

export function showMonth(date) {
  return moment(date).format("MM");
}

export default function showHour(date) {
  return moment(date).format("HH:mm");
}
