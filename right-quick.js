
if (x){
  x = !x;
  if(x == false){
    x = x == x;
  }else {
    x = x && !x;

  }
}
console.log(x)
}
