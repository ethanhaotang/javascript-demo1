import _ from "lodash";

console.clear();
console.log("======");
console.log("hello world 4");
console.log("========");

{
  const object = {};
  const array = [];

  const person = {
    name: "ethan",
    age: 18,
    income: 0,
  };
  const person2 = person;

  person2.age = 30;

  console.log(person, "\n", person2);

  const person3 = { ...person };
  console.log(person3);
  person3.age = 50;
  console.log(person, "\n", person3);
}
{
  console.clear();

  const person = {
    name: "ethan",
    age: 18,
    profile: {
      account: [
        {
          id: 1,
          income: 0,
        },
        {
          id: 2,
          income: 100,
        },
      ],
    },
  };

  const person3 = { ...person };
  person3.profile.account[0].income = 1000;

  console.log(person);

  const person4 = _.cloneDeep(person);
  console.log(person4);
  person4.profile.account[0].income = 5000;
  console.log(person4);
}

{
  console.clear();
  const target = {
    a: 1,
    b: 2,
  };
  const source = {
    b: 4,
    c: 5,
  };

  const returnTarget= Object.assign(target,source)
  console.log(returnTarget);
}
{
  console.clear();
  const target = {
    a: 1,
    b: 2,
  };
  const source = {
    b: 4,
    c: 5,
  };
   const combineTarget={...target,...source}
   console.log(combineTarget)
}

{
  const user={
    name:'ethan',
    age:18,
    profile:{
      address:'xx.xxx.xx',
      email:'xx.xxx.xx'
    },
    draw:function(){
      console.log(this.name); 
    }
  }
  user.draw()

  const newUser=Object.create(user)
  console.log(user );
  console.log(newUser);
  newUser.draw()

  console.log(Object.hasOwn(user,'name'));
  console.log(Object.hasOwn(user,'age'));
  console.log(Object.hasOwn(user,'draw'));
  console.log(Object.hasOwn(newUser,'name'));
  console.log(Object.hasOwn(newUser,'age'));
  console.log(Object.hasOwn(newUser,'draw'));
  console.log(Object.hasOwn(user,'toString'));

  console.log(user.hasOwnProperty('name'));

console.log(user.isPrototypeOf(newUser))

const user2={...user}
console.log(user2);
console.log(user.isPrototypeOf(user2));
console.log(newUser.__proto__ );
}
console.clear();
{
  const user={
    name:'ethan'
  }
  console.log(user);
  user.age =18
  console.log(user);
  delete user.age
  console.log(user);


  console.log(Object.isExtensible(user));

  Object.preventExtensions(user)
  console.log(Object.isExtensible(user));

  console.log(user);
delete user.name
console.log(user);
// user.age=30


}
{
  console.clear();
  const user={
    name:'ethan',
    age:18
  }
  Object.seal(user)
  console.log(Object.isExtensible(user));
  
  user.age=40
  console.log(user );

  Object.freeze(user)
  console.log(Object.isExtensible(user));
  // user.ege=30
  // delete.age=40
  // user.age=30

  const newUser=_.cloneDeep(user)
  console.log(newUser);
  console.log(Object.isExtensible(newUser));
}

{
  const name='ethan    tang'
  const arrayName=Array.from(name)
  console.log(arrayName);

  console.log(arrayName.toString());

function draw() {

}

const filterFunc=(element)=>{console.log(element);}

// const newArrayName= arrayName.filter(element => {console.log(element);})

const newArrayName2= arrayName.filter(filterFunc)


const newArrayName3=arrayName.filter(element => element!=' ')
console.log(newArrayName3);

console.log(typeof arrayName);
console.log(Array.isArray(name));
console.log(Array.isArray(arrayName));
console.log(arrayName.join());
console.log(arrayName.join(''));
console.log(arrayName.join('_'));
}

{
  console.clear();
  const array1=['a','b','c']
  const array2=['d','e','f']
  const array3=array1.concat(array2)
  console.log(array3);
  console.log(array1);console.log(array2);

  const array4=[...array1,...array2]
  console.log(array4);
}
{
  const array1=[5,12,8,138,71,55]
  const found=array1.find(element =>element>40)
  console.log(found);
  const index=array1.findIndex(element =>element>40)
  console.log(index);
  console.log(array1[index]);

  const foundLast=array1.findLast(element =>element>40)
  console.log(foundLast);
   const indexLast=array1.findLastIndex(element =>element>40)
   console.log(indexLast);
   console.log(array1[indexLast]);

   const filter=array1.filter(element =>element>40)
   console.log(filter);

   const newMap=array1.map(element =>element*10)
   console.log(newMap);
}

{console.clear();
  const list=[1,2,[3,4,5,[6,[7,8,9]]]]

  console.log(list);
  const newList= list.flat()
  console.log(newList);

  const newList2=list.flat(2)
  console.log(newList2);

  const newList5=list.flat(Infinity)
   console.log(newList5);
} 

{
  const list =['A','B','C']

  let iter=list.keys()

  console.log(iter.next().value);

   iter=list.values()

  console.log(iter.next().value);

}

{
  const list =['A','B','C']
  list.push('D')

  console.log(list);
 const getPop= list.pop()
  console.log(list);
  console.log(getPop);

  list.shift()
  console.log(list);
  list.unshift('1')
  console.log(list);
}

{
  const list=[374,435,23,343,7843,85]

  const newList=[...list.sort((a,b) =>a-b)]
  console.log(newList);
  const newList2=[...list.sort((a,b) =>b-a)]
  console.log(newList2);

  const list2=[374,435,'age',343,23,,'ethan',7843,85]
  const newList3=[...list2.sort((a,b) =>a-b)]
console.log(newList3);


}