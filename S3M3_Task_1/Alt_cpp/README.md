---
layout: home
title: S3M3 - Task 1 - cpp
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Given three values, return a new linked list containing those values.

You have to wrap the values into `ListNode()` objects.

**JavaScript:**

```
const new_node = new ListNode(n);
```

**Python:**

```
new_node = ListNode(n)
```

**Java:**

```
ListNode<Integer> newNode = new ListNode<Integer>(n);
```

You do not need to uncomment the `ListNode` code in the header. That's just there for your reference.

Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

Return a reference to the head of the new list.

**Example**

Input:

```
a == 1
b == 2
c == 3
```

-   Output:

```
1 -> 2 -> 3
```

Shown in the results visually as:

```
[1, 2, 3]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer a**

    The value to insert at the head of the linked list

* **[input] integer b**

    The next value in the list.

* **[input] integer c**

    The last value in the list.

* **[output] array.array.integer**

    The linked list containing `a`, `b`, and `c` in order.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>