---
layout: home
title: S2M1 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M1_Task_2/README.md) | [Next](../S2M1_Task_4/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


This function accepts a string. It should return an array where each element is a single letter in the string, in the same order.

If the input string is empty, return an empty array.

**Example**

Input:

```
s == "abcd"
```

Output:

```
["a", "b", "c", "d"]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.

* **[output] array.char**

    An array with each individual character in the input string.

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