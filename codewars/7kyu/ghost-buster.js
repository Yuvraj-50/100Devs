// question url : https://www.codewars.com/kata/5668e3800636a6cd6a000018/train/javascript

// question instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function ghostBusters(building) {
  return !building.includes(" ")
    ? "You just wanted my autograph didn't you?"
    : building
        .split("")
        .filter((elem) => elem !== " ")
        .join("");
}
