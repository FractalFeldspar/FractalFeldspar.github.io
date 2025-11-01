---
layout: page
title: Motorcycle Scream-O-Meter
description: Dec 2020
img: assets/img/motorcycle/top_view.jpg
importance: 2
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3FrCdwkI1sk?si=3kj0fYXVehPimOwN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

For the final project of an electronics class, I decided to create a device that would display information about the noisy motorcycle sounds I heard while living next to a busy street in Boston. The rainbow LEDs in the bottom left show real-time sound intensity, the red LEDs in the middle top show maximum sound intensity (with lower lights corresponding to louder sounds), and the blue LEDs in the top right show the number of loud sounds detected.

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/motorcycle/top_view.jpg" alt="top view of circuit board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Normally, it's good to perform a task as simply and efficiently as possible. However, since this was my final project for an electronics class, I decided to expose myself to as many ICs and electrical components as possible. Even though I could have used a microcontroller, I'm glad I had an opportunity to work directly with basic electrical components that would have otherwise been "blackboxed" away as breakout boards or lines of code. For example, the buck and boost converters were built from basic components such as manually wrapped toroidal inductors, the rainbow LEDs displaying real-time sound intensity were controlled by op amps, the red LEDs displaying maximum sound intensity were latched using transistor pairs that acted like SCRs, and the blue LEDs counting the number of loud sounds were driven by a one-shot, counter, and more transistor latches.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/motorcycle/bottom_right_view.jpg" alt="bottom right view of circuit board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

