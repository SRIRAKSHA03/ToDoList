function addtask(){
    // adding list
    var li =document.createElement("li")
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t)
    if(document.getElementById("myInput").value != ""){
        li.className="px-2 py-2 d-flex justify-content-between border-bottom"
        document.getElementById("parentDiv").appendChild(li);
        // add close button
        let div = document.createElement("div");
        let txt = document.createTextNode("\u00D7");
        div.className ="close";
        div.style.cursor="pointer"
        div.appendChild(txt);
         li.appendChild(div);               
    }
    document.getElementById("myInput").value = "";
    
    // to remove the task
    var closeDivs=document.querySelectorAll('.close');
    Array.from(closeDivs).forEach((element)=>{
        console.log(element.parentNode,"lists")
        element.addEventListener('click',()=>{
            element.parentElement.remove();
        })
    })

}