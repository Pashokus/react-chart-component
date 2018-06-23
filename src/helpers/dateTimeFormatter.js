import moment from 'moment';

// parse time in format hh:mm:ss from s
export const timeParser = (time) => {
  return moment().startOf('day').seconds(time).format('HH:mm:ss');
};
