var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computers = 0;

officeItems.forEach(item=>{ 
    if(item=='computer'){
        computers += 1;
    }
})
console.log(computers)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

peopleWhoWantToSeeMadMaxFuryRoad.forEach(person=>{
    let oldEnough;
    let allowed;
    if(person.age > 18){
        oldEnough = ' is old enough.' 
        allowed = allow(person);
    }else{
        oldEnough =' is not old enough, '
        allowed = notAllow(person);
    }

    console.log(person.name+oldEnough+allowed)
})

function allow(person){
    if(person.gender == 'female'){
        return 'SHE\'S good to see Mad Max Fury Road..';
    }else if(person.gender == 'male'){
        return 'HE\'S good to see Mad Max Fury Road...';
    }
}

function notAllow(person){
    if(person.gender == 'female'){
        return 'don\'t let HER in';
    }else if(person.gender == 'male'){
        return 'don\'t let HIM in';
    }
}


let arr1 =[2, 5, 435, 4, 3] // "The light is on"
let arr2 =[1, 1, 1, 1, 3]   // "The light is on"
let arr3 =[9, 3, 4, 2]      // "The light is off"

function toggleOn(arr){
    let val = arr.reduce((a,b)=>{return a+b});
    if(val%2 == 0){
        console.log('on');
    }else{
        console.log('off');

    }
}

toggleOn(arr1);
toggleOn(arr2);
toggleOn(arr3);

