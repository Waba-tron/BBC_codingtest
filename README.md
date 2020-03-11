# BBC_codingtest
This is my coding test

## Funtionality
* Display articles dynamically
* Generate a random article
* Post a ranking of the users articles

# My approach to displaying the articles
So the way that I went about displaying the articles that I would using the fetch api which will taken in one parameter. That parameter will be the url
of the data json data. Once the connection has been made, I will then loop through json array and check for the type of data and place them 
in html tags either p of image tags. 

For next step I will be storing this information into a articleContent varible, which will be used as the placeholder and manipulate the DOM accoring to 
url that was given to the fetch api

``` Javascript
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
```

# My approach to ranking the articles

So this was a little tricky for me as there was no api or database to actually make post requests to, hence I was unsure what to do once I
reached this stage. I tried making post requests to the urls that were given, however I couldnt get them to work. So I kind've jumped the gun here
used a external json placeholder to make post requests to, using the fetch api.

The basic idea is that you will have a user, assuming they have read all the articles, be able to post then ranking of the articles that they have read. They will be able to
do this by using the inputs provided with the ids of highestRank, secondRank and thridRank

``` Javascript
       //makes post request to the url or api even
        fetch('https://jsonplaceholder.typicode.com/posts',{

            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            mode: 'cors',

            //uses the api api to submit our json object
            body:JSON.stringify({highestRank: highestRank, middleRank: secondRank, lowestRank: thridRank})

        })
```
