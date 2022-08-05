export const normalize = (time: number) => {
  const date = new Date(0);
  date.setSeconds(Math.floor(time)); // specify value for SECONDS here
  const timeString = date.toISOString().slice(14,19);
  return timeString
};
