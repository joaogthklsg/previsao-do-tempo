// const search_button = document.querySelector(".button-green")

// search_button.addEventListener('click', function(e) {
//     e.preventDefault();
//     const search_input = document.querySelector(".input-search")
//     const value  = search_input.value
//     console.log(value);
// })
const urlsite = () =>{
    const url = 'https://api.hgbrasil.com/weather?key=49467378&city_name=araucaria';
    fetch(url)
}
console.log('HTTPGGY'+urlsite)