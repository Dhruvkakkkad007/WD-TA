# HTML5 Semantic Tags, Form Validation & Multimedia --- Complete Practical README

## 1. Aim

This practical demonstrates:

1.  HTML5 semantic tags:
    -   `<header>`
    -   `<nav>`
    -   `<main>`
    -   `<article>`
    -   `<section>`
    -   `<footer>`
2.  HTML5 form elements:
    -   `email`
    -   `tel`
    -   `date`
    -   `number`
    -   `textarea`
3.  Form validation:
    -   `required`
    -   `pattern`
    -   `minlength`
    -   `maxlength`
    -   `min`
    -   `max`
4.  HTML5 multimedia:
    -   `<audio>`
    -   `<video>`
    -   `controls`
    -   `autoplay`
    -   `loop`
    -   `poster`
    -   multiple `<source>` formats

The examples below are beginner-friendly and can be combined into **one
small HTML5 website**.

------------------------------------------------------------------------

# 2. What is HTML5?

HTML5 is the modern version of HTML used to create the structure of web
pages.

HTML provides elements for:

-   headings
-   paragraphs
-   links
-   forms
-   images
-   audio
-   video
-   page structure

HTML5 also introduced useful **semantic elements** and improved **form
validation** and **multimedia support**.

------------------------------------------------------------------------

# 3. Semantic Tags

## What is a Semantic Tag?

A semantic tag clearly describes the meaning or purpose of its content.

For example:

``` html
<header>Website Header</header>
```

The browser and developer can understand that this area is the header.

### Common semantic tags

  Tag           Meaning               Simple Use
  ------------- --------------------- -----------------------
  `<header>`    Header/top area       Website title/logo
  `<nav>`       Navigation area       Menu links
  `<main>`      Main content          Main page content
  `<article>`   Independent content   Blog/news article
  `<section>`   Logical section       Group related content
  `<footer>`    Bottom area           Copyright/contact

------------------------------------------------------------------------

# 4. `<header>`

The `<header>` represents introductory content for a page or section.

### Example

``` html
<header>
    <h1>My Student Portal</h1>
    <p>Welcome to my website</p>
</header>
```

### Explanation

-   `<header>` creates the header area.
-   `<h1>` displays the main heading.
-   `<p>` displays a paragraph.

------------------------------------------------------------------------

# 5. `<nav>`

`<nav>` contains navigation links.

### Example

``` html
<nav>
    <a href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#media">Media</a>
</nav>
```

### Explanation

-   `<nav>` identifies the navigation area.
-   `<a>` creates clickable links.
-   `href="#contact"` moves to the element whose `id="contact"`.

------------------------------------------------------------------------

# 6. `<main>`

`<main>` contains the primary content of the webpage.

### Example

``` html
<main>
    <h2>Welcome</h2>
    <p>This is the main content of the website.</p>
</main>
```

A page normally has one main `<main>` element.

------------------------------------------------------------------------

# 7. `<section>`

`<section>` groups related content.

### Example

``` html
<section>
    <h2>About Us</h2>
    <p>We provide student mentoring services.</p>
</section>
```

Think of a section as a separate logical part of a webpage.

------------------------------------------------------------------------

# 8. `<article>`

`<article>` is used for independent/self-contained content.

Examples:

-   Blog post
-   News article
-   Product article
-   Forum post

### Example

``` html
<article>
    <h2>HTML5 Basics</h2>
    <p>HTML5 provides semantic tags, form validation and multimedia features.</p>
</article>
```

------------------------------------------------------------------------

# 9. `<footer>`

`<footer>` represents the bottom/footer area.

### Example

``` html
<footer>
    <p>&copy; 2026 My Student Portal</p>
</footer>
```

`&copy;` displays the copyright symbol.

------------------------------------------------------------------------

# 10. Small Semantic Tags Demo

``` html
<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Semantic Tags</title>
</head>

<body>

    
    <header>
        <h1>My Website</h1>

       
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </nav>
    </header>


    
    <main>

        
        <section>
            <h2>About Us</h2>
            <p>
                This section contains information
                about our website.
            </p>
        </section>


        
        <section>
            <h2>Our Services</h2>
            <p>
                We provide different services
                to our customers.
            </p>
        </section>


        
        <article>
            <h2>Latest Blog Post</h2>
            <p>
                This is an independent article.
                It contains self-contained information.
            </p>
        </article>

    </main>


    
    <footer>
        <p>&copy; 2026 My Website. All rights reserved.</p>
    </footer>

</body>
</html>
```


# 11. HTML5 Forms

Forms are used to collect information from users.

Examples:

-   Name
-   Email
-   Phone number
-   Date
-   Password
-   Age
-   Feedback

Basic structure:

``` html
<form>
    <!-- form fields -->
</form>
```

------------------------------------------------------------------------

# 12. `<label>`

`<label>` describes a form input.

Example:

``` html
<label for="email">Email:</label>
<input type="email" id="email">
```

### Why use `for`?

The `for` value should match the input's `id`.

``` html
<label for="email">Email:</label>
<input type="email" id="email">
```

Here:

``` text
label for = email
input id  = email
```

This connects the label with the input.

------------------------------------------------------------------------

# 13. `type="email"`

It is used to accept an email address.

``` html
<input type="email" name="email">
```

The browser can check whether the entered value looks like an email
address.

Example:

``` text
Correct-looking:
student@gmail.com

Incorrect:
student
```

------------------------------------------------------------------------

# 14. `type="tel"`

It is used for telephone/mobile numbers.

``` html
<input type="tel" name="phone">
```

Example:

``` text
9876543210
```

Important: `tel` indicates that the field contains a telephone number.
It does not automatically enforce a specific number of digits. For
strict validation, use `pattern`.

------------------------------------------------------------------------

# 15. `type="date"`

It provides a date input.

``` html
<input type="date" name="dob">
```

The browser normally provides a date picker.

Example:

``` text
2026-08-12
```

------------------------------------------------------------------------

# 16. `<textarea>`

`<textarea>` is used when the user needs to enter multiple lines of
text.

``` html
<textarea name="message"></textarea>
```

Useful for:

-   Feedback
-   Address
-   Comments
-   Messages
-   Descriptions

------------------------------------------------------------------------

# 17. `required` Attribute

`required` makes a field compulsory.

### Example

``` html
<input type="text" name="name" required>
```

The user cannot submit the form while this field is empty.

### Without required

``` html
<input type="text" name="name">
```

The field can be left empty.

### With required

``` html
<input type="text" name="name" required>
```

The field must be filled.

------------------------------------------------------------------------

# 18. Contact Form Demo

``` html
<form>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <br><br>

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required>

    <br><br>

    <label for="date">Preferred Date:</label>
    <input type="date" id="date" name="date" required>

    <br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" required></textarea>

    <br><br>

    <button type="submit">Submit</button>

</form>
```

This satisfies the basic contact-form requirement using:

-   `email`
-   `tel`
-   `date`
-   `textarea`
-   `required`

------------------------------------------------------------------------

# 19. Form Validation

## What is Form Validation?

Form validation checks whether the user's input is valid before
submitting the form.

For example:

``` text
Name       → Cannot be empty
Email      → Must look like an email
Age        → Must be within a given range
Password   → Must follow a specific pattern
Feedback   → Must have a minimum length
```

HTML5 provides many validation attributes without requiring JavaScript
for basic rules.

------------------------------------------------------------------------

# 20. `type="number"`

Used for numeric values.

``` html
<input type="number" name="age">
```

You can restrict the range using `min` and `max`.

``` html
<input type="number" name="age" min="18" max="60">
```

Allowed range:

``` text
18 to 60
```

------------------------------------------------------------------------

# 21. `min` and `max`

These control the minimum and maximum value for suitable input types.

Example:

``` html
<input type="number" min="18" max="60">
```

Meaning:

``` text
Minimum = 18
Maximum = 60
```

If the user enters:

``` text
25
```

Valid.

If the user enters:

``` text
10
```

Invalid because it is below 18.

If the user enters:

``` text
70
```

Invalid because it is above 60.

------------------------------------------------------------------------

# 22. `pattern`

`pattern` allows you to define a custom regular-expression rule.

Example:

``` html
<input type="text" pattern="[A-Za-z]+">
```

This allows letters only.

For a 10-digit Indian-style mobile number:

``` html
<input type="tel" pattern="[6-9][0-9]{9}">
```

This means:

``` text
[6-9]       → First digit must be 6, 7, 8 or 9
[0-9]{9}    → Followed by exactly 9 digits
```

Example:

``` text
9876543210 → Valid
1234567890 → Invalid
```

------------------------------------------------------------------------

# 23. Password Pattern Example

Suppose we want:

-   At least one uppercase letter
-   At least one lowercase letter
-   At least one number
-   Minimum 8 characters

Example:

``` html
<input
    type="password"
    pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
    required
>
```

### Simple understanding

``` text
(?=.*[A-Z]) → Must contain uppercase
(?=.*[a-z]) → Must contain lowercase
(?=.*[0-9]) → Must contain number
.{8,}       → At least 8 characters
```

------------------------------------------------------------------------

# 24. `minlength`

Controls the minimum number of characters.

Example:

``` html
<input type="text" minlength="3">
```

At least 3 characters are required.

``` text
AB     → Invalid
ABC    → Valid
```

------------------------------------------------------------------------

# 25. `maxlength`

Controls the maximum number of characters.

Example:

``` html
<input type="text" maxlength="20">
```

The input can contain at most 20 characters.

------------------------------------------------------------------------

# 26. `minlength` + `maxlength`

They can be used together.

``` html
<input
    type="text"
    minlength="3"
    maxlength="20"
    required
>
```

Meaning:

``` text
Minimum characters = 3
Maximum characters = 20
Field is compulsory
```

------------------------------------------------------------------------

# 27. `min` vs `minlength`

These are different.

### `min`

Controls a **numeric/date value**.

``` html
<input type="number" min="18">
```

Means:

``` text
Value must be >= 18
```

### `minlength`

Controls the **number of characters**.

``` html
<input type="text" minlength="8">
```

Means:

``` text
Text must contain at least 8 characters
```

------------------------------------------------------------------------

# 28. `max` vs `maxlength`

Again, they are different.

### `max`

Controls a value:

``` html
<input type="number" max="100">
```

Maximum value = 100.

### `maxlength`

Controls character count:

``` html
<input type="text" maxlength="100">
```

Maximum characters = 100.

------------------------------------------------------------------------

# 29. Registration Form Demo

``` html
<form>

    <label for="fullname">Full Name:</label>
    <input
        type="text"
        id="fullname"
        name="fullname"
        minlength="3"
        maxlength="50"
        required
    >

    <br><br>

    <label for="email">Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <br><br>

    <label for="age">Age:</label>
    <input
        type="number"
        id="age"
        name="age"
        min="18"
        max="60"
        required
    >

    <br><br>

    <label for="phone">Phone:</label>
    <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[6-9][0-9]{9}"
        required
    >

    <br><br>

    <label for="password">Password:</label>
    <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
        required
    >

    <br><br>

    <button type="submit">Register</button>

</form>
```

------------------------------------------------------------------------

# 30. Feedback Form Demo

This demonstrates:

-   `minlength`
-   `maxlength`
-   `min`
-   `max`

``` html
<form>

    <label for="feedback">Feedback:</label><br>

    <textarea
        id="feedback"
        name="feedback"
        minlength="10"
        maxlength="200"
        required
    ></textarea>

    <br><br>

    <label for="rating">Rating (1-5):</label>

    <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        required
    >

    <br><br>

    <button type="submit">Submit Feedback</button>

</form>
```

### Validation

``` text
Feedback:
Minimum = 10 characters
Maximum = 200 characters

Rating:
Minimum = 1
Maximum = 5
```

------------------------------------------------------------------------

# 31. `<audio>` Tag

The `<audio>` tag embeds audio into a webpage.

Basic example:

``` html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

### `controls`

Displays:

-   Play/Pause
-   Volume
-   Progress bar
-   Other browser-provided controls

------------------------------------------------------------------------

# 32. `autoplay`

Automatically starts media playback when permitted by the browser.

``` html
<audio autoplay>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

**Important:** Modern browsers may block autoplay, especially when the
media has sound and the user has not interacted with the page.

------------------------------------------------------------------------

# 33. `loop`

Repeats the audio after it finishes.

``` html
<audio controls loop>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

Flow:

``` text
Audio ends
    ↓
Audio starts again
    ↓
Audio ends
    ↓
Audio starts again
```

------------------------------------------------------------------------

# 34. Audio Demo with `controls`, `autoplay`, and `loop`

``` html
<audio controls autoplay loop>
    <source src="audio/song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Important

For a practical file, put the audio inside a folder:

``` text
project/
│
├── index.html
└── audio/
    └── song.mp3
```

------------------------------------------------------------------------

# 35. `<video>` Tag

The `<video>` tag embeds video into a webpage.

Basic example:

``` html
<video controls width="500">
    <source src="video.mp4" type="video/mp4">
</video>
```

------------------------------------------------------------------------

# 36. `controls` for Video

``` html
<video controls>
```

The browser displays video controls such as:

-   Play/Pause
-   Volume
-   Progress bar
-   Full screen (browser-dependent)

------------------------------------------------------------------------

# 37. `poster`

`poster` specifies an image displayed before the video starts.

``` html
<video
    controls
    poster="poster.jpg"
    width="500"
>
    <source src="video.mp4" type="video/mp4">
</video>
```

Think of `poster` as the **thumbnail/cover image of the video**.

------------------------------------------------------------------------

# 38. Multiple Video Sources

Different browsers may support different video formats.

You can provide multiple `<source>` elements:

``` html
<video controls width="500" poster="poster.jpg">

    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">

    Your browser does not support the video element.

</video>
```

The browser checks the sources and uses a supported format.

------------------------------------------------------------------------

# 39. Complete Small Demo --- All Requirements Together

This is the main practical demo.

## Folder Structure

Create the following:

``` text
HTML5-Practical/
│
├── index.html
│
├── audio/
│   └── song.mp3
│
└── video/
    ├── demo.mp4
    ├── demo.webm
    └── poster.jpg
```

> The actual `.mp3`, `.mp4`, `.webm`, and `.jpg` files are not included
> here. Add your own media files with these names, or change the
> filenames in the HTML.

------------------------------------------------------------------------

## `index.html`

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>HTML5 Practical Demo</title>
</head>

<body>

    <!-- ================= HEADER ================= -->

    <header>
        <h1>Student Learning Portal</h1>

        <p>
            HTML5 Semantic Tags, Forms and Multimedia Demo
        </p>
    </header>


    <!-- ================= NAVIGATION ================= -->

    <nav>
        <a href="#home">Home</a> |
        <a href="#registration">Registration</a> |
        <a href="#feedback">Feedback</a> |
        <a href="#media">Media</a>
    </nav>


    <!-- ================= MAIN CONTENT ================= -->

    <main>

        <!-- HOME SECTION -->

        <section id="home">

            <h2>Welcome</h2>

            <p>
                This page demonstrates HTML5 semantic elements,
                form validation, audio and video.
            </p>

        </section>


        <!-- ARTICLE -->

        <article>

            <h2>HTML5 Article</h2>

            <p>
                HTML5 provides semantic elements that make
                webpage structure easier to understand.
            </p>

        </article>


        <!-- ================= REGISTRATION ================= -->

        <section id="registration">

            <h2>Registration Form</h2>

            <form>

                <!-- Name -->

                <label for="fullname">
                    Full Name:
                </label>

                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    minlength="3"
                    maxlength="50"
                    required
                >

                <br><br>


                <!-- Email -->

                <label for="email">
                    Email:
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <br><br>


                <!-- Phone -->

                <label for="phone">
                    Phone Number:
                </label>

                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[6-9][0-9]{9}"
                    required
                >

                <br><br>


                <!-- Date -->

                <label for="date">
                    Date:
                </label>

                <input
                    type="date"
                    id="date"
                    name="date"
                    required
                >

                <br><br>


                <!-- Age -->

                <label for="age">
                    Age:
                </label>

                <input
                    type="number"
                    id="age"
                    name="age"
                    min="18"
                    max="60"
                    required
                >

                <br><br>


                <!-- Password -->

                <label for="password">
                    Password:
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    minlength="8"
                    pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
                    required
                >

                <br><br>


                <!-- Submit -->

                <button type="submit">
                    Register
                </button>

            </form>

        </section>


        <!-- ================= FEEDBACK ================= -->

        <section id="feedback">

            <h2>Feedback Form</h2>

            <form>

                <label for="message">
                    Feedback:
                </label>

                <br>

                <textarea
                    id="message"
                    name="message"
                    minlength="10"
                    maxlength="200"
                    required
                ></textarea>

                <br><br>


                <label for="rating">
                    Rating:
                </label>

                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    required
                >

                <br><br>


                <button type="submit">
                    Submit Feedback
                </button>

            </form>

        </section>


        <!-- ================= MULTIMEDIA ================= -->

        <section id="media">

            <h2>Multimedia</h2>


            <!-- AUDIO -->

            <h3>Audio</h3>

            <audio controls autoplay loop>

                <source
                    src="audio/song.mp3"
                    type="audio/mpeg"
                >

                Your browser does not support audio.

            </audio>


            <br><br>


            <!-- VIDEO -->

            <h3>Video</h3>

            <video
                controls
                width="500"
                poster="video/poster.jpg"
            >

                <source
                    src="video/demo.mp4"
                    type="video/mp4"
                >

                <source
                    src="video/demo.webm"
                    type="video/webm"
                >

                Your browser does not support video.

            </video>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->

    <footer>

        <p>
            &copy; 2026 Student Learning Portal
        </p>

    </footer>

</body>

</html>
```

------------------------------------------------------------------------

# 40. Complete Demo Explained Step-by-Step

## Step 1 --- `<!DOCTYPE html>`

``` html
<!DOCTYPE html>
```

Tells the browser that the document uses modern HTML.

------------------------------------------------------------------------

## Step 2 --- `<html>`

``` html
<html lang="en">
```

The root element of the HTML document.

`lang="en"` indicates that the page language is English.

------------------------------------------------------------------------

## Step 3 --- `<head>`

``` html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Practical Demo</title>
</head>
```

### `charset`

``` html
<meta charset="UTF-8">
```

Specifies the character encoding.

### `viewport`

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Helps the page display correctly on different screen sizes.

### `title`

``` html
<title>HTML5 Practical Demo</title>
```

Sets the browser tab title.

------------------------------------------------------------------------

# 41. Semantic Structure of Our Demo

The page structure is:

``` text
HTML
│
├── HEAD
│
└── BODY
    │
    ├── HEADER
    │
    ├── NAV
    │
    ├── MAIN
    │   │
    │   ├── SECTION - Home
    │   │
    │   ├── ARTICLE
    │   │
    │   ├── SECTION - Registration
    │   │
    │   ├── SECTION - Feedback
    │   │
    │   └── SECTION - Multimedia
    │
    └── FOOTER
```

This is a clean semantic structure.

------------------------------------------------------------------------

# 42. Form Validation in Our Demo

Our registration form contains:

  Field       Validation
  ----------- -------------------------------------------
  Full Name   `required`, `minlength`, `maxlength`
  Email       `type="email"`, `required`
  Phone       `type="tel"`, `pattern`, `required`
  Date        `type="date"`, `required`
  Age         `type="number"`, `min`, `max`, `required`
  Password    `minlength`, `pattern`, `required`

------------------------------------------------------------------------

# 43. Example Valid Inputs

``` text
Full Name:
Dhruv Kakkad

Email:
student@example.com

Phone:
9876543210

Date:
2026-08-12

Age:
21

Password:
Student123
```

These satisfy the basic rules used in the demo.

------------------------------------------------------------------------

# 44. Example Invalid Inputs

### Empty Name

``` text
Name = empty
```

Invalid because:

``` html
required
```

------------------------------------------------------------------------

### Invalid Email

``` text
student
```

Invalid because:

``` html
type="email"
```

expects an email-like format.

------------------------------------------------------------------------

### Invalid Phone

``` text
1234567890
```

Invalid under this pattern:

``` html
pattern="[6-9][0-9]{9}"
```

------------------------------------------------------------------------

### Invalid Age

``` text
Age = 15
```

Invalid because:

``` html
min="18"
```

------------------------------------------------------------------------

### Invalid Rating

``` text
Rating = 8
```

Invalid because:

``` html
max="5"
```

------------------------------------------------------------------------

### Short Feedback

``` text
Good
```

Invalid if the minimum length is 10:

``` html
minlength="10"
```

------------------------------------------------------------------------

# 45. Important Difference Between `required`, `pattern`, and Length Validation

## `required`

Checks whether a value exists.

``` html
required
```

Meaning:

``` text
Cannot be empty
```

## `pattern`

Checks whether text follows a specified pattern.

``` html
pattern="[6-9][0-9]{9}"
```

Meaning:

``` text
Must follow this format
```

## `minlength`

Checks minimum number of characters.

``` html
minlength="8"
```

Meaning:

``` text
At least 8 characters
```

## `maxlength`

Checks maximum number of characters.

``` html
maxlength="20"
```

Meaning:

``` text
Maximum 20 characters
```

------------------------------------------------------------------------

# 46. Multimedia Attributes Summary

  Attribute    Meaning
  ------------ ---------------------------------
  `controls`   Displays media controls
  `autoplay`   Attempts to start automatically
  `loop`       Repeats the media
  `poster`     Image shown before video starts
  `src`        Location of media file
  `type`       Media MIME type

Example:

``` html
<audio controls autoplay loop>
```

Example:

``` html
<video controls poster="poster.jpg">
```

------------------------------------------------------------------------

# 47. Why Use Multiple `<source>` Tags?

Instead of:

``` html
<video src="video.mp4"></video>
```

we can use:

``` html
<video controls>

    <source src="video.mp4" type="video/mp4">

    <source src="video.webm" type="video/webm">

</video>
```

The browser can choose a source it supports.

The same concept can be used with audio:

``` html
<audio controls>

    <source src="song.mp3" type="audio/mpeg">

    <source src="song.ogg" type="audio/ogg">

</audio>
```

------------------------------------------------------------------------

# 48. How to Run the Practical

## Step 1

Create a folder:

``` text
HTML5-Practical
```

## Step 2

Inside it create:

``` text
index.html
```

## Step 3

Create an `audio` folder:

``` text
audio/
```

Put your audio file inside:

``` text
audio/song.mp3
```

## Step 4

Create a `video` folder:

``` text
video/
```

Put your files inside:

``` text
video/demo.mp4
video/demo.webm
video/poster.jpg
```

## Step 5

Open:

``` text
index.html
```

in a browser.

------------------------------------------------------------------------

# 49. Expected Page Sections

Your webpage will contain approximately:

``` text
------------------------------------------------
        Student Learning Portal
 HTML5 Semantic Tags, Forms and Multimedia Demo
------------------------------------------------
 Home | Registration | Feedback | Media
------------------------------------------------

Welcome
This page demonstrates HTML5 features.

HTML5 Article
HTML5 provides semantic elements...

Registration Form
Full Name:       [____________]
Email:           [____________]
Phone Number:    [____________]
Date:            [____________]
Age:             [____________]
Password:        [____________]

                 [ Register ]

Feedback Form
Feedback:
[________________________]
Rating: [__]

                 [ Submit Feedback ]

Multimedia
Audio:
[ Play ─────────────── ]

Video:
[       Video         ]

------------------------------------------------
© 2026 Student Learning Portal
------------------------------------------------
```

The exact appearance depends on the browser because no CSS has been
added.

------------------------------------------------------------------------

# 50. Exam/Viva Quick Revision

## Semantic Tags

### What is a semantic tag?

A semantic tag clearly describes the meaning of its content.

### Give examples.

``` text
<header>
<nav>
<main>
<section>
<article>
<footer>
```

### What is `<nav>`?

It represents a navigation section containing navigation links.

### What is `<main>`?

It contains the primary content of the page.

### What is `<article>`?

It represents independent/self-contained content.

### What is `<section>`?

It groups related content.

### What is `<footer>`?

It represents footer/bottom information.

------------------------------------------------------------------------

# 51. Form Validation Quick Revision

### What does `required` do?

Prevents submission when the required field is empty.

### What does `type="email"` do?

Provides an email-oriented input and browser validation for email-like
input.

### What does `type="number"` do?

Creates an input intended for numeric values.

### What does `type="date"` do?

Creates a date input.

### What does `type="tel"` do?

Creates an input intended for telephone numbers.

### What does `pattern` do?

Checks whether input matches a specified regular expression.

### What does `minlength` do?

Sets the minimum number of characters.

### What does `maxlength` do?

Sets the maximum number of characters.

### What does `min` do?

Sets the minimum allowed value for applicable inputs.

### What does `max` do?

Sets the maximum allowed value for applicable inputs.

------------------------------------------------------------------------

# 52. Multimedia Quick Revision

### Which tag is used for audio?

``` html
<audio>
```

### Which tag is used for video?

``` html
<video>
```

### What does `controls` do?

Displays media controls.

### What does `autoplay` do?

Attempts to start media automatically.

### What does `loop` do?

Repeats the media.

### What does `poster` do?

Shows an image before the video starts.

### Why use multiple `<source>` tags?

To provide different media formats so the browser can use a supported
format.

------------------------------------------------------------------------

# 53. Most Important Code to Remember

## Semantic Layout

``` html
<header>Header</header>

<nav>Navigation</nav>

<main>

    <section>Section</section>

    <article>Article</article>

</main>

<footer>Footer</footer>
```

## Required Field

``` html
<input type="text" required>
```

## Email

``` html
<input type="email" required>
```

## Number Range

``` html
<input type="number" min="1" max="100">
```

## Pattern

``` html
<input type="tel" pattern="[6-9][0-9]{9}">
```

## Length

``` html
<input type="text" minlength="3" maxlength="20">
```

## Audio

``` html
<audio controls autoplay loop>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

## Video

``` html
<video controls poster="poster.jpg">

    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">

</video>
```

------------------------------------------------------------------------

# 54. One-Line Understanding of the Entire Practical

``` text
Semantic Tags
→ Structure the webpage meaningfully

Form Elements
→ Collect information from users

Validation Attributes
→ Check user input before submission

Audio
→ Add sound/music to webpage

Video
→ Add videos with controls, poster and multiple formats
```

------------------------------------------------------------------------

# 55. Final Practical Checklist

-   [ ] Use `<header>`
-   [ ] Use `<nav>`
-   [ ] Use `<main>`
-   [ ] Use `<section>`
-   [ ] Use `<article>`
-   [ ] Use `<footer>`
-   [ ] Create a contact form
-   [ ] Use `type="email"`
-   [ ] Use `type="tel"`
-   [ ] Use `type="date"`
-   [ ] Use `<textarea>`
-   [ ] Use `required`
-   [ ] Use `type="number"`
-   [ ] Use `min`
-   [ ] Use `max`
-   [ ] Use `pattern`
-   [ ] Use `minlength`
-   [ ] Use `maxlength`
-   [ ] Add `<audio>`
-   [ ] Add `controls`
-   [ ] Demonstrate `autoplay`
-   [ ] Demonstrate `loop`
-   [ ] Add `<video>`
-   [ ] Add `poster`
-   [ ] Add multiple `<source>` tags

------------------------------------------------------------------------

# 56. Final Conclusion

This practical covers the important HTML5 features required in the given
question.

The complete demo combines:

``` text
HTML5
│
├── Semantic Structure
│   ├── header
│   ├── nav
│   ├── main
│   ├── section
│   ├── article
│   └── footer
│
├── Forms
│   ├── email
│   ├── tel
│   ├── date
│   ├── number
│   └── textarea
│
├── Validation
│   ├── required
│   ├── pattern
│   ├── minlength
│   ├── maxlength
│   ├── min
│   └── max
│
└── Multimedia
    ├── audio
    │   ├── controls
    │   ├── autoplay
    │   └── loop
    │
    └── video
        ├── controls
        ├── poster
        └── multiple source formats
```

This single `index.html` demo is sufficient as a **small practical
demonstration of all the concepts in the question**.
