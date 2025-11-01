---
layout: page
title: Polyhedron Generator
description: May 2025
img: assets/img/virtual_polyhedron.jpg
importance: 50
category: More Projects
related_publications: false
---


<div class="row justify-content-center">
    <div class="col-sm-8">
        {% include figure.liquid loading="eager" path="assets/img/virtual_polyhedron.jpg" alt="program-generated polyhedron" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I wanted to do more coding projects, and I thought this project would strike a nice balance between coding and mechanical engineering. This program takes a random 3D point cloud and then generates a polyhedron from it by finding the convex hull of the point cloud. I could have used a convex hull library but, since my goal was to learn rather than build the program as fast as possible, I came up with my own strategy, refined it with information I found online, and wrote the code myself. The program starts with a tetrahedron, figures out what points are on the normal side of each face, and then loops through each face, finding the point that is furthest from each face. I then delete any face that this point can see and generate new faces between this point and the rest of the polyhedron. I repeat this for all faces of the polyhedron until there are no more points to add, and then I export the final polyhedron as an STL file. This allows me to import them into CAD softwares and 3D print them.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/printed_polyhedra.jpg" alt="3D printed polyhedra" class="img-fluid rounded z-depth-1" %}
    </div>
</div>