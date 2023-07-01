* NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2. 0 and above 


# to convert the normal text to italic format u have to first download the 
[this urk]("https://github.com/kencrocken/FiraCodeiScript")
from this repo download and then use the  font family by doing folowing setting 

[this]("https://feathericons.com/?query=more)
open tyh command pallete 
    type OPEN SETTINGS
    type font family
         - Font Family Text: 'Fira Code iScript', 'Fira Code', 'Courier New', monospace
    then open the json setting which is situated at top right corner


    do this json settings in settings.json {normally in 3rd line}
    near to 
- JSON Setting: "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          //following will be in italic (=FlottFlott)
          "comment",
          "entity.name.type.class", //class names
          "keyword", //import, export, return…
          "storage.modifier", //static keyword
          "storage.type", //class keyword
          "support.class.builtin",
          "keyword.control",
          "constant.language",
          "entity.other.attribute-name",
          "entity.name.method"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          //following will be excluded from italics (VSCode has some defaults for italics)
          "invalid",
          "keyword.operator",
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "constant.numeric.decimal.js",
          "constant.numeric.json"
        ],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  },

# still not got the solution follow ["this video"]("https://www.youtube.com/watch?v=PQYdXwJJq-c&t=35s")

