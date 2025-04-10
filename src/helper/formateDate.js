export function formatDate(localtime) {
  const localTime = new Date(localtime); 
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[localTime.getDay()]; 
  const formattedDate = localTime.toLocaleDateString("en-GB"); 

  return {
    day: dayOfWeek,
    date: formattedDate,
  };
}
