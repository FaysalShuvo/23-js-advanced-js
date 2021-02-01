const students = [
  { id: 21, name: "faisal" },
  { id: 31, name: "shush" },
  { id: 41, name: "Islam" },
  { id: 61, name: "Nil" },
];

const names = students.map((s) => s.name);
console.log(names);
const ids = students.filter((x) => x.id > 31);
console.log(ids);
