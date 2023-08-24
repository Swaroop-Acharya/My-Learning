const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const icon = document.querySelector(".fa-solid");
const orderBtn = document.querySelector(".orderBtn");
const countryCard = document.querySelector("[countryCard]");
const cardContainer = document.querySelector("[card-container]");
const search = document.querySelector("#search");
const startBtn = document.querySelector(".startWBtn");
const searchBtn = document.querySelector(".searchAnyBtn");
const searchInput = document.getElementById("search");
let isStartBtnActive = false;
let isSearchAnyActive = false;
let zToA = false;
let users = [];


orderBtn.addEventListener('click', e => {
  icon.classList.toggle('fa-arrow-up-a-z');
  orderBtn.classList.toggle('active');
  zToA = !zToA;

  // Debug console log
  console.log('Order toggled:', zToA);

  // After toggling the order, call the displayCard function again
  displayCard(countries);
});

function displayCard(countries) {
  if (zToA) {
    countries = countries.slice().reverse(); // Create a copy and reverse it
  }
  cardContainer.innerHTML = '';
  users = countries.map((country) => {
    const card = countryCard.content.cloneNode(true).children[0];
    const body = card.querySelector("[body]");
    body.textContent = country;
    cardContainer.appendChild(card);
    return { country: country, element: card };
  });

  // Debug console log
  console.log('Displaying cards:', users);
}

displayCard(countries);


startBtn.addEventListener("click", toggleButtonOne);
searchBtn.addEventListener("click", toggleButtonTwo);

function toggleButtonOne(event) {
  startBtn.classList.toggle("active");
  isStartBtnActive = !isStartBtnActive; // Toggle the boolean value
  console.log(isStartBtnActive); // Log inside the event listener
}

function toggleButtonTwo(event) {
  searchBtn.classList.toggle("active");
  isSearchAnyActive = !isSearchAnyActive; // Toggle the boolean value
  console.log(isSearchAnyActive); // Log inside the event listener
}
search.addEventListener("input", (e) => {
  const value = e.target.value;
  users.forEach((user) => {
    if (isStartBtnActive) {
      const isVisible = user.country.toLowerCase().startsWith(value);
      user.element.classList.toggle("hide", !isVisible);
    } else {
      const isVisible = user.country.toLowerCase().includes(value);
      user.element.classList.toggle("hide", !isVisible);
    }
  });
});
