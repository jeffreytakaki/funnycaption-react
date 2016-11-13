import React from 'react'

export default class SignIn extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			uid: '',
			displayName: '',
			email: '',
			loggedIn: 'Sign In'

		}
		this.toggleSignIn = this.toggleSignIn.bind(this)
		this.saveUser = this.saveUser.bind(this)


		var config = {
			apiKey: "AIzaSyDl-d0I6Ofgk_xMi-F6FJwW944qGn7RbB8",
			authDomain: "familyalbum-3553a.firebaseapp.com",
			databaseURL: "https://familyalbum-3553a.firebaseio.com",
			storageBucket: "familyalbum-3553a.appspot.com",
			messagingSenderId: "272805338671"
		};
		firebase.initializeApp(config);
		var database = firebase.database();
	}

    toggleSignIn() {
    	var self = this

		if (!firebase.auth().currentUser) {
			var provider = new firebase.auth.FacebookAuthProvider();
			provider.addScope('user_birthday');
			firebase.auth().signInWithPopup(provider).then(function(result) {
				console.log(result)
				var token = result.credential.accessToken;
				var user = result.user;
				document.cookie = ''
				//return something back like  UID
				//why isn't this working?
				user.loggedIn = "Sign Out"
				console.log(self)
				self.saveUser(user)
				// database.ref('users').push({
				// 	profilePhoto: user.photoURL,
				// 	displayName: user.displayName,
				// 	email: user.email
				// });
				
			}).catch(function(error) {
				
				var errorCode = error.code;
				var errorMessage = error.message;
				
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// [START_EXCLUDE]
				if (errorCode === 'auth/account-exists-with-different-credential') {
					alert('You have already signed up with a different auth provider for that email.');
					// If you are using multiple auth providers on your app you should handle linking
					// the user's accounts here.
				} else {
					console.error(error);
				}
				// [END_EXCLUDE]
			});
		} else {
			firebase.auth().signOut();
		}
		
    }
    // [END buttoncallback]

    toggleSignOut() {
    	firebase.auth().signOut();
    }

    saveUser(user) {
    	
		this.setState({
			loggedIn: user.loggedIn,
			uid: user.uid,
			photoURL: user.photoURL,
			displayName: user.displayName,
			email: user.email
		})

		console.log(this.state)

		// need logic to only create new user if user hasn't already been created already. 
		// use uid

		database.ref('users').push({
			profilePhoto: user.photoURL,
			displayName: user.displayName,
			email: user.email
		});


    }


	render() {
		
		return (
			<div>
				<img src={this.state.photoURL} width="100" height="60"/>
				<button onClick={this.toggleSignIn}>{this.state.loggedIn}</button>
			</div>
		)
		
	}



}