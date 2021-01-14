/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios"; //import axios

const entryPoint = document.querySelector('.cards'); //where we want to insert our html

function getUser() {
  axios
    .get('https://api.github.com/users/jameswhite1911') //grab the api
    .then((res) => {
      const info = res.data; //found our info
      console.log("OUR DATA", res.data);
      const userCard = cardMaker({info}); //pass info to our card maker as an object
      console.log(userCard);
      entryPoint.append(userCard); //append our card to the entry point
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userCount = document.createElement('p');
  const bio = document.createElement('p');

  //lets put our appends here
  card.classList.add('card');
  image.src = obj; //find our image in the api
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  gitUrl.href = obj; //find our git url

  //text areas
  location.textContent.add("Location: ${obj.location}"); //find our location in the api
  profile.textContent.add('Profile: ');
  gitUrl.textContent.add('${obj}') //find our git url
  followers.textContent.add('${obj}'); //find our followers
  following.textContent.add('${obj}'); //find who we're following
  userCount.textContent.add('${obj}'); //find our user count
  bio.textContent.add('${obj}') //find our bio


  return card;
}

getUser();

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
