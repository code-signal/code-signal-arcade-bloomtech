---
layout: home
title: S2M2 - Task 4 - rust
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Given an input array a determine the length of the leading "run" of numbers. The run is how many numbers at the front of the array are the same.

If the array is empty, return 0.

**Example**

Input:

```
a == [7, 7, 7, 4, 7, 2]
```

-   Output:

```
3
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[output] integer**

    The length of the initial run.

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