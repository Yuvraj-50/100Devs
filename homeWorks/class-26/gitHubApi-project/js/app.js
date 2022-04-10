/////////////////////////////////////// theme switcher //////////////////////////////////
const togglers = document.querySelectorAll(".theme-switcher");
const body = document.querySelector("body");
const sun = document.querySelector(".light");
const moon = document.querySelector(".dark");

function themeSwitcher() {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
}

togglers.forEach((toggler) => {
  toggler.addEventListener("click", function () {
    body.classList == "dark-theme" ? themeSwitcher() : themeSwitcher();
  });
});

////////////////////////////////////// gettting and displaying user/////////////////////
const card = document.querySelector(".card");

function getUserData(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => {
      renderCard(data);
      console.log(data);
    });
}

function renderCard(data) {
  const html = `
        <div class="profile-img-area">
        <img src="https://img.icons8.com/color/150/000000/circled-user-male-skin-type-4--v1.png" />
        </div>
        <div class="stats-area">
        <div class="name-details">
            <div class="user-name-details">
                <h2 class="name">Yuvraj-50</h2>
                <p class="user-name">@Yuvraj-50</p>
                <p class="bio">This profile has no bio</p>
            </div>
            <div class="joined-date">
                <p class="date">joined 20 dec 2021</p>
            </div>
        </div>
        <div class="user-followers-detail">
            <div class="repo">
                <p>Repo</p>
                <h4>22</h4>
            </div>
            <div class="followers">
                <p>followers</p>
                <h4>2000</h4>
            </div>
            <div class="following">
                <p>following</p>
                <h4>100</h4>
            </div>
        </div>

        <div class="social">
            <div class="location-con social-item">
                <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </svg>

                <p class="location">chennai , india</p>
            </div>
            <div class="website social-item">
                <svg class="website-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>

                <a href="yuvraj-me.netlify.com">yuvraj-me.netlify.com</a>
            </div>
            <div class="twitter social-item">
                <svg class="twitter-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                    </path>
                </svg>

                <a href="https://yuvraj505">yuvraj505</a>
            </div>
            <div class="company social-item">
                <svg class="company" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                    <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
                </svg>

                <p class="company">No company</p>
            </div>
        </div>

        </div>
    `;

  card.insertAdjacentHTML("beforeend", html);
}

getUserData("yuvraj");
