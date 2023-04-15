import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
	const [contactName, setcontactName] = useState(" ")
	const [address, setaddress] = useState(" ")
	const [phone, setphone] = useState(" ")
	const [email, setemail] = useState(" ")
	const {store, actions} = useContext(Context)

	
	useEffect(()=>{
		if(props.index==-1){
			//nuevo contacto
		} else if(props.index>=0){
			//editar contactos
			let updateContacts= store.contacts[props.index]
			setcontactName(updateContacts.name)
			setaddress(updateContacts.address)
			setemail(updateContacts.email)
			setphone(updateContacts.phone)
		} else { }
	}, [])

	function guardar () {
		let newContact={
			name:contactName,
			addres:address,
			phone:phone,
			email:email,
		}

		if(props.index==-1){
			//nuevo contacto
			actions.addContact(newContact)
			
		} else if(props.index>=0){
			actions.updateContact(newContact, props.index)
		}		

	}
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
					<label htmlFor="contactNameInput" className="form-label">Name</label>
					<input type="text" className="form-control" id="nameInput" placeholder="maria amalia"
					value={contactName}
					onChange={e=>setcontactName(e.target.value)}></input>
					</div>	
					<div className="mb-3">
					<label htmlFor="addressInput" className="form-label">address</label>
					<input type="text" className="form-control" id="addressInput" placeholder="la plata"
					value={address}
					onChange={e=>setaddress(e.target.value)}></input>
					</div>	
					<div className="mb-3">
					<label htmlFor="phoneInput" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phoneInput" placeholder="000000"
					value={phone}
					onChange={e=>setphone(e.target.value)}></input>
					</div>	
					<div className="mb-3">
					<label htmlFor="emailInput" className="form-label">Email address</label>
					<input type="email" className="form-control" id="emailInput" placeholder="name@example.com"
					value={email}
					onChange={e=>setname(e.target.value)}></input>
					</div>
					</div>
					<div className="modal-footer">
						<button type="button" onClick={guardar} className="btn btn-primary" data-bs-dismiss="modal" data-bs-target={"#editModal-"+props.index}>
							Guardar
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
