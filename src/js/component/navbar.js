import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Modal } from "./Modal";


export const Navbar = () => {
	const {actions}=useContext(Context)

	return (
	
		<nav className="navbar navbar-dark bg-dark px-3" >
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
			<button  type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target={"#editModal-"+-1}>
				Agregar
			</button>
					<Modal index={-1}></Modal>

			</div>
			
		</nav>
		
	);
};
