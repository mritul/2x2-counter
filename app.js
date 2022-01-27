const value1 = document.querySelector(".value1");
const inc1 = document.querySelector(".inc1");
const dec1 = document.querySelector(".dec1");
const res1 = document.querySelector(".res1");
const value2 = document.querySelector(".value2");
const inc2 = document.querySelector(".inc2");
const dec2 = document.querySelector(".dec2");
const res2 = document.querySelector(".res2");
const value3 = document.querySelector(".value3");
const inc3 = document.querySelector(".inc3");
const dec3 = document.querySelector(".dec3");
const res3 = document.querySelector(".res3");
const value4 = document.querySelector(".value4");
const inc4 = document.querySelector(".inc4");
const dec4 = document.querySelector(".dec4");
const res4 = document.querySelector(".res4");

// Counter 1

// Increasing value
inc1.addEventListener("click", function () {
  value1.innerHTML = parseInt(value1.textContent, 10) + 1;
  const value = parseInt(value1.textContent, 10);
  if (value < 0) {
    value1.style.color = "red";
  } else if (value > 0) {
    value1.style.color = "green";
  } else {
    value1.style.color = "black";
  }
});

// Decreasing value
dec1.addEventListener("click", function () {
  value1.innerHTML = parseInt(value1.textContent, 10) - 1;
  const value = parseInt(value1.textContent, 10);
  if (value < 0) {
    value1.style.color = "red";
  } else if (value > 0) {
    value1.style.color = "green";
  } else {
    value1.style.color = "black";
  }
});

// Resetting value
res1.addEventListener("click", function () {
  value1.innerHTML = "0";
  const value = parseInt(value1.textContent, 10);
  if (value < 0) {
    value1.style.color = "red";
  } else if (value > 0) {
    value1.style.color = "green";
  } else {
    value1.style.color = "black";
  }
});
// Counter 2

// Increasing value
inc2.addEventListener("click", function () {
  value2.innerHTML = parseInt(value2.textContent, 10) + 1;
  const value = parseInt(value2.textContent, 10);
  if (value < 0) {
    value2.style.color = "red";
  } else if (value > 0) {
    value2.style.color = "green";
  } else {
    value2.style.color = "black";
  }
});

// Decreasing value
dec2.addEventListener("click", function () {
  value2.innerHTML = parseInt(value2.textContent, 10) - 1;
  const value = parseInt(value2.textContent, 10);
  if (value < 0) {
    value2.style.color = "red";
  } else if (value > 0) {
    value2.style.color = "green";
  } else {
    value2.style.color = "black";
  }
});

// Resetting value
res2.addEventListener("click", function () {
  value1.innerHTML = "0";
  const value = parseInt(value2.textContent, 10);
  if (value < 0) {
    value2.style.color = "red";
  } else if (value > 0) {
    value2.style.color = "green";
  } else {
    value2.style.color = "black";
  }
});
// Counter 3

// Increasing value
inc3.addEventListener("click", function () {
  value3.innerHTML = parseInt(value3.textContent, 10) + 1;
  const value = parseInt(value3.textContent, 10);
  if (value < 0) {
    value3.style.color = "red";
  } else if (value > 0) {
    value3.style.color = "green";
  } else {
    value3.style.color = "black";
  }
});

// Decreasing value
dec3.addEventListener("click", function () {
  value3.innerHTML = parseInt(value3.textContent, 10) - 1;
  const value = parseInt(value3.textContent, 10);
  if (value < 0) {
    value3.style.color = "red";
  } else if (value > 0) {
    value3.style.color = "green";
  } else {
    value3.style.color = "black";
  }
});

// Resetting value
res3.addEventListener("click", function () {
  value3.innerHTML = "0";
  const value = parseInt(value3.textContent, 10);
  if (value < 0) {
    value3.style.color = "red";
  } else if (value > 0) {
    value3.style.color = "green";
  } else {
    value3.style.color = "black";
  }
});

// Counter 4

// Increasing value
inc4.addEventListener("click", function () {
  value4.innerHTML = parseInt(value4.textContent, 10) + 1;
  const value = parseInt(value4.textContent, 10);
  if (value < 0) {
    value4.style.color = "red";
  } else if (value > 0) {
    value4.style.color = "green";
  } else {
    value4.style.color = "black";
  }
});

// Decreasing value
dec4.addEventListener("click", function () {
  value4.innerHTML = parseInt(value4.textContent, 10) - 1;
  const value = parseInt(value4.textContent, 10);
  if (value < 0) {
    value4.style.color = "red";
  } else if (value > 0) {
    value4.style.color = "green";
  } else {
    value4.style.color = "black";
  }
});

// Resetting value
res4.addEventListener("click", function () {
  value4.innerHTML = "0";
  const value = parseInt(value4.textContent, 10);
  if (value < 0) {
    value4.style.color = "red";
  } else if (value > 0) {
    value4.style.color = "green";
  } else {
    value4.style.color = "black";
  }
});
