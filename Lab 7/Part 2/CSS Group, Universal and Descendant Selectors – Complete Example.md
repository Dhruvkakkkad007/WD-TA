# CSS Group, Universal and Descendant Selectors

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Selectors</title>

    <style>

        /* 1. Universal Selector */
        * {
            font-family: Arial;
        }

        /* 2. Group Selector */
        h1, p {
            color: blue;
        }

        /* 3. Descendant Selector */
        div p {
            color: red;
        }

    </style>
</head>

<body>

    <h1>Welcome to My Website</h1>

    <p>This is a normal paragraph.</p>

    <div>
        <p>This paragraph is inside the div.</p>
        <p>This is another paragraph inside the div.</p>
    </div>

    <p>This paragraph is outside the div.</p>

</body>
</html>
```

## Explanation

### 1. Universal Selector

```css
* {
    font-family: Arial;
}
```

The `*` selects **all elements**.

Therefore, the font is applied to:

```text
h1
p
div
```

and other elements on the page.

---

### 2. Group Selector

```css
h1, p {
    color: blue;
}
```

The comma `,` allows us to group multiple selectors.

Therefore:

```text
h1 → Blue
p  → Blue
```

Instead of writing:

```css
h1 {
    color: blue;
}

p {
    color: blue;
}
```

we can write:

```css
h1, p {
    color: blue;
}
```

This makes the CSS shorter and cleaner.

---

### 3. Descendant Selector

```css
div p {
    color: red;
}
```

This means:

> Select all `<p>` elements that are inside a `<div>`.

Therefore:

```html
<div>
    <p>Hello</p>
</div>
```

The paragraph becomes red.

But:

```html
<p>Hello</p>
```

outside the `<div>` does not get the red color from `div p`.

## What Happens in Our Example?

Initially, the group selector says:

```css
h1, p {
    color: blue;
}
```

So all paragraphs become blue.

But then:

```css
div p {
    color: red;
}
```

specifically targets paragraphs inside the `<div>`.

Therefore, the paragraphs inside the `<div>` become red.

The paragraph outside the `<div>` remains blue.

## Quick Summary

| Selector | Meaning | Example |
|---|---|---|
| Group | Select multiple elements | `h1, p` |
| Universal | Select all elements | `*` |
| Descendant | Select elements inside another element | `div p` |

## Easy Memory Trick

```text
h1, p
 ↓
GROUP
"Apply same style to these elements"

*
 ↓
EVERYTHING
"Apply style to all elements"

div p
 ↓
INSIDE
"Select p inside div"
```