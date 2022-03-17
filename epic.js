
//let fetchButton = document.querySelector('#fetch')

//fetchButton.addEventListener('click', () => {
  //  console.log("button pressed")
    //fetchInformation()
//})

//async function fetchInformation() {
  //  const apiKey = "XFdRDe1tdHiXPcROr7saJDkQ18aDXGHwqyFuNBuE"

    //const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    //console.log('2. got response', response);
    //const data = await response.json();
    //console.log('3. data received:', data);

    //useData(data);

//}

//function useData(data) {
  //  document.querySelector('#content').innerHTML += data.explanation
    //document.querySelector('#content').innerHTML += `<img src="${data.url}">`
    //document.querySelector('#title').innerHTML += data.title

//}
let searchButton = document.querySelector('#button')

 searchButton,addEventListener('click', () => {
    console.log("button pressed")

    document.querySelector('#title').innerHTML = "";
    document.querySelector('#date').innerHTML = "";
    document.querySelector('#photo').innerHTML = "";
    document.querySelector('#info').innerHTML = "";


    fetchInformation()
})


async function fetchInformation(){
    const apiKey = "XFdRDe1tdHiXPcROr7saJDkQ18aDXGHwqyFuNBuE"
    const search = document.querySelector('#search').value;
   
   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${search}`);
   console.log('2. got response', response);
   const data = await response.json();
   console.log('3. data received:', data);

   useData(data);
   
       
 }

 function useData(data) {

    document.querySelector('#title').innerHTML += data.title;
    document.querySelector('#date').innerHTML += data.date;
    document.querySelector('#photo').innerHTML += `<img src="${data.hdurl}">`
    document.querySelector('#info').innerHTML += data.explanation;

 }
 





