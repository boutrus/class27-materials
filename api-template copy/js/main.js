//Example fetch using pokemonapi.co

let deckId = ''//empty string and a global variable.


  const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      
document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){

  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        //trying to compare results
        let player1Val = Number(data.cards[0].value)
        let player2Val = Number(data.cards[1].value)

        if(player1Val > player2Val) {
          document.querySelector('h3').innerText = 'Player 1 wins'
        } else if(player1Val < player2Val) {
          document.querySelector('h3').innerText = 'player 2 wins'
        } else {
          document.querySelector('h3').innerText = 'Time for war!!!!'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//helper function to convert special cases to numbers and also string to numbers.
function convertToNum(val) {
  if(val === 'ACE') {
    return 14
  }else if(val === 'KING') {
    return 13
  }else if(val === 'QUEEN') {
    return 12
  }else if(val === 'JACK') {
    return 11
  }else {
    return Number(val)
  }
}
