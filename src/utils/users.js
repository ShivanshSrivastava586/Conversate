const users = []

//add user
const addUser = ({id, username, room}) => {
    //cleaning
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //data validation
    if(!username || !room){
        return {
            error: 'Username and Room must be provided'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room===room && user.username===username
    })

    //validate user
    if(existingUser){
        return {
            error: 'Username already takem!'
        }
    }

    //store user
    const user = {id,username,room}
    users.push(user)
    return {user}
}


//remove user
const removeUser = (id) => {
    const idx= users.findIndex((user) => user.id===id) 

    if(idx!=-1){
        return users.splice(idx,1)[0]
    }
}

//get user
const getUser = (id) => {
    const idx = users.findIndex((user) => user.id===id)
    if(idx!=-1){
        return users[idx]
    }
}


//get users in a room
const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}