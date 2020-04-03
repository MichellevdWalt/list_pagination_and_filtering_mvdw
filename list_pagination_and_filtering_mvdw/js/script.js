/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
let list = document.querySelectorAll('ul li');
let displayNumber = 10;
let pageNumber = 0;
let counter = 0;

/**
*Function to assign a page number to each list item as its id.
*@param {number}display - max element number to display. (10 for 1st page 20 for second etc) 
*While and for loop functions to loop through the entire array and assign each with a page number as its id. (Although not unique for each item, id was chosen over classList.add for value returning later in script as li had no id, but already existing classnames)
*/
function assignPage(){
 let display = 10;
    while(display <= Math.ceil((list.length/10)*10)){
        for(counter; counter< list.length; counter += 1){
           pageNumber = Math.floor((counter+10)/10);
           list[counter].id = `${pageNumber}`;
        }
        display += 10;
      }
}
assignPage();

/**
*Function to create and append new <div>, <ul>, <li> and <a> elements to each other and the existing HTML elements.
*For loop functions to create a <a> element for every 10 array items using the last(higest) pageNumber value calculated in the assignPage function.
*/
function appendPageLinks(){
    const div = document.querySelector('.page');
    let newDiv = document.createElement('div');
    newDiv.classList.add('pagDiv');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    
    ul.classList.add('pagination')
    div.appendChild(newDiv); 
    newDiv.appendChild(ul);
    ul.appendChild(li);
      
    for(var i = 0; i < pageNumber; i += 1){
        let a = document.createElement('a');
        a.type = "button";
        a.setAttribute('href', '#');
        a.id = `${i+1}`
        a.textContent = `${i+1}`;
        li.appendChild(a);
         
    }
}
appendPageLinks();    
    
/**
*Function to display or hide list[] elements using their id against the clicked <a>button's id. (Which would both be the active page number)
*/
const linkList = document.querySelectorAll('a');
function showPage() {
    for (var j = 0; j< pageNumber; j+=1) {
        linkList[j].addEventListener ("click", (e) =>{
        for (var i = 0; i< counter; i+=1){
        if ((parseInt(list[i].id)) === parseInt(e.target.id)) {
         list[i].style.display = ""; } else{
             list[i].style.display = "none";}
        }
        }                             
        )
    }
}

showPage();

/*To load the page filtered by 10 items displayed*/
linkList[0].click();

/**
*Function to create and append <div><input> and <button> elements to each other and their correct elements in the document.
*/
function InsertSearchBar(){
    let mainDiv = document.querySelector(".page-header");
    let searchDiv = document.createElement('div');
        searchDiv.className = "search-div"
    let searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'search-input';
    let searchButton = document.createElement('button');
        searchButton.className = 'search-button';
        searchButton.textContent = "Search";
    
    mainDiv.appendChild(searchDiv);
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
}

InsertSearchBar();

/*Function to clear the input value*/
function clearText() {
   let searchInput = document.querySelector('.search-input');
    searchInput.value = "";
    
}

/**
*Function to hide or display list elements according to input value after clicking the submit button.
*for loop functions to loop through the entire array in list to find student names that includes the search input value. Uses @param {number} - counter which reflects the length of the array as calculated in the assignPage function.
*/
function searchBar(){
     let searchInput = document.querySelector('.search-input');
     let searchButton = document.querySelector('.search-button');
     let studentName = document.querySelectorAll("h3");
        searchButton.addEventListener("click", (e)=>{
        let input = searchInput.value;
        for (var i = 0; i<counter; i +=1){
            if(studentName[i].textContent.includes(input)){
                list[i].style.display = "";} else{
                    list[i].style.display = "none";}
    }
           clearText(); 
        });
   
        }
searchBar();

