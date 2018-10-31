class HtmlUtils {

	/**
	 * 用于处理高清适配后富文本显示异常
	 * @param richText
	 * @constructor
	 */
	public static FormatRichText(richText) {
		if (richText) {
			richText = richText.replace(/(\d+)px/g, (s, t) => {
				s = s.replace('px', '');
				const value = parseInt(s) * 0.02;
				return value + "rem";
			});
		}
		return richText;
	}

	/**
	 * 获取相对颜色
	 * @param col
	 * @param amt
	 * @returns {string}
	 * @constructor
	 */
	public static convertColor(col, amt) {
		let usePound = false;
		if (col[0] === "#") {
			col = col.slice(1);
			usePound = true;
		}
		let num = parseInt(col, 16);
		let r = (num >> 16) + amt;
		r > 255 && (r = 255);
		r < 0 && (r = 0);

		let b = ((num >> 8) & 0x00FF) + amt;
		b > 255 && (b = 255);
		b < 0 && (b = 0);

		let g = (num & 0x0000FF) + amt;
		g > 255 && (g = 255);
		g < 0 && (g = 0);

		return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
	};

	/**
	 * 16进制color转rgba
	 * @param col
	 * @param opacity
	 * @returns {string}
	 * @constructor
	 */
	public static colorConvertRGBA(col, opacity) {
		if (col[0] === "#") {
			col = col.slice(1);
		}
		let num = parseInt(col, 16);
		let r = (num >> 16);
		r > 255 && (r = 255);
		r < 0 && (r = 0);

		let b = ((num >> 8) & 0x00FF);
		b > 255 && (b = 255);
		b < 0 && (b = 0);

		let g = (num & 0x0000FF);
		g > 255 && (g = 255);
		g < 0 && (g = 0);

		return `rgba(${r},${g},${b},${opacity})`;
	};

}

export default HtmlUtils;