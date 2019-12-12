import React from 'react'
import Router from "next/router"
import Service from "../../services/auth"
import "./login.scss"

class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			error: null
		}
	};

	static getInitialProps = () => {
		return {background: Math.floor(Math.random() * 8) + 1}
	};


	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.refs.email.value)
		const auth = new Service()
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// const email = "microvn.gm@gmail.com";
		// const password = "hoangdung";
		auth.login(email, password).then((res) => {
			Router.push('/');
		}).catch((e) => this.setState({error: e.message}))
	};

	render() {
		return (
			<div className={`login-container bg-slate-800 skin-${this.props.background}`}>
				<div className="page-container">
					<div className="page-content">
						<div className="content-wrapper">
							<div className="content">
								<form onSubmit={this.handleSubmit}>
									<div className="panel panel-body login-form">
										<div className="text-center">
											<div className="icon-object border-warning-400 text-warning-400"><i className="icon-people"/>
											</div>
											<h5 className="content-group-lg">Social Fire
												<small className="display-block">Dịch vụ tìm kiếm thông tin trên mạng</small>
											</h5>
										</div>
										{
											this.state.error && (
												<div className="alert alert-warning alert-bordered">
													<span className="text-semibold">Lỗi!</span> {this.state.error}
												</div>
											)
										}
										<div className="form-group has-feedback has-feedback-left">
											<input type="text" className="form-control" placeholder="Email" ref="email"/>
											<div className="form-control-feedback">
												<i className="icon-user text-muted"/>
											</div>
										</div>
										<div className="form-group has-feedback has-feedback-left">
											<input type="password" className="form-control" placeholder="Password" ref="password"/>
											<div className="form-control-feedback">
												<i className="icon-lock2 text-muted"/>
											</div>
										</div>
										<div className="form-group login-options">
											<div className="row">
												<div className="col-sm-6">
													<label className="checkbox-inline">
														<input type="checkbox" className="styled" defaultChecked="checked"/>
														Remember
													</label>
												</div>
											</div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn bg-blue btn-block">Login <i
												className="icon-circle-right2 position-right"/></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
