---
layout: home
title: S2M1 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M1_Task_7/README.md) | [Next](../S2M1_Task_9/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


Produce an array of `n` strings.

Each string will contain `m` uppercase `"A"`s.

**Example**

Input:

```
n == 3
m == 2
```

-   Output:

```
["AA", "AA", "AA"]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The number of strings in the final array.

* **[input] integer m**

    The number of capital `"A"`s in each string.

* **[output] array.string**

    Array of `n` strings of `m` `"A"`s.

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