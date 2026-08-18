# CSS Selectors – Element, Class and ID

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Selectors Example</title>

    <style>

        /* 1. Element Selector */
        p {
            color: blue;
            font-size: 18px;
        }

        /* 2. Class Selector */
        .important {
            color: red;
            font-weight: bold;
        }

        /* 3. ID Selector */
        #mainTitle {
            color: green;
            text-align: center;
        }

    </style>
</head>

<body>

    <h1 id="mainTitle">Welcome to CSS Selectors</h1>

    <p>This is the first paragraph.</p>

    <p class="important">
        This is an important paragraph.
    </p>

    <p>This is the third paragraph.</p>

    <p class="important">
        This is another important paragraph.
    </p>

</body>
</html>
```

## How This Works

### 1. Element Selector

```css
p {
    color: blue;
    font-size: 18px;
}
```

This selects **all `<p>` elements**.

Therefore:

```html
<p>This is the first paragraph.</p>
```

and

```html
<p>This is the third paragraph.</p>
```

will become blue.

---

### 2. Class Selector

```css
.important {
    color: red;
    font-weight: bold;
}
```

This selects every element having:

```html
class="important"
```

For example:

```html
<p class="important">Important paragraph</p>
```

The class can be reused:

```html
<p class="important">Paragraph 1</p>
<p class="important">Paragraph 2</p>
<h2 class="important">Heading</h2>
```

All of them can receive the same `.important` style.

---

### 3. ID Selector

```css
#mainTitle {
    color: green;
    text-align: center;
}
```

This selects the element having:

```html
id="mainTitle"
```

Example:

```html
<h1 id="mainTitle">Welcome to CSS Selectors</h1>
```

The heading becomes green and centered.

## Quick Comparison

| Selector | CSS Syntax | HTML Example | Main Purpose |
|---|---|---|---|
| Element | `p` | `<p>` | Select all elements of that type |
| Class | `.important` | `class="important"` | Apply reusable styling |
| ID | `#mainTitle` | `id="mainTitle"` | Style one specific element |

## Easy Way to Remember

```text
p              → Tag/Element
.important     → Class
#mainTitle     → ID
```

Think of it like this:

**Element Selector**

> "Style all students."

**Class Selector**

> "Style all students in the special group."

**ID Selector**

> "Style this particular student."

## Important Difference

### Element

```css
p {
    color: blue;
}
```

Means:

> All paragraphs → blue

### Class

```css
.important {
    color: red;
}
```

Means:

> All elements with class `important` → red

### ID

```css
#mainTitle {
    color: green;
}
```

Means:

> The element with ID `mainTitle` → green