//Date
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
export const TodayDate = `${month}. ${day}. ${year}`;
