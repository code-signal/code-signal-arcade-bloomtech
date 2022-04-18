---
layout: home
title: S1M4 - Task 2 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

This function accepts an array and an index.

It should return the value at that index.

If the index is out of range, it should return `-999`. (Out of range means less than 0 or greater than the maximum index of the array.)

**Example**

Input:
```
a == [0, 11, 22, 33]
index == 2
```
Output:
```
22
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] integer index**

    The index into the array.

* **[output] integer**

    The value at that index, or `-999` if index is out of range.

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