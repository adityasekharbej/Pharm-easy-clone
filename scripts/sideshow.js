let images = [
  {
    image:
      "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fconsumer-app-images.pharmeasy.in%2Fmarketing%2Fcomp_50lac.jpg&w=1200&q=75",
  },
  {
    image:
      "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fconsumer-app-images.pharmeasy.in%2Fmarketing%2Fcomp_cod.jpg&w=1200&q=75",
  },
  {
    image:
      "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fconsumer-app-images.pharmeasy.in%2Fmarketing%2Fcomp_3step.jpg&w=1200&q=75",
  },
  {
    image:
      "https://pharmeasy.in/_next/image?url=https%3A%2F%2Fconsumer-app-images.pharmeasy.in%2Fmarketing%2Fcomp_india_covered.jpg&w=1200&q=75",
  },
];
function display(x) {
  section3.innerHTML = null;

  let img = document.createElement("img");

  img.setAttribute("src", x.image);
  document.querySelector("#section3").append(img);
}

let i = 0;

setInterval(() => {
  if (i == images.length) {
    i = 0;
  }
  var x = images[i];
  display(x);

  i++;
}, 2000);
