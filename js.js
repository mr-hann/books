//removes allbooks from list 
const ul=document.querySelector('.book-list ul');
ul.addEventListener('click', function(e){
    if (e.target.className=="delete"){
       const li= e.target.parentElement;
       ul.removeChild(li);
    }
});

// remove present books from list
/*const btn=document.querySelectorAll('.book-list li .delete');
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li=e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})*/


//prevent form from reloading the page
// prevent form from submitting
const form = document.querySelector('.book-list form');
form.addEventListener('click', function(e){
    e.preventDefault();
});

//adding new books
const add=document.querySelector('input[name="add"]');
const button=document.querySelector('form .add');
button.addEventListener('click', function(e){
    const addedValue=add.value;
    const li=document.createElement('li');
    const span=document.createElement('span');
    const span2=document.createElement('span');
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(span2);
    span.textContent=addedValue;
    span2.className="delete";
    span2.textContent="Delete";
    
});


//serach for books
const inputSearch=document.querySelector('input[name="search"]');
inputSearch.addEventListener('keyup', function(e){
        const inputValue = e.target.value;
        const li = document.getElementsByTagName('li');
        Array.from(li).forEach(function(li){
        const inputMain=inputValue.toLowerCase();
        const lis=li.firstElementChild.textContent;
        if (lis.toLowerCase().indexOf(inputMain)!=-1){
            li.style.display="block";
        }else{
            li.style.display="none";
        };   
    });
});