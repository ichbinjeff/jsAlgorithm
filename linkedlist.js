var ListNode = function(val, next) {
	this.val = val;
	this.next = next;
};

var last = new ListNode(4, null);
var second = new ListNode(3, last);
var first = new ListNode(2, second);
var head = new ListNode(1, first);


var print = function(head) {
	if(head == null) {
		debugger;
		return 10;
	}
	console.log('print', head.val);
	print(head.next);
}

var reverse = function(head) {
	if(!head || !head.next) return head;
	var rest = reverse(head.next);
	head.next.next = head;
	head.next = null;

	return rest;
}
