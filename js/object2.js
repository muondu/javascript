let log = console.log;



let prop1 = 'Test prop outside';

let obj1 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function () {
        console.log(this.prop1);

        console.log(prop1);
    }
}


obj1.prop3();

/*
obj1.prop1;

log(obj1.prop1);



let car = {
    name: 'Bughatti Vyon',
    manufacturer: 'Great People',
    showTheNameAndManufacturer: function(){
        log(this.name, this.manufacturer);
    }
}



car.showTheNameAndManufacturer();




obj1.prop3();
log('-----------------------------------------------------------------------')


let proto = {
    prop3: function(){
        console.log(this.prop1);
    }
}
let obj2 = Object.create(proto, {
    prop1: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Value1'
    },
    prop2: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: 'Value2'
    }
    
        
        
    })

let Obj = function(v1, v2){
    this.prop1 = v1;
    this.prop2 = v2;
    this.prop3 = function(){
        console.log(this.prop1);
    }
}
let obj3 = new Obj('value1','value2');
log(3, obj3);
obj3.prop3();

let ObjFF = function(v1,v2){
    let _prop1 = v1;
    let _prop2 = v2;
    return {
        prop1: _prop1,
        prop2: -_prop2,
        prop3: function(){
            console.log(_prop1);
        }
    }
}

let obj4 = ObjFF('value1','value2');
log(4, obj4);
obj4.prop3();


log('-----------------------------------------------------------------------');

let obj5 = new ObjC('value1','value2');
log(5, obj5);
obj5.prop3();

*/