---
layout: home
title: S2M3 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M3_Task_3/README.md) | [Next](../S2M3_Task_5/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Return a substring (part of a string) between two indexes.

The substring from index `a` up to (but not including) index `b` should be returned.

If `a` is less than `0`, treat it like `0`.

If `b` is greater than the length of the string, treat it like the length of the string.

If `b` is less than `a`, return an empty string.

**Example**

Input:

```
s == "abcde"
a == 2
b == 4
```

-   Output:

```
"cd"
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The input string.    

* **[input] integer a**

    The starting index. 

* **[input] integer b**

    The ending index.   

* **[output] integer**

    The substring between index `a` up to (but not including) index `b`.   

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