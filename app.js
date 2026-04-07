/*const URL="https://catfact.ninja/facts?limit=5";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () =>{
    console.log("loading please wait...");
    let response = await fetch(URL);
    console.log(response); //jsonformat
    let data = await response.json();
    factpara.innerText = data[1].text;
};
btn.addEventListener("click",getFacts);*/

const URL = "https://catfact.ninja/facts?limit=5";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("loading please wait...");
    
    const response = await fetch(URL);
    const data = await response.json();

    // show first fact
    factpara.innerText = data.data[1].fact;
};

btn.addEventListener("click", getFacts);
