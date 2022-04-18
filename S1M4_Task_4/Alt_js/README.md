---
layout: home
title: S1M4 - Task 4 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Write a function that deletes a value from an array `a` at `index`.

-   JavaScript: use `a.splice(index, 1)` to delete a value at index.
-   Python: use `a.pop(index)` to delete a value at index.
-   PythonJava: many options, but maybe make a new array and loop through the original, copying just the values you want to keep.

**Example**

Input:
```
a == [0, 11, 22, 33, 44]
index == 2
```
Output:
```
[0, 11, 33, 44]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*

    1 <= a.length <= 100

* **[input] integer index**

    The index to delete.

    *Constraints*

    0 <= index < a.length

* **[output] array.integer**

    The resulting array.

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