---
layout: home
title: S2M4 - Task 8
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Home](../README.md)

[Before](../S2M4_Task_7/README.md) | [Next](../S3M1_Task_1/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

You have a string `s`. Split `s` into the minimum possible number of `increasing` substrings. A substring is considered to be `increasing` when the next symbol in the substring is also next in the English alphabet. This is case sensitive, i.e. 'b' is next for 'a' but 'C' is not next for 'b'. Return an array of these substrings.

**Example**

For `s = "ABCDEFFDEfghCBA"`, the output should be
`solution(s) = ["ABCDEF", "F", "DE", "fgh", "C", "B", "A"]`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string composed only of English letters.

    *Guaranteed constraints:*

    <code type='math/tex'> 1 \leq s.length \leq 10^4</code>.

* **[output] array.string**

    An array of substrings.

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