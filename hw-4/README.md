# Homework-4 README
___
This week's lesson left me with quite a few more frustrations than successes.  While I was able to figure out the basics of function formats
with relative ease, the more complex ones left me feeling completely clueless.  While I did work on this assignment pretty steadily 
throughout the week, I spent most of my time stumped on the last three questions and was not able to create a working program for 
either.
However getting the first two to work did feel great and I did enjoy those. I did get stuck on the second problem for a while before 
re-working my code to get the correct result. I started out with:

``` 
    let min = function ( x, y ){
    return x < y }; 
    let result = min (0, 10); 
    console.log(result);
   
```
The issue with this code was that it was returning a value of 'true' or 'false' instead of the number I wanted.  It also would only work for
the set of numbers indicated in the 'result' line.  I eventually realized an 'if'/'else' statement would work much better to this and added
added it into my function expression.  This is what I ended up with and it worked for both function calls: 
```

let min = function( x, y ) { 
  if (x < y) return x;
  else return y;
}  

```

_

Overall I have been really struggling with JavaScript in a way that I didn't with HTML.  I think the visual aspect of HTML made it easier 
for me to understand what I was doing and (slightly) less frusturating when something went wrong.  However I am not giving up on JavaScript
and looking into additional resources such as apps and other books on the subject that will hopefully allow me to catch up.
