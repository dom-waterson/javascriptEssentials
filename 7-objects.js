var Recipe = {
    title: "Sunday Lunch",
    servings: 4,
    ingredients: "Meat, gravy, yorkshire puddings"
};

function Node (data) {
    this.data = data;
    this.next = null;
    this.previous = null;
};

function SingleLinkedList () {
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
    },

    me.findPrevious = function (item) {
        var currentNode = this.head;
        while(!(currentNode.next === null) &&
        (currentNode.next.data != item)) {
            currentNode = currentNode.next;
        }
        return currentNode;
    },

    me.remove = function (item) {
        var previousNode = me.findPrevious(item);
        if (!(previousNode.next === null)) {
            previousNode.next = previousNode.next.next;
        }
    }
};

//var singleList = new SingleLinkedList();
//singleList.insert("hello", "head");
//singleList.insert("world", "hello");
//singleList.insert("dom", "world");
//singleList.display();
//singleList.remove("world");
//singleList.display();
//console.log("");


function DoubleLinkedList () {
    var me = this;
    me.head = new Node("head");

    me.insert = function (newData, item) {
        var newNode = new Node(newData);
        var current = this.find(item);
        newNode.next = current.next;
        //only new line.
        newNode.previous =current;
        current.next = newNode;
    },

    me.remove = function (item) {
        var currentNode = me.find(item);
        if (!(currentNode.next === null)) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }
    }
};

DoubleLinkedList.prototype = new SingleLinkedList();
var doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insert("hello", "head");
doubleLinkedList.insert("world", "hello");
doubleLinkedList.insert("dom", "world");
doubleLinkedList.display();
console.log();
doubleLinkedList.remove("world");
doubleLinkedList.display();



