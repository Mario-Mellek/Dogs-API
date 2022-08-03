//Global variables
const imageDiv= document.querySelector('img');
const caption= document.querySelector('figcaption');
const apiKey= '?api_key=demo';
const url ='https://api.thedogapi.com/v1/images/search';

//fetching data using async await
async function getData() {
    const res= await fetch(url+ apiKey);
    try {
        const data= await res.json();
        return data;
    } catch (error) {
        console.log(`something isn't right ${error}`);
    }    
};

//space and touch listeners
document.addEventListener('keypress',(e)=>{
    if (e.code === 'Space'){
        update();
    };
});
document.addEventListener('touchstart',update)

//Updating the DOM after fetching the data
function update(){
getData().then(data=>{
    imageDiv.src= data[0].url;
    imageDiv.alt='Dog Picture';
    if(data[0].breeds.length === 1){
        const name= data[0].breeds[0].name;
        caption.innerText=name;
    }else{
        caption.innerText='No Name available';
    };
});
};

update();