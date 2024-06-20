document.body.classList.add("dark");

const checkbox = document.getElementById("checkbox");
checkbox.checked = true;

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
