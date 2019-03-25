import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(<h4>Select a user...</h4>);
        }
        else{
            return (
                <h3>age: {this.props.user.age}</h3>
            );
        }
    }
}


const mapStateToProps = (state) => {  
    return {
        user: state.activeUser 
    }
}

export default connect(mapStateToProps)(UserDetail)