let num="17 12 8 3 2 7 5 21"
let input=num.split(" ").map(Number).sort((a,b)=>a-b);
console.log(input);
function primecheck(prime){
    if(prime>1){
          for(i=2;i<prime-1;i++){
            if(prime%i==0){
                return false;
            }
          }
          return true
    }
    else{
        false;
    }
}


prime=2;
while(true){
    if(primecheck(prime)){
        if(!input.includes(prime)){
            
            if(prime > Math.max(...input)-1){
                break

            }
            console.log(prime);
            
        }
    }
    prime++;
}