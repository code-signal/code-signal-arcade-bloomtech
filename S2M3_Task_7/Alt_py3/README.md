---
layout: home
title: S2M3 - Task 7 - py3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md)

This function should scan an array for certain elements and remove them.

**Example**

Input:

```
a == [0, 5, 6, 2, 7, 8, 5, 3, 4, 5]
x = 5     Remove all 5s
```

-   Output:

```
[0, 6, 2, 7, 8, 3, 4]
```

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    The input array.

    *Constraints*

    1 <= a.length <= 100

* **[input] array.integer x**

    The value to delete.

    *Constraints*

    0 <= index < a.length

* **[output] array.integer**

    The resulting array.

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