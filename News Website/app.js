console.log("Hello There");

// 3e9da0a7fa464563bb3879abb95429bc

let newsAcc = document.getElementById('newsAcc');


function getData(){
    url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=3e9da0a7fa464563bb3879abb95429bc"
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        let articles = data.articles;
        let newsHtml = "";
        console.log(articles);
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAcc">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAcc.innerHTML = newsHtml;
    })
}   

getData();