---
layout: page
title: Nixie Tube Clock
description: Jan 2023
img: assets/img/nixie/nixie_closeup.jpg
importance: 3
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AtcmDuJbcJs?si=G0TbwBnTEPIzSaqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

I built this clock to display the time by default, but tapping the capacitive touch sensor on the right allows me to also see the temperature and date. When displaying temperature, the first two digits are the outside temperature and the last two digits are the inside temperature. I used an ESP32 to obtain clock and outside temperature data from the internet and a thermistor to obtain inside temperature.

<div class="row justify-content-center">
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/nixie/nixie_4.jpg" alt="closeup of a nixie tube" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Before LEDs became common, Nixie tubes were a common way to display numbers on electrical devices. They consist of one high voltage anode and ten wires bent into the shapes of the numbers they're meant to display, and these are all sealed within a glass tube filled with low pressure gas. Connecting one of the numbers to ground creates a glow around that number in a similar process as a neon tube. The Nixie tubes I used in this clock were originally made in the USSR. Part of the reason hobbyists can still buy Nixie tubes is because the USSR had manufactured a surplus of them right as they were becoming obsolete.

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/nixie/nixie_night.jpg" alt="nixie tube clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Some more details about the electronics I used:
A boost converter module converts the 12 V power supply to 180 V for the anodes of the Nixie tubes. An L7805 linear regulator steps down the 12 V power supply to 5 V for the ESP32 and ICs. The ESP32 uses the internet and a thermistor to obtain clock and temperature data, converts that data into binary, and then sends that binary data out onto three daisy-chained 74HC595 shift registers. Since a Nixie tube is controlled by ten pins, one for each number, this binary data is then converted into one-hot data using six K155ID1 decoders, one for each Nixie tube.

