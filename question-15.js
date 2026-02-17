// Global Scope

// console.log(this === window); // true

var x = 10;
console.log(this.x);

// Function Invocation

function showTips() {
    console.log(this);
}
showTips(); 

this.name = 'ali';

const obj = {
    name: 'obj',
    regular: function() {
      console.log('regular:', this.name);
    },
    arrow: () => {
      console.log('arrow:', this.name);
    }
};


obj.regular(); // regular: obj
obj.arrow();   // arrow: undefined (چون this از global گرفته شده)