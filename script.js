const imageDiv= document.querySelector('img');
const caption= document.querySelector('figcaption');
const apiKey= '?api_key=46129ac8-d41e-428a-95d3-846d79ce1466';
const url ='https://api.thedogapi.com/v1/images/search';

async function getData() {
    const res= await fetch(url+ apiKey);
    try {
        const data= await res.json();
        return data;
    } catch (error) {
        console.log(`something isn't right ${error}`);
    }    
};


document.addEventListener('keypress',(e)=>{
    if (e.code === 'Space'){
        update();
    };
});

document.addEventListener('touchstart',update)


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