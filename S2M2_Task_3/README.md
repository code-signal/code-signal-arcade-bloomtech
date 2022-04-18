---
layout: home
title: S2M2 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M2_Task_2/README.md) | [Next](../S2M2_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

This function accepts an array. It should return true if the array elements read the same forward and backward, i.e. if the array is a palindrome.

An empty array is a palindrome.

**Example**

Input:

```
a == [0, 1, 2, 1, 0]
```

-   Output:

```
true
```

Input:

```
a == [1, 2, 3, 4]
```

-   Output:

```
false
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[output] boolean**

    True if the array is a palindrome.

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