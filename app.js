const cardArray = [
    {
        name: 'fries',
        image: 'images/frie.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        image: 'images/pizza.png',
    },
    {
        name: 'fries',
        image: 'images/frie.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        image: 'images/pizza.png',
    }

];

//Shortcut to sort/shuffle an array randomly
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.appendChild(card);
    }
}
createBoard();