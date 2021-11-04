
//funcion que recarga los numeros en el carton de bingo

recharge = () =>{
  let array = [];

  array.push(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  array.push(Math.floor(Math.random() * (9 - 5+ 1) + 6));
  array.push(Math.floor(Math.random() * (15-10+1)+10));
  array.push(Math.floor(Math.random() * (19-16+1)+16));
  array.push(Math.floor(Math.random() * (29-20+1)+20));
  array.push(Math.floor(Math.random() * (39-30+1)+30));
  array.push(Math.floor(Math.random() * (49-40+1)+40));
  array.push(Math.floor(Math.random() * (55-50+1)+50));
  array.push(Math.floor(Math.random() * (59-56+1)+56));
  array.push(Math.floor(Math.random() * (65-60+1)+60));
  array.push(Math.floor(Math.random() * (69-66+1)+66));
  array.push(Math.floor(Math.random() * (75-70+1)+70));
  array.push(Math.floor(Math.random() * (79-76+1)+76));
  array.push(Math.floor(Math.random() * (84-80+1)+80));
  array.push(Math.floor(Math.random() * (90-85+1)+85));

 
  
    for (let i = 0; i < 15; i++){
      let str = ["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15"];
      
document.getElementById(str[i]).innerHTML = array[i];
     
}
};

recharge();

//funcion que genera nuevos cartones


const add = document.createElement('add');
console.log(add);

