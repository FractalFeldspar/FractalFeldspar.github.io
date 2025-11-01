---
layout: page
title: Mechanical Ball Clock
description: Apr - Jul 2019
img: assets/img/mechanical_ball_clock/full_clock.jpg
importance: 1
category: Featured
related_publications: false
---


<div class="embed-responsive embed-responsive-16by9 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/JKv2sZO4aGY?si=e8iIDBwpUzCc4_C3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> 

Many years ago, I was working on another mechanical project when I suddenly came up with an idea for a mechanical clock. For context, common escapement designs like watch escapements experience deviations in their period when their energy source (e.g., a mainspring) supplies different amounts of torque/force to the rest of the clock. This is why some mechanical watches use a [fusee mechanism](https://en.wikipedia.org/wiki/Fusee_%28horology%29) in combination with their mainspring. The idea I had was to create a second escapement that was insulated from the varying levels of torque/force supplied by the energy source. One year after this idea came to me, I decided to pursue it by designing and building this mechanical clock.

<!-- <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/x7STD5HqZzA?si=PjqoqM41ET_HG6tv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

<style>
    /* Video container that respects Bootstrap width */
    .video-container {
        position: relative;
        width: calc(100% + 30px);
        margin-left: -15px; 
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        margin-bottom: 20px;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-12 mt-3">
            <div class="video-container" id="video-container">
                <div id="player"></div>
            </div>
        </div>
    </div>
</div>

<script>
    let player;
    let isPlayerReady = false;
    
    // Load the YouTube API
    function loadYouTubeAPI() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // This function is called automatically when the API is ready
    function onYouTubeIframeAPIReady() {
        console.log('YouTube API Ready');
        player = new YT.Player('player', {
            width: '100%',
            height: '100%',
            videoId: 'x7STD5HqZzA', // Replace with your video ID
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError
            }
        });
    }
    
    function onPlayerReady(event) {
        console.log('Player Ready');
        isPlayerReady = true;
    }
    
    function onPlayerError(event) {
        console.error('YouTube Player Error:', event.data);
    }
    
    function seekTo(seconds) {
        if (player && isPlayerReady && typeof player.seekTo === 'function') {
            try {
                player.seekTo(seconds, true);
                console.log('Seeking to:', seconds);
            } catch (error) {
                console.error('Error seeking:', error);
            }
        } else {
            console.log('Player not ready yet');
        }
    }
    
    function scrollToVideo() {
        const playerElement = document.getElementById('player');
        playerElement.scrollIntoView({ 
            behavior: 'smooth', // 'auto' would make it jump to the video rather than scroll to it
            block: 'center' // Options: 'start', 'center', 'end', 'nearest'
        });
    }
    
    function seekToAndScroll(seconds) {
        seekTo(seconds);
        scrollToVideo();
    }

    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadYouTubeAPI);
    } else {
        loadYouTubeAPI();
    }
</script>


Powered by steel balls, this clock is purely mechanical and has five sections:
<ul>
    <li>Storage <a href="#" onclick="seekToAndScroll(3); return false;">(0:03)</a></li>
    <li>Timekeeping <a href="#" onclick="seekToAndScroll(17); return false;">(0:17)</a></li>
    <li>Display <a href="#" onclick="seekToAndScroll(21); return false;">(0:21)</a></li>
    <li>Regulator <a href="#" onclick="seekToAndScroll(28); return false;">(0:28)</a></li>
    <li>Collector <a href="#" onclick="seekToAndScroll(32); return false;">(0:32)</a></li>
</ul>


<h2 class="post-title">Storage</h2>
<p class="subpost-timestamp">Timestamp: <a href="#" onclick="seekToAndScroll(3); return false;">0:03</a></p>
<p>This is where all the balls within the clock are initially stored. When filled to capacity, the clock can run for about 11.5 minutes. However, if the storage is replenished at regular intervals so that it never becomes empty, the clock could theoretically run indefinitely.</p>

<div class="row justify-content-center">
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/jammed_container_1.jpg" alt="jammed container" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/jammed_container_2.jpg" alt="jammed container" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    First iterations of the storage module. Without careful design, jams can form over an outlet multiple times the ball's diameter.
</div>

I realized pretty quickly that creating the storage module was not as straightforward as adding a hole to the bottom of a container. I was surprised by how frequently the steel balls formed jams at the outlet. This problem remained persistent across so many iterations of my design that I came close to adding a user-operated unjamming tool. Fortunately, I eventually figured out some strategies for reducing jamming:
<ul>
    <li>Reduce the number of directions from which the steel balls can approach the outlet. For example, an outlet that only allows balls to approach from the top tends to jam less often than an outlet that allows balls to approach from the top and the sides.</li>
    <li>Reduce the pressure exerted by the steel balls onto the outlet. For example, a container with three layers of balls is less likely to jam compared to a container with ten layers of balls.</li>
</ul>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/storage.jpg" alt="storage module of mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
 This is why my final design uses a gentle horizontal taper. The gentle taper makes sure the steel balls can only approach the outlet from one direction, and the horizontal wedge's perpendicular orientation to gravity reduces the pressure the steel balls in the taper can exert towards the outlet. The roof of the horizontal taper also insulates the outlet from the pressure applied from balls above the horizontal taper. After adding this horizontal taper to the storage module, it finally stopped jamming.


<h2 class="post-title">Timekeeping</h2>
<p class="subpost-timestamp">Timestamp: <a href="#" onclick="seekToAndScroll(17); return false;">0:17</a></p>
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/timekeeping.jpg" alt="timekeeping module of mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
The clock consists of 2 escapement mechanisms. The period of the smaller escapement to the right is the time it takes for a ball to roll from the top of the escapement to the bottom of the escapement, and this directly sets the clock's period. I designed the clock period to be around 4 seconds, and I can fine tune this period by adjusting the position of the black slider on the track. The period of the larger escapement does not need to be precise because it just needs to supply a new ball to the smaller escapement at some point during the smaller escapement's clock cycle. I used two escapements because I wanted to insulate the smaller escapement from the pressure and friction applied from the balls in the storage module. Ironically, I later learned that rolling ball clocks are notoriously inaccurate at timekeeping compared to other clocks because of their sensitivity to dust on the tracks. However, that was acceptable to me because I realized soon after starting this project that I was more interested in the opportunity to design ball-based mechanisms than I was in making an accurate clock.


<h2 class="post-title">Display</h2>
<p class="subpost-timestamp">Timestamp: <a href="#" onclick="seekToAndScroll(21); return false;">0:21</a></p>
<div class="row justify-content-center">
    <div class="col-sm-9 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/display.jpg" alt="display module of mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
The top green lever represents seconds, and the bottom green lever represents minutes. A ball on the top lever represents 4 seconds, and a ball on the bottom lever represents 1 minute. Once 15 balls have accumulated on the top lever, the lever tips over and dumps out all but one of the balls. This remaining ball then rolls to the bottom lever. To make the display easier to read, I printed some paper labels and inserted them into the display levers while I was 3D printing them.


<h2 class="post-title">Regulator</h2>
<p class="subpost-timestamp">Timestamp: <a href="#" onclick="seekToAndScroll(28); return false;">0:28</a></p>
<div class="row justify-content-center">
    <div class="col-sm-9 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/regulator.png" alt="regulator module of mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
The regulator's purpose is to absorb the sudden surge of steel balls coming out of the display levers and release them one at a time into the collector module below. This is necessary because the collector module below can only process one ball at a time.


<h2 class="post-title">Collector</h2>
<p class="subpost-timestamp">Timestamp: <a href="#" onclick="seekToAndScroll(32); return false;">0:32</a></p>
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/container.jpg" alt="collector module of mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
This is where all the balls collect after they have expended their potential energy going through the clock. The containers are designed so that balls go into the first non-full tank they encounter. In other words, balls will fill up the top tank by default, and they will only begin filling the bottom tank once the top tank becomes full. I designed the containers this way because filling from bottom to top would have caused the bottom container to overflow or collect balls in a dead zone between the bottom and top container. To maximize storage efficiency, the containers store the balls in a hexagonal packing arrangement.


<h2 class="post-title">Other Thoughts</h2>
<div class="row justify-content-center">
    <div class="col-sm-12 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_ball_clock/iterations.jpg" alt="iterations of the mechanical ball clock" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
It took me an unusually high number of iterations to design the mechanisms in this project compared to my other projects. In this project, it was typical for me to design over ten iterations of a mechanism before it began to work reliably. This was especially true of the storage and timekeeping modules. <br>

Years later, I decided to continue exploring ball-based mechanisms by beginning work on a mechanical computer run by steel balls and a second mechanical ball clock. I realized that I could perform complex operations such as adding, bit shifting, timekeeping, and displaying using no moving parts other than the steel balls. However, it seems like designing ball-based mechanisms is deceptively challenging. Some of the mechanisms I designed for my mechanical computer and second clock took around 100 iterations to get right, and I still have many more mechanisms to design for those projects. 