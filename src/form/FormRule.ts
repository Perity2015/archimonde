import RegUtils from "./RegUtils";

class FormRule {
	public static RULE_REQUIRED = {
		required: true,
		message: '必填'
	};
	public static RULE_INTEGER = {
		pattern: RegUtils.REG_INTEGER,
		message: '只能填写整数'
	};
	public static RULE_POSITIVE_INTEGER = {
		pattern: RegUtils.REG_POSITIVE_INTEGER,
		message: '只能填写零或正整数'
	};
	public static RULE_NOT_ZERO_POSITIVE_INTEGER = {
		pattern: RegUtils.REG_NOT_ZERO_POSITIVE_INTEGER,
		message: '只能填写正整数'
	};
	public static RULE_TWO_BITS_POSITIVE_INTEGER = {
		pattern: RegUtils.REG_TWO_BITS_POSITIVE_INTEGER,
		message: '最多两位正整数'
	};
	public static RULE_TWO_BITS_DECIMALS = {
		pattern: RegUtils.REG_TWO_FRACTION,
		message: '最多两位小数'
	};
	public static RULE_NOT_ZERO_TWO_BITS_INTEGER = {
		pattern: RegUtils.REG_NOT_ZERO_TWO_BITS_INTEGER,
		message: '只能填写正整数并且最多两位小数'
	};
	public static RULE_ZERO_TWO_BITS_INTEGER = {
		pattern: RegUtils.REG_ZERO_TWO_BITS_INTEGER,
		message: '只能填写大于零并且最多两位小数'
	};
	public static RULE_PHONE = {
		pattern: RegUtils.REG_MOBILE,
		message: '请填写正确的手机号'
	};
	public static RULE_TEL_MOBILE = {
		pattern: RegUtils.REG_TEL_MOBILE,
		message: '请填写正确的号码'
	};
	public static RULE_TEL = {
		pattern: RegUtils.REG_TEL,
		message: '请填写正确电话号码'
	};
	public static RULE_DISCOUNT = {
		pattern: RegUtils.REG_DISCOUNT,
		message: '请填写正确的折扣'
	};
	public static RULE_POSTAL_CODE = {
		pattern: RegUtils.REG_POSTAL_CODE,
		message: '请填写正确的邮政编码'
	};
	public static RULE_EMAIL = {
		pattern: RegUtils.REG_EMAIL,
		message: '请填写正确的邮箱'
	};
	public static RULE_URL = {
		pattern: RegUtils.REG_URL,
		message: '请填写正确的网址'
	};

	public static RULE_MAX(ct) {
		return {
			max: ct, message: `最多可填写${ct}个字符`
		}
	}

	public static RULE_N_BITS_POSITIVE_INTEGER(n) {
		return {
			pattern: new RegExp(`^[1-9]{1}[0-9]{0,${n - 1}}$`),
			message: `最多${n}位正整数`
		}
	};

	public static RULE_REQUIRED_MSG(msg) {
		return { required: true, message: msg }
	}

	public static checkChineseLength = (rule, value, callback, length) => {
		if (!value) {
			callback();
		}
		let len = 0;
		for (let i = 0; i < value.length; i++) {
			let length = value.charCodeAt(i);
			if (length >= 0 && length <= 128) {
				len += 0.5;
			}
			else {
				len += 1;
			}
		}
		if (len > length) {
			callback('超出限制汉字长度');
		} else {
			callback();
		}
	};
}

export default FormRule;