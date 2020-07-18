# Dropdown Menu

This is a simple module for create dropdown menus.

## Installation

Using npm:

```shell
$ npm i @talha15/dropdown-menu
```

In a browser:

```html
<script src="lodash.js"></script>
```

or

```html
<script src="http://unpkg.com/@talha15/dropdown-menu"></script>
```

## Usage

```

<div class="dropdown-container">
  <button
    id=""
  >
    Button
  </button>

  <div class="dropdown fade">
    <div>
      1a
    </div>
    <div>
      2b
    </div>
    <div>
      3c
    </div>
    <div>
      4d
    </div>
    <div>
      5e
    </div>
  </div>
</div>

```

Every dropdown toggle button must have _'id'_ and _'data-toggle="dropdown"'_ parameter. The _'id'_ must be diffrent from other elements's id.

We have some opitional parameters too.

_data-action_ = _hover_ or _click_
_data-position_ = _top-left_ or _top-mid_ or _top-right_ or _bottom-left_ or _bottom-mid_ or _bottom-right_. As defaut _bottom-mid_

And the menu must have _'dropdown'_ class. We have a fade animation as opitional. You can use it with adding _'fade'_ class to menu.

Button or Menu can be any element. For example button can be a _a_ element or _div_ element.

There is something you should pay attention:

The Button and Menu must be in the same parent element.
