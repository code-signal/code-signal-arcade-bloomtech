---
layout: home
title: S2M4 - Task 1 - cpp
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Write a function that processes an input array, returning an array with the difference between each two subsequent elements.

For example, if the first two elements in the input are `10` and `6 `and `15`, then the first two elements in the output will be `4` and `-9`. (Because 10-6=4 and 6-15=-9.)

Note that the output array will have one fewer elements than the input.

**Example**

Input:

```
a == [1, 8, 2, 7, 4, 10]
```

-   Output:

```
[-7, 6, -5, 3, -6]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*
    
    <code type='math/tex'> 2 \leq a.length \leq 10^9</code>.

* **[output] string**

    The differences between the elements in the input array

**[output] array.integer**

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