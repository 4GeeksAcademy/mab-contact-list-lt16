import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg"
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here

	});
	const {store, actions}=useContext(Context)

	return (
		<li className="list-group-item mb-3">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 py-0">
					<img src={store.rigo}  className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button  type="button" className="btn btn-dark mx-3" data-bs-toggle="modal" data-bs-target={"#editModal-"+props.index}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn btn-dark" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead text-uppercase">{props.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title={props.phone}
					/>
					<span className="text small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text small text-truncate">{props.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	email: PropTypes.string,
	img:PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
