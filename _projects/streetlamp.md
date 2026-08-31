---
layout: page
title: Streetlamp Morse Code
description: Jul - Oct 2022
img: assets/img/Streetlamp/streetlamp_with_keyboard.jpg
importance: 7
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iNGPthv4JZo?si=fauM8jUu5rjjrKZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="caption mt-0">
    Sending Morse code from Boston to Cambridge
</div>

<div class="row justify-content-center">
    <div class="col-sm-4 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/Streetlamp/streetlamp_pole.jpg" alt="streetlamp pole" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/Streetlamp/streetlamp_on_ground.jpg" alt="streetlamp on ground" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I came across this streetlamp in May 2021. The light had fallen off its pole, presumably due to a traffic accident.

One year later, my friend also noticed this streetlamp and decided to take the light and its power supply home. Apparently nobody had removed it after all that time. By this point, the glass cover had been shattered and even the metal had been cracked in several places. My friend gave everything to me to see if I could get it working again.

<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KzbzEDha8AM?si=6B5xntwDHDOpEUr2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

It turns out that both the streetlamp and its power supply were still functional. To make things more interesting, I decided to also make it a keyboard-controlled Morse code generator. I chose to use a PS2 keyboard since I found the USB protocol too complicated for me to implement with an Arduino. The Arduino converts keyboard inputs to Morse code and controls the streetlamp with a MOSFET. I also enabled the user to manually flash the streetlamp and adjust transmission speed. I soldered a power plug and 5V power adapter to the power supply so that everything could be powered by a single wall outlet.

<div class="row justify-content-center mt-4">
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/Streetlamp/streetlamp_in_gantry.jpg" alt="streetlamp in gantry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I then created a frame that would allow me to adjust the pitch angle of the streetlamp. To lock the streetlamp at a specific angle, I place a screw through one of the holes in the aluminum bar on the right. This screw gets locked against the vertical 80/20 extrusion, which prevents the streetlamp from rotating out of position. For safety purposes, I also 3D printed enclosures for every part of the project that could reach at least 20 V.

<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6-eLX4JNZW0?si=c_LJ8SttugNq9J-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Since I lived in a tall building in Boston right next to the Charles River, I decided to send Morse code across the river to Cambridge. A friend of mine who lived in Cambridge took this video of the streetlamp flashing. I was pleased to see that he could clearly see my message even though the streetlamp was not facing directly towards him.
