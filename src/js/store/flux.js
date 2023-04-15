import rigoImage from "../../img/rigo-baby.jpg";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{name:"Arnaldo", address:"Venezuela", email:"arnaldo@4geeks.com", phone:"+5812321321321", img:rigoImage},
				{name:"Arnaldo", address:"Venezuela", email:"arnaldo@4geeks.com", phone:"+5812321321321", img:rigoImage},
				{name:"Arnaldo", address:"Venezuela", email:"arnaldo@4geeks.com", phone:"+5812321321321", img:rigoImage},
				{name:"Arnaldo", address:"Venezuela", email:"arnaldo@4geeks.com", phone:"+5812321321321", img:rigoImage},
				{name:"Arnaldo", address:"Venezuela", email:"arnaldo@4geeks.com", phone:"+5812321321321", img:rigoImage}
			],
			numero:221
		},
		actions: {
			addContact:(contact)=>{
				// AGregar validacion para que no admita valores vacios
				let store=getStore()
				let newContacts=[...store.contacts,{...contact, img:rigoImage}]
				setStore({contacts:newContacts})
			},
			delContact:(index)=>{
				let newContacts=[...getStore().contacts]
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
			},
			updateContact:(data, index)=>{
			let newContacts=[...getStore().contacts]
			newContacts[index]= {...data, img:rigoImage}
			setStore({contacts:newContacts})
			
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
