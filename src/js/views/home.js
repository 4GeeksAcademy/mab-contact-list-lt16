import React, {useContext} from "react";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";
import {Context} from '../store/appContext'
import { Modal } from "../component/Modal";

export const Home = () => {
	const {store, actions}=useContext(Context)
	const {contacts,numero}=store
	
	return(
	<div className="d-flex flex-column justify-center mt-5">
		<h1>Contact List</h1>
		<div className="list-group contact-list">
			{contacts.map((contact, index)=>
			<div key={index}>
				<ContactCard
					name={contact.name}
					address={contact.address}
					email={contact.email}
					phone={contact.phone}
					img={contact.img}
					onDelete={()=>actions.delContact(index)}
					index={index}
				/>
				<Modal index={index}></Modal>
			</div>
			)}
		</div>
	</div>
	)
};
