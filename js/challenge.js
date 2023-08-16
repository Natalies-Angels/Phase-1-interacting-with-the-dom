let counterVar = document.getElementById('counter');
let arr = Array.from(counterVar);
let counts = setInterval(counter, 500);
let limit = 0;

function counter()
{
    counterVar.innerText = limit++;
    if (limit === arr.length)
    {
        limit = 0;
    }   
     
} 

function incrementBtn()
{
    let plus = document.getElementById('plus');
    plus.addEventListener('click', function(){
        counterVar.innerText = limit++;
    })
}

function decrementBtn()
{
    let minus = document.getElementById('minus');
    minus.addEventListener('click', function()
    {
        while (limit > 0)
        {
            counterVar.innerText = limit--;
            if (limit === 0) break;
        } 
    })
}

function likeBtn()
{
    let like = document.getElementById('heart');
    let likeList = document.getElementsByClassName('likes')
    like.addEventListener('click', function()
    {
        let li = document.createElement('li');
        let text = document.createTextNode(`${limit} has been liked `);
        li.appendChild(text)
       likeList[0].appendChild(li);
    })
}

document.addEventListener('DOMContentLoaded', () =>
{
    let commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        postComments(e.target.commentInput.value)
        commentForm.reset();
    })
})

function postComments(newComment)
{
    let p = document.createElement('p');
    p.textContent = `${newComment}`;
    document.getElementById('list').appendChild(p);
}

counter();
incrementBtn();
decrementBtn();
likeBtn();