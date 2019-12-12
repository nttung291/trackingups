module.exports = {
	placeholderText: 'Nhập nội dung bài viết ...',
	language: 'vi',
	charCounterCount: true,
	toolbarButtons: ['alert', 'bold', 'italic', 'underline', '|', 'outdent', 'align', 'indent', '|', 'file', 'insertLink', 'insertImage', 'insertVideo', '|', 'clearFormatting', 'html'],
	events: {
		'froalaEditor.initialized': function () {
			console.log('initialized');
		}
	}
}
