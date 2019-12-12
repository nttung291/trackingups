import React from 'react';
import "./style.scss"

const Pagination = ({error, limit = 0, total, currentPage, setInput, setPage, showInput, _keyPressPagination, ...props}) => total > 0 ? (
		<div className="text-center">
			<ul className="pagination pagination-flat pagination-xs">
				{(currentPage >= 1 ?
						<li className={currentPage - 1 < 1 ? "disabled" : ""}>
							<a onClick={setPage(currentPage <= 1 ? null : currentPage - 1)}>«</a>
						</li>
						: null
				)}

				{
					currentPage > 3 ?
						(<li className="">
							<span>...</span>
						</li>) : null
				}

				{(Math.ceil(total / limit) >= 1 && currentPage <= 3 ?
						<li className={currentPage === 1 ? "current-page" : ""}>
							<a onClick={setPage(1)}>1</a>
						</li>
						: null
				)}
				{(Math.ceil(total / limit) >= 2 && currentPage <= 3 ?
						<li className={currentPage === 2 ? "current-page" : ""}>
							<a onClick={setPage(2)}>2</a>
						</li>
						: null
				)}
				{(Math.ceil(total / limit) >= 3 && currentPage <= 3 ?
						<li className={currentPage === 3 ? "current-page" : ""}>
							<a onClick={setPage(3)}>3</a>
						</li>
						: null
				)}


				{(Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 1 > currentPage && currentPage > 3 ?
						<li className="">
							<a onClick={setPage(currentPage - 2)}>{currentPage - 2}</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 1 > currentPage && currentPage > 3 ?
						<li className="">
							<a onClick={setPage(currentPage - 1)}>{currentPage - 1}</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 2 > currentPage && currentPage > 3 ?
						<li className="current-page">
							<a onClick={setPage(currentPage)}>{currentPage}</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 3 > currentPage && currentPage >= 3 ?
						<li className="">
							<a onClick={setPage(currentPage + 1)}>{currentPage + 1}</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 4 > currentPage && currentPage >= 3 ?
						<li className="">
							<a onClick={setPage(currentPage + 2)}>{currentPage + 2}</a>
						</li>
						: null
				)}

				{
					Math.ceil(total / limit) > 6 && Math.ceil(total / limit) - 5 > currentPage ?
						(<li className="">
							<span>...</span>
						</li>) : null
				}

				{(Math.ceil(total / limit) >= 4 && Math.ceil(total / limit) - 2 >= 4 ?
						<li className={(currentPage ===4 && Math.ceil(total / limit) <= 6 || (currentPage === Math.ceil(total / limit) - 2) && currentPage !== 2) ? "current-page" : ""}>
							<a onClick={setPage(
								(Math.ceil(total / limit) >= 6 ? Math.ceil(total / limit) - 2 : Math.ceil(total / limit))
							)}>

								{((Math.ceil(total / limit) >= 6 ? Math.ceil(total / limit) - 2 : Math.ceil(total / limit)))}
							</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) >= 4 && Math.ceil(total / limit) === 5 ?
						<li className={(currentPage ===4 ? "current-page" : "")}>
							<a onClick={setPage(4)}>
								4
							</a>
						</li>
						: null
				)}

				{(Math.ceil(total / limit) >= 5 && Math.ceil(total / limit) - 1 >= 5 ?
						<li className={(currentPage ===5 && Math.ceil(total / limit) <= 6 || (currentPage === Math.ceil(total / limit) - 1) && currentPage !== 4 ) ? "current-page" : ""}>
							<a onClick={setPage(
								(Math.ceil(total / limit) >= 6 ? Math.ceil(total / limit) - 1 : Math.ceil(total / limit))
							)}>

								{((Math.ceil(total / limit) >= 6 ? Math.ceil(total / limit) - 1 : Math.ceil(total / limit)))}
							</a>
						</li>
						: null
				)}
				{(Math.ceil(total / limit) >= 4 ?
						<li className={(currentPage ===6 && Math.ceil(total / limit) <= 6 || currentPage === Math.ceil(total / limit)) ? "current-page" : ""}>
							<a onClick={setPage((Math.ceil(total / limit)))}>
								{Math.ceil(total / limit)}
							</a>
						</li>
						: null
				)}
				<li className={currentPage >= (total / limit) ? "disabled" : ""}>
					<a onClick={setPage(currentPage >= (total / limit) ? null : currentPage + 1)}>»</a>
				</li>
				<li><span>Đi tới trang</span></li>
				<li className="active">
					<a onClick={setInput()}>
						<span>
								<input
									type="number"
									onKeyDown={_keyPressPagination()}
								/>
						</span>
					</a>
				</li>
			</ul>
		</div>
	) : null
;
export default Pagination
