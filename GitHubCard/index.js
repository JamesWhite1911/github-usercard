import axios from "axios"; //import axios

const entryPoint = document.querySelector('.cards'); //where we want to insert our html

function getUser() {
  axios
    .get('https://api.github.com/users/jameswhite1911') //grab the api
    .then((res) => {
      const data = res.data; //find our data
      console.log("OUR DATA", res.data); //log the data we found
      const userCard = cardMaker({data}); //pass data to our card maker as an object
      console.log(userCard); //log our card heirarchy to make sure we have all the elements
      entryPoint.append(userCard); //append our card to the html where we want it
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

function cardMaker(obj) {
  const info = obj.data;
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
  const bio = document.createElement('p');

  //adding class names
  card.classList.add('card');
  image.src = info.avatar_url;
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  gitUrl.href = info.html_url;

  //text areas
  location.textContent = `Location: ${info.location}`;
  profile.textContent = "Profile: ";
  gitUrl.textContent = info.html_url;
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following: ${info.following}`;
  bio.textContent = info.bio;

  //append our heirarchy
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(gitUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

getUser();

function getArrayUsers() {
  followersArray.forEach(user => {
    axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const data = res.data;
      const userCard = cardMaker({data});
      entryPoint.append(userCard);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  });
}
getArrayUsers();