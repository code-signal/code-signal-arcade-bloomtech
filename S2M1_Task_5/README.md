---
layout: home
title: S2M1 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M1_Task_4/README.md) | [Next](../S2M1_Task_6/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return true if two arrays are equal.

The arrays are equal if they are the same length and contain the same value at each particular index.

Two empty arrays are equal.

**Example**

Input:

```
a == [1, 7, 2, 10, 7]
b == [1, 7, 2, 10, 7]
```

-   Output:

```
true
```

Input:

```
a == [7, 2, 10, 7]
b == [1, 7, 2, 10, 7]
```

-   Output:

```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The first array to compare.

* **[input] array.integer b**

    The second array to compare.

* **[output] boolean**

    True if the arrays are equal.

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