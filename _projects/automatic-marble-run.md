---
layout: page
title: Marble Run CAD Script
description: Aug - Sep 2025
img: assets/img/marble_run/marble_run.jpg
importance: 3
category: More Projects
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bb5OOlfLeKs?si=IYy1Rq6BGbn7cQr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
I did this project because I wanted to practice writing scripts for CAD. Marble runs are simple in principle, but actually 3D modeling one using standard CAD tools like sketches, extrudes, moves, and sweeps would be tedious to the extreme. Fortunately, CAD scripts are well-suited for tasks like these, where I need to perform an enormous number of predictable operations. To make a marble run, my Fusion 360 script* generates a matrix of values representing the path of the marble run and then automatically converts that matrix into a 3D model.

To make this project more unique, I also wanted an "autorun" mechanism that would allow a marble which has reached the bottom to automatically release another marble from the top. I have seen many marble runs that use a motor or hand operated mechanism to lift and release more marbles, but I wanted my solution to be fully automatic and fully mechanical. For this reason, I came up with a mechanism that allows a marble reaching the bottom to send a release signal to the top marble by causing a column of marbles to fall. As a bonus, this mechanism uses no moving parts other than the marbles themselves, and it can easily be scaled to work with marble runs of any height.

<div class="embed-responsive embed-responsive-16by9 mb-3" style="margin-top: 2rem;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/godOjO5a12M?si=ZOgdLiOE4gIqhvAp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
My Fusion 360 script has two main parts. First, it figures out the path of the marble run and represents this path as a sequence of numbers within a matrix. Second, it converts this matrix into a 3D model within Fusion 360. After I generated a marble run track that I liked, I manually 3D modeled the autorun mechanism and integrated it with the marble run track before 3D printing the whole thing. 

To figure out the marble run path, my script goes on a modified version of a random walk through the cells within a matrix. In order to reduce the chance of creating impossible paths such as paths that divide the matrix into multiple empty regions, I designed my script so that whenever it's about to pick the next cell to include in the path, it has a higher chance of choosing cells that are on the borders of the matrix or next to the path it has generated so far. I also make my script check for other issues such as whether including the next cell would create too many dead ends for the path to fill. If my script gets to a point where it can't find a valid next cell but the matrix is still not fully filled by the path, then it will backtrack and try a slightly different path. The path is represented in the matrix as a sequence of numbers from 1 to N, where N is the number of cells within the matrix and 1 and N correspond to the start and end of the path.

To convert this matrix into a 3D model, I first make my script generate 12 base track bodies. These base track bodies consist of 4 straight tracks and 8 elbow-shaped bent tracks. My script also uses the matrix to generate a "type" matrix, which indicates which of the 12 base tracks corresponds to each cell of the path matrix. I then go through the path of the path matrix and copy and move the corresponding base track to its location within the marble run. Finally, I combine all these base track bodies together to form the marble run.

<div class="embed-responsive embed-responsive-16by9 mb-3" style="margin-top: 2rem;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ee5vu94uPDI?si=6dGXWqrN6A0djg7t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
In my quest to learn how to write CAD scripts, I also wrote this script that allows me to select arbitrary lines, curves, and points and generate fully parametric pipes and spheres around all of them. I did this because the pipe and sweep features in Fusion 360 don't always work for short distances and sharp turns, and I needed a more efficient way to add spheres to arbitrary points. This script excels at creating the paths for ball-based mechanisms, and I used this script extensively while 3D modeling my autorun mechanism. I am certain that this script saved me from multiple hours of tedious work over the course of this project.

<div class="embed-responsive embed-responsive-16by9 mb-3" style="margin-top: 2rem;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6cD3OiQwAjw?si=yK25XoNBLEmff3Ea" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
The autorun mechanism works as follows:
<ol>
    <li>The user moves marbles from the bottom of the marble run to the marble queue at the top by sliding their finger along the bottom of the marble run. The marble-based ratchet mechanism in the vertical elevator column allows the column to already be filled with marbles, which makes it unnecessary for the user to also slide their finger up the column. When marbles enter the marble queue at the top, the marble queue automatically releases one ball onto the marble run track.</li>
    <li>When a marble reaches the bottom, it knocks out the base marble at the bottom of the marble signal column. The bends in the signal column are there to reduce the pressure exerted on the base marble due to the weight of the marbles higher up in the column. One of the bends also serves to fine tune the total height of the signal column.</li>
    <li>When the base marble is knocked out, the entire signal column falls. This leaves a gap at the front of the marble queue at the top.</li>
    <li>Gravity pulls the marble queue down the incline. This pushes the marble currently at the front of the queue out onto the marble run track. At the same time, the marble behind it fills up the gap that opened up at the front of the marble queue when the signal column fell. The marble at the sudden drop in the incline acts like a wedge and ensures there's always enough pressure to push these first two marbles forward. The zig zag track above it ensures that marbles rolling down the incline don't pick up excessive speed or build up excessive pressure, which can push marbles off the track.</li>
    <li>The marble queue always applies pressure down the incline, but the positions of the marbles at the front of the marble queue create a jam that prevents any more marbles from being pushed out.</li>
    <li>Once the marble that was pushed out onto the marble run track reaches the bottom, it knocks out the signal column's base marble, returning to step 2.</li>
</ol>

<div class="embed-responsive embed-responsive-16by9 mb-3" style="margin-top: 2rem;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PHz_2DiD1XA?si=B4nWkBgfwXwVyvAV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="row justify-content-center">
    <div class="col-sm-12">
        {% include figure.liquid loading="eager" path="assets/img/marble_run/marble_run_iterations.jpg" alt="design iterations of marble run" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
I spent around 20% of my time on this project creating the script to generate the marble run track and the remaining 80% of my time designing the autorun mechanism. Like most of my projects involving ball-based mechanisms, this mechanism took me a high number of iterations to get right. Over the course of my 20 or so design iterations, I gradually made my mechanism more and more complex, arriving at the mechanism shown in the video above. It worked fairly well, but I was unsatisfied because it seemed unnecessarily complex. I decided to backtrack to a simpler mechanism I had come up with on the second design iteration, and to my surprise it worked exceedingly well after only minor modifications. Over the course of a few more iterations, I developed this simpler mechanism into the mechanism I used in the final marble run.

<div class="embed-responsive embed-responsive-16by9 mb-3" style="margin-top: 2rem;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TWVIMHg1Pe4?si=e6pMGiD6U6iHkE1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
Another neat thing about autorunning the marble run is the fact that I can have multiple marbles on the marble run at the same time. In this video I show 12 marbles. Overall, even though this project took me longer than I expected, I like how it turned out. I find it quite fun to watch, and it will make a fine addition to my desk.

*Technically, the Fusion 360 "script" I wrote is called an "add-in," but they're similar enough that I refer to everything as scripts for simplicity.



