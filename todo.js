function newtodo(){
	var theList = document.getElementById("list");
	var newLI = document.createElement('li');
	var input = document.getElementById('newtodo');
	newLI.innerHTML = input.value;
	input.value = ""; // this CLEARS the input value space. if disabled, the last info that you typed will still be there.
	theList.appendChild(newLI);
	newLI.onclick= function crossOut(){
		newLI.style.textDecoration='line-through';
			setTimeout(function(){
             	newLI.style.display = "none";
             	},1000);
         }; //HUZZAH! adds new onclick function to newly added items
	};


// when enter key is pressed, new item list is added
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        newtodo();
    }
};


var listItems = document.getElementsByTagName('li');



// listItems.addEventListener('click', crossOut(5))

// function crossOut(){
// 	for (i = 0; i < listItems.length; i++)
// 	listItems[i].style.textDecoration='line-through';
// }


 // working one but does not work for new added items

function crossOut(i){
	listItems[i].style.textDecoration='line-through';


	setTimeout(function(){
             listItems[i].style.display = "none";
             },1000);

	// since the list item is an array, you got to go through each item indivudally in order to cross them out!
	// but this doesnt link to the newly created list items
}


