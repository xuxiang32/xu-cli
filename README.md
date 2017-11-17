# xu-CLI
A light tool to generate projects in an easy way.

# Installation
```
npm install xu-cli -g
```
or
```
git clone https://github.com/xuxiang32/xu-cli.git

cd xu-cli && npm install

npm link
```

# Usage
Open your terminal and type `xu` or `xu -h` , you'll see the help infomation below:
```
  Usage: xu-cli <command>


  Commands:

    add|a      Add a new template
    list|l     List all the templates
    init|i     Generate a new project
    delete|d   Delete a template

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

> Note that if you are using `MacOS`, `sudo` was required while using commands `add` and `delete`.

### list | l
It shows you the templates list.
```
$ xu-cli list

┌────────────────────┬──────────────────┬────────┐
│ Template Name      │ Owner/Name       │ Branch │
├────────────────────┼──────────────────┼────────┤
│ vue                │ xuxiang32/xu-cli │ master │
├────────────────────┼──────────────────┼────────┤
│ angular4           │ xuxiang32/xu-cli │ master │
├────────────────────┼──────────────────┼────────┤
│ react-redux        │ xuxiang32/xu-cli │ master │
└────────────────────┴──────────────────┴────────┘

```

### init | i
After adding new templates, you could use this command to generate your own project by choosing template.
```
$ xu-cli init

? Template name: my-first-template
? Project name: my-project
? Where to init the project? ../
⠹ Downloading template...

New project has been initialized successfully!
```

It's easy, right?

### delete | d
To delete a template, you could use this command:
```
$ xu delete

? Which template you want to delete? my-second-template
┌───────────────────┬──────────────────┬────────┐
│ Template Name     │ Owner/Name       │ Branch │
├───────────────────┼──────────────────┼────────┤
│ my-first-template │ xuxiang32/xu-cli │  new   │
└───────────────────┴──────────────────┴────────┘
✔ Template has been deleted successfully
```

# Template
The most important part of xu-cli is `template`. All templates' infomation were list in the `templates.json`.
A template means a project sample, which has a simple or complex file structure.

You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Scion's `templates.json`.

# License
MIT.