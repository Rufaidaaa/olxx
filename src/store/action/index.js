
import Firebase from '../../config/firebase'
import firebase from 'firebase'
import { ContactSupportOutlined } from '@material-ui/icons'

const set_data=(payload) =>{
    return (dispatch) =>{
        
        dispatch({ type: "SETDATA", payload: {name: "ghous"}})
        

    }
}

const fb_login=()=>{
    
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            let create_user={
                name: user.displayName,
                email:user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({ type: "SETUSER",payload: create_user})
                alert("user login successfully")
                
                // history.push('/chat')
            })
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          
          });
    }
}

const get_users=()=>{
    return(dispatch) =>{
        let users=[]
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
            
        })
        dispatch({ type:"SETFIREBASEUSERS", payload: users})
    }
}


const google_login=()=>{
    return (dispatch)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            let create_user={
                name: user.displayName,
                email:user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({ type: "SETUSER",payload: create_user})
                alert("user login successfully")
                
                // history.push('/chat')
            })
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
}



export {
    set_data,
    fb_login,
    google_login,
    get_users
}