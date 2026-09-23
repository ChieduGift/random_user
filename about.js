const userCard = document.getElementById('user-card');
const btn = document.getElementById('fetch-user');

async function getUser() {
  userCard.innerHTML = "<p>Loading...</p>";
  try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];

    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User photo">
      <h2>${user.name.first} ${user.name.last}</h2>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Country:</b> ${user.location.country}</p>
      <p><b>Age:</b> ${user.dob.age}</p>
    `;
  } catch (error) {
    userCard.innerHTML = "<p>Failed to load user. Check internet.</p>";
  }
}

btn.addEventListener('click', getUser);

// Load one user once page opens
getUser();