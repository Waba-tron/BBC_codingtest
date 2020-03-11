function makePosts(e){

    //User inputs
    let highestRank = document.getElementById('first').value;
    let secondRank = document.getElementById('second').value;
    let thridRank = document.getElementById('thrid').value;

    //Ranking outputs
    let rank1 = document.getElementById('rank1');
    let rank2 = document.getElementById('rank2');
    let rank3 = document.getElementById('rank3');

    e.preventDefault();

    //Checks to see if user has listed the same article for a specific
    if(highestRank == secondRank || highestRank == thridRank || secondRank == thridRank){
        rank1.textContent = `Can not have the same articles for ranking`;
        rank2.textContent = ``;
        rank3.textContent = ``;
    }

    else{

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

        .then(result => {

            
            return result.json();
        })

        .then(data => {

            //out puts users ranking of articles
            rank1.textContent = `You have chosen article ${data.highestRank} have the highest ranking`;
            rank2.textContent = `You have chosen article ${data.middleRank} have the middle ranking`;
            rank3.textContent = `You have chosen article ${data.lowestRank} have the lowest ranking`;

        })
        .catch(function(error) {
            //If something goes wrong display an error message to the user
            rank1.textContent = `Uh oh looks like you have an error`;
            rank2.textContent = `${error}`;
            rank3.textContent = `:(`;
        });

    }
}

//function that intialises post request
document.getElementById('postRanking').addEventListener('submit', makePosts);