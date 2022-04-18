---
layout: home
title: S2M3 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M3_Task_7/README.md) | [Next](../S2M3_Task_9/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

You have an array `p` of points on a Cartesian plane. Find and return the minimum possible [Euclidian distance](http://www.cut-the-knot.org/pythagoras/DistanceFormula.shtml) between two points with different indices in `p`.

**Example**

    For p = [[0, 11], [-7, 1], [-5, -3]], the output should be
    solution(p) = 4.472135955.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **array.array.integer p**

    Every inner array `p[i]` contains exactly 2 integers: the `x` and `y` coordinates of the `ith` point.

    *Guaranteed constraints:*

    2 ≤ p.length ≤ 2 · <code type='math/tex'> 10^4</code>,

    p[i].length = 2,
    
    <code type='math/tex'> |p[i][j]| \leq 10^7</code>.

* **[output] float**

    The minimum possible distance between two points with different indices in `p`.

    Your answer will be considered correct if its absolute error doesn't exceed `10^-5`.

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