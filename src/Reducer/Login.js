export default function login(state={}, action) {
    switch(action.type) {
        case 'LOGIN':
            fetch('http://localhost:1337/auth/login', {
                method: 'POST',
                body: {
                    email: action.data.username,
                    password: action.data.password
                }
            })
            .then(response => {
                console.log(response.status)
            })
            .catch(error => console.log(error));
        default:
            return state;
    }
}