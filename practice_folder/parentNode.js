const listDiv = document.querySelector('.listDiv');
const ulList = listDiv.parentNode;

ulList.addEventListener('click', (event) => {

    if(event.target.tagName == 'BUTTON'){
        //console.log('button clicked');
        //this will target the button inside of the li element
        var li = event.target.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);
    }

});