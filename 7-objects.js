var Recipe = {
    title: "Sunday Lunch",
    servings: 4,
    ingredients: "Meat, gravy, yorkshire puddings"
};


function List () {
    var me = this;
    List.makeNode = function () {
        return {
            data: null,
            next: null
        };

        this.start = null;
        this.end = null;

         this.add = function (data) {
            if (this.start === null) {
                this.start = List.makeNode();
                this.end = this.start;
            }
            else {
                this.end.next = List.makeNode();
                this.end = this.end.next;
            }
            this.end.data = data;
        };

        me.delete = function (data) {
            var current = this.start;
            var previous = this.start;
            while (current !== null) {
                if (data === current.data) {
                    if (current === this.start) {
                        this.start = current.next;
                        return;
                    }
                    if (current === this.end) {
                        this.end = previous;
                        previous.next = current.next;
                        return;
                    }
                }
                previous = current;
                current = current.next;
            }
        };
    };
};

//Populating the linked list.
var list = new List();
list.add(1);
list.add(2);
console.log(list);

function LinkedList () {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
     add: function (data) {
         var node = {
             data: data,
             next: null
             },

             current;

         if (this._head === null) {
             this._head = node;
         }
         else {
             current = this._head;
             while (current.next) {
                 current = current.next;
             }
             current.next = node;
         }

         this._length++;
     },

    remove: function(index){

        //check for out-of-bounds values
        if (index > -1 && index < this._length){

            var current = this._head,
                previous,
                i = 0;

            //special case: removing first item
            if (index === 0){
                this._head = current.next;
            } else {

                //find the right location
                while(i++ < index){
                    previous = current;
                    current = current.next;
                }

                //skip over the item to remove
                previous.next = current.next;
            }

            //decrement the length
            this._length--;

            //return the value
            return current.data;

        } else {
            return null;
        }

    }
};


//var list = new LinkedList();
//list.add("red");
//list.add("orange");
//list.add("yellow");
//
//console.log(list);
//
//list.remove(0);
//console.log(list);