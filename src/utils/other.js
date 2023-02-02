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
