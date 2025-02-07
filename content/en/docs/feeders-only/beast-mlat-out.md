---
title: "BEAST MLAT Out"
description: "Our aggregated data is available to all feeders."
lead: "Our aggregated data is available to all feeders."
date: 2023-06-27T22:25:19+02:00
lastmod: 2023-06-27T22:25:19+02:00
draft: false
images: []
menu:
  docs:
    parent: "feeders-only"
weight: 103
toc: true
---

License: [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1.0/)


Hostname: `out.decentrafly.org`

Port: 1337 (BEAST) and 1338 (MLAT, SBS)

These outputs are available to all feeders IPs.

### DISCLAIMER

Do not use your feeder for this. **You need to spin up a new readsb.**

This feature is experimental. In particular, **No support or guarantee of any kind is provided.**

Documentation assumes a high skill level. **Please consider improving the documentation for the next person.**

### Usage

You can use readsb to get the data locally, for example running directly:
```
readsb --net-only --net-connector=out.decentrafly.org,1337,beast_in --net-connector=out.decentrafly.org,1338,sbs_in_mlat
```