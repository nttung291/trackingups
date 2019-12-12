const language = {
	vi: {
		common: {
			error : {
				detail : 'Bài chi tiết',
				major : 'Trang chuyên mục'
			},
			reporter : "Báo cáo viên ",
			btn: {
				send: "Gửi lên"
			},
			search: "Tìm kiếm",
			filter:{
				site : "Lọc theo đầu báo",
				category : "Lọc theo nhóm báo ",
				domain : "Lọc theo đường dẫn  ",
				status : "Lọc theo trạng thái ",
				date : "Lọc theo ngày  ",
				dom : "Lọc theo lỗi dom  "
			},
			status: {
				index: "Trạng thái",
				active: "Kích Hoạt",
				pending: "Chờ Kích Hoạt",
				disable: "Khóa"
			},
			domain: {
				index: "Trạng thái",
				active: "Kích Hoạt",
				pending: "Chờ Kích Hoạt",
				disable: "Khóa"
			},
			yes: "Có",
			no: "Không",
			child: "Con",
			parent: "Cha",
			users: {
				index: "Người dùng",
				admin: "Quản trị tối cao",
				mod: "Quản trị",
				normal: "Người dùng thường"
			},
			list: {
				search_placeholder: "Nhập từ khóa và Enter...",
				fullName: "Tên đầy đủ",
				name: "Tên",
				description: "Mô tả",
				city: "Thành Phố",
				country: "Đất nước",
				email: "Đ.Chỉ Email",
				type: "Phân loại",
				price: "Giá tiền",
				title: "Tiêu đề",
				avatar: "Ảnh đại diện",
				phone: "Số điện thoại",
				address: "Địa chỉ",
				action: {
					index: "Hành động",
					add: "Thêm",
					edit: "Sửa",
					delete: "Xóa"
				}
			},
			form: {
				input_information: "Nhập thông tin",
				pickLocation: "Chọn vị trí trên bản đồ",
				choose_avatar: "Chọn ảnh đại diện",
				input_name: "Nhập tên",
				input_title: "Nhập tiêu đề",
				input_meta_title: "Meta Title",
				input_description: "Nhập mô tả",
				input_content: "Nhập nội dung",
				input_address: "Nhập địa chỉ",
				input_province: "Nhập tên Tỉnh/Thành Phố",
				input_district: "Nhập tên Quận/Huyện",
				input_war: "Nhập tên Xã/Phường/Thị Trấn",
				input_streetName: "Nhập tên phố (nếu cần)",
				input_postCode: "Nhập mã code Tỉnh/Thành Phố",
				input_longitude: "Kinh độ",
				input_latitude: "Vĩ độ",
				input_price: "Giá",
				input_video: "Video",
				input_author: "Tác giả",
				input_phone: "Số điện thoại",
				input_website: "Số điện thoại",
				input_facebook: "Facebook",
				input_instagram: "Instagram",
				input_group: "Nhóm Thành Viên",
			}
		},
		users_form: {
			list: {
				title: "Thành viên ",
			},
			form: {
				titleEdit: "Sửa thành viên ",
				titleCreate: "Tạo thành viên",
				input_username: "Nhập tên đăng nhập",
				input_password: "Nhập mật khẩu",
				input_facebookId: "Nhập FacebookId",
				input_email: "Nhập Email",
				input_company: "Nhập tên công ty",
				input_position: "Nhập vị trí công tác",

			}
		},
		domain_form: {
			list: {
				title: "Người dùng",
			},
			form: {
				titleEdit: "Sửa đường dẫn ",
				titleCreate: "Tạo đường dẫn ",
				input_url: "Nhập URL",
				input_site: "Nhập tên trang ",
				select_sites: "Chọn đầu báo",
			}
		},
		site_form: {
			list: {
				title: "Trang ",
			},
			form: {
				titleEdit: "Sửa thông tin  trang ",
				titleCreate: "Tạo trang mới  ",
				input_url: "Nhập URL",
				input_site: "Nhập tên trang ",
				select_sites: "Chọn trang",
			}
		},
		campaign_form: {
			list: {
				title: "Người dùng",
				must : "Từ khoá chính",
				mustNot : "Từ khóa loại trừ ",
				should  : "Từ khóa  phụ ",
			},
			form: {
				titleEdit: "Sửa thông tin chủ đề ",
				titleCreate: "Tạo chủ đề ",
				input_url: "Nhập tên",
				input_des: "Nhập mô tả ",
				select_sites: "Chọn đầu báo",
			}
		},
		category_form: {
			list: {
				title: "Người dùng",
			},
			form: {
				titleEdit: "Sửa thông tin nhóm báo ",
				titleCreate: "Tạo nhóm báo ",
				input_url: "Nhập tên",
			}
		},
		areas_form: {
			list: {
				title: "Khu Vực",
			},
			form: {
				titleEdit: "Sửa Khu Vực",
				titleCreate: "Tạo Khu Vực",
				selectPlaceMap: "Tự động tìm khu vực"
			}
		},
		lifestyle_form: {
			list: {
				title: "LifeStyle",
			},
			form: {
				titleEdit: "Sửa Phong Cách Dự Án",
				titleCreate: "Tạo Khu Vực"
			}
		},

		associates_form: {
			list: {
				title: "Associates",
			},
			form: {
				titleEdit: "Sửa",
				titleCreate: "Tạo"
			}
		},

		categories_form: {
			list: {
				title: "Chuyên Mục",
			},
			form: {
				titleEdit: "Sửa Chuyên Mục",
				titleCreate: "Tạo Chuyên Mục",
				SelectParent: "Chọn Chuyên Mục Cha"
			}
		},

		articles_form: {
			list: {
				title: "Danh sách bài viết ",
			},
			form: {
				titleEdit: "Sửa thông tin bài viết",
				titleCreate: "Thêm tin bài",
				selectParent: "Chọn chuyên mục"
			}
		},

		products_form: {
			list: {
				title: "Dự án",
				special: "Nổi bật"
			},
			form: {
				titleEdit: "Sửa Thông Tin Dự Án",
				titleCreate: "Tạo Dự Án",
				selectParent: "Chọn cụm dự án cha",
				selectCategories: "Chọn chuyên mục",
				selectAssociates: "Chọn đối tác",
				selectAreas: "Chọn khu vực",
				selectLifeStyle: "Chọn Phong Cách Dự Án",
				input_quote: "Quote",
				input_quote_by: "Quote By",
				input_beds: "Số phòng ngủ",
				input_baths: "Số phòng tắm",
				inputOtherPrice: "Loại tiền khác",
				inputHouseSize: "Diện tích dự án",
				inputDocument: "Document",
				inputTypeOfProduct: "Loại dự án",
				inputIsSpecialHome: "Hiển thị dự án nổi bật",
			}
		},
	},
	en: {
		common: {
			btn: {
				send: "Send"
			},
			search: "Search",
			status: {
				index: "Status",
				active: "Active",
				pending: "Pending for approval",
				disable: "Disable"
			},
			yes: "Yes",
			no: "No",
			child: "Child",
			parent: "Parent",
			users: {
				index: "Users",
				admin: "Administrator",
				mod: "Moderate",
				normal: "Normal"
			},

			list: {
				search_placeholder: "Type and Press Enter",
				fullName: "FullName",
				name: "Name",
				description: "Description",
				city: "City",
				country: "Country",
				email: "Email",
				type: "Type",
				price: "Price",
				title: "Title",
				avatar: "Avatar",
				phone: "Phone",
				address: "Address",
				action: {
					index: "Action",
					add: "Add",
					edit: "Edit",
					delete: "Delete"
				}
			},

			form: {
				input_information: "Input Information",
				pickLocation: "Choose Location in Map",
				choose_avatar: "Choose Avatar",
				input_name: "Name",
				input_title: "Title",
				input_meta_title: "Meta Title",
				input_description: "Description",
				input_content: "Content",
				input_address: "Address",
				input_province: "Province",
				input_district: "District",
				input_war: "Ward",
				input_streetName: "Street Name",
				input_postCode: "PostCode",
				input_longitude: "Longitude",
				input_latitude: "Latitude",
				input_price: "Price",
				inputVideo: "Video",
				input_author: "Author",
				input_phone: "Phone",
				input_website: "Website",
				input_facebook: "Facebook",
				input_instagram: "Instagram",
				input_group: "Group",
			}
		},


		users_form: {
			list: {
				title: "Users",
			},
			form: {
				titleEdit: "Edit User",
				titleCreate: "Create User",
				input_username: "Username",
				input_password: "Password",
				input_facebookId: "FacebookId",
				input_email: "Email",
				input_company: "Company",
				input_position: "Position"
			}
		},

		areas_form: {
			list: {
				title: "Areas",
			},
			form: {
				title: "Edit Area",
				titleCreate: "Create Area",
				selectPlaceMap: "Tự động tìm khu vực"
			}
		},

		categories_form: {
			list: {
				title: "Categories",
			},
			form: {
				titleEdit: "Edit Category",
				titleCreate: "Create Category",
				selectParent: "Select Parent Category"
			}
		},

		articles_form: {
			list: {
				title: "Articles",
			},
			form: {
				titleEdit: "Edit Articles",
				titleCreate: "Create Articles",
				selectParent: "Select Parent Category"
			}
		},

		associates_form: {
			list: {
				title: "Associates",
			},
			form: {
				titleEdit: "Edit",
				titleCreate: "Create"
			}
		},

		products_form: {
			list: {
				title: "Products",
				special: "Special"
			},
			form: {
				titleEdit: "Edit Product",
				titleCreate: "Create Product",
				selectParent: "Select Parent",
				selectCategories: "Select Categories",
				selectAssociates: "Select Associates",
				selectAreas: "Select Areas",
				selectLifeStyle: "Select LifeStyle",
				input_quote: "Quote",
				input_quote_by: "Quote By",
				input_beds: "Number Of Beds",
				input_baths: "Number Of Baths",
				inputOtherPrice: "Other Price",
				inputHouseSize: "Size of House",
				inputDocument: "Document",
				inputTypeOfProduct: "Type of Product",
				inputIsSpecialHome: "Show Product Special",
			}
		},


		lifestyle_form: {
			list: {
				title: "LifeStyle",
			},
			form: {
				titleEdit: "Edit LifeStyle",
				titleCreate: "Create LifeStyle"
			}
		},
	}
};
export default language;
