---
layout: home
title: S1M4 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_2/README.md) | [Next](../S1M4_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Write a function that prepends `front` and appends `back` to an array.

-   JavaScript: use `a.unshift()` and `a.push()`
-   Python: use `a.insert(0, ...)` and `a.append()`
-   Java: make a new array with two additional elements, copy the old array into it with `System.arraycopy`, and set the front and back elements.

**Example**

Input:
```
a == [1, 2, 3, 4]
front == 10
back = 50
```
Output:
```
[10, 1, 2, 3, 4, 50]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] integer front**    
    
* **[input] integer back**
   
* **[output] array.integer**

    The result with `front` prepended and `back` appended.

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