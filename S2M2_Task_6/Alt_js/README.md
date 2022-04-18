---
layout: home
title: S2M2 - Task 6 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Examine an array and determine the length of the longest run of elements. That is, the most of a particular element seen in a row.

**Example**

Input:

```
a = [11, 22, 22, 22, 33, 33]
```

-   Output:

```
3   (because we saw 3 22s in a row, the most in a row of any number)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array

* **[output] integer**

    Length of the longest run

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