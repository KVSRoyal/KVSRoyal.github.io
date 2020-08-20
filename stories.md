---
layout: default
title: Stories
---

# Stories

This is a space where I'll link some of the short stories I've written when I'm bored! Feel free to give me some feedback [here](https://docs.google.com/forms/d/e/1FAIpQLSdVka_6HUtSUvLpPnJ0CHoGgcrHwTRGdP_4HedFoD8YNLXdqQ/viewform?usp=sf_link).

{% for story in site.stories %}
  - [{{ story.title }}]({{ story.url }})
{% endfor %}