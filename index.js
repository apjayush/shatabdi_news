console.log('This is my index.js file')

let newsAccordion = document.getElementById('newsAccordion');

let country = 'us'
let apiKey = "3b0513779a0e49d1ab5c98c2bd7cb2af";

// create an ajax get request


const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=3b0513779a0e49d1ab5c98c2bd7cb2af`,
  true
);

xhr.onload = function(){
    if(this.status===200){
        let str = '';
        let obj = JSON.parse(this.responseText)
        console.log(obj.totalResults)
   for (let j = 0; j < obj.articles.length; j++) {
       console.log(obj.articles[j].title)
       str += `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${j}">
      <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${j}" aria-expanded="false" aria-controls="collapse${j}">
       <strong>Breaking News${j + 1} : </strong>${obj.articles[j].title}
      </button>
    </h2>
    <div id="collapse${j}" class="accordion-collapse collapse" aria-labelledby="heading${j}" data-bs-parent="#accordi${j}xample">
      <div class="accordion-body">
        ${obj.articles[j].description} <a href=${obj.articles[j].url} target = "_blank">Read More at</a>
      </div>
    </div>
  </div>`;
}
newsAccordion.innerHTML = str;
}
    else{
        console.log('error in retrieving response')
    }
}


xhr.send()
