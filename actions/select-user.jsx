export const selectUser = (user) => { //harus di export biar jadi function
    console.log('you clicked on user: ', user.first);
    return{
        type: 'USER_SELECTED',
        payload: user 
    }
};