let products = {
    data: [
      {
        productName: "White Couch",
        category: "Furniture",
        price: "30",
        image: "white-couch.jpeg",
      },
      {
        productName: "Black Couch",
        category: "Furniture",
        price: "49",
        image: "black-couch.jpeg",
      },
      {
        productName: "Red Chair",
        category: "Furniture",
        price: "99",
        image: "red-chair.jpeg",
      },
      {
        productName: "Blue Jeans",
        category: "Clothing",
        price: "29",
        image: "jeans-1.jpeg",
      },
      {
        productName: "Black Jeans",
        category: "Clothing",
        price: "129",
        image: "black-jeans.jpeg",
      },
      {
        productName: "Black Jacket",
        category: "Clothing",
        price: "89",
        image: "dior-jacket.jpeg",
      },
      {
        productName: "Gucci Glasses",
        category: "Accesories",
        price: "189",
        image: "gucci-glasses.jpeg",
      },
      {
        productName: "Omega Glasses",
        category: "Accesories",
        price: "49",
        image: "omega-glasses.jpeg",
      },
      {
        productName: "Prada Glasses",
        category: "Accesories",
        price: "49",
        image: "prada-glasses.jpeg",
      },
      {
        productName: "Oakley Glasses",
        category: "Accesories",
        price: "49",
        image: "oakley-glasses.jpeg",
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };