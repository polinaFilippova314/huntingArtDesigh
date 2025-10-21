"use strict"

// in news section I cut the news_text and add three dotts

let newsStrings = document.querySelectorAll(".news_text");
let newsCount = 53;

function cutText(count, string){

    let dotts = "...";
    if (string.innerHTML.length>count) {
        let string1 = string.innerHTML.slice(0, (count+1));
        string.innerHTML = string1;
    };
    string.innerHTML = string.innerHTML + dotts;

};

for(let i=0; i<newsStrings.length; i++){
    cutText(newsCount, newsStrings[i]);
};

let articleStrings = document.querySelectorAll(".article_text");
let articleCount = 246;

for(let i=0; i<articleStrings.length; i++){
    cutText(articleCount, articleStrings[i]);
};

let reviewStrings = document.querySelectorAll(".review-item_text");
let reviewCount = 101;

for (let i=0; i<reviewStrings.length; i++){
    cutText(reviewCount, reviewStrings[i]);
};