const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let li = e.target.parentNode;
    //needed this one to select the correct sibling
    let p = e.target.previousElementSibling;
    
    let ul = li.parentNode;
    if(p.tagName == 'P'){
      p.classList.add('highlight');
    }
    
 
  
  }
});