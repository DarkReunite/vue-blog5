import moment from 'moment';

export default function (ISO_time) {
  return moment(ISO_time, moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss');
}