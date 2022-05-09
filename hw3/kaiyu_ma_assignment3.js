//part2 order & unorderlist
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createli(ele) {
  let li = document.createElement(`li`);
  li.textContent = ele;
  return li;
}

const orderlist = document.querySelector(`#orderlist`);
const unorderlist = document.querySelector(`#unorderlist`);

list.forEach((ele) => {
  orderlist.appendChild(createli(ele));
});

list.forEach((ele) => {
  unorderlist.appendChild(createli(ele));
});

//part3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function createoption(ele) {
  let option = document.createElement(`option`);
  option.textContent = ele.value;
  return option;
}

const select = document.querySelector(`#select`);

dropDownList.forEach((ele) => {
  select.appendChild(createoption(ele));
});
