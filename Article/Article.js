// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    //Close button
    this.closeButton = this.domElement.querySelector('.closeButton');
    this.closeButton.textContent = 'close';
    this.closeButton.addEventListener('click', this.closeArticle.bind(this));
  }

  expandArticle() {
    getArticles(); // get the latest NodeList to loop through every article

    // Loop through every article created and close expanded articles when you expand new article
    for (let i = 0; i < articles.length; i++) {
      articles[i].classList.remove('article-open');      
    }
    this.domElement.classList.toggle('article-open');
  }

  closeArticle() {
    this.domElement.classList.remove('article-open');
  }
}

const queSel = selector => document.querySelector(selector);
const headerField = queSel('#title');
const articleField = queSel('#articleText');
const articlesDiv = queSel('.articles');

// Function to create articles and return new Article class
const createArticle = () => {

  const createDiv = (element, classname = "", text = "") => {
    const newDiv = document.createElement(element);
    newDiv.className = classname;
    newDiv.textContent = text;
    articlesDiv.appendChild(newDiv)
    return newDiv
  }

  const createEl = (element, classname = "", text = "") => {
    const newEl = document.createElement(element);
    newEl.className = classname;
    newEl.textContent = text;
    newDiv.appendChild(newEl)
  }

  let newDiv = createDiv('div', 'article');
  let newTitle = createEl('h2', "", headerField.value);
  let newDate = createEl('p', 'date', '30th Jan 2019');
  let newArticle = createEl('p', "", articleField.value);
  let spanExpand = createEl('span', 'expandButton', 'expand');
  let spanClose = createEl('span', 'closeButton', 'close');
  
// reset the text inside textfield after clicking Submit
  headerField.value = '';
  articleField.value = '';

  return new Article(newDiv);
}


// Add functionality to Submit button to createArticle
const theButton = queSel('#submitBtn');
theButton.addEventListener('click', createArticle);

// Select all classes named ".article" and assign that value to the articles variable. 
// Make it a function so you can update the NodeList with latest articles
let articles;
const getArticles = () => {
  return articles = document.querySelectorAll('.article');
};
getArticles();

/*
With your selection in place, now chain .forEach() on to the articles variable 
to iterate over the articles NodeList and create a new instance of Article by passing 
in each article as a parameter to the constructor.
*/
articles.forEach(article => {return new Article(article);})


console.log(articles)
