# ember-text-limit

A Twitter-esque character/word countdown for your textarea.

## Installation

```bash
# From within your ember-cli project
ember install:addon ember-text-limit
```

## Usage

In your template:

```hbs
{{#character-limit max=100}}
  {{textarea value=text}}
{{/character-limit}}


{{#word-limit max=100}}
  {{textarea value=text}}
{{/word-limit}}
```

Styling can easily be overridden. Take a look in `vendor/ember-text-limit/app.css` to get an idea.
