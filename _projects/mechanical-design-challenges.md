---
layout: page
title: Mechanical Design Challenges
description: Oct 2025
img: assets/img/chinese_practice.png
importance: 1
category: Hidden
related_publications: false
---

<i>Click <a href="#challenges">here</a> to jump to the list of mechanical design problems</i>

<h2 class="post-title">Introduction</h2>
My biggest surprise when I first started taking college mechanical engineering classes was how theoretical it was. I think when many of us hear about mechanical engineering, we instantly think of Legos, robots, engines, rockets, and other hardware. However, as I took more and more classes, I realized that most of the topics I actually encountered were things like beam bending equations, matrices, differential equations, and MATLAB code. If I encountered mechanisms in my assignments, they were usually simple machines or basic gearing and linkage mechanisms that the assignment had already provided, and my task was to calculate properties about them such as their maximum load. I have talked to many of my peers from MIT and other engineering schools, and one universal observation we all made was that our curriculums focused far more on theory than on designing hardware. In other words, we spent lots of time learning how to analyze hardware that had already been provided to us but very little time learning how to come up with the hardware we were analyzing.

I decided to write this article not just to share my observations about this knowledge gap in the curriculum, but to also share resources that I believe would fill this knowledge gap. However, before I proceed, it would be useful to quickly summarize the mechanical engineering design process. Note that in practice, every organization has differences in their process, but they generally follow this sequence:

<strong>1. Define Design Requirements</strong><br>
Ex: A company decides to create a new microSD card slot design. They decide on specific design requirements like cost, size, and cycle life. They also decide that once the microSD card is pushed in, the user should be able to eject it by pushing again (a “push-push latch”). Assume this type of microSD card slot hasn’t been invented yet.

<strong>2. Generate Concepts</strong><br>
Ex: Engineers research existing solutions and brainstorm new mechanisms. They sketch out rough ideas, such as one inspired by a retractable pen and another that guides a spring-loaded part along a looped path with energy minimums.

<strong>3. Analyze Concepts</strong><br>
Ex: Engineers do basic analysis to determine which concepts are viable. These include rough cost and size estimates and back-of-the-envelope spring calculations. For the most promising concepts, the engineers create detailed CAD and run more detailed analysis like FEA where necessary. Note that this step is often interwoven with the prototyping step described next.

<strong>4. Prototype Concepts</strong><br>
Ex: Engineers make physical prototypes of the most promising concepts using mills, laser cutters, 3D printers, and other tools. They assess factors that are easier to test physically than analytically, such as how the microSD card feels as it’s pushed, or how many push cycles the mechanism can handle. They refine the prototypes over multiple iterations, and during this process of iteration, the engineers may go back to generating new concepts or even revisiting design requirements.

<strong>5. Finalize and Produce</strong><br>
Ex: The company decides the looped-path mechanism best meets their needs and they finalize their CAD, drawings, BOM, and other documentation. They lock in materials and tolerances, work with suppliers, and run pilot builds. After resolving any issues, the company begins mass producing this new microSD card slot.

<div class="row justify-content-center">
    <div class="col-sm-8">
        {% include figure.liquid loading="eager" path="assets/img/mechanical_design_challenges/sd_card_slot.png" alt="MicroSD card slot" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-0">
            <a href="https://youtu.be/RsFHOxYTCck">MicroSD card mechanism</a>
        </div>
    </div>
</div>

All the mechanical engineering curriculums I’ve seen cover how to perform the analyzing step, and most have machine shops for students to prototype concepts using shop tools. However, not enough attention is given to the generating step, where engineers come up with mechanisms that fulfill the design requirements. This is unfortunate because if the ideas that come out of this generation step are mediocre, then all subsequent steps will be mediocre at best. The success of subsequent steps relies on the engineers coming up with good, often non-obvious ideas, and this step is generally where “eureka” moments happen. Unfortunately, right now the way the curriculum teaches mechanical engineering is a lot like somebody trying to teach a chef how to come up with new recipes by teaching them chemistry, or trying to teach a composer how to compose music by teaching them acoustics. Learning a theory-heavy subject like chemistry could elevate a chef’s existing cooking skills by helping them optimize an existing recipe or understand exactly why the steps of a recipe work, but chemistry on its own does little to help the chef come up with new recipes. Similarly, the skill to analyze and optimize a mechanism using physics does not directly translate to the skill to come up with that mechanism during the idea generation step.

Whenever I have talked to my other engineering peers about the mechanical engineering curriculum, the most common follow-up question has been “how do you teach someone how to come up with mechanisms?” Fundamentally, the skill to come up with mechanisms is a skill of creativity, and one way to define creativity is the ability to combine existing ideas in novel, useful ways. I believe this leads to two main approaches for developing mechanical design skills: 
Build up a library of mechanisms
Practice coming up with mechanisms

<h2 class="post-title">Approach 1: Learn More Mechanisms</h2>
There are many resources for learning more mechanisms. For example, there are thousands of interesting mechanisms stored across the following books and videos:
<ul>
    <li><i>Illustrated Sourcebook of Mechanical Components</i> by Robert O. Parmley</li>
    <li><i>Mechanisms and Mechanical Devices Sourcebook</i> by Neil Sclater and Nicholas P. Chironis</li>
    <li><i>Ingenious Mechanisms for Designers and Inventors</i> by Franklin D. Jones</li>
    <li><i>Mechanisms in Modern Engineering Design</i> by Ivan I. Artobolevsky</li>
    <li>McMaster-Carr catalog</li>
    <li>thang010146’s YouTube channel</li>
    <li><i>507 Mechanical Movements</i> by Henry T. Brown</li>
</ul>

The famous <i>Machinery’s Handbook</i> and <i>Shigley’s Mechanical Engineering Design</i> also cover some of the most common mechanisms, but they are much heavier on equations and analysis.

It is especially useful to learn about mechanisms by fixing or taking apart kitchen appliances, toys, power tools, lab equipment, and other interesting machines that one encounters. Fixing or taking machines apart allows one to see mechanisms “in their natural habitat,” and this extra context builds up intuition about not just what mechanisms exist, but also about which mechanisms show up frequently in the real world.

Mechanical hobbies like woodworking, lockpicking, and car modding are also valuable. Even though the number of mechanisms they provide exposure to may be limited, the intuition they foster about topics like stress concentrations, ease of assembly, and material properties is transferable to understanding a broad range of mechanisms.

Additionally, there are excellent YouTube channels that explain how complex mechanisms work and demonstrate how others design mechanisms for their personal projects:
<ul>
    <li>Steve Mould</li>
    <li>engineerguy</li>
    <li>Technology Connections</li>
    <li>Jared Owen</li>
    <li>Animagraffs</li>
    <li>Thomas Schwenke</li>
    <li>Matt Rittman</li>
    <li>Veritasium</li>
    <li>Our Own Devices</li>
    <li>Breaking Taps</li>
    <li>OskarPuzzle</li>
    <li>Aaed Musa</li>
    <li>Jeremy Fielding</li>
</ul>

I have looked for conventions or conferences focused specifically on mechanisms, but I have not found any. I have attended events like Maker Faire and Open Sauce, but even there it was rare to find projects that used novel mechanisms. There are certainly many people skilled at designing mechanisms, but they seem to be perpetually dispersed across different institutions.

<h2 class="post-title">Approach 2: Practice Generating Mechanisms</h2>
The second strategy for developing mechanical design skills is to practice coming up with mechanical solutions to design requirements. Hardware-centered personal projects and project teams are particularly valuable. Many of my peers first became interested in mechanisms through activities like playing with Legos or participating in FRC (FIRST Robotics Competition). These activities then led to more personal projects and project teams, and this experience later helped them secure positions within industry where they became responsible for doing more mechanical design. Even after joining a company, personal projects remain uniquely valuable. Within engineering companies, growing the technical skills of employees is valued but rarely the top priority, and personal projects can ensure that one always has challenging yet satisfying problems to solve.

However, with the possible exception of personal projects, there doesn’t seem to be an activity optimized for practicing mechanical design similar to what Project Euler, Codeforces, and US olympiad practice problems are for math and computer science. For this reason, I have created a list of mechanical design questions designed specifically for people to practice coming up with mechanical solutions to design problems. I have placed these questions <a href="#challenges">at the end of this article.</a>

Going through every useful strategy for generating mechanisms would be beyond the scope of this article, but I would highly recommend <i>FUNdaMENTALS of Design</i> by Alexander H. Slocum for those interested in learning more. Nevertheless, I will briefly discuss some strategies I frequently use when designing mechanisms.

When generating ideas that fulfill the design requirements, it is best to start by generating as many ideas as possible. The more diverse the ideas are, the better. These ideas might seem overly complex at first, but they serve as starting points on the path to simpler, more elegant solutions. This would be a good time to research how others approached the problem, such as by looking through patents.

These ideas might start off as abstract strategies (e.g., dispense hand soap using a simple pushing action), but eventually they must become specific, visualizable mechanism ideas (e.g., a hand soap-filled chamber whose volume shrinks when pushed and has ball check valves at its inlet and outlet). The design requirements should always guide the generation of these mechanism ideas. However, it is worth mentioning that even though those design requirements could be anything, there are some qualities that almost always help a mechanism achieve them:
<ul>
    <li>Off-the-shelf</li>
    <li>Low part count</li>
    <li>Simple geometries</li>
    <li>Simple orientations</li>
</ul>

Off-the-shelf hardware like springs, bearings, and gearboxes are useful because they already have a proven design and they save design and manufacturing time. Simple off-the-shelf hardware like screws are typically standardized to specific sizes and tolerances, which makes them interchangeable. In some cases, the entire design problem can be solved by a single off-the-shelf purchase.

Low part count is beneficial because fewer parts means fewer opportunities for defects during manufacturing, assembling, or operation. If there must be multiple parts, having copies of the same part is often better than having unique parts since using the same part design simplifies manufacturing and assembly. Keep in mind that compliant or frangible mechanisms can often replace multiple moving parts with just one moving part. Additionally, fluid-based mechanisms such as those that use water, oil, or air can often be designed to have no moving parts. Granular media like pellets and ball bearings can resemble fluids in the way they move, and mechanisms that use granular media can sometimes also be built with no moving parts other than the granular media.

Making the components in the mechanism resemble simple shapes like spheres, cylinders, wires, and plates is beneficial. Simple shapes like these can often be made from off-the-shelf stock and common manufacturing processes.

Simple orientations are also beneficial. This means keeping geometries like axles and faces oriented in the same direction if possible. If they must have different orientations, try to make them perpendicular to each other. This makes the design easier to manufacture, assemble, and troubleshoot.

The above qualities can be summarized by one word: “simplicity.” In general, the complexity of a mechanical solution should be in proportion to the complexity of its design requirements.

Another principle I like to consider when designing mechanisms is “dominant” vs “recessive” traits, a concept I am borrowing from Mendelian genetics. An example of a recessive trait is low cost. If a component within a mechanism has low cost but another component has high cost, the overall mechanism will have high cost because the high cost of the one component “dominates” the low cost of the other component. It generally doesn’t hurt for a mechanism to have recessive traits like low cost, light weight, and small size because it’s often trivial to convert to their dominant versions (use more expensive materials, add weight, enlarge a component). On the flip side, converting from dominant to recessive traits is generally much harder because actions like removing material, using cheaper components, and shrinking components often compromise the mechanism’s functionality in the process. Below is a list of some recessive traits. Notice how the qualities described in the previous paragraphs are also recessive:
<ul>
    <li>Off-the-shelf</li>
    <li>Low part count</li>
    <li>Simple geometry</li>
    <li>Simple orientation</li>
    <li>Cheap</li>
    <li>Lightweight</li>
    <li>Compact</li>
    <li>Strong</li>
    <li>Low vibration</li>
    <li>Transparent</li>
    <li>Easy to manufacture</li>
    <li>Easy to assemble</li>
    <li>Easy to disassemble</li>
    <li>Easy to troubleshoot</li>
</ul>
Of course, the actual design requirements should take priority over these traits. However, if the design requirements are flexible, I find recessive traits like these to be useful heuristics for guiding mechanical designs.

Additionally, if a mechanism offers more functionality than necessary, then there’s a good chance that other aspects of the mechanism can be improved. Here are some examples:
<ul>
    <li>If a bracket is stronger than it needs to be, then it might be made lighter by using less material or cheaper by using a cheaper material.</li>
    <li>A design uses threaded fasteners, which allows for disassembly. However, if disassembly isn’t necessary, then it might be possible to trade the ability to disassemble for the ability to assemble faster by using snap fits or ultrasonic welding.</li>
</ul>

<h2 class="post-title" id="challenges">Mechanical Design Challenges</h2>
I created this list of mechanical design challenges because there are currently very few resources for one to practice coming up with mechanical solutions to design problems. I took inspiration from the format of Project Euler and USAMO and USACO practice problems. Additionally, many of these were inspired by mechanisms I saw in commercially successful products. My intention was to make the challenges cover a broad range of mechanisms and to be heavy on spatial reasoning. Some of these challenges can be "brute forced" with overly complicated mechanisms, but I strongly encourage looking for simple, practical solutions. I am still in the process of adding solutions to each challenge. If you have a new challenge idea or think you have found an elegant solution to any of these challenges, send me an email. I will do my best to give credit to whoever came up with the challenge or solution.



<strong>Motion Restriction</strong>
<ol>
    <li>Mechanism where a revolute joint encounters a hard stop after <span>&gt;</span>1 rotation</li>
        <ul>
            <li>Spur gear with hard stop</li>
        </ul>
    <li>Mechanism where a revolute joint encounters a hard stop after &gt;3 rotations
        <ul>
            <li>Mechanism based on the disks inside of a dial combination lock</li>
        </ul>
    </li>
    <li>Mechanism where a revolute joint encounters a hard stop after &gt;10 rotations
        <ul>
            <li>Mechanism based on gears with coprime gear ratios with protrusions that eventually collide with each other</li>
        </ul>
    </li>
    <li>Mechanism where a revolute joint encounters a hard stop after &gt;1,000 rotations
        <ul>
            <li>Spool of cable</li>
        </ul>
    </li>
    <li>Mechanism where a revolute joint can rotate clockwise within a smooth cylindrical surface but locks up against the surface when it is rotated counterclockwise
        <ul>
            <li>Sprag clutch</li>
            <li>Overrunning clutch</li>
        </ul>
    </li>
    <li>Mechanism where a slider joint can slide in one direction over a smooth rod but locks up when it is slid in the other direction
        <ul>
            <li>Caulk gun/vice clamp</li>
            <li>Push nut</li>
        </ul>
    </li>
    <li>Ratchet that switches its locking direction after being rotated clockwise past a certain point and then switches its locking direction again after being rotated counterclockwise back to its starting position
        <ul>
            <li>Electrical connector crimping tool</li>
            <li>Bus footrest</li>
        </ul>
    </li>
    <li>Mechanism where an input revolute joint cannot be backdriven clockwise or counterclockwise by an output revolute joint. There is a 1:1 mechanical advantage between the input and output revolute joints.
        <ul>
            <li>Wrapspring clutch</li>
        </ul>
    </li>
    <li>Mechanism where an input slider joint cannot be backdriven forward or backwards by an output slider joint. There is a 1:1 mechanical advantage between the input and output slider joints.
        <ul>
            <li>Rubber mechanism</li>
            <li>Ethicon power stapler mechanism</li>
        </ul>
    </li>
</ol>

<strong>Motion Coupling</strong><br>
<ol>
    <li>Mechanism where an output revolute joint rotates at <span>&lt;</span>1/10,000 the speed of an input revolute joint
        <ul>
            <li>Split ring planetary</li>
            <li>Differential harmonic drive</li>
        </ul>
    </li>
    <li>Mechanism where the speed ratio between an input revolute joint and output revolute joint is an extremely specific rational number such as 1567:893</li>
    <li>Linkage that converts revolute motion into straight line motion using only revolute joints
        <ul>
            <li>Peaucellier-Lipkin</li>
            <li>Sarrus</li>
            <li>Hart</li>
        </ul>
    </li>
    <li>Linkage that transmits rotation around one axis to a skew axis using only revolute joints</li>
    <li>Mechanism where the position of an output revolute joint is proportional to the sum of the positions of 2 input revolute joints
        <ul>
            <li>Car differential</li>
        </ul>
    </li>
    <li>Mechanism where the position of an output revolute joint is proportional to the product of the positions of 2 input revolute joints
        <ul>
            <li>Probable solution: logarithmic input gears with an exponential output gear</li>
        </ul>
    </li>
    <li>Mechanism where the position of an output revolute joint is proportional to the sum of the positions of 5 input revolute joints</li>
    <li>Mechanism where the position of an output slider joint is proportional to the sum of the positions of 5 input slider joints</li>
    <li>Mechanism where an output revolute joint's position is proportional to an input revolute joint's speed of rotation
        <ul>
            <li>Eddy current-based speedometer</li>
        </ul>
    </li>
    <li>Mechanism where an output revolute joint's speed of rotation is proportional to an input revolute joint's static position</li>
    <li>Mechanism where an output revolute joint's position is proportional to the 2D area traced out by an input planar joint
        <ul>
            <li>Planimeter</li>
        </ul>
    </li>
    <li>Mechanism where an output revolute joint's position is proportional to an input slider joint's frequency of vibration</li>
    <li>Mechanism where an output revolute joint switches from an "off" to "on" position when the speed of rotation of an input revolute joint rises above 1 rotation per second</li>
    <li>Mechanism that uses two input revolute joints with stationary axes of rotation to control an output cylindrical joint's axial and rotational position
        <ul>
            <li>Ball spline</li>
        </ul>
    </li>
    <li>Mechanism that uses two input revolute joints with stationary axes of rotation to control the rotation and the direction of a wheel</li>
    <li>Mechanism that uses three input revolute joints with stationary axes of rotation to control the XY positions and Z rotation of an output planar joint</li>
    <li>Mechanism where an output revolute joint's position always matches an input revolute joint's position. The input revolute joint can only supply a limited torque and the output revolute joint must supply up to 10x the max torque of the input revolute joint. The mechanism can have an internal or external source of mechanical energy.
        <ul>
            <li>Torque amplifier</li>
            <li>Ship capstan</li>
            <li>Power steering</li>
        </ul>
    </li>
    <li>Mechanism with continuously variable mechanical advantage between its coaxial input and output revolute joints
        <ul>
            <li>NuVinci</li>
        </ul>
    </li>
    <li>Mechanism where an output revolute joint maintains a constant speed of rotation despite being driven by an input revolute joint rotating at variable speeds
        <ul>
            <li>Probable solution: mechanism based on a clock escapement</li>
        </ul>
    </li>
    <li>Bike gear shifter that sets the desired pedal torque instead of the gear ratio. The gear shifter automatically and mechanically shifts the gear ratio so that the cyclist always applies the same torque to the pedals regardless of bike speed and incline.</li>
</ol>

<strong>States</strong>
<ol>
    <li>Mechanism with parallel input and output slider joints where the output slider joint is locked in place until the input slider joint is moved past a certain position
        <ul>
            <li>Push button quick release pin</li>
        </ul>
    </li>
    <li>Mechanism where an output slider joint is locked in place unless each of the 5 input slider joints are slid from their "off" to "on" positions in a specific order
        <ul>
            <li>Directional combination lock</li>
            <li>Simplex push button lock</li>
        </ul>
    </li>
    <li>Mechanism where a slider joint toggles between an "on" position and an "off" position each time it is pushed in the same direction
        <ul>
            <li>Retractable pen button</li>
            <li>MicroSD card push slot</li>
        </ul>
    </li>
    <li>Mechanism where a revolute joint toggles between an "on" position and an "off" position each time it is rotated in the same direction
        <ul>
            <li>Sunglasses holder</li>
            <li>Window latch</li>
        </ul>
    </li>
    <li>Mechanism where a slider joint can slide forward and, after sliding back to its starting position, is unable to slide forward again</li>
    <li>Living hinge that has 3 stable rotational positions</li>
    <li>Mechanism containing a row of 5 slider joints where each joint has an "on" position and an "off" position, and pushing any one of the slider joints to its "on" position causes all the other slider joints to move to their "off" positions
        <ul>
            <li>Buttons of blenders/food processors</li>
        </ul>
    </li>
    <li>Mechanism containing a coaxial stack of 5 revolute joints where each joint has an "on" position and an "off" position, and rotating any one of the rotary joints to its "on" position prevents the other rotary joints from rotating</li>
    <li>Lock and key mechanism that doesn't need springs, gravity, or any other passive biasing force to function.
        <ul>
            <li>Disk detainer lock</li>
        </ul>
    </li>
    <li>Lock whose method of unlocking involves alternating between leaving the lock upright and leaving the lock upside down for specific amounts of time</li>
</ol>

<strong>Fluids and Granular Media</strong>
<ol>
    <li>Mechanism that is able to take water from a reservoir and fill up a container of water at a higher water level without using any moving parts
        <ul>
            <li>Pulser pump</li>
            <li>Evaporation</li>
            <li>Capillary action</li>
        </ul>
    </li>
    <li>Container that allows air inside of it to escape without allowing any of the outside air to enter the container</li>
    <li>Container that allows the user to dispense a precise amount of liquid from a container even when the initial volume of liquid in the container is variable</li>
    <li>Mechanism that releases water after a spring-loaded button is pushed down and automatically stops releasing water after 5 seconds</li>
    <li>Mechanism that releases sand after a spring-loaded button is pushed down and automatically stops releasing sand after 5 seconds</li>
    <li>Mechanism where balls of equal diameter may enter at any rate but always exit one at a time with at least one second between each ball. No moving parts other than the balls are allowed.</li>
    <li>Mechanism that takes in balls of equal diameter and then releases them all at once after a certain number of balls has accumulated. No moving parts other than the balls are allowed.</li>
    <li>An 8-bit mechanical binary adder where the only moving parts are balls. Must also be able to perform subtraction and handle negative numbers.</li>
</ol>

<strong>Other</strong>
<ol>
    <li>Mechanism where a revolute joint takes &gt;10 seconds to rotate from one position to another</li>
    <li>Mechanism where a revolute joint takes &gt;10,000 seconds to rotate from one position to another
        <ul>
            <li>Drip based mechanism</li>
            <li>Evaporation based mechanism</li>
        </ul>
    </li>
    <li>Mechanical clock that can account for daylight savings and leap years.</li>
    <li>Compliant mechanism that allows for &gt;10 rotations</li>
    <li>Compliant mechanism that allows for &gt;100 rotations</li>
    <li>Mechanism that can lift an object weighing 10x as much as the mechanism to 10x the starting height of the mechanism
        <ul>
            <li>Deployable composite boom</li>
            <li>Rigid chain actuator</li>
            <li>Helical band actuator (spiralift)</li>
            <li>Inflatable tube</li>
        </ul>
    </li>
    <li>Chain reaction mechanism that can send a signal to a point 10 meters away in the horizontal direction in under a second using nothing but Jenga blocks</li>
    <li>Structure that can extend as far as possible over a ledge using nothing but 100 Jenga blocks</li>
    <li>Mechanism where the ratio between the number of steps required to disassemble it and the number of components in the object is &gt;10:1 (a "step" can be defined as one uninterrupted movement of a component from one position to another position)</li>
    <li>The shape of a component that, when placed with copies of itself in a container, automatically forms a clot over a hole in the container that has a diameter 10x the spherical bounding box of the component</li>
    <li>Fully mechanical implementation of Conway's game of life that can be hung on the wall like an interactive poster. Must have at least 400 cells and fit within a 1x1x0.05 meter bounding box.</li>
</ol>