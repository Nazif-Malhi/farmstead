export const first_letter_capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const isNumber = (value) => {
  return value.replace(/\D/g, "");
};

export const set_profile_badge_name = (first_name, last_name) => {
  if (first_name.length + last_name.length > 8) {
    console.log(6);
  }
};
export function splitDateAndTime(dateString) {
  const date = new Date(dateString);

  // Extracting date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month index starts from 0
  const day = date.getDate();

  // Extracting time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Creating separate date and time strings
  const dateStr = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return {
    date: dateStr,
    time: timeStr,
  };
}
