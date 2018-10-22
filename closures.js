// exampel of clousre 

function outer(){
    let data = "Clousers are ";
    return function inner(){
        let innerData = "awesome ";
        return data + innerData;
        }
    }
   outer()()// clousers are awesome


   function outer(a){
       return function inner(b){
           // the inner function is making use of the variable "a"
           // which was defined in an outer function called "outer"
           // and by the time is called, that outer function has returned
           //this function called "inner" is a closure
            return a + b
       }
   }

   outer(5)(5)// 10

   let storeOuter = outer(5)
   storeOuter(10); //