import React from 'react'
import {connect } from 'react-redux'
import { fb_login} from '../store/action'
import {get_users} from '../store/action'
import firebase from '../config/firebase'
import { google_login} from '../store/action'

const Chat = () => {
    let user = this.props.current_user
    return (
        <div>
            <h4>welcome {user.name}</h4>
        </div>
    )
}

const mapStateToProps = (state)=>({
    current_user: state.current_user,
    // users: state.users
  })

export default connect(mapStateToProps,null)(Chat)