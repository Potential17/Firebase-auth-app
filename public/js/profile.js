const logOut = document.getElementById('logOut');
const createPost = document.getElementById('createPost');
const modifyAccount = document.getElementById('modifyAccount');
const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const auth = firebase.auth();

logOut.addEventListener('click', () => {
    //signOut() is a built in firebase function responsible for signing a user out
    auth.signOut()
    .then(() => {
        window.location.assign('../');
    })
    .catch(error => {
        console.error(error);
    })
})

auth.onAuthStateChanged(user => {
    console.log(user);
})

//Go to modification page
modifyAccount.addEventListener('click', () => {
    window.location.assign('#');
});

//Go to create post page
createPost.addEventListener('click', () => {
    window.location.assign('https://react-create-post17.netlify.app/');
});
