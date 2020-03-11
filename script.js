//Buttons
let btnArticle1 = document.getElementById("article1Btn1");
let btnArticle2 = document.getElementById("article1Btn2");
let btnArticle3 = document.getElementById("article1Btn3");
let btnrandomArticle = document.getElementById("randomarticle1Btn");

//Json Data 
let article2Data = "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json";
let article3Data = "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json";
let article5Data = "https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json";

//function to generate article
function generateArticle(url) {

    fetch(url)

    .then(result => {

        return result.json();
    })

    .then(data => {

        let articleTitle = (data.title); //Generate the title
        let articleHeading = (data.body[0].model.text); //Generate Heading
        let randomNumber = 0;
        let articleContent = ""; //Will hold all the content

        for (let i = 0; i < data.body.length; i++) {

            if (data.body[i].type == "paragraph") {

                //if type is a paragraph at it to the content of the page
                articleContent += `<p>${data.body[i].model.text}</p>`;

            }

            else if (data.body[i].type == "image") {

                //generate a random number and put it next to the image url to stop images from being the same
                randomNumber = Math.floor(Math.random() * 100) + 1;

                //if type is a image at it to the content of the page
                articleContent += `<img src="${data.body[i].model.url}${randomNumber}" alt="${data.body[i].model.altText}" width="${data.body[i].model.width}" height="${data.body[i].model.height}"><br><br>`;

            }

        }

        //Adding all the data in to the DOM
        document.getElementsByTagName("title")[0].innerHTML = `${articleTitle}`;
        document.getElementsByTagName("section")[0].innerHTML = `<h1>${articleHeading}</h1>
     
        ${articleContent}
        `;

    })
    .catch(function(error) {
   
        console.log(error);
        document.getElementsByTagName("section")[0].innerHTML = `
        <h1>Uh Oh looks like you have an error</h1>
        <h1>${error}</h1>
        <h1>:(</h1>
        `;
        

    });
}

//Display first article
btnArticle1.addEventListener("click", function(){

    url = article2Data;
    generateArticle(url);

});

//Display second article
btnArticle2.addEventListener("click", function(){

    url = article3Data;
    generateArticle(url);

});

//Display thrid article
btnArticle3.addEventListener("click", function(){
    
    url = article5Data;
    generateArticle(url);

});

//function display random article
btnrandomArticle.addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){

        url = article2Data;
    }
    else if(randomNumber == 2){

        url = article3Data;
    }
    else{

        url = article5Data;
    }

    generateArticle(url);

});


