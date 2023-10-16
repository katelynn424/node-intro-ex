const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.error('Error reading ${path}: ${err}');
            process.exit(1);
        } else{
            console.log(data);
        }
    })
}

async function webCat(url){
    try {
        let response = await axios.get(url);
        console.log(response.data);
    } catch(err){
        console.error('Error getting ${url}: ${err}');
        process.exit(1);
    }
}