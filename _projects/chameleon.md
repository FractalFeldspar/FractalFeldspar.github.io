---
layout: page
title: Chameleon
description: Feb - May 2023
img: assets/img/On_Grass.jpg
importance: 3
category: Featured
related_publications: false
---


<div class="row justify-content-center">
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/On_Grass.jpg" alt="robot on grass" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
I built this robot for an MIT robotics competition class (2.007) very similar to the annual FIRST robotics competition. Early on, I decided I wanted to build something unique. To that end, I built a tape-measure style actuator that could extend to multiple times the robot’s starting height. Compared to cable-driven multistage lift mechanisms and linkage-based mechanisms, this actuator is lighter and has more extension at the cost of lower load capacity.


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/S9tTV08RGLg?si=YW_k1_idS0zDjmhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

To drive this actuator, I attached long segments of belt to the sheet metal and drove the belts with multiple motor driven pulleys. Unfortunately, I was not allowed to use steel for the sheet metal so I settled on using aluminum. To give the sheet metal more stiffness when extended, I fed this sheet metal through a camming surface that bent the flat cross section of the sheet metal into a “U”-shaped cross section. I also added rollers to the camming surface to greatly reduce the friction. Attaching the belt to the sheet metal proved difficult. Adhesives were ineffective due to the belt peeling off the sheet metal when the sheet metal was coiled up inside the drum, and traditional fasteners like screws and rivets would interfere with the meshing between the belt and pulleys. I ultimately used staples since they were low profile, and I staggered them so that the pulleys would never engage more than one stapled area of the belt at a time.


<div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zHvNdmEc9qw?si=4me_YudO6wL_gSeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Another interesting challenge was coiling the sheet metal back into the drum. If the motor tried to push the sheet metal back into the drum, the sheet metal would bind up against the circumference of the drum due to the friction. As a result, I imitated what tape measures do and placed a large constant force spring in the middle of the drum. This spring would coil up the sheet metal fed back into the drum by the motor, preventing the sheet metal from binding against the drum’s circumference. In addition, I added a hexagonal knob to the outside of the drum to allow me to adjust the spring’s preload without needing to disassemble the drum.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/Deployed.jpg" alt="fully deployed robot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
