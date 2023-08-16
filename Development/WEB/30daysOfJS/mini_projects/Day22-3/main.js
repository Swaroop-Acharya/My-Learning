const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
        ["📚", "MSc. Computer Science Ongoing"],
  ["🎓", "BSc. Information and Communication Eng."],
  ["🍏", "MSc. Food Technology"],       // 🍏 represents Food Technology
  ["🍔", "BSc. Food Technology"],       // 🍔 represents Food Technology
      ],
      
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin fa-2x">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square fa-2x"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square fa-2x"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};
//reset
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";

//container
const container = document.querySelector(".wrapper");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";

//Header section
const header = document.createElement("header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "column ";
container.appendChild(header);
//h1
const h3 = document.createElement("h1");
h3.innerHTML = `${asabenehChallenges2020.description} in <span id="year">${asabenehChallenges2020.challengeYear}</span>`;
header.appendChild(h3);
// year styling
const year = document.querySelector("#year");
year.style.fontSize = "50px";
function randomColorGen() {
  const characters = "0123456789ABCDEF";
  const len = characters.length;
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * len)];
  }
  return hexCode;
}
function changeYearColor() {
  setInterval(() => {
    year.style.color = `${randomColorGen()}`;
  }, 1000);
}
changeYearColor();
//link
const link = document.createElement("a");
console.log(link);
link.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;
link.href = "https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master";
link.style.display = "block";
link.target = "_blank";
link.style.fontSize = "20px";
link.style.color = "black";
header.appendChild(link);
//Date time button design
const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const p = document.createElement("p");
p.textContent = `${
  monthsArray[date.getMonth()]
} ${date.getDate()},${date.getFullYear()} ${date.toLocaleTimeString()}`;
header.appendChild(p);
p.style.border = "1px solid black";
p.style.padding = "8px";
p.style.fontWeight = "600";
function changeDateColor() {
  setInterval(() => {
    p.style.backgroundColor = `${randomColorGen()}`;
  }, 1000);
}
changeDateColor();

//Main

const main = document.createElement("main");
container.appendChild(main);

//section 1 (challenges)
const section1 = document.createElement("section");
main.appendChild(section1);

//Ul
const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.flexDirection = "column";
ul.style.gap = "0.4rem";
section1.appendChild(ul);

//LI'S
function challengeList() {
  list.classList.add("list-item");
  list.style.display = "flex";
  list.style.padding = "10px";
  list.style.width = "700px";
  list.style.paddingLeft = "20px";
  list.style.paddingRight = "20px";
  list.style.justifyContent = "space-between";
  ul.appendChild(list);
}

function challengeLink(list) {
  const para = document.createElement("p");
  list.appendChild(para);
  const anchor = document.createElement("a");
  anchor.textContent = `${challenge.name}`;
  anchor.href = `${challenge.githubUrl}`;
  para.appendChild(anchor);
}

function challengeDetails(list) {
  const pTag = document.createElement("p");
  list.appendChild(pTag);
  const details = document.createElement("details");
  pTag.append(details);
  const summary = document.createElement("summary");
  summary.textContent = `${challengeName(challenge.name)}`;
  details.append(summary);
  const p = document.createElement("p");
  let uls = topicsArr(challenge.topics);
  uls.style.paddingLeft = "0";
  p.appendChild(uls);
  details.appendChild(p);
  console.log(list);
}

function challengeStatus(list) {
  const statusPara = document.createElement("p");
  statusPara.textContent = `${challenge.status}`;
  list.appendChild(statusPara);
}
function topicsArr(arr) {
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  for (const topic in arr) {
    const li = document.createElement("li");
    li.textContent = arr[topic];
    ul.appendChild(li);
  }
  // console.log(ul)
  return ul;
}

function challengeName(name) {
  return name.slice(10);
}

function backgroundColor(list, status) {
  if (status === "Done") {
    list.style.backgroundColor = "#00FF7F";
  } else if (status === "Ongoing") {
    list.style.backgroundColor = "yellow";
  } else {
    list.style.backgroundColor = "#FF5733";
  }
}
const challengesLength = asabenehChallenges2020.challenges.length;
for (challenge of asabenehChallenges2020.challenges) {
  list = document.createElement("li");
  challengeList(list);
  challengeLink(list);
  challengeDetails(list);
  challengeStatus(list);
  backgroundColor(list, challenge.status);
}

//section 2 About me
const section2 = document.createElement("section");
section2.style.display = "flex";
section2.style.alignItems = "center";
section2.style.justifyContent = "center";
section2.style.flexDirection = "column";
main.appendChild(section2);

function aboutMe() {
  const h2 = document.createElement("h2");
  h2.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
  section2.appendChild(h2);
  const socialLinks = asabenehChallenges2020.author.socialLinks;
  const p = document.createElement("span");
  socialsLogo(p, socialLinks);
  section2.appendChild(p);

  const descriptionPara=document.createElement('p')
  descriptionPara.textContent=`${asabenehChallenges2020.author.bio}`
  descriptionPara.style.textAlign='center'
  descriptionPara.style.width='80ch'
  console.log(descriptionPara)
  section2.appendChild(descriptionPara)
}

function socialsLogo(p, socialLinks) {
  for (social of socialLinks) {
    const archor = document.createElement("a");
    archor.href = `${social.url}`;
    archor.style.padding = "2px";
    archor.innerHTML = `${social.fontawesomeIcon}`;
    p.appendChild(archor);
    console.log(archor);
  }
}

aboutMe();

//section 3 skills
const section3=document.createElement('section')
section3.style.display = "flex";
section3.style.justifyContent = "space-between";
main.appendChild(section3)


function skillsSection(){
   
    const div1=document.createElement('div')
    console.log(asabenehChallenges2020.author.titles)
    const map1=new Map(asabenehChallenges2020.author.titles)
    titleDiv("Title",div1,map1)
    section3.appendChild(div1)

    const div2=document.createElement('div')
    const skillsArr=asabenehChallenges2020.author.skills
    skillsDiv("Skills",div2,skillsArr)
    section3.appendChild(div2)

    const div3=document.createElement('div')
    const map2=new Map(asabenehChallenges2020.author.qualifications)
    titleDiv("Title",div3,map2)
    section3.appendChild(div3)
}
function titleDiv(title,div,map){
    const h3=document.createElement('h3')
    h3.textContent=`${title}`
    div.appendChild(h3)
    const ul=document.createElement('ul')
    ul.style.paddingLeft='0'
    ul.style.listStyle='none'
    div.appendChild(ul)
    map.forEach((ele,i)=>{
        const titleList=document.createElement('li')
        titleList.textContent=`${i} ${ele}`
        ul.appendChild(titleList)
    })
}
function skillsDiv(title,div,array){
    const h3=document.createElement('h3')
    h3.textContent=`${title}`
    div.appendChild(h3)
    const ul=document.createElement('ul')
    ul.style.paddingLeft='0'
    ul.style.listStyle='none'
    div.appendChild(ul)
    for(skill in array){
        const skillList=document.createElement('li')
        skillList.innerHTML=`&#9989; ${array[skill]}`
        ul.appendChild(skillList)
    }
}

skillsSection()

//section 4 keywords

const section4=document.createElement('section')

main.appendChild(section4)


function keywordsSection(){
    const h3=document.createElement('h3')
    h3.textContent="Keywords"
    section4.appendChild(h3)
    const mainDiv=document.createElement('div')
    mainDiv.style.display='flex'
    mainDiv.style.flexWrap='wrap'
    mainDiv.style.justifyContent='center'
    mainDiv.style.alignItems='center'
    mainDiv.style.gap='0.5rem'
    mainDiv.style.width="530px"
    const keyArr=asabenehChallenges2020.keywords
    keywordsAdder(mainDiv,keyArr)


    
    section4.appendChild(mainDiv)
}

function randomColorGen() {
    const characters = "0123456789ABCDEF";
    const len = characters.length;
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += characters[Math.floor(Math.random() * len)];
    }
    return hexCode;
  }
function keywordsAdder(div,arr){
    arr.forEach((key,i)=>{
        const keyDiv=document.createElement('div')
        keyDiv.textContent=`#${key}`
        keyDiv.style.backgroundColor=randomColorGen()
        keyDiv.style.padding='6px'
        keyDiv.style.paddingRight='20px'
        keyDiv.style.borderRadius='50px'
        div.appendChild(keyDiv)
    })
    
}

keywordsSection()
