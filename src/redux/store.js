import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
	_state: {
		profilePage: {
			posts: [ { id: 1, message: 'Hi,how are you', likesCount: 0 }, { id: 2, message: 'Hello', likesCount: 23 } ],
			newPostText: ''
		},

		dialogsPage: {
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' }
			],
			dialogs: [
				{ id: 1, name: 'Baga' },
				{ id: 2, name: 'Andre' },
				{ id: 3, name: 'Jon' },	
				{ id: 4, name: 'John' },
				{ id: 5, name: 'Nick' },
				{ id: 6, name: 'Valery' }
			],
			newMessageBody: ''
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('state');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state)
	}
};





export default store;
window.store = store;
