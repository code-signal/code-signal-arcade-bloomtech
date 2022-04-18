---
layout: home
title: S1M4 - Task 6
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S1M4_Task_5/README.md) | [Next](../S1M4_Task_7/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

This function should start computing the product of

x * (x+1) * (x+2) * (x+3) * ...

until the product becomes evenly divisible by 7. Then it should stop and return the product.

If `x` is already divisible by 7, just return `x`.

**You may not hardcode the answers to solve this--you have to use a loop.**

**Example**

Input:
```
x == 12
```
Computation:
```
12           = 12        Not divisible by 7
12 * 13      = 156       Not divisible by 7
12 * 13 * 14 = 2184      This is divisible by 7!  (7 x 312 == 2184)
```
Output:
```
2184
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer x**

    An integer.

    *Constraints*

    0 <= x <= 21

* **[output] integer**

    The first-encountered product divisible by 7.

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