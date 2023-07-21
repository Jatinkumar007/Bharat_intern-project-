let url = "https://mocki.io/v1/9ee594b1-a4ff-40ac-a9f0-6591582998dd";
let box = document.getElementById("product-container");
let box2 = document.getElementById("newproduct-container");
let startingIndex = 10;

container();

function container() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.map((val)=>{
        let img = document.createElement("img");
        img.classList.add(val.id)
        img.src=val.url;
        box.appendChild(img);
        console.log(val.url)
      })
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

newcontainer();

function newcontainer() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const slicedData = data.slice(startingIndex); // Slice the data starting from the desired position
      slicedData.forEach(val => {
        let img = document.createElement("img");
        img.classList.add(val.id)
        img.src = val.url;
        box2.appendChild(img);
        console.log(val.url)
      })
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}