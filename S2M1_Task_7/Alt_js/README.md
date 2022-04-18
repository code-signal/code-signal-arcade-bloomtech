---
layout: home
title: S2M1 - Task 7 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

Given an input array `a` and a second array, `filter_array`, produce a new array that contains only the elements of `a` that are not in `filter_array`.

The elements in the result array should be in the same order that they appeared in array `a`.

**Example**

Input:
```
a == [1, 7, 2, 10, 7]
b == [2, 7]
```
-   Output:
```
[1, 10]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

* **[input] array.integer filter_list**

    An array of filter values.

* **[output] array.integer**

    Filtered array.

**[JavaScript (ES6)] Syntax Tips**

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>