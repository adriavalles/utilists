# 📝 utilists

Find useful lists for different occasions. Just an excuse to try Jekyll. 🙃

View this project live at [https://www.adriavalles.net/utilists](https://www.adriavalles.net/utilists)

### ⛑️ How to contribute
Found a typo? Want to add a missing item in a list? Want to add a list that may be useful to others? Feel free to open a pull request to add them!

If you don't know how to contribute to a GitHub repository, check [this](https://gist.github.com/MarcDiethelm/7303312) guide.

#### Adding a missing item to a list
1. Open the appropriate list file under `_posts` folder. In the "permalink" line you can find the URL that is being used.
2. Add the missing item into the appropriate group.

```yml
items:
    - name: First group
        - 'First item'
        - 'Second item'
        - 'Missing item' <--- Add it here
```

#### Creating a new list
Create a new markdown file under `_posts` with the filename pattern like `YYYY-MM-DD-TITLE.md`, where YYYY is current year, MM current month, DD current day and TITLE the title of the new list.

Content should follow the following format (note the starting and ending `---` and that there's no actual Markdown text:

```yml
---
layout: list
title: "List title"
permalink: "/list-slug-for-the-url/"
categories: [AnyCategory]

emoji: "An emoji that defines this list"
subtitle: "A subtitle that summarizes what's this list about."
description: "Longer description about this list."

items:
    - name: First group name
      items:
        - 'First item'
        - 'Second item'
        - 'Third item'
        - 'Fourth item'
    - name: Second group name
      items:
        - 'First item'
        - 'Second item'
        - 'Third item'
        - 'Fourth item'
---
```

#### Feeling lazy?
You can just [create us an issue](https://github.com/adriavalles/utilists/issues/new) into our GitHub project and we will take care of it.