---
layout: page
title: Self Assembling Virus
description: Nov 2019
img: assets/img/virus/perfect_virus.jpg
importance: 50
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gdP0weWQOF0?si=vJ4Yl9cd2oUN_MQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

I was inspired by the fact that viruses can self-assemble within a cell. After they force the host cell to make the proteins of the virus's capsid, those proteins randomly move around until they spontaneously assemble into a stable shape like an icosahedron. I tried to mimic this process by 3D printing some pentagons with magnets inside of them and shaking them in a bag until they assembled into a dodecahedron. During my tests, I typically began to see groups of 3 or 4 pentagons after only a few seconds of shaking. After around 30 seconds, the dodecahedron was typically only missing a few pentagons. However, getting the final 1 or 2 pentagons to snap into place usually took a few more minutes of shaking.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/virus/perfect_virus.jpg" alt="typical assembly of a virus" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/virus/imperfect_virus.jpg" alt="alternate assembly of a virus" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Most of the time, the pentagons form the dodecahedral shape as expected. However, occasionally the pentagons find another stable shape such as the shape in the picture to the right.
