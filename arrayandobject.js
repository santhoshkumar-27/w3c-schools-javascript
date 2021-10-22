const arr = ['name', 32, true];
console.log(arr)
arr[0] = 'surname';
const man = {
    first : 'Smart',
    last : 'Work',
    func : true,
    note : [
        'nodejs', 'angularjs', 'grid'
    ],
    funky : function() {
        document.getElementById('demo1').innerHTML = this.first + ' 21 ' + this.last;
    },
    flunk : function(){
        return this.first + " 21 " + this.last;
    } 
}
// console.log(man.funky());
// console.log(arr);
// console.log(man.note[2]);