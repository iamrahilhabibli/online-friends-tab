const peopleData = [
  {
    name: "Alex",
    age: 21,
    gender: "male",
    distance: "0.95Km",
    status: "Online",
    imgSrc: "./images/maleicon.jpeg",
  },
  {
    name: "Brad Mondon",
    age: 32,
    gender: "male",
    distance: "3.97km",
    status: "Online",
    imgSrc: "./images/maleicon.jpeg",
  },
  {
    name: "Meagan",
    age: 25,
    gender: "male",
    distance: "1.25km",
    status: "Offline",
    imgSrc: "./images/maleicon.jpeg",
  },
  {
    name: "John Bolton",
    age: 23,
    gender: "male",
    distance: "2.05km",
    status: "Offline",
    imgSrc: "./images/maleicon.jpeg",
  },
  {
    name: "Alisa Cha",
    age: 27,
    gender: "female",
    distance: "2.42Km",
    status: "Online",
    imgSrc: "./images/femaleicon.png",
  },
  {
    name: "Mike Lane",
    age: 29,
    gender: "female",
    distance: "1.90Km",
    status: "Offline",
    imgSrc: "./images/femaleicon.png",
  },
  {
    name: "Scarlett Wilson",
    age: 23,
    gender: "female",
    distance: "3.01Km",
    status: "Online",
    imgSrc: "./images/femaleicon.png",
  },
  {
    name: "Rose Mary",
    age: 26,
    gender: "female",
    distance: "2.58Km",
    status: "Online",
    imgSrc: "./images/femaleicon.png",
  },
];

const maleData = peopleData.filter((person) => person.gender === "male");
const femaleData = peopleData.filter((person) => person.gender === "female");
const allData = [...peopleData];

const container = document.querySelector(".main__container");

const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Tabs";
container.appendChild(title);

const genderContainer = document.createElement("div");
genderContainer.classList.add("gender__container");

const genderTabs = document.createElement("ul");

const genders = ["male", "female", "both"];
for (const gender of genders) {
  const tab = document.createElement("li");
  tab.dataset.tab = gender;
  tab.textContent = gender.charAt(0).toUpperCase() + gender.slice(1);
  genderTabs.appendChild(tab);
}

genderContainer.appendChild(genderTabs);
container.appendChild(genderContainer);

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("body__container");

const peopleList = document.createElement("ul");

for (const person of peopleData) {
  const personContainer = document.createElement("li");
  personContainer.classList.add(
    "person__container",
    person.gender,
    person.status.toLowerCase()
  );

  const person_tab = document.createElement("div");
  person_tab.classList.add("person_tab");

  const person_tab_left = document.createElement("div");
  person_tab_left.classList.add("person_tab_left");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img__container");

  const img = document.createElement("img");
  img.src = person.imgSrc;

  const person_data = document.createElement("div");
  person_data.classList.add("person_data");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = `${person.name}, ${person.age}`;

  const distance = document.createElement("p");
  distance.classList.add("distance");
  distance.textContent = person.distance;

  const person_tab_right = document.createElement("div");
  person_tab_right.classList.add("person_tab_right");

  const status = document.createElement("div");
  status.classList.add("status");
  status.textContent = person.status;

  imgContainer.appendChild(img);
  person_data.appendChild(name);
  person_data.appendChild(distance);
  person_tab_left.appendChild(imgContainer);
  person_tab_left.appendChild(person_data);
  person_tab_right.appendChild(status);
  person_tab.appendChild(person_tab_left);
  person_tab.appendChild(person_tab_right);
  personContainer.appendChild(person_tab);
  peopleList.appendChild(personContainer);
}

bodyContainer.appendChild(peopleList);
container.appendChild(bodyContainer);

const hrElements = document.querySelectorAll("hr");
hrElements.forEach((hr) => {
  hr.classList.add("hr");
});

const maleTab = document.querySelector("[data-tab='male']");
const femaleTab = document.querySelector("[data-tab='female']");
const bothTab = document.querySelector("[data-tab='both']");

maleTab.addEventListener("click", () => {
  filterPeople("male");
});

femaleTab.addEventListener("click", () => {
  filterPeople("female");
});

bothTab.addEventListener("click", () => {
  filterPeople("both");
});

function filterPeople(gender) {
  const people = document.querySelectorAll(".person__container");
  people.forEach((person) => {
    if (gender === "both" || person.classList.contains(gender)) {
      person.style.display = "block";
    } else {
      person.style.display = "none";
    }
  });
  localStorage.setItem("selectedGender", gender);
}
const selectedGender = localStorage.getItem("selectedGender");
if (selectedGender) {
  filterPeople(selectedGender);
}
