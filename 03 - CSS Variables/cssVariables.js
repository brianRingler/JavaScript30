// select all elements with class controls and element input
const inputs = document.querySelectorAll(".controls input");

// create a function that creates a suffix "px" or blank
// set the style of the element by using its name
// change the value by adding
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// listen for each element input to be clicked and call handleUpdate when it is clicked
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
