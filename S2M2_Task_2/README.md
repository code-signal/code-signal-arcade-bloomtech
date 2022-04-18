---
layout: home
title: S2M2 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M2_Task_1/README.md) | [Next](../S2M2_Task_3/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return a number with its digits reversed.

The return value should be an integer.

**Example**

Input:

```
n == 12
```

-   Output:

```
21
```

Input:

```
n == 3490
```

-   Output:

```
943  (integers don't have any leading zeros)
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The input number

    *Constraints*    

    <code type='math/tex'> 0 \leq n \leq 10^8</code>.

* **[output] string**

    The value with the digits reversed.

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