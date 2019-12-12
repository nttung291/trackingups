module.exports = {
	filter:{
		status:[
			{label: 'Tất cả', value: null},
			{value: 1, label: 'Kích hoạt'},
			{value: 0, label: 'Hủy kích hoạt'}
		]
	},
	status: {
		vi: [
			{value: 1, label: 'Kích hoạt'},
			{value: 0, label: 'Hủy kích hoạt'}
		],
		en: [
			{value: 1, label: 'Kích hoạt'},
			{value: 0, label: 'Hủy kích hoạt'}
		]
	},
	type: [
		{value: 0, label: 'Người dùng thường'},
		{value: 1, label: 'Quản trị'},
		{value: 2, label: 'Quản trị tối cao'}
	],
	statusDomain: [
		{label: 'Hủy kích hoạt', value: 0},
		{label: 'Kích hoạt', value: 1},
		{label: 'Đang quét', value: 2},
		{label: 'Vừa quét xong', value: 3}
	],
	typeCrawler: [
		{label: 'Bình thường', value: 0},
		{label: 'Ajax', value: 1}
	],
	errorCrawler: [
		{label: 'Tất cả', value: null},
		{label: 'Có lỗi', value: 1},
		{label: 'Không có lỗi', value: 0},
	]
};
