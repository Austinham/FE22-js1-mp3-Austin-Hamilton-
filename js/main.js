// Representational state transfer
// 

// let lang = "german"

// const URL = "https://restcountries.com/v3.1/lang/"+lang;
// let publicData;
// fetch(URL).then(function (response, blob) {
//     // console.log("fetch:",response.json());
//     return response.json();


// }).then(function (data) {
//     console.log("fetch:", data);

//     for (let i = 0; i < data.length; i++) {
//         // console.log(i)

//         let obj = {
//             flag: data[i].flag,
//             officialName: data[i].name.official,
//             region: data[i].subregion,
//             Capital: data[i].capital,
//             population: data[i].population,
//             // languages: data[i].languages,
//         }


//         // document.querySelector('#con-flags').innerHTML += data[i].flag;
//         // document.querySelector('#con-name').innerHTML += data[i].name.official;
//         // document.querySelector('#region').innerHTML += data[i].subregion;
//         // document.querySelector('#capetal').innerHTML += data[i].capital;
//         // document.querySelector('#population').innerHTML += data[i].population;

//         console.log(obj);
//     }

//     // document.querySelector('#con-flags').innerHTML = data[2].flag;
//     // document.querySelector('#con-name').innerHTML = data[2].name.official;
//     // document.querySelector('#region').innerHTML = data[2].subregion;
//     // document.querySelector('#capetal').innerHTML = data[2].capital;
//     // document.querySelector('#population').innerHTML = data[2].population;

// });


const btn = document.querySelector('#btn-countries');
btn.addEventListener('click', search);

function search(event) {
    event.preventDefault();
    const typeInput = document.querySelector('#input-section');
    const changeText = typeInput.value.toLowerCase();
    console.log(changeText);
    fetchCountries(changeText);
    typeInput.value = '';
}

function fetchCountries(changePar) {
    const url = `https://restcountries.com/v3.1/lang/${changePar}`;
    console.log(url)
    fetch(url)
        .then((response) => {
            console.log(response.status)
            if (response.status >= 200 && response.status < 300) {
                return response.json();

            } else {
                throw "did not get any data"
            }
        })

        .then(printCountries)
        .catch(displayError);
}


function printCountries(getCountriesData) {
    console.log(getCountriesData);
    const getData = getCountriesData;





    getData.sort(function (a, b) {
        return b.population - a.population;
        // console.log('in sort', a.population, b.population);
        // if (a.population > b.population)
        //     return -1;

    });


    document.querySelector('#land-data').innerHTML = " ";

    greaterPopulation = [];

    getData.forEach(

        function (data,) {
            const h1 = document.createElement('h1');
            document.querySelector('#land-data').appendChild(h1);
            h1.innerText = "Official Name: " + data.name.official

            const h2 = document.createElement('h2');
            document.querySelector('#land-data').appendChild(h2);
            h2.innerText = "Subregion Name: " + data.subregion

            const h3 = document.createElement('h3');
            document.querySelector('#land-data').appendChild(h3);
            h3.innerText = "Capital Name: " + data.capital

            const h4 = document.createElement('h4');
            document.querySelector('#land-data').appendChild(h4);
            h4.innerText = "population: " + data.population;
            greaterPopulation.push(data.population);
            // console.log(greaterPopulation);

            const img = document.createElement('img')
            document.querySelector('#land-data').appendChild(img);
            img.src = data.flags.png
        });

        const max = Math.max(...greaterPopulation)
        // console.log(max);
       const getIndex = greaterPopulation.indexOf(max)


      const getIndexOf = document.querySelectorAll('h4');
      getIndexOf[getIndex].style.color= "orange";
    // document.querySelector('h4').style.color = "red";
    // document.querySelector('h4').style.border= 'solid 20px purple'
}

function displayError(error) {
    document.querySelector('#land-data').innerHTML= "";
    const erMessage = document.createElement('h1');
    document.querySelector('#land-data').appendChild(erMessage);
    erMessage.innerText =
    "Could not define the language you have typed in." + "\n" + "Please entire the correct languages";
}


