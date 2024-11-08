const div = document.createElement("div");
div.id = "div";
div.style.background = "Yellow";
document.body.appendChild(div);
const para = document.createElement("p");
para.id = "para-1";
para.style.color = "red";
para.innerText = "This is First Paragraph";
div.appendChild(para);
console.log("hello");

