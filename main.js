//1.output---380

let numberArr = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
  ];

  let array=numberArr.flat()
  let arr=array.reduce((a,b)=>{
    return a+b;
  })

  console.log(arr);


 //-----------------------------------------------------------------------------------------------

//2.convert exp into 8 yrs

let person=[
        {
        name:"A",
        age:25,
        detail:{
            married:true,
            exp:2}
        },
        
        {
            name:"B",
            age:28,
            detail:{
                married:false,
                exp:5}
            },

            {
                name:"C",
                age:29,
                detail:{
                    married:true,
                    exp:2}
                }
    
]

 let a=person.map((val)=>{

    return {...val,detail:{...val.detail,exp:8}}

})

console.log(a);

//------------------------------------------------------------------------------------------------------------------

//3.number of people having age above 25


let persons = [
{
    name: "A",
    age:25,
    detail:{
    married: true,
    exp:2}},
    {
    name: "B",
    age:28,
    detail:{
    married: false,
    exp:5}},
    
    {
    name: "C",
    age:29,
    detail:{
    married: true,
    exp:2}}
    ]
let res=persons.filter((val)=>{
    return val.age>25;
})
console.log(res.length);

//-----------------------------------------------------------------------------------------


//4.palindrome

//with argument without return


function palin(x){
    var rev=0, rem;
    temp=x;
while(x>0){
    rem=x%10;
    rev=rev*10+rem;
    x=parseInt(x/10);
}
if(temp==rev){
    console.log("palindrome");
}
else{
    console.log("not")
}
}
palin(32323);

//-----------------------------------------------------------------------------------------------------


//5.reverse

//with argument with return


let reve=0;
function reverse(z){
while(z>0){
    rem=z%10;
    reve=reve*10+rem;
    z=parseInt(z/10);
}
return reve;
}
console.log(reverse(324874));

//---------------------------------------------------------------------------------------------------------

//6.armstrong 

//without argument without return

 let arm=153;
 let tem=arm;
 let remin;
 let adds=0;
 function hi(){
 while(tem>0){
    remin=tem%10;
    adds+=remin**3;
    tem=(tem-remin)/10;
 }
 if(adds==arm){
    console.log("this is armstrong value")
 }
 else{
    console.log("not a armstrong")
 }
}
hi();


//-----------------------------------------------------------------------------------------------

//7.count of even numbers in array

let even=[87,23,446,99,224,22];
let counts=even.filter((val)=>{
    return val%2==0;
}
)
console.log(counts.length);

//------------------------------------------------------------------------------------------------

//8.total price

let data=[["Mango","5kg",100],
        ["Apple","2kg",150],
        ["Grapes","5kg",80],
]
let total=data.map((val)=>{
    return(val[2]);

})

let totals=total.reduce((a,b)=>{
    return a+b;
   
})
console.log(totals)

//--------------------------------------------------------------------------------------------------

//9.store the values in localstorage

//  localStorage.setItem("fruit1",JSON.stringify([{name:"Apple",weight:"2kg",price:280},{name:"Orange",weight:"1kg",price:180},{name:"Pomegranate",weight:"1kg",price:250}]));

 //-------------------------------------------------------------------------------------------------

//10.differemce between map and forEach

// The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.


//------------------------------------------------------------------------------------------

//11.differemce between local and session storage

//difference between session storage and localStorage?


// The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.


//--------------------------------------------------------------------------------------------

//12.some-method

let dresses=[
    {
        id:1,
        price:200,
        size:"xl"
    },
    {
        id:2,
        price:500,
        size:"xl"
    },
    {
        id:1,
        price:1000,
        size:"xxl"
    },
    {
        id:1,
        price:100,
        size:"xl"
    },
    {
        id:1,
        price:600,
        size:"l"
    }
]
let dress=dresses.some((v)=>{
    return v.price>300
})

console.log(dress);

//---------------------------------------------------------------------------------------

//13.every-method

let fruit=[
    {
        id:1,
        price:400,
        quantity:5
    },
    {
        id:2,
        price:200,
        quantity:5
    },
    {
        id:3,
        price:1000,
        quantity:20
    },
    {
        id:1,
        price:100,
        quantity:10
    },
    {
        id:1,
        price:600,
        quantity:4
    }
]
let fruitss=fruit.every((v)=>{
    return v.price>300
})

console.log(fruitss);

//----------------------------------------------------------------------------------------

//14.

let value=[22,66,25,87,45,28,99];

let ans=value.filter((val)=>{

    return val%11==0
      
})
console.log(ans);



//-------------------------------------------------------------------------------------------------------


//15.

let add=[2,5,4,9,20,45,36,89];

let c=add.filter((val)=>{
    return val%2==0;
    
}
)
let d=c.reduce((a,b)=>{
    return a+b;
})

console.log(d);
