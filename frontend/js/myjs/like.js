const likecount = document.querySelector("#likecount")
// const likesUrl = "http://localhost:3000/likes"


fetchlikes()
// .then(putLikesOnDom)

function fetchlikes(){

    // const likesUrl = “http://localhost:3000/likes”


    return fetch("http://localhost:3000/likes")
    .then(r => r.json())
}

function putLikesOnDom(likes){
    console.log("bye")
     debugger
//      likes.forEach(function(like){
//          debugger
//          likecount.innerHTML = `Likes: ${like.like}    
//     })
 }