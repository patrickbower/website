---
title: "DAZN"
description: "Audit Tool"
pubDate: 2024-14-07
heroImage: ""
featured: true
draft: false
logo: "/icons/dazn-icon.png"
tags:
    - leadership
    - code
    - ux
    - ui
---

## Landing Page Audit Tool (Side Project)

With no data from an existing Landing Page Builder tool, I was stuck on how to lead a redesign for landing pages needed across DAZN's global markets. To get data and insight, I built a Node.js crawler analysing and databasing all current and previous DAZN landing pages. I then developed and published the results using static site generation and React.js for data visualisation.

The tool captures a screenshot of each component to eyeball basic content requirements and gain insight into where new opportunities may need to be considered.

### Scope

| Aspect | Answer                 |
| ------ | ---------------------- |
| Time   | Approx 1 Week          |
| Team   | Solo                   |
| Role   | FE Engineer            |
| Tools  | VS Code / Node / React |

### Process

The project is a Node.js command-line tool designed to fetch web pages, save them locally, and analyze them using class name attributes to generate 'component usage' statistics. These statistics are then passed into a secondary application to create data visualizations and overall statistics. As separate applications, it's possible to see changes over time and switch between datasets. The tool includes various commands such as setting up directories, fetching pages, scanning pages, generating reports on page statistics, and analyzing component usage. By following a systematic approach, I could effectively audit web pages for component usage and extract valuable insights.

### Outcome

-   Analytical data for pages and components broken down and cross-referenced to understand precise statistics per market, region, and globally.
-   Periodic data to understand changes over time.
-   Data visualization to easily communicate, understand, and share for improved buy-in.
-   Enable data driven insight into redesign of DAZN's Landing Pages.

### Project

<figure>
  <div class="w-100 bg-gray-300 p-4 rounded-md">

<details>
  <summary>Github repository README</summary>

#### Introduction

This is a Command Line Interface tool to fetch web pages, save them locally and analyse them using class name attributes to create 'component usage' statistics.

#### Theory

Before running its recommended to understand how the tool works.

#### Defining A Component

The input is a partial class name. The output is the highest counted single class name that contains that partial class name.

> Example: If we want statistics on a Hero component we look for any pattern (start, end or containing) using the specified `.hero` class defined in `catalog.json`. So, if we found `.hero__inner` and `.hero__wrapper--123` we would use the class name found the most to create the Hero statistics.

#### Generating Statistics

The tool is broken into a number of steps to create statistics on a set of components. 0. Before running the `input` folder needs to contain two important files: - A `catalog.json` contains the list of pages created manually to audit. Each has a unique `id` and a `market` category. - A `component_map.json` contains a component list to find statistics on. Each has a `title` and the class pattern `selector`.

1. Firstly `setup.js` will create the `output` folder structure with empty directories ready for files to be written to.
2. Then `get-pages.js` will download all pages supplied by the `catalog.json` file into the `page_html` folder. It also takes a screen shot of each page and add to the `page_screenshots` folder.
    - Once pages are stored locally the `search.js` script can be used to find all instances of a class to help identify components and where they are used and not used. This is helpful to test, refine and review class names and screen grabs.
3. Then `scan-pages.js` will crawl and create report per page in `page_reports` listing every `class` found along with data to trace the `market`, `url`, `id` etc.
4. Then `report-pages.js` will pull together statistics on every class across all pages and identify overall and per market use into `pages_report.json`.
5. Lastly `report-components.js` will pull together statistics on components supplied in `component_map.json` (please see _Defining A Component_ section above for important details on how this works).

#### Setup

_Create empty directories ready to populate._

Generates:

-   Empty directory as `./output`
-   Empty directory as `./output/search_results`
-   Empty directory as `./output/page_screenshots`
-   Empty directory as `./output/page_html`
-   Empty directory as `./output/page_reports`

```
npm run setup
```

#### Get Pages

_Take html pages offline to make processing faster, safer and more flexible._
Crawl a list of urls and download each one, also taking a full page screenshot (which also includes confirming cookie alert to hide before screenshot).

Generates:

-   Contents of `<body>` for each page as `./output/page_html/{id}.html`
-   Screen shot of each page as `./output/page_screenshots/{id}.png`

```
npm run get-pages
```

#### Scan Pages

_Reduce pages down to an array of class names with additional page details._
Create a raw data set about each page in turn. Data generated includes:

-   Page URL.
-   Page ID (for cross reference any data at any later stage).
-   Market.
-   Language.
-   List of every class on the page.
-   Total count of classes.

Generates:

-   A report per page as `./output/page_reports/{id}.json`

```
npm run scan-pages
```

#### Report Pages

_Analyse all pages to get overall statistics._
Collate all raw data about each page into one. Data revealed on each (and every) class used across all pages includes:

-   Class name.
-   Total count across all pages.
-   Total number of pages with class found.
-   Per market:
    -   Total count.
    -   Total number of pages used.

Generates:

-   A report as `./output/page_reports.json`

```
npm run report-pages
```

#### Report Components

_Analyse all pages to get component statistics._
Collate all raw data about each component into one. Data revealed on each component used across all pages includes:

-   Component name.
-   Class name.
-   Total number of pages.
-   Total count across all pages.
-   Usage percentage across all pages.
-   Per market:
    -   Total count.
    -   Total number of pages.
    -   Usage percentage.

Generates:

-   A report as `./output/component_reports.json`

```
npm run report-components
```

#### Search

_Find all instances of a class to investigate it's use across all pages._
Using a class to deep dive and generate a report on pages its being used (and optionally not being used) as well as bundle screenshots together for review by eye. Data generated through search includes:

-   Report of pages including/excluding class with each:
    -   Page url.
    -   Page id.
    -   Page market.
-   Screen shot of each page including/excluding class.

Generates:

-   Directory of search results as `./output/search_results/{name-of-folder}/` with:
    -   Directory `includes/` with a `report.json` and a screen shot per page as`{id}.png` of pages where class is found.
    -   Directory `excludes/` with a `report.json` and a screen shot per page as`{id}.png` of pages where class is **not** found.

```
npm run search class="{name-of-class}" name="{name-of-folder}" excludes="true"
```

</details>

</div>
  <figcaption>Understand the inner workings of the command line application. Expand for a detailed breakdown of its functionality.</figcaption>
</figure>

<figure>
  <Image
    src="/images/audit-tool/vscode.png"
    class="rounded-md"
  />
  <figcaption>Sample of source code with annotations and structured insights.</figcaption>
</figure>

<figure>
  <Image
    src="/images/audit-tool/webpage.png"
    class="rounded-md"
  />
  <figcaption>Results page shared with stakeholders.</figcaption>
</figure>
