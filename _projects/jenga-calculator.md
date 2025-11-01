---
layout: page
title: Jenga Calculator
description: Apr - Jul 2016
img: assets/img/jenga_calculator/jenga_calculator.JPG
importance: 1
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gH-mlQwBGkY?si=Xcy9lI2b2BwvDUON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="caption mt-0">
    First test of my binary adder built out of Jenga blocks
</div>

This calculator performs binary addition on two numbers that are up to five digits long each and produces an output that is up to six digits long. The act of calculation destroys the calculator, so each calculation requires the mechanism to be rebuilt. Rebuilding takes approximately 4 hours due to the need to not only arrange the Jenga blocks but also to carefully test each logic gate. This 4 hour build time resulted in me only building and testing this calculator twice. The video shows the first test of this calculator. It actually glitched near the top-left when one of the logic gates was accidentally activated, but somehow another glitch counteracted that and allowed the calculator to display the correct answer. I tried rebuilding and retesting the calculator, but it glitched again and that time ended up displaying the incorrect answer.

<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ydJ9niocncg?si=VefNMnUHaotYA9tn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

For some context, I started building Jenga structures in 2014 as a hobby. It was a source of continuous amazement to me that I could always find something interesting to build out of such simple building blocks. At first I focused on static structures like towers, bridges, and domes, but I eventually discovered dynamic structures that could transmit signals. As I learned more about these dynamic structures, my curiosity drove me towards more complex projects such as this calculator.

<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CuJCyEyGsk4?si=NDVl-jB59-ky9Q2C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The calculator relies heavily on a simplified version of the mechanisms in the video above. This mechanism complements dominoes (which I use in the middle and end of the calculator) because unlike dominoes, severing it anywhere along its length causes the mechanism to send a signal instead of prevent a signal. Since I relied more on AND and OR gates than on XOR gates, I ended up using this mechanism far more often than dominoes.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/jenga_calculator/old_jenga_calculator.JPG" alt="old jenga calculator" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

As I was prototyping this calculator, I quickly realized that I needed to optimize for compactness and reliability. The prototype in the picture above was only a single bit adder (inputs on the left and output on the right) and it already took up the whole table. Since I had limited space and I wanted to make the design more elegant, I spent a lot of my time optimizing the spatial arrangement of the logic gates and signal paths. 

<div class="row justify-content-center">
    <div class="col-sm-7 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/jenga_calculator/dbc_screenshot.jpg" alt="screenshot of my prototype mechanical adder" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/jenga_calculator/dbc_prototype.jpg" alt="fragment of my prototype mechanical adder" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    The left picture is the CAD of my mechanical adder and the right picture is a fragment of the prototype I built
</div>

This would be the first ever calculator project I would work on, but it would certainly not be the last. I became intensely curious about mechanical calculators afterwards and would go on to build another binary adder out of K'Nex. A few years later in 2018, I attempted to design a much more powerful calculator (shown in the images above) that would take decimal numbers as inputs, convert them to binary, and then add or subtract those binary numbers. However, after 5 months I halted work on that project. This was partially because I knew I still had many more months of work to do, and I felt an increasing pressure to work on an exciting project that had been on my mind for over a year—the mechanical ball clock. Moreover, I was going through a profound period of transformation in my life and turning to a new project was a symbol of a fresh new start for me.

In 2019, I started designing a fully mechanical programmable computer, and that project is still ongoing. In 2025, I would create a functional copy of the historic Curta calculator. Based on the last decade, it seems like no matter what other projects I work on, I always seem to come back to mechanical calculators. I'm not sure why that is, but my best guess is that I enjoy designing and understanding complex mechanical devices, and in my mind there are few mechanical devices more complex than a mechanical calculator.

