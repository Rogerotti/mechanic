export const getClosestMonday = (d: Date): Date => {
  const date = new Date(d);
  const day = date.getDay(),
    diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
};
