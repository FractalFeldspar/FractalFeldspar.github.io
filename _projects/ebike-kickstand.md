---
layout: page
title: E-Bike Kickstand
description: Sep 2023
img: assets/img/kickstand/full_kickstand.jpg
importance: 90
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u36JteWUIOc?si=Miw3YxP3twyKocHD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

My friend broke his e-bike’s kickstand, so I decided this would be a good opportunity to practice CNC milling and make a new one for him. After 3D modeling the kickstand based on pictures and measurements of the original, I set up the milling toolpaths in Fusion 360 and milled it out of a block of aluminum at one of MIT’s makerspaces.

<div class="row justify-content-center">
    <div class="col-sm-9 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/kickstand/broken_kickstand.jpg" alt="broken kickstand" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-9">
        {% include figure.liquid loading="eager" path="assets/img/kickstand/kickstand_back.jpg" alt="new kickstand" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    Top picture: original, broken kickstand. Bottom picture: freshly milled kickstand.
</div>

<div class="row justify-content-center">
    <div class="col-sm-9 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/kickstand/assembling_kickstand.jpg" alt="assembling kickstand using the mill spindle" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Assembling my milled aluminum with the rest of the kickstand was surprisingly difficult due to the extremely stiff spring the kickstand used for its bistable positioning. Fortunately, I was able to clamp the aluminum in the mill’s vise and compress the spring by gently using the mill spindle as an arbor press.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/kickstand/full_kickstand.jpg" alt="fully assembled kickstand" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/kickstand/ebike.jpg" alt="ebike with assembled kickstand" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    After reattaching the kickstand to the e-bike, it worked perfectly. 
</div>

