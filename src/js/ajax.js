import Axios from "axios";

const url =
    "https://opendata.visitflanders.org/tourist/brands/beer_styles.json?page=1&page_size=500&limit=1&fbclid=IwAR0-IZOD8HtnDgWUNEA1JezhPKlCptcA4CWznGd5IYXdbUkPDDWtaTh5RtA";
let json = "";
Axios.get(url)
    .then(function(response) {
        console.log(response.data);
        json = response.data;

        let myUl = document.querySelector(".types_list");
        json.forEach(element => {
            myUl.innerHTML += `<li>${element.Name_en}</li>`;
        });
    })
    .catch(error => {
        console.log("error");
    });
