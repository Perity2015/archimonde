class FormLayout {
	public static getFormLayout1(lSpan: number, wSPan: number) {
		return {
			labelCol: { span: lSpan },
			wrapperCol: { span: wSPan },
		}
	}

	public static getFormLayout2(lCol: { span: number, offset: number }, wCol: { span: number, offset: number }) {
		return {
			labelCol: lCol,
			wrapperCol: wCol,
		}
	}
}

export default FormLayout;