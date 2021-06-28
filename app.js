// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "./imgs/developer.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "./imgs/designer.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "./imgs/intern.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    { 
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "./imgs/boss.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


const reviewArrLenght = reviews.length;

// select items

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//  set starting item
let currentItem = 0

// load initial object
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
}) ;


// show person based on the item
function showPerson(personItem) {
    const item = reviews[personItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++
    if (currentItem > reviewArrLenght - 1) currentItem = 0
    showPerson(currentItem)
})

// show prev person
prevBtn.addEventListener('click', function() {
    currentItem--
    if (currentItem < 0) currentItem = reviewArrLenght - 1
    showPerson(currentItem)
})

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviewArrLenght)
    showPerson(currentItem)
})