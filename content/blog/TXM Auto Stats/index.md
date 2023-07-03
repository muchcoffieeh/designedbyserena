---
title: TXM Auto Stats
date: "2019-04-08"
tags: [All, Applications]
description: "ROLE: UX/UI DESIGN, MANAGED DEVELOPMENT"
thumbnail: ./TXM_auto_thumb.jpg
---

Tempus Ex provides a data platform to serve real-time sports analytics, allowing leagues to implement automatic in-game stats and offer play-by-play betting for their fans. The company is currently working with various major sports leagues and the technology is used in stadiums across America. I worked on the first version of the auto stats product that was piloted at Pro Bowl 2020.

<div class="kg-card kg-image-card kg-width-full kg-desktop">

![Screenshots](./first_view.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./first-view-1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./first-view-2.jpg)

</div>

### The Setup

Every NFL game employs a stats team of 10-20 people. The crew is situated in a suite in the press box high above the crowds and where each member views the game through binoculars. Their job is to determine the stats on each play and enter them into the GSIS system – the closer they can do this in real-time, the better. Any delays reporting stats or incorrect stats results in unhappy fans. Some stats are subjective and far more challenging to find consensus on. This is where relying on a rule-based AI system has an advantage. The objective of the pilot:

- Bring stats reporting into real-time
- Demonstrating the potential of having smaller stats teams with greater efficiency
- More intuitive and engaging layout for play info consumption

### Research

Yes, I did spend some time at the Alliance of American Football, but I realized I still know very little about football. At first it was “what is GSIS?” I spent the 2 months attending games and exploring GSIS to understand the pain points from the league’s perspective. I made sketches of the user environment and took screenshots of the software in action.

<div class="kg-card kg-image-card kg-width-wide">

![sketches](./crew_sketches.jpg)
![sketches](./gsis-screen.jpg)

</div>

Understanding that our pilot product would be part of a proposal for a larger contract, I then worked closely with management to understand their narrative to ensure that I’d design a product that demonstrates the value propositions they noted.

<div class="kg-card kg-image-card kg-width-full">

![WHITEBOARD](./whiteboard.jpg)

</div>

Then I organized a series of meetings with our team of engineers to learn the sources of data, how we’re ingesting each, layers of inference, and where the computation was taking place. I had a good idea of what we were capable of displaying after the meetings.

My management was keen on nailing the visual feel so I went straight into iterations in high-fidelity.

<div class="kg-card kg-image-card kg-width-full">

![ITERATIONS](./iterations.jpg)

</div>

I created reference documents for the engineers to correlate my intention for the visual activity as certain events are triggered during a game.

<div class="kg-card kg-image-card kg-width-full">

![ENG DOCS](./engineering_docs.jpg)

</div>

### FINAL DESIGNS

The default display console that was made for viewing

<div class="kg-card kg-image-card kg-width-wide">

![qt_summary](./final_designs_1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-med">

![qt_summary](./quarter-summary.jpg)

</div>

<div class="kg-card kg-image-card kg-width-wide">

![qt_summary](./final_designs_2.jpg)

</div>

In the event that a call on a play is contested, a manual override would be performed by an auditor. Currently, the NFL has a replay team on the field re-determining the play. They use apps that a to scrub back, zoom in, and closely examine any video feed necessary to make a more accurate determination. Our auto stats product embeds the functionality of the replay apps. The auditor would make a new determination and the change would propagate up the inference tree.

<div class="kg-card kg-image-card kg-width-full kg-desktop">

![AUDITOR](./auditor-desktop-view1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-desktop">

![AUDITOR](./auditor-desktop-view2.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view2.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view3.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view4.jpg)

</div>

### PARE DOWN

The 5 weeks leading up to the ProBowl was crunch time. It came time to pare down the design. Not the first time it happened to me at a startup – can’t say I didn’t expect it.

<div class="kg-card kg-image-card kg-width-full">

![PARE DOWN](./pare_down.jpg)

</div>

In addition to creating videos for simulated product action, guide documents were also made for the developers to have easy reference to the intended interaction of the product during a live game.

### THE SALES PART

Amid the product development, we needed to continue the engagement with our clients. I animated a video simulation of a live game and created a guide to help them better understand the elements on the console. Below are some select pages from the guide document.

<div class="kg-card kg-image-card kg-width-wide">

![Hotspots Doc](./sales_guide_1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-wide">

![Hotspots Doc](./sales_guide_2.jpg)

</div>

<div class="kg-card kg-image-card kg-width-wide">

![Hotspots Doc](./sales_guide_3.jpg)

</div>
