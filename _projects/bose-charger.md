---
layout: page
title: Bose Charger
description: Apr - May 2026
img: assets/img/bose_charger/gerber.png
importance: 3
category: Featured
related_publications: false
---

<div class="row justify-content-center">
    <div class="col-sm-4 mt-0">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/old_pcb.jpg" alt="previous pcb project" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-0">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/gerber.png" alt="bose charger pcb" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-0">
    One of my first PCB projects (first photo) and the Bose charger (second photo)
</div>
I had made a few PCBs before this project, but I had mostly used those PCBs to connect SMD components together like a more advanced version of a breadboard. I wanted my next PCB to be an exercise in good PCB practices like adding a ground plane, ESD protection, minimizing EMI, and so on. I also wanted to learn how to use a standalone STM32 chip within a PCB.

Now it just so happened that my ten-year-old Bose headphones had an issue where every time I plugged them into a charger, there was a chance that the headphone charging LED would say they were charging even though they actually weren't. This only happened 20% of the time, so unplugging and plugging the headphones back into the charger usually fixed the issue. Since I was looking for any excuse to do a PCB project, I decided to design a PCB that would automate this by sitting between my charging power adapter and headphones and automatically cutting and reconnecting power to my headphones every 3 hours. 

As dumb as the function of my PCB was, it turned out to be a great anchor for my project. I was short on free time, and a more complex project would have risked me spending too much time on tasks other than learning about PCB design and STM32.

I originally planned for this to be a quick weekend project. I found a [great YouTube tutorial](https://www.youtube.com/watch?v=aVUqaB0IMh4) that covered the STM32 and the whole PCB design process in KiCad. However, I quickly realized that there was too much new information for me to finish this project in only a weekend. I could have just blindly followed the tutorial, but I knew that would leave me just as blind the next time I tried to design my own PCB.

To handle the information overload, I made a list of topics to learn about over the next few days. These included: JTAG, SWD, TVS diodes, ESD protection strategies, C0G capacitors, ground plane best practices, different ways to upload a program to an STM32 chip, and so on. I also made sure to add what I was learning to my existing notes about PCB design. That way, if many months pass before my next PCB project, I can review my notes and quickly get up to speed again.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/schematic.png" alt="schematic of PCB" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/layout.png" alt="layout of PCB" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
After getting that background knowledge, creating the PCB schematic and layout became much easier. Most of the PCB revolved around supporting the STM32 with its core hardware (power, clock, pullup resistors, noise suppression) and breaking out its IO and programming pins. The STM32 was definitely overkill for this project, but this will give me a useful template for more complex projects in the future. My biggest worry at this schematic and layout stage was that I wouldn’t be able to upload my code to the STM32 later. In case I had to troubleshoot that issue or any other issues later, I made sure to break out many of the STM32’s pins, add indicator LEDs, and add a physical bootloader switch.

I designed the PCB to sit between a power adapter and the headphones. The power adapter connects to the Micro-USB port on the right side of the board, and I broke out a separate Micro-USB cable from the left side of the board. To connect the pins of the two cables, I routed the data pins through a USBLC6 TVS diode array for ESD protection, and I routed the VCC pin through a TPS22918 load switch controlled by the STM32. Since the data pins are differential signals, I used serpentine routing near the bottom left of the board to length-match the traces. When I was routing the board, I found it useful to keep decoupling capacitors and the ferrite bead close to the pins they were protecting and to route them first. Since this PCB wasn’t too complicated, I kept nearly all the signal and power traces on the top side of the board, and I made the bottom side a mostly unbroken ground plane to reduce EMI. Another trick I found useful was connecting pins to ground by dropping vias straight to the ground plane instead of routing a long ground trace through the top plane. I also found it most natural to route the power rail around the perimeter of the PCB since it had to reach components distributed all throughout the board without cutting through too many signal traces. 

<div class="row justify-content-center">
    <div class="col-sm-5 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/hotplate.jpg" alt="hotplate" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
I ordered the PCB and soldering stencil from JLCPCB. I already had some electrical components such as the (comically large) crystal oscillator laying around, but I ordered most other components from Digikey and Amazon. I also ordered a tiny MHP50 hotplate so I could do reflow soldering at home. Once everything arrived, I applied solder paste to my PCB using my stencil, placed my SMD components on top of the paste, and reflow soldered them using my hotplate. I then manually touched up some of the pins with a soldering iron and soldered my through-hole components.

I was able to upload my code to the STM32 without issues. However, the learning curve before that moment was a little steep. Unlike an Arduino, ESP32, or Raspberry Pi, an STM32 usually involves 3 separate softwares and a physical programmer. The breakdown is as follows:
<ol>
<li>STM32CubeMX is where you select your chip model and configure its hardware. This means specifying the chip’s clock speed, setting pins to GPIO, I2C, SPI, or other configurations, and so on.</li>
<li>STM32CubeIDE is where you write your code. It also lets you debug the code line by line in real time.</li>
<li>STM32CubeProgrammer is where you upload code to your chip.</li>
<li>ST-LINK/V2 is a physical device placed between your computer and your chip to allow you to upload code to your chip. There are other ways to upload code but this method makes debugging easier. In my PCB, I exposed the SWD pins of the chip and connected the ST-LINK/V2 to that.</li>
</ol>
For anyone wanting to learn more about STM32, I found [this tutorial](https://www.youtube.com/watch?v=4duRySj8xPU) to be helpful, and [this video](https://www.youtube.com/watch?v=Hffw-m9fuxc) has a great description of how STM32 and its softwares work.

As a side note, I’ve noticed that a lot of my electronics projects fundamentally feel like I’m just following procedures or connecting things together. On the other hand, in mechanical projects like my [mechanical clock](https://maxrfan.com/projects/mechanical-ball-clock-2/) or [mechanical calculator](https://maxrfan.com/projects/jenga-calculator/), I feel a lot more like I’m designing things from scratch. I don’t think one type of personal project is inherently better than another, but it is interesting that these projects involve such different styles of work.

<div class="row justify-content-center">
    <div class="col-sm-7 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/bose_charger/plugged_in.jpg" alt="headphones charging" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
After uploading my code, my PCB performed its job well! Every 3 hours, it would briefly cut and reconnect power flowing from my power adapter to my headphones. Ever since I started using this PCB, my headphones have charged without issue.
