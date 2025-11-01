---
layout: page
title: Jenga Structures
description: Mar 2014 - Feb 2017
img: assets/img/jenga/44.jpg
importance: 100
category: More Projects
related_publications: false
---

<!-- Adjust border-radius to 4px, set padding to 0px, lazy loading -->

In March 2014, I started building structures with Jenga blocks. Even though I had spent my childhood building with Legos and K’nex, something about the constraints—the limited number of blocks, the uniform shapes, the limited tablespace, and no instruction manual—pushed me to think more creatively. Over the next few years, I built hundreds of structures: towers, bridges, arches, landscapes, and even a mechanical calculator. Looking back, I believe this was when my fascination for mechanical hardware really began. If something as complex as a calculator could be built out of something as simple as Jenga blocks, then I could only begin to imagine what might be possible with more advanced shapes. I believe this curiosity to explore what I could do with physical shapes carried through to my later projects and ultimately led me to pursue mechanical engineering professionally. 

In this page, I have included the highlights of my Jenga projects, sorted by category:
<ul>
    <li><a href="#towers-and-buildings">Towers and Buildings</a></li>
    <li><a href="#bridges">Bridges</a></li>
    <li><a href="#domes-and-arches">Domes and Arches</a></li>
    <li><a href="#landscapes-and-crystals">Landscapes and Crystals</a></li>
    <li><a href="#signallers">Signallers</a></li>
    <li><a href="#destroyers">Destroyers</a></li>
</ul>

<style>
html {
  scroll-behavior: smooth; /* Smooth scrolling for all anchor links */
}

/* Move the screen a little more downward when you scroll to a section */
section, div[id] {
  scroll-margin-top: 80px;
}

.masonry-columns {
  column-count: 3;
  column-gap: 15px;
  padding: 0px;
}

.masonry-item {
  display: inline-block;
  width: 100%;
  margin-bottom: 15px;
  break-inside: avoid;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.masonry-item img:hover {
  transform: scale(1.02);
}

/* Modal styles */
.image-modal {
  display: none;
  position: fixed;
  z-index: 9999; /* Higher z-index to go above banner */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  cursor: pointer;
}

.modal-content {
  display: block;
  margin: auto;
  max-width: 90%;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  object-fit: contain; /* Maintains aspect ratio without cropping */
}

.close {
  position: fixed; /* Changed from absolute to fixed */
  top: 20px; /* Moved down from banner area */
  right: 30px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000; /* Even higher z-index */
  background-color: rgba(0,0,0,0.5); /* Dark background for visibility */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.close:hover {
  background-color: rgba(0,0,0,0.8);
  color: #ddd;
}

@media (max-width: 768px) {
  .masonry-columns { column-count: 2; }
  .close {
    top: 10px;
    right: 10px;
    font-size: 40px;
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .masonry-columns { column-count: 1; }
}
</style>

<!-- Modal for enlarged images -->
<div id="imageModal" class="image-modal" onclick="closeModal()">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImg" alt="Enlarged image" onclick="closeModal()">
</div>

<div id="towers-and-buildings">
    <h2 class="post-title">Towers and Buildings</h2>
</div>
<div class="masonry-columns" id="gallery1">
</div>

<br>
<div id="bridges">
    <h2 class="post-title">Bridges</h2>
</div>
<div class="masonry-columns" id="gallery2">
</div>

<br>
<div id="domes-and-arches">
    <h2 class="post-title">Domes and Arches</h2>
</div>
<div class="masonry-columns" id="gallery3">
</div>

<br>
<div id="landscapes-and-crystals">
    <h2 class="post-title">Landscapes and Crystals</h2>
</div>
<div class="masonry-columns" id="gallery4">
</div>

<!-- image numbers are in here -->
<script>
const imageNumbers1 = [56, 39, 30, 210, 18, 17, 16, 150, 10, 7, 5, 4];
const galleryContainer1 = document.getElementById('gallery1');
imageNumbers1.forEach(num => {
  const html = `
    <div class="masonry-item" onclick="openModal('../../assets/img/jenga/${num}.jpg', 'Jenga photo ${num}')">
      <img src="../../assets/img/jenga/${num}.jpg" 
           alt="Jenga photo ${num}" 
           class="z-depth-1"
           loading="lazy"
           onerror="this.parentElement.style.display='none'">
    </div>
  `;
  galleryContainer1.innerHTML += html;
});

const imageNumbers2 = [55, 54, 53, 51, 50, 49, 44, 42, 41, 36, 25, 24, 21, 140, 14, 13, 12, 9, 8, 6];
const galleryContainer2 = document.getElementById('gallery2');
imageNumbers2.forEach(num => {
  const html = `
    <div class="masonry-item" onclick="openModal('../../assets/img/jenga/${num}.jpg', 'Jenga photo ${num}')">
      <img src="../../assets/img/jenga/${num}.jpg" 
           alt="Jenga photo ${num}" 
           class="z-depth-1"
           loading="lazy"
           onerror="this.parentElement.style.display='none'">
    </div>
  `;
  galleryContainer2.innerHTML += html;
});

const imageNumbers3 = [52, 48, 470, 47, 45, 34, 33, 28, 27, 26, 15];
const galleryContainer3 = document.getElementById('gallery3');
imageNumbers3.forEach(num => {
  const html = `
    <div class="masonry-item" onclick="openModal('../../assets/img/jenga/${num}.jpg', 'Jenga photo ${num}')">
      <img src="../../assets/img/jenga/${num}.jpg" 
           alt="Jenga photo ${num}" 
           class="z-depth-1"
           loading="lazy"
           onerror="this.parentElement.style.display='none'">
    </div>
  `;
  galleryContainer3.innerHTML += html;
});

const imageNumbers4 = [46, 43, 40, 38, 35, 31, 29, 22, 20, 19];
const galleryContainer4 = document.getElementById('gallery4');
imageNumbers4.forEach(num => {
  const html = `
    <div class="masonry-item" onclick="openModal('../../assets/img/jenga/${num}.jpg', 'Jenga photo ${num}')">
      <img src="../../assets/img/jenga/${num}.jpg" 
           alt="Jenga photo ${num}" 
           class="z-depth-1"
           loading="lazy"
           onerror="this.parentElement.style.display='none'">
    </div>
  `;
  galleryContainer4.innerHTML += html;
});

// Modal functions
function openModal(src, alt) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'block';
  modalImg.src = src;
  modalImg.alt = alt;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
</script>

<br>
<div id="signallers">
    <h2 class="post-title">Signallers</h2>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Chasm crosser sep 10 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FUCf24HEKF8?si=t1s2EjpucOdjva3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Jenga Calculator jul 14 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/y12ZNoxWWVo?si=z5ZQ4Jz-MKbY2CLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Vibration sensor jun 27 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nJHQPhMv3zE?si=ye1wgx7NiLEZfI93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- sound sensor may 2 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JZiC4JaPhQM?si=oFht3g1K5OMAaW8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- ampersand apr 30 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RkwweBoPaps?si=qEi0ra_BaTOxtlZy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Very fast signal mar 25 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nEaqc5I3B3M?si=XBzEio0P3IoPy-An" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Lock with Key mar 8 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YBENXAAhZaI?si=ekfYfxjABW4-FE_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- vertical signal feb 1 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oct8O71l5aE?si=QWyF71qa7HfqAEkO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Variable speed jenga chain reactions jan 30 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CuJCyEyGsk4?si=jAgQ1ykcEpH7htIt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- domino logic gates jan 18 2016 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/55RiT6whLWI?si=gLaQ8NxNQYhYEnmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- vibration sensitive dominoes dec 31 2015 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eROFU8JcPvY?si=K78NilKnWAPOJEWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- tower domino dec 29 2015 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4cqms86ae_0?si=0mGeqrgLYW-lEAzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- long distance dominoes dec 15 2015 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gSt5C_ne44U?si=KhguahyLGChDvklp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Jenga Chain Reaction nov 18 2015 s -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ydJ9niocncg?si=zF5qtkT_uNaxdzQG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>



<br>
<div id="destroyers">
    <h2 class="post-title">Destroyers</h2>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- flash sep 5 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IyKUMupnv80?si=StRsu0Vr_KONdrle" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Melter mar 19 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ozrlwT-jD9I?si=XqbdoYkbTW30mHS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- bulldozer jan 30 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oE9j5tF7ytg?si=kKU-ZA15EwDqJGff" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- imploder jan 30 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EOv8omShpNs?si=aG846pQiklGHDNt9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- sludge jan 18 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3S4GQfmG0F8?si=mb-DSoc_uGDlFQIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- shooters jan 16 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-3UkhOdBTFo?si=WZV5ZnExWLTCn1e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- fireworks jan 4 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kf1vxISHGdU?si=IM5kNF_7edxbRbhW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- molasses jan 4 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lMzGjtJIeXg?si=y9txK_YVfrPGATwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- Wedge wall jan 3 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/77G5zsfVm_M?si=5yUViK1ZaRjvQuQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 mt-4 mb-3">
        <!-- peeler jan 2 2016 d -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X5y9Sl6ckSw?si=dvxIR3vsKvVB5R0m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>


<!--  
Jenga Chain Reaction nov 18 2015 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/ydJ9niocncg?si=zF5qtkT_uNaxdzQG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

long distance dominoes dec 15 2015 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/gSt5C_ne44U?si=KhguahyLGChDvklp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

tower domino dec 29 2015 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/4cqms86ae_0?si=0mGeqrgLYW-lEAzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

vibration sensitive dominoes dec 31 2015 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/eROFU8JcPvY?si=K78NilKnWAPOJEWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

peeler jan 2 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/X5y9Sl6ckSw?si=dvxIR3vsKvVB5R0m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Wedge wall jan 3 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/77G5zsfVm_M?si=5yUViK1ZaRjvQuQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

molasses jan 4 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/lMzGjtJIeXg?si=y9txK_YVfrPGATwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

fireworks jan 4 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/kf1vxISHGdU?si=IM5kNF_7edxbRbhW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

shooters jan 16 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/-3UkhOdBTFo?si=WZV5ZnExWLTCn1e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

domino logic gates jan 18 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/55RiT6whLWI?si=gLaQ8NxNQYhYEnmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

sludge jan 18 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/3S4GQfmG0F8?si=mb-DSoc_uGDlFQIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Variable speed jenga chain reactions jan 30 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/CuJCyEyGsk4?si=jAgQ1ykcEpH7htIt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

imploder jan 30 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/EOv8omShpNs?si=aG846pQiklGHDNt9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

bulldozer jan 30 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/oE9j5tF7ytg?si=kKU-ZA15EwDqJGff" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

vertical signal feb 1 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/oct8O71l5aE?si=QWyF71qa7HfqAEkO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Lock with Key mar 8 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/YBENXAAhZaI?si=ekfYfxjABW4-FE_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Melter mar 19 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/ozrlwT-jD9I?si=XqbdoYkbTW30mHS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Very fast signal mar 25 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/nEaqc5I3B3M?si=XBzEio0P3IoPy-An" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ampersand apr 30 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/RkwweBoPaps?si=qEi0ra_BaTOxtlZy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

sound sensor may 2 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/JZiC4JaPhQM?si=oFht3g1K5OMAaW8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Vibration sensor jun 27 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/nJHQPhMv3zE?si=ye1wgx7NiLEZfI93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Jenga Calculator jul 14 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/y12ZNoxWWVo?si=z5ZQ4Jz-MKbY2CLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

flash sep 5 2016 d
<iframe width="560" height="315" src="https://www.youtube.com/embed/IyKUMupnv80?si=StRsu0Vr_KONdrle" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Chasm crosser sep 10 2016 s
<iframe width="560" height="315" src="https://www.youtube.com/embed/FUCf24HEKF8?si=t1s2EjpucOdjva3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->


