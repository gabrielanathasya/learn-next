import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/select-user.jsx'

class UserList extends Component{
    constructor(){
        super();
    }

    render(){
         return (
            <ul>
                {this.props.users.map(
                    user => 
                    <li key={user.id} onClick={() => this.props.selectUser(user)}>
                        {user.first} {user.last}
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => { //passing state dari store jadi props di component 
    return {
        users: state.users //buat ngefilter yg di pass user aja, jgn semua data yg ada
        //state.users itu udah di define di allReducers sbg reducerUsers, dijadiin props bernama "users" pada component 
    }
}

const mapDispatchToProps = (dispatch) => { //passing action (dispatch) jadi props pada component
    return bindActionCreators({selectUser: selectUser}, dispatch) //{props bernama selectUser: action selectUser}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)