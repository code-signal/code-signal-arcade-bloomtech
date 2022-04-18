---
layout: home
title: S2M4 - Task 6 - js
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

##  Description
------

[Back --> ](../README.md) 

Given a string `s` consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return `'_'`.

**Example**

-   For `s = "abacabad"`, the output should be
  
    `solution(s) = 'c'`.

    There are `2` non-repeating characters in the string: `'c'` and `'d'`. Return `c` since it appears in the string first.

-   For `s = "abacabaabacaba"`, the output should be
  
    `solution(s) = '_'`.

    There are no characters in this string that do not repeat.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string that contains only lowercase English letters.

    *Guaranteed constraints:*
    
    <code type='math/tex'> 1 \leq s.length \leq 10^5</code>.

* **[output] char**

    The first non-repeating character in `s`, or `'_'` if there are no characters that do not repeat.

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