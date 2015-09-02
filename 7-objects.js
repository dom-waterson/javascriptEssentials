//var Recipe = {
//    title: "Sunday Lunch",
//    servings: 4,
//    ingredients: "Meat, gravy, yorkshire puddings"
//};
//
//function NodeForList (data) {
//    this.data = data;
//    next: null
//};
//
//function SingleLinkedList () {
//    var me = this;
//    me.start = null;
//    me.end = null;
//    me.length = 0;
//
//    me.add = function (node) {
//        if (me.start === null){
//            me.start = node;
//            me.end = me.start;
//            me.length++;
//        }
//        else {
//            me.end.next = node;
//            me.end = me.end.next;
//            me.length++;
//        }
//    };
//
//    me.remove = function (index) {
//        if(index > -1 && index < me.length){
//            var current = me.start,
//                previous,
//                i = 0;
//            if(index === 0) {
//                me.start = current.next;
//            }
//            else {
//                while(i++ < index){
//                    previous = current;
//                    current = current.next;
//                }
//                //skip over the item to remove
//                previous.next = current.next;
//            }
//            //decrement the length
//            me.length--;
//
//            //return the value
//            return current.data;
//        }
//        else{
//            return;
//        }
//    };
//
//    me.removeHeadNode = function () {
//        var currentNodeInList = me.start;
//        me.start = currentNodeInList.next;
//        currentNodeInList = null;
//    };
//};
//
//var singleList = new SingleLinkedList();
//singleList.add(new NodeForList("hello"));
//singleList.add(new NodeForList("world"));
//singleList.add(new NodeForList("dom"));
//singleList.add(new NodeForList("waterson"));
//console.log(singleList);
//singleList.removeHeadNode();
//
//
//
//
//function List () {
//    var me = this;
//    List.makeNode = function () {
//        return {
//            data: null,
//            next: null
//        };
//
//        me.start = null;
//        me.end = null;
//
//         me.add = function (data) {
//            if (me.start === null) {
//                me.start = List.makeNode();
//                me.end = me.start;
//            }
//            else {
//                me.end.next = List.makeNode();
//                me.end = me.end.next;
//            }
//            me.end.data = data;
//        };
//
//        me.delete = function (data) {
//            var current = this.start;
//            var previous = this.start;
//            while (current !== null) {
//                if (data === current.data) {
//                    if (current === this.start) {
//                        this.start = current.next;
//                        return;
//                    }
//                    if (current === this.end) {
//                        this.end = previous;
//                        previous.next = current.next;
//                        return;
//                    }
//                }
//                previous = current;
//                current = current.next;
//            }
//        };
//    };
//};
//
////Populating the linked list.
////var list = new List();
////list.add(1);
////list.add(2);
////console.log(list);
//
//function LinkedList () {
//    this._length = 0;
//    this._head = null;
//}
//
//LinkedList.prototype = {
//     add: function (data) {
//         var node = {
//             data: data,
//             next: null
//             },
//
//             current;
//
//         if (this._head === null) {
//             this._head = node;
//         }
//         else {
//             current = this._head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//
//         this._length++;
//     },
//
//    remove: function(index){
//
//        //check for out-of-bounds values
//        if (index > -1 && index < this._length){
//
//            var current = this._head,
//                previous,
//                i = 0;
//
//            //special case: removing first item
//            if (index === 0){
//                this._head = current.next;
//            } else {
//
//                //find the right location
//                while(i++ < index){
//                    previous = current;
//                    current = current.next;
//                }
//
//                //skip over the item to remove
//                previous.next = current.next;
//            }
//
//            //decrement the length
//            this._length--;
//
//            //return the value
//            return current.data;
//
//        } else {
//            return null;
//        }
//
//    }
//};
//
//
////var list = new LinkedList();
////list.add("red");
////list.add("orange");
////list.add("yellow");
////
////console.log(list);
////
////list.remove(0);
////console.log(list);
//
//
//function DoublyLinkedList () {
//    this._length = 0;
//    this._head = null;
//    this._tail = null;
//};
//
//DoublyLinkedList.prototype = {
//    add : function (data) {
//        var node = {
//            data: data,
//            next: null,
//            prev: null
//        };
//        if (this._length == 0) {
//            this._head = node;
//            this._tail = node;
//        }
//        else {
//            this._tail.next = node;
//            node.prev = this._tail;
//            this._tail = node;
//        }
//
//        this._length++;
//    },
//
//    remove: function(index){
//
//        //check for out-of-bounds values
//        if (index > -1 && index < this._length){
//
//            var current = this._head,
//                i = 0;
//
//            //special case: removing first item
//            if (index === 0){
//                this._head = current.next;
//
//                /*
//                 * If there's only one item in the list and you remove it,
//                 * then this._head will be null. In that case, you should
//                 * also set this._tail to be null to effectively destroy
//                 * the list. Otherwise, set the previous pointer on the
//                 * new this._head to be null.
//                 */
//                if (!this._head){
//                    this._tail = null;
//                } else {
//                    this._head.prev = null;
//                }
//
//                //special case: removing last item
//            } else if (index === this._length -1){
//                current = this._tail;
//                this._tail = current.prev;
//                this._tail.next = null;
//            } else {
//
//                //find the right location
//                while(i++ < index){
//                    current = current.next;
//                }
//
//                //skip over the item to remove
//                current.prev.next = current.next;
//            }
//
//            //decrement the length
//            this._length--;
//
//            //return the value
//            return current.data;
//
//        } else {
//            return null;
//        }
//
//    }
//};
//
////var doubleList= new DoublyLinkedList();
////doubleList.add("hello");
////doubleList.add("World");
////doubleList.add("Dom");
////doubleList.add("Waterson");
////console.log(doubleList);
////
////doubleList.remove(2);
////console.log(doubleList);


function Node (data) {
    this.data = data;
    this.next = null;
};

function LinkedList () {
    var me = this;
    me.head = new Node("head");

    me.find = function (item) {
        var currentNode = me.head;
        while (currentNode.data != item){
            currentNode = currentNode.next;
        }
        return currentNode;
    },

    me.insert = function (newData, item) {
        var newNode = new Node(newData);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },

    me.display = function () {
        var currentNode = me.head;
        while (!(currentNode.next === null)) {
            console.log(currentNode.next.data);
            currentNode = currentNode.next;
        }
    }
};

var list = new LinkedList();
list.insert("hello", "head");
list.insert("world", "hello");
list.display();


//Literal notation
//var myObject = {
//    //defining methods and properties
//    var me:this,
//    iAm: "anObject",
//    whatAmI: function() {
//        alert("I am" + me.iAm);
//    };
//};

//Constructor Function object notation
function myObject(){
    //defining methods and properties
    var me =this;
    me.iAm = "an Object";
    me.whatAmI = function() {
        alert("I am" + me.iAm);
    };
};