
$(document).on("click",'.comhide',function(){
 var cild = this.parentNode.parentNode.children;
 console.log(cild);
 for(var q = 0; q < cild.length; q++)
 {
   if(cild[q].classList.contains("textaria"))
   {

      if (cild[q].style.display != "block" ) {
        this.classList.remove("comhide");
        this.classList.add("commactive");
        $(cild[q]).slideDown('slow');
      }
   }
 }
});

//По нажатию на .edit добавляем класс у главного родителя editshow

$(document).on("click",'.commactive',function(){
      
 var cild = this.parentNode.parentNode.children;
 for(var q = 0; q < cild.length; q++)
 {
   if(cild[q].classList.contains("textaria"))
   {
   
        this.classList.remove("commactive");
        this.classList.add("comhide");
        $(cild[q]).slideUp('slow');
      
   }
 }

});

$(document).on("click",'.text1',function(){
      
  var cild = this.parentNode.parentNode.children;
  for(var q = 0; q < cild.length; q++)
  {
    if(cild[q].classList.contains("textaria"))
    {
 
         this.classList.remove("commactive");
         this.classList.add("comhide");
         $(cild[q]).slideUp('slow');
       
    }
  }
 
 });
 

 $(document).on("click",'.comhide',function(){
  var cild = this.parentNode.parentNode.children;
  console.log(cild);
  for(var q = 0; q < cild.length; q++)
  {
    if(cild[q].classList.contains("textaria"))
    {
 
       if (cild[q].style.display != "block" ) {
         this.classList.remove("comhide");
         this.classList.add("commactive");
         $(cild[q]).slideDown('slow');
       }
    }
  }
 });
 

 $(document).on("click",'.close',function(){
      
  var cild = this.parentNode.parentNode.parentNode.parentNode.parentNode;
   cild.classList.remove('editshow');
 });

function celltwo(){
  var edit = document.querySelectorAll(".edit ");
  for(var q = 0; q < edit.length; q++)
  {
      edit[q].onclick = function(){
          this.parentNode.parentNode.classList.add("editshow");
      }
  }
}
celltwo();

function callone() {
  var plus = document.querySelectorAll(".plus");
  for(var q = 0; q < plus.length; q++)
  {
    plus[q].onclick = function()
    {
      var html = document.getElementById("stels").innerHTML;
      console.log(this.parentNode.parentNode);
      this.parentNode.parentNode.insertAdjacentHTML('beforeend',html);
      callone(); 
      celltwo();
    }
  }

}
callone();


$(document).on("click",'.del',function(){
  var cild = this.parentNode.parentNode.parentNode;
   cild.remove();
 });


 function innerText() {
  var div = document.getElementById("texton");
 var textarea = document.getElementById("txtini");
 div.textContent = textarea.value;
}

innerText();