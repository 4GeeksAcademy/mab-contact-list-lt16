import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	useEffect(()=>{
		if(props.index==-1){
			//nuevo contacto
		} else if(props.index>=0){
			//editar contactos
		} else { }
	}, [])
	return (
		<div className="modal fade" tabIndex="-1" role="dialog" id={"editModal-"+props.index} aria-labelledby={"modalLabel-"+props.index} aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Contact {props.index}</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						)}
					</div>
					<div className="modal-body">
					<div className="mb-3">
					<label htmlFor="nameInput" className="form-label">Name</label>
					<input type="text" className="form-control" id="nameInput" placeholder="maria amalia"> </input>
					</div>	
					<div className="mb-3">
					<label htmlFor="adressInput" className="form-label">Address</label>
					<input type="text" className="form-control" id="adressInput" placeholder="la plata"> </input>
					</div>	
					<div className="mb-3">
					<label htmlFor="phoneInput" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phoneInput" placeholder="000000"> </input>
					</div>	
					<div className="mb-3">
					<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> </input>
					</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
