let arry= new Array("mango","apple","grapes");
let newarry=["mango","grapes","pineapple","orange"];
let numarry=[2,4,6,8];
console.log(arry);
arry[3]="orange";
console.log(arry.unshift("pineapple"));
console.log(arry);
console.log(arry.splice(2,1));
console.log(arry);


if(newarry[3]==arry[3])
{
    console.log("Both arrays match");
}

for(var i=0; i<newarry.length; i++)
{  console.log(newarry[i]); 
} 

