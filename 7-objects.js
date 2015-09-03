var Recipe = {
    title: "Sunday Lunch",
    servings: 4,
    ingredients: "Meat, gravy, yorkshire puddings"
};

function Node (data) {
    this.data = data;
    this.next = null;
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

var singleList = new SingleLinkedList();
singleList.insert("hello", "head");
singleList.insert("world", "hello");
singleList.insert("dom", "world");
singleList.display();
singleList.remove("world");
singleList.display();





