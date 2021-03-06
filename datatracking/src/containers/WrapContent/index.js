import React from 'react'

const Index = () => (
	<div className="content-wrapper">

		<div className="page-header">
			<div className="page-header-content">
				<div className="page-title">
					<h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">Starters</span> - 2
						Columns</h4>
				</div>

				<div className="heading-elements">
					<a href="#" className="btn btn-labeled btn-labeled-right bg-blue heading-btn">Button <b><i
						className="icon-menu7"></i></b></a>
				</div>
			</div>

			<div className="breadcrumb-line breadcrumb-line-component">
				<ul className="breadcrumb">
					<li><a href="index.html"><i className="icon-home2 position-left"></i> Home</a></li>
					<li><a href="2_col.html">Starters</a></li>
					<li className="active">2 columns</li>
				</ul>

				<ul className="breadcrumb-elements">
					<li><a href="#"><i className="icon-comment-discussion position-left"></i> Link</a></li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="icon-gear position-left"></i>
							Dropdown
							<span className="caret"></span>
						</a>

						<ul className="dropdown-menu dropdown-menu-right">
							<li><a href="#"><i className="icon-user-lock"></i> Account security</a></li>
							<li><a href="#"><i className="icon-statistics"></i> Analytics</a></li>
							<li><a href="#"><i className="icon-accessibility"></i> Accessibility</a></li>
							<li className="divider"></li>
							<li><a href="#"><i className="icon-gear"></i> All settings</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div className="content">
			<div className="panel panel-flat">
				<div className="panel-heading">
					<h5 className="panel-title">Simple panel</h5>
					<div className="heading-elements">
						<ul className="icons-list">
							<li><a data-action="collapse"></a></li>
							<li><a data-action="close"></a></li>
						</ul>
					</div>
				</div>

				<div className="panel-body">
					<h6 className="text-semibold">Start your development with no hassle!</h6>
					<p className="content-group">Common problem of templates is that all code is deeply integrated into the core.
						This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove
						unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by
						removing the path to specific LESS file with component styling. All plugins and their options are also in
						separate files. Use only components you actually need!</p>

					<h6 className="text-semibold">What is this?</h6>
					<p className="content-group">Starter kit is a set of pages, useful for developers to start development process
						from scratch. Each layout includes base components only: layout, page kits, color system which is still
						optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled
						without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

					<h6 className="text-semibold">How does it work?</h6>
					<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file,
						compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and
						copy all paths/JS code from there to your new page, it's just faster and easier.</p>
				</div>
			</div>

			<div className="panel panel-flat">
				<div className="panel-heading">
					<h5 className="panel-title">Basic table</h5>
					<div className="heading-elements">
						<ul className="icons-list">
							<li><a data-action="collapse"></a></li>
							<li><a data-action="close"></a></li>
						</ul>
					</div>
				</div>

				<div className="panel-body">
					Starter pages include the most basic components that may help you start your development process - basic grid
					example, panel, table and form layouts with standard components. Nothing extra.
				</div>

				<div className="table-responsive">
					<table className="table">
						<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1</td>
							<td>Eugene</td>
							<td>Kopyov</td>
							<td>@Kopyov</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Victoria</td>
							<td>Baker</td>
							<td>@Vicky</td>
						</tr>
						<tr>
							<td>3</td>
							<td>James</td>
							<td>Alexander</td>
							<td>@Alex</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Franklin</td>
							<td>Morrison</td>
							<td>@Frank</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">

					<div className="panel panel-flat">
						<div className="panel-heading">
							<h5 className="panel-title">Horizontal form</h5>
							<div className="heading-elements">
								<ul className="icons-list">
									<li><a data-action="collapse"></a></li>
									<li><a data-action="close"></a></li>
								</ul>
							</div>
						</div>

						<div className="panel-body">
							<form className="form-horizontal" action="#">
								<div className="form-group">
									<label className="control-label col-lg-2">Text input</label>
									<div className="col-lg-10">
										<input type="text" className="form-control"/>
									</div>
								</div>

								<div className="form-group">
									<label className="control-label col-lg-2">Password</label>
									<div className="col-lg-10">
										<input type="password" className="form-control"/>
									</div>
								</div>

								<div className="form-group">
									<label className="control-label col-lg-2">Select</label>
									<div className="col-lg-10">
										<select name="select" className="form-control">
											<option value="opt1">Basic select</option>
											<option value="opt2">Option 2</option>
											<option value="opt3">Option 3</option>
											<option value="opt4">Option 4</option>
											<option value="opt5">Option 5</option>
											<option value="opt6">Option 6</option>
											<option value="opt7">Option 7</option>
											<option value="opt8">Option 8</option>
										</select>
									</div>
								</div>

								<div className="form-group">
									<label className="control-label col-lg-2">Textarea</label>
									<div className="col-lg-10">
										<textarea rows="5" cols="5" className="form-control" placeholder="Default textarea"></textarea>
									</div>
								</div>

								<div className="text-right">
									<button type="submit" className="btn btn-primary">Submit form <i
										className="icon-arrow-right14 position-right"></i></button>
								</div>
							</form>
						</div>
					</div>


				</div>

				<div className="col-md-6">

					<div className="panel panel-flat">
						<div className="panel-heading">
							<h5 className="panel-title">Vertical form</h5>
							<div className="heading-elements">
								<ul className="icons-list">
									<li><a data-action="collapse"></a></li>
									<li><a data-action="close"></a></li>
								</ul>
							</div>
						</div>

						<div className="panel-body">
							<form action="#">
								<div className="form-group">
									<label>Text input</label>
									<input type="text" className="form-control"/>
								</div>

								<div className="form-group">
									<label>Select</label>
									<select name="select" className="form-control">
										<option value="opt1">Basic select</option>
										<option value="opt2">Option 2</option>
										<option value="opt3">Option 3</option>
										<option value="opt4">Option 4</option>
										<option value="opt5">Option 5</option>
										<option value="opt6">Option 6</option>
										<option value="opt7">Option 7</option>
										<option value="opt8">Option 8</option>
									</select>
								</div>

								<div className="form-group">
									<label>Textarea</label>
									<textarea rows="4" cols="4" className="form-control" placeholder="Default textarea"></textarea>
								</div>

								<div className="text-right">
									<button type="submit" className="btn btn-primary">Submit form <i
										className="icon-arrow-right14 position-right"></i></button>
								</div>
							</form>
						</div>
					</div>


				</div>
			</div>

			<div className="footer text-muted">
				&copy; 2015. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov"
																																 target="_blank">Eugene Kopyov</a>
			</div>


		</div>

	</div>

)

export default Index
