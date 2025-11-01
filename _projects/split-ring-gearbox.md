---
layout: page
title: Split Ring Gearbox
description: May 2018
img: assets/img//split_ring_gearbox/split_ring_gearbox.jpg
importance: 15
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/p5Hnje3WNZQ?si=7AT6YXVJEQuxOsw_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

I thought of a way to produce extremely high gear ratios by using the fact that the velocity of a point close to where a spur gear and stationary internal gear mesh is near zero. By stacking a second spur gear on top of the first spur gear and making their pitch diameters almost (but not quite) the same, I can make this second spur gear drive a second internal gear at an extremely low speed. In this proof of concept, I have two stages of this gearbox, each with a gear ratio of 115:1. This results in an overall gear ratio of 13,225:1. 

I later found out that Oskar van Deventer had already developed a [more optimized design](https://www.youtube.com/watch?v=b_pbOCIg_nI) that produces a 1000:1 gear ratio per stage. Years later, I also learned about "split ring planetary gearboxes," which have a different internal layout but use the same strategy of using two spur gears with almost the same pitch diameters. Interestingly enough, it seems like this gearbox design is not nearly as well-known as other "exotic" gearboxes like harmonic drives and cycloidal drives despite its ability to achieve a much higher gear ratio for a given bounding box and minimum tooth size. This strategy of using a small difference between the shapes of two components shows up in other mechanisms that produce extreme mechanical advantage such as [differential screws](https://en.wikipedia.org/wiki/Differential_screw) and [differential windlasses](https://en.wikipedia.org/wiki/Windlass#Differential_windlass). 

<div class="row justify-content-center">
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/split_ring_gearbox/split_ring.png" alt="top view of split ring gearbox" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/split_ring_gearbox/harmonic.png" alt="top view of harmonic gearbox" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    Top views of my split ring gearbox (left) and a <a href="https://en.wikipedia.org/wiki/Strain_wave_gearing">harmonic drive</a> (right)
</div>

<style>
.fraction {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.numerator {
  display: block;
  border-bottom: 1px solid black;
  padding-bottom: 2px;
}
.denominator {
  display: block;
  padding-top: 2px;
}
</style>

The gear ratio of the split ring gearbox may be calculated using the equation below. Note that the diameters refer only to pitch diameters, the blue gear is stationary, and the yellow and orange gears are joined together. The green component is the input and the red gear is the output.

<p style="text-align: center;">R = <span class="fraction">
    <span class="numerator">D<sub>orange</sub> D<sub>red</sub></span>
    <span class="denominator">(D<sub>blue</sub> - D<sub>orange</sub>) (D<sub>orange</sub> - D<sub>yellow</sub>)</span>
</span></p>

Alternatively, since the red gear's pitch diameter is already fully determined by the pitch diameters of the other gears:

<p style="text-align: center;">R = <span class="fraction">
    <span class="numerator">D<sub>orange</sub> (D<sub>blue</sub> - D<sub>orange</sub> + D<sub>yellow</sub>)</span>
    <span class="denominator">(D<sub>blue</sub> - D<sub>orange</sub>) (D<sub>orange</sub> - D<sub>yellow</sub>)</span>
</span></p>

Notice how the denominator has two terms that can be brought to near zero if the pitch diameters of certain gears almost match the pitch diameters of other gears. In fact, since all that matters is the pitch diameter, the gear module between the blue and orange gears can be different from the module between the yellow and red gears. This allows the orange and yellow gears to have more similar pitch diameters than they would if they were forced to have the same module. With some optimization, a single stage that only uses gears with around 40 teeth each (especially if they use a flatter tooth geometry like in [Oskar van Deventer's design](https://www.youtube.com/watch?v=b_pbOCIg_nI)) could surpass a 1000:1 gear ratio.<br>

As for the harmonic drive, its gear ratio may be calculated using the equation below. I use number of teeth instead of pitch diameter here because of the red flex spline. Also note that the blue gear is stationary, the green component is the input, and the red flex spline is the output.

<p style="text-align: center;">R = − <span class="fraction">
    <span class="numerator">N<sub>red</sub></span>
    <span class="denominator">N<sub>blue</sub> - N<sub>red</sub></span>
</span></p>

Since the denominator cannot be less than 1, the maximum gear ratio of a harmonic drive is the number of teeth on the flex spline. This means that if the gears had around 40 teeth each, the gear ratio would be capped at 40:1, which is 1/25th of the 1000:1 gear ratio of a split ring gearbox that also had around 40 teeth per gear. The same analysis on gear ratio holds for cycloidal drives, which have a very similar gear ratio formula as harmonic drives.

<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NzYYcMCBaug?si=kMZw1FyLntDeq3va" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
In July 2018, I continued to explore this gearbox design by designing a -1:1 coaxial gearbox. Gearboxes that coaxially reverse the directions of their shafts are notable because they can also be used as differentials by rotating the case of the gearbox instead of one of the shafts. This design only uses one intermediate moving component (green) and its construction out of layered 2D shapes could make it easier to manufacture compared to something like bevel gears. The layered 2D structure of the gearbox and the fact that the geometries nest within each other could also make this design unusually compact, especially in the axial direction.

