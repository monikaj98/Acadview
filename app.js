// to search 
function myfunction() {
    var i;
   var input = document.getElementById("myInput");
   var filter = input.value.toUpperCase();
   var ul = document.getElementById("myUL");
   var li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
       var a = li[i].getElementsByClassName("name")[0];
       var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};

// to hide 
function myFunction() {
  var checkBox = document.getElementById("hide");
  var text = document.getElementById("movie-list");
  if (checkBox.checked == true){
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

//  add 
var add = document.querySelector('#add-movie button');
add.addEventListener('click',function(e){
    e.preventDefault();
    var name = document.getElementById('movie');
    if(name.value!="")
        {
            var add1 = document.querySelector('#movie-list ul');
            var node = document.createElement("li");
            var el = document.createElement("span");
            el.setAttribute("class","name");
            var text = document.createTextNode(name.value);
            el.appendChild(text);
            var el1 = document.createElement("span");
            el1.setAttribute("class","delete");
            var text1 = document.createTextNode("delete");
            el1.appendChild(text1);
            
            node.appendChild(el);
            node.appendChild(el1);
            
            add1.appendChild(node);              
        }
                  
});
/*
  --> Event Bubbling and using it in deleting the movies
      We will assign event to the ul tag and when the delete button is clicked,
      event will bubble up to the ul and then we can delete the li associated to the event
  --> We are using the concept of Event Bubbling to attach the event to UI.
      Advantage: attaching the event to <ul> will help us delete any new <li> attached to movie-list
  --> Now this is good because if we have to add another movie to the list, we can delete it unlike the previous event listener.
*/
// to delete 
var list = document.querySelector('#movie-list ul');
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){           // We want to get where did the click happened, so className
        console.log(e.target);
        const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
        console.log(li);
        li.parentNode.removeChild(li);
        list.removeChild(li);
       }
})