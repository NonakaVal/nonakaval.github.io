---
created: <% tp.file.creation_date() %>
tags:
  - calendar/daily
---

<% tp.web.daily_quote() %>



```dataview
TABLE file.inlinks as Backlinks, length(file.inlinks) as Total 
FROM "CALENDAR"
WHERE !contains(tag, "#calendar/daily" ) AND (length(file.outlinks) >= 1 OR length(file.inlinks) >= 1)
SORT length(file.inlinks) desc


LIMIT 100
```



```
[Some Link]({% post_url 2010-07-21-name-of-post %})
```