---
layout: page
title: Raspberry Pi Ball Launcher
description: Jan - Feb 2021
img: assets/img/ball_launcher/ball_launcher.jpg
importance: 7
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z0E5FEYCNAg?si=ae4jr5qkJ0ILnSKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="caption mt-0">
    Shooting the ball launcher at its lowest power setting
</div>

My living group at MIT hosts a recruitment event at the beginning of every fall and spring. However, in the spring of 2021, school was still partly virtual for us due to the pandemic. Given these constraints, we decided to organize an event where people would send keyboard inputs through a Twitch livestream to remotely aim and shoot a ball launcher at a dunk tank. I was tasked with creating the hardware, wiring up the electronics, and setting up the Raspberry Pi while another person was tasked with connecting the Raspberry Pi to Twitch and setting up an intuitive GUI.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/ball_launcher/ball_launcher.jpg" alt="ball launcher on desk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The ball launcher is a baseball pitcher mounted onto a gimbal I designed to provide motorized yaw and pitch control. I used NEMA 17 stepper motors I salvaged from an old 3D printer to control the yaw and pitch angles, but the weight of the baseball pitcher would overwhelm the pitch motor at low pitch angles. For this reason, I added an elastic band to the back of the gimbal to counter the weight of the baseball pitcher. In hindsight, I should have placed the pitch joint axis closer to the center of mass of the baseball pitcher and axis of firing. I did nearly all the construction out of aluminum bars and screws because all I had at home for metalworking was my drill and hacksaw. For more complex geometry like gears, I used my 3D printer.

<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/G9RxQhiquYA?si=XwbmDA7aWYF4y01t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

I used a Raspberry Pi Zero W to control the A4988 stepper drivers. In order to make power supply simple, I designed the circuit to only require a single 9 V input. This 9 V would power the stepper motors directly and would also be stepped down by an L7805 voltage regulator to provide 5 V for the stepper drivers and Raspberry Pi.

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/ball_launcher/ball_launcher_outside.jpg" alt="ball launcher outside" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After the ball launcher was complete, I shipped it to the people hosting the event. Unfortunately, we found out that the Raspberry Pi no longer worked. We thought it might have been fried by an electrostatic shock at the shipping facility. We replaced the Raspberry Pi, but then we found out that the stepper drivers also no longer worked and it was too late to order or make a replacement. However, since the baseball pitcher still worked, we ended up firing balls at the dunk tank using human-controlled steering instead of electronically-controlled steering.

