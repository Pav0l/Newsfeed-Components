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
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    for (let i = 0; i < articles.length; i++) {
      console.log(articles[i]);
      articles[i].classList.remove('article-open');      
    }
    this.domElement.classList.toggle('article-open');
  }
  closeArticle() {
    this.domElement.classList.remove('article-open');
  }
}

/* START HERE:
- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable 
to iterate over the articles NodeList and create a new instance of Article by passing 
in each article as a parameter to the constructor.
*/

const headerField = document.querySelector('#title');
const articleField = document.querySelector('#articleText');
const articlesDiv = document.querySelector('.articles');


const createArticle = () => {
  const newDiv = document.createElement('div');
  newDiv.className = 'article';
  articlesDiv.appendChild(newDiv);
  
  const newTitle = document.createElement('h2');
  newTitle.textContent = headerField.value;
  newDiv.appendChild(newTitle);
  
  const newDate = document.createElement('p');
  newDate.textContent = 'Jan 30th, 2019';
  newDate.className = 'date';
  newDiv.appendChild(newDate);
  
  const newArticle = document.createElement('p');
  newArticle.textContent = articleField.value;
  newDiv.appendChild(newArticle);
  
  const spanExpand = document.createElement('span');
  spanExpand.className = 'expandButton';
  spanExpand.textContent = 'expand';
  newDiv.appendChild(spanExpand);
  
  const spanClose = document.createElement('span');
  spanClose.className = 'closeButton';
  spanClose.textContent = 'close';
  newDiv.appendChild(spanClose);
  
  headerField.value = '';
  articleField.value = '';

  return new Article(newDiv);
}

const theButton = document.querySelector('#submitBtn');
theButton.addEventListener('click', createArticle);


let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  console.log(article)
  return new Article(article);
})
