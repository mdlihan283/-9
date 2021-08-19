const title=document.querySelector("#title");
const author=document.querySelector("#author");
const year=document.querySelector("#year");
const adding=document.querySelector("#add");

const btn=document.querySelector("#submitBtn");
btn.addEventListener("click",function(a){
   a.preventDefault();
   if (title.value=="" && author.value=="" && year.value=="") {
      alert('Please fillup the input box');
   } else {
      const newRow=document.createElement('tr');

      const newTitle=document.createElement('td');
      newTitle.innerHTML=title.value;
      newRow.appendChild(newTitle);

      const newAuthor=document.createElement('td');
      newAuthor.innerHTML=author.value;
      newRow.appendChild(newAuthor);

      const newYear=document.createElement('td');
      newYear.innerHTML=year.value;
      newRow.appendChild(newYear);

      adding.appendChild(newRow);
   }
});
