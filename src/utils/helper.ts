import { BASE_URL } from "../config/config";

export const getSixYearsAgo = () => new Date(new Date().setDate(new Date().getDate() - 365 * 6)).toISOString().split('T')[0];

export const getPathSegment = (url: string) => {
  const str = url.replace(`${BASE_URL}/`, '');
  if(str.indexOf("/") === -1) return ('/' + str) 
  return ("/" + str.substr(0, str.indexOf("/")))
}

export const dateFormat = (str: string | number | Date) => (new Date(str).toLocaleString().split(',')[0]);