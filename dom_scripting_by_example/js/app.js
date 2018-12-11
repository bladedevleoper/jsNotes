//write to the console to check if the js file is connected
//console.log('this file is connected');

//select the registrar tag into a variable, this will target the id element
const form = document.getElementById('registrar');
//this will select the input element within the form
const input = form.querySelector('input');
//targeting the ul list
const ul = document.getElementById("invitedList");


//with forms, they always send data to the specified link within the action attribute
//we can cancel this behavior with the event.preventDefault() method

function createLi(text){
    //creating an i tag to add within the ul
    const li = document.createElement('li');
    //gets the input and adds it to the li element
    li.textContent = text;
    //create a label element
    const label = document.createElement('label');
    label.textContent = 'Confirmed';

    //create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);

    //we are now required to create a button to allow elements to be removed
    const button = document.createElement('button');
    button.textContent = 'Remove';
    //we want to append the button to the li
    li.appendChild(button);

    li.appendChild(label);

    //we need to add return as function in JS return undefined if nothing is returned
    return li;
}

form.addEventListener('submit', (e) => {

    //this will cancel the browsers default submit behavior
    e.preventDefault();
    const text = input.value;

    //variables declared within a function cannot be accessed from outside the function, but if declared outside, the variables can be accessed within the function

    const li = createLi(text);
    //then append the li to the ul list
    ul.appendChild(li);
    //then clear the input value to enter another name
    input.value = '';

});


//best practice for checkboxes with event listeners is to call it on change
//e is used to show event
ul.addEventListener('change', (e) => {

    //checkboxes have an attribute named checked, true when checked and false when not checked
    //need to check if the checkbox is checked
    //we can call the event.target.checked to see this
    //console.log(e.target.checked);

    //get the event target which is the checkbox
    const checkbox = e.target;
    //assign true or false to the variable checked
    const checked = checkbox.checked;

    //we need to traverse from the checkbox to the li.
    //the checkbox is the grandparent of the li as label is the child of the li and checkbox is the child of the label.
    
    //traversing twice, checkbox > label > li tag
    const listItem = checkbox.parentNode.parentNode;

    //as checked returns true or false, we cam just add the variable to the if condition
    //the class name then gets added to the li element
    if(checked){
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }

});

//as a lot of users will be adding and removing elements it is a good practice to target the parent element which is the ul tag

ul.addEventListener('click', (e) => {

    if(e.target.tagName === 'BUTTON'){
        //this traverses from the target element to the li
        const li = e.target.parentNode;
        //this traverses from the li to the ul
        const ul = li.parentNode;

        ul.removeChild(li);
    }

});