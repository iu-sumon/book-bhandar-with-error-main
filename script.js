
// ১. কিছু বই এর ছবি সহ কার্ড থাকবে।

// ২. কার্ডের মধ্যে লিখা থাকতেই হবে।

// ৩. লেখা কার্ড এর বাইরে যাওয়া যাবেনা।

// ৪. wishlist এ আগে থেকে কার্ড এড হয়ে থাকছে। এটা হতে দেওয়া যাবেনা।

// ৫. এক পেজ থেকে অন্য পেজে গেলে কার্ড এর সংখ্য বেড়ে যায়। এটা থামাতে হবে।

// ৬. Add to cart কাজ করেনা।

//...................................Load data......................
const bookList = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2019.png",
    name: "Eloquent JavaScript",
    overview: "Lorem, ipsum dolor sit amet",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2020.png",
    name: "O'REILLY Learning React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2021.png",
    name: "The Road To React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2022.png",
    name: "C Programming Language",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2023.png",
    name: "Effective Typescript",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2025.png",
    name: "JavaScript Everywhere",
    overview: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const wishlistItems = [];
 
const cart = [];

//....................................get wish cart......................\\

const getWishlistItems = () => {
  return bookList.filter(book => wishlistItems.includes(book.id.toString())); //........bujhi nai
};

//....................................get add  cart......................\\
const getCartItems = () => {
  return bookList.filter(book => cart.includes(book.id.toString())); // bujhi nai 
};


const switchTab = (id) => {

  if (id === "container") {
    document.getElementById("container").style.display = "grid";
    document.getElementById("wishlist").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  else if (id === "wishlist") {
    document.getElementById("wishlist").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("cart").style.display = "none";


  }
  else {
    document.getElementById("cart").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("wishlist").style.display = "none";

  }
};

//...................................always display card..................\\
const showBooks = (books) => {

  const bookContainer = document.getElementById("container");

  books.forEach((book) => {

    const div = createCard(book);

    bookContainer.appendChild(div);
  });
};

const createCard = (book) => {

  const div = document.createElement("div");
  div.classList.add("card");

  let overview;
  if (book.overview.length > 100) {
    overview = book.overview.slice(0, 100) + '....';
  }
  else {
    overview = book.overview.slice(0, 50) + '...';
  }

  div.innerHTML = `
              <div class="image-container">
                <img src="${book.image}" alt=""/>

                <div class="button-container">

                  <button onclick="addToWishlist('${book.id}')" class="button"><i class="fa-solid fa-heart"></i></button>
                  <button onclick="addToCart('${book.id}')" class="button">Add To Cart</button>

                </div>

              </div>

              <div class="info-container">
                <h1>${book.name}</h1>
                <p>${overview}</p>
              </div>
              `;

  return div;
};

showBooks(bookList);
//...................................always display card..................\\



//...............................Add to cart..................\\
const addToCart = (id) => {
 
    cart.push(id);
    displayCart();
  

};

//................................Add to wish List.............\\
const addToWishlist = (id) => {
  console.log(id);

  if (wishlistItems.indexOf(id) === -1) {
    wishlistItems.push(id);
  }
  else{
    alert('Hey ! You already added this.')
  }

displayWishlist();

};
//...........................display cart........................\\
const displayCart = () => {
  document.getElementById("cart").innerHTML='';
  const cart = getCartItems();
  //console.log(cart);

  cart.forEach((book) => {
    const div = createCard(book);
    document.getElementById("cart").appendChild(div);
  });
};

//..........................display wish list .................\\
const displayWishlist = () => {
  document.getElementById("wishlist").innerHTML='';
  const wish = getWishlistItems();
  wish.forEach(book => {
    const div = createCard(book);
    document.getElementById("wishlist").appendChild(div);

  });
};
