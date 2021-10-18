// creating an element
let newCard = document.createElement('div');
newCard.cardName = 'card';

let heading = document.createElement('h3');
heading.textContent = 'Flag';

let img1 = document.createElement('img')
img1.src = '../img/Ugandapic';

let cardText = document.createElement('p')
cardText.textContent = 'Uganda is my country.I love Uganda.I am a Ugandan by nationaly and l will always choose Uganda amongest all odds.'
                       'One thing l love about Uganda is the nature' 
                        'We have been blessed with the best weather which has given us a green view reflected by the lakes,rivers,mountains,hills and most importantly wildlife'

// adding to the parent 
newCard.appendChild(heading);
newCard.appendChild(img1);
newCard.appendChild(cardText);


// ading to the dom
let Container = document.querySelector('div.container');
Container.appendChild(newCard);

let newCard2 = document.createElement('div')
newCard2.cardName = 'card';

let heading2 = document.createElement('h3')
heading2.textContent = 'nature';

let img2 = document.createElement('img')
img2.src = '../img/nature';

let cardText2 = document.createElement('p')
cardText2.textContent = 
                'I love my country of its nature mostly in the western side of Uganda.'
                'A district like Kabale has the most beautiful features! The Crater lake made of the different historical islands.'
                'I love my country.'

 // adding to the parent
 newCard2.appendChild(heading2);
 newCard2.appendChild(img2);
 newCard2.appendChild(cardText2);

//  adding to the dom
Container.appendChild(newCard2);