//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=oS9JvwAXjGdKx0pnq5w1qgDxYegGTDH118cv2oo6&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
          // Display the image
          document.getElementById('apod').innerHTML = `<img src="${data.hdurl}" width=300px height=300px>`;
        } else if (data.media_type === 'video') {
          // Display the video
          document.getElementById('apod').innerHTML = `
            <iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>
          `;
        } else {
          // Unsupported media type
          document.getElementById('apod').innerHTML = `<p>Unsupported media type: ${data.media_type}</p>`;
        }
        
        document.getElementById('Explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}