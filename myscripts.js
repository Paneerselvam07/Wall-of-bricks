 var arr = ['red','purple','royalblue','orange']
function change(value,color){
  color=document.getElementById(value).className;
  if(value<30){
    right=document.getElementById(value+1);
    if(value>1){
      if(value>6)
        topp=document.getElementById(value-6);
      left=document.getElementById(value-1);
      if(value<25)
        bottom=document.getElementById(value+6);

  }
  }
  if(color!='white'){
    if(right.className!='white'){
      if(left.className!='white'){
        if(bottom.className!='white'){
          if(topp.className!='white'){
      var setcolor = arr[Math.floor(Math.random()*arr.length)]
      document.getElementById(value).style.backgroundColor = setcolor;
    }
          else{
            topp.style.backgroundColor = color;
      topp.className = color;
      document.getElementById(value).className='white';
      document.getElementById(value).style.backgroundColor = 'white';
          }
        }
         else{
          bottom.style.backgroundColor = color;
          bottom.className = color;
          document.getElementById(value).className='white';
          document.getElementById(value).style.backgroundColor = 'white';
       }
       }
      else{
        left.style.backgroundColor = color;
      left.className = color;
      document.getElementById(value).className='white';
      document.getElementById(value).style.backgroundColor = 'white';
      }
    }
    else{
      right.style.backgroundColor = color;
      right.className = color;
      document.getElementById(value).className='white';
      document.getElementById(value).style.backgroundColor = 'white';
    }
   }
}
