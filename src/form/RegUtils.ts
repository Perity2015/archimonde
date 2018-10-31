import { isEmpty } from "lodash";

class RegUtils {

	public static REG_INTEGER = /^-?[0-9]\d*$/;

	public static REG_TWO_FRACTION = /^(0|[1-9]\d*)(\.\d{1,2})?$/;

	public static REG_NOT_ZERO_TWO_BITS_INTEGER = /^([1-9]\d*)(\.\d{1,2})?$/;

	public static REG_ZERO_TWO_BITS_INTEGER = /^([0-9]\d*)(\.\d{1,2})?$|^(0\.[1-9]{1})$|^(0\.\d{1}[1-9]{1})$|^(0\.[1-9]{1}\d{1})$/;

	public static REG_MOBILE = /^1[3456789]\d{9}$/;

	public static REG_DISCOUNT = /^0.[0-9]{1,2}$/;

	public static REG_POSITIVE_INTEGER = /^[0-9]\d*$/;

	public static REG_NOT_ZERO_POSITIVE_INTEGER = /^[1-9]\d*$/;

	public static REG_TWO_BITS_POSITIVE_INTEGER = /^[1-9]{1}[0-9]{0,1}$/;

	public static REG_POSTAL_CODE = /^[1-9]{1}[0-9]{5}$/;

	public static REG_TEL = /^([0-9]{3,4}-)?[0-9]{7,8}$|^400-([0-9]{4}-)[0-9]{3}$/;

	public static REG_TEL_MOBILE = /^([0-9]{3,4}-)?[0-9]{7,8}$|^1[3456789]\d{9}$|^400-([0-9]{4}-)[0-9]{3}$/;

	public static REG_EMAIL = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

	public static REG_URL = /^(((https|http|ftp|rtsp|mms):\/\/)?)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;

	public static checkReg(reg: RegExp, value) {
		return !isEmpty(value) && reg.test(value);
	};

	public static checkRegPort(port) {
		const pattern = /^(\d)+$/g;
		if (RegUtils.checkReg(pattern, port)) {
			return port <= 65535 && port >= 0
		} else {
			return false;
		}
	};

	public static checkRegIP(ip) {
		const reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
		if (RegUtils.checkReg(reSpaceCheck, ip)) {
			ip.match(reSpaceCheck);
			return parseInt(RegExp.$1) <= 255 && parseInt(RegExp.$1) >= 0
				&& parseInt(RegExp.$2) <= 255 && parseInt(RegExp.$2) >= 0
				&& parseInt(RegExp.$3) <= 255 && parseInt(RegExp.$3) >= 0
				&& parseInt(RegExp.$4) <= 255 && parseInt(RegExp.$4) >= 0;
		} else {
			return false;
		}
	};

}

export default RegUtils;