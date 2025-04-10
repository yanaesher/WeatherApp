export function formatDate(localtime) {
  const localTime = new Date(localtime); // Создаем объект Date из строки времени
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[localTime.getDay()]; // Получаем день недели
  const formattedDate = localTime.toLocaleDateString("en-GB"); // Форматируем дату в формате dd/mm/yyyy

  return {
    day: dayOfWeek,
    date: formattedDate,
  };
}
