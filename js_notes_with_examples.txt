//some of DOM functions

/*

document element selectors

*/

/*We can target id's of elements by using the below.*/
document.getElementById('id_name_goes_here');

/* We can target element classes by using the function below */
document.getElementsByClassName('class_name_goes_here');

/* 
- We can target cetain elements which will bring back the first element it encounters 
- We can reference by tag, by class or by id name.
*/
document.querySelector('p');
document.querySelector('.someCLassName');
document.querySelector('#someIdName');

/*
    - If we want to target all the elements we can use below function.
    - it will work similar to the function above but;
    - the below function will bring back all elements specified within an index array (html collection)
    - We can therefore loop through, and apply the javascript affect to all.
*/
document.querySelectorAll('p');

/*To access the element number within the array we can do the following*/
document.querySelectorAll('p')[0];


/*------------------------------------------------------------------------------------------------------------*/

/*

    Event listeners

*/

/* 
    - with Event Listeners we must select an element we want to listen out for
    - there are numerous parameters we can declare within the first parameter of the function
    - click, mouse hover, mouse hover out, input and so forth
*/

//select the element we want to listen out for
var example = document.getElementById('buttonId');

/* 
    - add the event listener to the variable holding the element we've selected
    - we can then add what event the listener should listen out for.
*/


example.addEventListener('click', () => {
    //what we want to happen when the event happens
    
});


/* 
 - event listeners with a parameter added
 - we pass a parameter to the anonymous function, it will then have become accessible to the event model
*/

/*
    notes:-
    - when working with parent and child elements we must access from within the parent.
    - it works similar to functions within a function inside first then outside. function(function());
    - as the above function it works as <parent><child></child></parent>

*/

const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => { 
//the passed in parameter will give us access to the event object properties and methods.
    //event.target is a reference to the element that dispatched the event event.target
    // we can query if the target came from LI tag with event.target.tagName, in this the target is a button within the parent li
    if(event.target.tagName == 'BUTTON'){
        //this will specify the target parentNode which will state that the li is the parent node of the button as in <li><button></button</li>
        let li = event.target.parentNode;
        //ul becomes the parent node of the li
        let ul = li.parentNode;
        //within the ul parent we remove the li by click of the button
        ul.removeChild(li);
    }

});

/* 
    - things I've learned from addEventListener();

    - event.target = this will tell you where the element was activated
    - to test this console.log(event.target); this will log all events of the event such as clicks

    - event.target.parentNode = this will indicate the parent the event happend within
    - event.target.tagName = this will bring back the tag element the event happend.
        - we can query this in if statements. But make sure that the condition is in capitals, as the tagName element brings the element in capitals.

    - also we can create a new element with the following tag:

    document.createElement('html tag goes here');

    -we can aslo append a child to the parent by the following:
    - select the parent element
    parentElement.appendChild('name of child element');

    - we can also select the last element within by doing the following:
    document,querySelector('li:last-child');
    - we can also remove child elements
    parent.removeChild('child element name')

    - with click events, we can change the content of a button or an html tag with the following properties

    innerHTML or textContent

    - we can also target the style of an element with the style property, then it will allow us access to the css elements of styles
*/


