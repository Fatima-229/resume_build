let ref = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
let ref_section = document.getElementById("ref");

ref_btn?.addEventListener("click", () => {
  ref_section!.classList.toggle("hide");
});

let exp = document.getElementById("exp");
let exp_btn = document.getElementById("exp_btn");
let exp_section = document.getElementById("experience");
exp_btn?.addEventListener("click", () => {
  exp_section!.classList.toggle("hide");
});


let lang = document.getElementById("lang");
let lang_btn = document.getElementById("lang_btn");
let lang_section = document.getElementById("lang"); 

lang_btn?.addEventListener("click", () => {
  lang_section!.classList.toggle("hide");
});

let skills = document.getElementById("skills");
let skills_btn = document.getElementById("skills_btn");
let skills_section = document.getElementById("skills"); 

skills_btn?.addEventListener("click", () => {
  skills_section!.classList.toggle("hide");
});

let edu = document.getElementById("edu");
let edu_btn = document.getElementById("edu_btn");
let edu_section = document.getElementById("edu");

edu_btn?.addEventListener("click", () => {
  edu_section!.classList.toggle("hide");
});

let contact = document.getElementById("contact");
let contact_btn = document.getElementById("contact_btn");
let contact_section = document.getElementById("contact");

contact_btn?.addEventListener("click", () => {
  contact_section!.classList.toggle("hide");
});

let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
  window.print();
})