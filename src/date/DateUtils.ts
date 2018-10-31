import moment  from 'moment';

class DateUtils {

	public static FORMAT_DATE = 'YYYY-MM-DD';

	public static FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';

	public static FORMAT_TIME = 'HH:mm:ss';

	public static getDateString(date) {
		return moment(date).format(DateUtils.FORMAT_DATE);
	}

	public static getDateTimeString(date) {
		return moment(date).format(DateUtils.FORMAT_DATETIME);
	}

	public static getTimeString(date) {
		return moment(date).format(DateUtils.FORMAT_TIME);
	}

	public static getTimestamp(date) {
		return moment(date).valueOf();
	}

	public static getCustomStr(date, format) {
		return moment(date).format(format);
	}
}

export default DateUtils;

