---
title: "DAZN"
description: "Key Moments Clips"
pubDate: 2024-1-3
heroImage: ""
featured: true
draft: false
logo: "/icons/dazn-icon.png"
imageBg: "/images/tiles/kmc-bg.png"
tags:
    - code
    - prototyping
    - ux
    - ui
---

# Automating sports big talking points

For the casual sports fans with little spare time or have short attention spans. Key Moment Clips are a way to catchup on the weeks events by just watching the key moments. They can share with friends and never miss another viral or trending moment. Intended to get customers back to the app as a daily habit. Got 5 mins to spare? Open up DAZN and watch todays Key Moment Clips to catchup on sporting events around the world.

### Scope

| Aspect | Answer                          |
| ------ | ------------------------------- |
| Time   | 8 weeks                         |
| Team   | 4 person cross functional team  |
| Role   | UX / Design / Prototype in code |
| Tools  | Miro / Figma / VS Code          |

### Process

This was a fast-paced project, featuring an auto-scrolling film roll that dynamically showcases key moments from various games and sports. I designed and prototyped it using React.js and a back-end clip generator API. Highlights are either curated or auto-generated, played in a sequence defined by a JSON schema. When users visit the page, the film roll automatically plays, but they can pause the autoplay and interact with the page for a personalized viewing experience.

### Outcome

-   Creative solution aligned with DAZN's north star at the time "twice a week, every week," engaging users beyond live games on the platform.
-   Developing a rapid mobile prototype with network condition testing for validation as a proof of concept to push stakeholder buy-in.
-   Refined animations, timing, and interactions for production engineering to reuse.
-   Taken to live within the DAZN app shortly after.

<figure>
  <Image
    src="/images/key-moment-clips/wire.png"
    class="rounded-md"
  />
  <figcaption>Understanding user journeys, organizing information effectively, and designing interactions through wireframing.</figcaption>
</figure>
<figure>
  <Image
    src="/images/key-moment-clips/design.png"
    class="rounded-md"
  />
  <figcaption>Exploring design options that complement selected UX patterns.</figcaption>
</figure>
<figure>
  <Image
    src="/images/key-moment-clips/code.png"
    class="rounded-md"
  />
  <figcaption>Sample of React.js prototype source code with annotations and structured insights.</figcaption>
</figure>
<figure>
  <div class="w-100 bg-gray-300 flex justify-center rounded-md">
    <video controls loop autoplay muted class="rounded-md max-w-48 shadow-2xl">
      <source src="/video/kmc-out.mp4" type="video/mp4" />
      <p>
        Your browser doesn't support HTML video. Here is a
        <a href="/video/kmc-out.mp4" download="/video/kmc-out.mp4">link to the video</a> instead.
      </p>
    </video>
  </div>
  <figcaption>Demonstration of film roll animation in prototype.</figcaption>
</figure>
<figure>
  <Image
    src="/images/key-moment-clips/browser.png"
    class="rounded-md"
  />
  <figcaption>Testing prototype interactions under various network conditions for real-world performance.</figcaption>
</figure>
<figure>
  <Image
    src="/images/key-moment-clips/phone-1.png"
    class="rounded-md"
  />
  <figcaption>Completed design ready for implementation.</figcaption>
</figure>
<figure>
  <Image
    src="/images/key-moment-clips/phone-2.png"
    class="rounded-md"
  />
  <figcaption>Completed design ready for implementation.</figcaption>
</figure>
