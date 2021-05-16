export const normalizeDate = (date: string): Date => {
  if (!date) {
    return null;
  }

  if (date === '00000000') {
    return null;
  }

  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(4, 6)) + 1;
  const day = Number(date.slice(6, 8));

  return new Date(year, month, day);
};
