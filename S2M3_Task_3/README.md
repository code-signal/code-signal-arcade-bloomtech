---
layout: home
title: S2M3 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M3_Task_2/README.md) | [Next](../S2M3_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

There is a bug in one line of the code. Find it, fix it, and submit.
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

For
```
picture = ["abc",
           "ded"]
```           
the output should be
```
solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```
**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.string picture**

    A non-empty array of non-empty equal-length strings.

    *Guaranteed constraints:*

    1 ≤ picture.length ≤ 100,
    1 ≤ picture[i].length ≤ 100.

* **[output] array.string**

    The same matrix of characters, framed with a border of asterisks of width 1.

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