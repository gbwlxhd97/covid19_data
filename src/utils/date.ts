/**
 *
 * @param date ex: 20211107
 * @returns 11/07
 */
export function dateFormat(date: string) {
  const MMDD = date.slice(4);
  const convertDate = MMDD.slice(0, 2) + '/' + MMDD.slice(2);
  return convertDate;
}
