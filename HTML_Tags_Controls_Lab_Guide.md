# Lab 2: Demonstrate HTML Tags & HTML Controls



## 1️⃣ Text Formatting Tags: `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`

### Definition
These are **inline formatting tags** used to change how text visually appears or to give it semantic (meaningful) emphasis.

| Tag | Meaning | Effect |
|-----|---------|--------|
| `<b>` | Bold | Makes text **bold** (visual only, no extra meaning) |
| `<i>` | Italic | Makes text *italic* (visual only, no extra meaning) |
| `<u>` | Underline | Makes text <u>underlined</u> |
| `<strong>` | Strong importance | Makes text **bold** AND tells browser/screen-readers it is important |
| `<em>` | Emphasis | Makes text *italic* AND tells browser/screen-readers it is emphasized |

> `<b>` vs `<strong>` and `<i>` vs `<em>` look the same visually, but `<strong>` and `<em>` carry **semantic meaning** (important for SEO and accessibility/screen readers), while `<b>` and `<i>` are purely stylistic.

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting Tags Demo</title>
</head>
<body>
    <h2>Text Formatting Tags Example</h2>

    <p>This is <b>bold text</b> using the b tag.</p>
    <p>This is <i>italic text</i> using the i tag.</p>
    <p>This is <u>underlined text</u> using the u tag.</p>
    <p>This is <strong>strongly important text</strong> using the strong tag.</p>
    <p>This is <em>emphasized text</em> using the em tag.</p>

    <p>You can also <b><i><u>combine</u></i></b> multiple tags together!</p>
</body>
</html>
```



## 2️⃣ Superscript & Subscript Tags: `<sup>` and `<sub>`

### Definition
- `<sub>` – displays text **below** the normal line (subscript)
- `<sup>` – displays text **above** the normal line (superscript)

### Why/When to use it
Used for writing **chemical formulas** (H₂O), **mathematical expressions** (x²), footnotes, and ordinal numbers (1ˢᵗ, 2ⁿᵈ).

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Superscript & Subscript Demo</title>
</head>
<body>
    <h2>Mathematical & Chemical Expressions</h2>

    <h3>Chemical Formulas (using sub)</h3>
    <p>Water: H<sub>2</sub>O</p>
    <p>Carbon Dioxide: CO<sub>2</sub></p>
    <p>Sulphuric Acid: H<sub>2</sub>SO<sub>4</sub></p>

    <h3>Mathematical Expressions (using sup)</h3>
    <p>Square of x: x<sup>2</sup></p>
    <p>Einstein's equation: E = mc<sup>2</sup></p>
    <p>Cube of a number: a<sup>3</sup> + b<sup>3</sup></p>

    <h3>Combined Example</h3>
    <p>Footnote example: This is a fact<sup>1</sup></p>
    <p>1<sup>st</sup>, 2<sup>nd</sup>, 3<sup>rd</sup> place winners</p>
</body>
</html>
```

### Output Explanation
Numbers after element symbols appear slightly lowered (H<sub>2</sub>O), and powers/exponents appear slightly raised (x²) — exactly like they're written in chemistry and math textbooks.

---

## 3️⃣ Preformatted & Code Tags: `<pre>` and `<code>`

### Definition
- `<pre>` – displays text **exactly as typed** in the HTML source, preserving spaces, tabs, and line breaks. Uses a monospace font.
- `<code>` – used to display a **snippet of programming code** inline; browsers usually render it in monospace font.

### Why/When to use it
Very useful for showing **poems, ASCII art, source code, or tabular text data** where spacing matters — normally HTML collapses all extra whitespace into a single space, but `<pre>` prevents that.

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Pre & Code Tags Demo</title>
</head>
<body>
    <h2>Preformatted Text Example</h2>
    <p>Normal paragraph collapses     extra    spaces and line
    breaks into one single line.</p>

    <pre>
    This text    keeps its   spacing
        and line breaks
            exactly as typed!
    </pre>

    <h2>Code Snippet Example</h2>
    <p>Use the <code>&lt;h1&gt;</code> tag for main headings.</p>

    <pre><code>
function greet(name) {
    console.log("Hello, " + name);
}
greet("Student");
    </code></pre>
</body>
</html>
```

### Output Explanation
The first paragraph's extra spaces collapse (normal HTML behavior). The `<pre>` block shows text with all original spacing and line breaks intact. The `<pre><code>` combination is the standard way to display a block of program code neatly on a webpage.

---

## 4️⃣ Heading Tags `<h1>` to `<h6>` and Paragraph Tag `<p>`

### Definition
- `<h1>` to `<h6>` – heading tags used to define **titles and sub-titles**, where `<h1>` is the largest/most important and `<h6>` is the smallest/least important.
- `<p>` – defines a **paragraph** of normal body text.

### Why/When to use it
Used to create a proper **content hierarchy/structure** on a webpage (like chapters → sections → sub-sections in a book). Also important for SEO — search engines use headings to understand page structure.

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Heading & Paragraph Tags Demo</title>
</head>
<body>
    <h1>H1: Main Title (Largest)</h1>
    <p>This paragraph explains the main topic of the page.</p>

    <h2>H2: Section Heading</h2>
    <p>This paragraph gives details about this section.</p>

    <h3>H3: Sub-section Heading</h3>
    <p>This paragraph goes further into detail.</p>

    <h4>H4: Smaller Heading</h4>
    <p>Even more specific content here.</p>

    <h5>H5: Minor Heading</h5>
    <p>Fine-level detail content.</p>

    <h6>H6: Smallest Heading</h6>
    <p>This paragraph text stays the same size regardless of heading level.</p>
</body>
</html>
```

### Output Explanation
Each heading gets progressively smaller from `<h1>` to `<h6>`, showing a clear visual hierarchy — perfect for organizing an article, resume, or report layout. Notice `<p>` text size never changes; only the headings above them shrink.

---

## 5️⃣ Address, B, U, I, Blockquote, Marquee, Link, Meta Tags

### Definitions

| Tag | Purpose |
|-----|---------|
| `<address>` | Defines contact information (author/owner) for a document, usually shown in italics |
| `<b>` | Bold text (see Task 1) |
| `<u>` | Underlined text (see Task 1) |
| `<i>` | Italic text (see Task 1) |
| `<blockquote>` | Defines a section quoted from another source, usually indented |
| `<marquee>` | Makes text/image scroll automatically (⚠️ deprecated/obsolete, not supported in modern HTML5 — good to mention this to students!) |
| `<a>` (Link) | Creates a hyperlink to another page or resource |
| `<meta>` | Provides metadata about the HTML document (not visible on page) — used for character set, description, keywords, author, viewport, etc. |

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Address, Blockquote, Marquee, Link, Meta Demo</title>
    <meta charset="UTF-8">
    <meta name="description" content="A demo page for HTML lab">
    <meta name="author" content="Teaching Assistant">
    <meta name="keywords" content="HTML, tags, lab, demo">
</head>
<body>
    <h2>Address Tag</h2>
    <address>
        Written by John Doe<br>
        Visit us at: <a href="https://www.example.com">example.com</a><br>
        123 College Road, Rajkot, Gujarat
    </address>

    <h2>Blockquote Tag</h2>
    <blockquote>
        "The best way to learn HTML is by writing HTML yourself, again and again."
    </blockquote>

    <h2>Marquee Tag (Old/Deprecated)</h2>
    <marquee>This text scrolls automatically across the screen!</marquee>

    <h2>Link (Anchor) Tag</h2>
    <p>Click here to visit <a href="https://www.google.com">Google</a>.</p>

    <h2>Meta Tags</h2>
    <p>Meta tags are placed inside &lt;head&gt; and are invisible on the page.
       They help browsers and search engines understand the page 
       (see the &lt;meta&gt; tags added in the head section above).</p>
</body>
</html>
```

### Output Explanation
The `<address>` block appears italicized with contact info. The `<blockquote>` appears indented. The `<marquee>` text scrolls (in old browsers — mention this may not animate in modern Chrome/Edge since it's deprecated; suggest CSS animations as the modern replacement). The link is clickable and blue/underlined by default. Meta tags don't show on the page at all — they only matter for SEO/browser behavior (can demonstrate via "View Page Source").

---

## 6️⃣ Anchor Tag and Image Control

### Definition
- `<a>` (Anchor tag) – used to create **hyperlinks** that link to other web pages, files, email addresses, or sections within the same page.
- `<img>` – used to **embed/display images** on a webpage. It is a self-closing/empty tag.

### Key Attributes
**Anchor `<a>`:**
- `href` – destination URL
- `target="_blank"` – opens link in a new tab
- `title` – tooltip text on hover

**Image `<img>`:**
- `src` – image source path/URL
- `alt` – alternate text if image fails to load (also used by screen readers)
- `width` / `height` – dimensions

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Anchor & Image Tag Demo</title>
</head>
<body>
    <h2>Anchor Tag Examples</h2>
    <p><a href="https://www.wikipedia.org">Visit Wikipedia</a></p>
    <p><a href="https://www.wikipedia.org" target="_blank">Open Wikipedia in New Tab</a></p>
    <p><a href="mailto:example@mail.com">Send us an Email</a></p>
    <p><a href="#bottom">Jump to Bottom of Page</a></p>

    <h2>Image Tag Example</h2>
    <img src="https://via.placeholder.com/300x150" alt="Sample placeholder image" width="300" height="150">

    <h2>Image as a Clickable Link</h2>
    <a href="https://www.wikipedia.org">
        <img src="https://via.placeholder.com/150" alt="Click this image to visit Wikipedia" width="150" height="150">
    </a>

    <p id="bottom">🔽 You have reached the bottom of the page (anchor link target).</p>
</body>
</html>
```

### Output Explanation
Students see clickable text links (one opens in a new tab, one opens an email client, one jumps to the bottom of the page), a displayed image, and finally an image that itself behaves as a clickable link.

---

## 7️⃣ Iframe Tag

### Definition
`<iframe>` (Inline Frame) is used to **embed another HTML page/document inside the current page** — commonly used for embedding YouTube videos, Google Maps, or other websites.

### Key Attributes
- `src` – URL of the page to embed
- `width` / `height` – size of the frame
- `title` – accessibility description
- `frameborder` – shows/hides border (mostly replaced by CSS now)

### Demo Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Iframe Tag Demo</title>
</head>
<body>
    <h2>Embedding a Website using Iframe</h2>
    <iframe src="https://www.wikipedia.org" width="600" height="400" title="Wikipedia Embedded Page">
    </iframe>

    <h2>Embedding a YouTube Video using Iframe</h2>
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</body>
</html>
```

### Output Explanation
A rectangular "window" appears embedding another live webpage or video directly inside the current page. Great to demonstrate how sites like news portals embed maps or videos without leaving their own page.

---

## 8️⃣ List Controls: Ordered, Unordered & Definition Lists

### Definition
- `<ul>` – **Unordered list** (bullet points), each item wrapped in `<li>`
- `<ol>` – **Ordered list** (numbered), each item wrapped in `<li>`
- `<li>` – a single **list item** inside `<ul>` or `<ol>`
- `<dl>` – **Definition list**, used for term/description pairs
- `<dt>` – **Definition term**
- `<dd>` – **Definition description**

# HTML List Tags – Definition, Demo & Output

## 1. `<ul>` – Unordered List

### Definition
The **`<ul>` (Unordered List)** tag is used to create a list of items displayed with **bullet points**. Each item in the list is enclosed within the **`<li>`** tag.

### Demo

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>
```

### Output

- Apple
- Banana
- Mango

---

## 2. `<ol>` – Ordered List

### Definition
The **`<ol>` (Ordered List)** tag is used to create a list of items displayed in a **numbered sequence**. Each item in the list is enclosed within the **`<li>`** tag.

### Demo

```html
<ol>
    <li>Wake Up</li>
    <li>Brush Teeth</li>
    <li>Go to College</li>
</ol>
```

### Output

1. Wake Up
2. Brush Teeth
3. Go to College

---

## 3. `<li>` – List Item

### Definition
The **`<li>` (List Item)** tag is used to define **a single item** inside an ordered (`<ol>`) or unordered (`<ul>`) list.

### Demo

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### Output

- HTML
- CSS
- JavaScript

> **Note:** Every item inside a list must be written using the `<li>` tag.

---

## 4. `<dl>` – Definition List

### Definition
The **`<dl>` (Definition List)** tag is used to create a list of **terms and their descriptions**. It contains **`<dt>` (Definition Term)** and **`<dd>` (Definition Description)** tags.

### Demo

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### Output

**HTML**  
HyperText Markup Language

**CSS**  
Cascading Style Sheets

---

## 5. `<dt>` – Definition Term

### Definition
The **`<dt>` (Definition Term)** tag is used to specify the **term or word** that is being defined in a definition list.

### Demo

```html
<dl>
    <dt>HTML</dt>
</dl>
```

### Output

**HTML**

---

## 6. `<dd>` – Definition Description

### Definition
The **`<dd>` (Definition Description)** tag is used to provide the **description or explanation** of the term specified by the `<dt>` tag.

### Demo

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
</dl>
```

### Output

**HTML**  
HyperText Markup Language

---

# Complete Example

## Demo

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Lists</title>
</head>
<body>

<h2>Unordered List</h2>
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>

<h2>Ordered List</h2>
<ol>
    <li>Wake Up</li>
    <li>Study</li>
    <li>Sleep</li>
</ol>

<h2>Definition List</h2>
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>

</body>
</html>
```

## Output

### Unordered List

- Apple
- Banana
- Mango

### Ordered List

1. Wake Up
2. Study
3. Sleep

### Definition List

**HTML**  
HyperText Markup Language

**CSS**  
Cascading Style Sheets



---

## 🎯 Quick Reference Summary Table

| # | Topic | Main Tags |
|---|-------|-----------|
| 1 | Text Formatting | `<b>` `<i>` `<u>` `<strong>` `<em>` |
| 2 | Math/Chemical Expressions | `<sup>` `<sub>` |
| 3 | Preformatted Text/Code | `<pre>` `<code>` |
| 4 | Headings & Paragraphs | `<h1>`–`<h6>` `<p>` |
| 5 | Address/Quote/Scroll/Link/Meta | `<address>` `<blockquote>` `<marquee>` `<a>` `<meta>` |
| 6 | Anchor & Image | `<a>` `<img>` |
| 7 | Iframe | `<iframe>` |
| 8 | Lists | `<ul>` `<ol>` `<li>` `<dl>` `<dt>` `<dd>` |


