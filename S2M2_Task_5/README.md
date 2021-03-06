---
layout: home
title: S2M2 - Task 5
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M2_Task_4/README.md) | [Next](../S2M2_Task_6/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return a slice of array a starting from index start and ending before index end.

If end is less than or equal to start, return an empty array.

Note that start and end could be beyond the length of the array. They should be clamped between 0 and the length of the array minus 1.

**Example**

Input:

```
a = [0, 11, 22, 33, 44, 55]
start == 2
end == 4
```

-   Output:

```
[22, 33]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array

* **[input] integer start**

    The starting index

* **[input] integer end**

    The ending index

* **[output] boolean**

    The slice of `a` between `start` and `end`.

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