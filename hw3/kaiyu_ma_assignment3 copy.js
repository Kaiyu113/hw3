//part1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function createth(ele) {
  let th = document.createElement(`th`);
  th.textContent = ele;
  return th;
}

function createtd(ele) {
  let td = document.createElement(`td`);
  td.textContent = ele;
  return td;
}

const Num1 = document.querySelector(`#Num1`);
const Num2 = document.querySelector(`#Num2`);
const Num3 = document.querySelector(`#Num3`);
const Num4 = document.querySelector(`#Num4`);
const Num5 = document.querySelector(`#Num5`);

const Num21 = Object.values(tableInfo.tableContent[0]);
const Num22 = Object.values(tableInfo.tableContent[1]);
const Num23 = Object.values(tableInfo.tableContent[2]);
const Num24 = Object.values(tableInfo.tableContent[3]);

tableInfo.tableHeader.forEach((ele) => {
  Num1.appendChild(createth(ele));
});

Num21.forEach((ele) => {
  Num2.appendChild(createtd(ele));
});

Num22.forEach((ele) => {
  Num3.appendChild(createtd(ele));
});
Num23.forEach((ele) => {
  Num4.appendChild(createtd(ele));
});
Num24.forEach((ele) => {
  Num5.appendChild(createtd(ele));
});
