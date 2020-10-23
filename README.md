# Dropdown Menu

This is a simple module for create dropdown menus.

## Installation

Using npm:

```shell
$ npm i @talha15/dropdown-menu
```

In a browser:

```html
<script src="dropdown.js"></script>
```

or

```html
<script src="http://unpkg.com/@talha15/dropdown-menu"></script>
```

opitional:

```html
<link rel="stylesheet" type="text/css" href="/path/to/dropdown.css" />
```

**note:** If you don't add this link, js file will add

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/@talha15/dropdown-menu@1.2.0/dropdown.css"
/>
```

this automatically.

## Usage

Basic:

```html
<div>
  <button id="1" data-toggle="menu-class">Button</button>

  <div class="menu-class">
    <div class="dropdown-item">1a</div>
    <div class="dropdown-item">2b</div>
    <div class="dropdown-item">3c</div>
    <div class="dropdown-item">4d</div>
    <div class="dropdown-item">5e</div>
  </div>
</div>
```

Advanced:

```html
<div>
  <button
    id="1"
    data-toggle="menu-class"
    data-action="hover"
    data-modal="true"
    data-position="bottom-left"
  >
    Button
  </button>

  <div class="menu-class fade">
    <div class="dropdown-item">1a</div>
    <div class="dropdown-item">2b</div>
    <div class="dropdown-item">3c</div>
    <div class="dropdown-item">4d</div>
    <div class="dropdown-item">5e</div>
  </div>
</div>
```

Every dropdown toggle button must have _"**id**"_ and _"**data-toggle=""**"_ parameter. The _"**id**"_ must be unique. The _"**data-toggle**"_ must be equal to unique class of menu.

We have some opitional parameters too.

"_**data-action**_" = _hover_ or _click_. defaut = _click_.

"_**data-position**_" = _top-left_ or _top-mid_ or _top-right_ or _bottom-left_ or _bottom-mid_ or _bottom-right_. defaut = _bottom-mid_.

"_**data-modal**_" = _true_ or _false_. default = _true_

We have a fade animation as opitional. You can use it with adding _"**fade**"_ class to menu.

Button or Menu can be any element. For example button can be a _"**a**"_ element or _"**div**"_ element.

There are somethings you should pay attention:

- The Button and Menu **must** be in the same parent element.
- All of the menu items **must** have the same class.
