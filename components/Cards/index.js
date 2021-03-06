// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        const cardArticles = Object.entries(response.data.articles)
        cardArticles.map(articles => {
           articles[1].map(item => {
               cardsContainer.appendChild(cardCreator(item))
           })
        })
    })
    .catch(error => {
        console.log('Error:', error)
    })

let cardsContainer = document.querySelector('.cards-container')       

function cardCreator(item){
        
    let card = document.createElement('div')
        card.classList.add('card')
    
        let articleHeadline = document.createElement('div')
            articleHeadline.classList.add('headline')
            articleHeadline.textContent = item.headline
            card.appendChild(articleHeadline)
    
        let articleAuthor = document.createElement('div')
            articleAuthor.classList.add('author')
            card.appendChild(articleAuthor)
    
            let articleImgDiv = document.createElement('div')
                articleImgDiv.classList.add('img-container')
                articleAuthor.appendChild(articleImgDiv)    
    
                let articleImage = document.createElement('img')
                    articleImage.src = item.authorPhoto
                    articleImgDiv.appendChild(articleImage)
            
            let articleAuthorName = document.createElement('span')
                articleAuthorName.textContent = `By ${item.authorName}`
                articleAuthor.appendChild(articleAuthorName)

    return card
}


