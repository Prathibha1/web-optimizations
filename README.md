## Website Performance Optimization portfolio project

My project can viewed at http://github.com/Prathibha1/web-optimizations/

###Project Overview
Review the current state of various pages within the application and identify areas for improvement. Review the code powering the website and identify areas where you believe modifications are warranted. Iteratively make changes and test those changes using the tools available to you to determine if they are a performance gain or loss.

### Part 1: Optimize PageSpeed Insights score for index.html

- Adding async attribute to the google analytics script.
- Adding media="print" to the css/print link to unblock critical rendering path.
- Inlined the perfmatters.js script.
- minified and inlined the styles from style.css file
- optimized and resized the pizzeria.jpg for the index.html to pizzeria_small.jpg
	
### Part 2: Optimize Frames per Second in pizza.html

- changed the items[i].style.left to transform and transalte to improve FPS
- moved the items variable down below the anonymous function that generates the sliding pizzas
- also made the items variable available globally by adding window.items = document.querySelectorAll('mover');
- implemented requestAnimationFrame as described in http://www.html5rocks.com/en/tutorials/speed/animations/ 
- removed the dx variable declaration from the changePizzaSizes function for loop
- removed document.querySelector("#movingPizzas1") from the event listener anonymous function
- Inlined the style.css for pizza.html to unblock critical rendering path

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>


