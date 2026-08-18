📌 Introduction

HTML Meta Tags provide information about an HTML webpage to the browser, search engines, and other web services.

Meta tags are generally written inside the <head> section of an HTML document.

In this example, we will learn two important meta tags:

charset Meta Tag — Defines the character encoding.
refresh Meta Tag — Automatically refreshes the webpage after a specified number of seconds.
1. What is a Meta Tag?

A meta tag is an HTML tag that provides information about the webpage.

Meta tags are written inside:

<head>
    <!-- Meta tags are written here -->
</head>

They generally do not display visible content directly on the webpage.

Basic Example
<meta charset="UTF-8">

Another example:

<meta name="description" content="This is my webpage">
2. charset Meta Tag
What is Character Encoding?

Character encoding tells the browser how characters in an HTML document should be interpreted and displayed.

The most commonly used encoding is:

UTF-8

Therefore, we commonly write:

<meta charset="UTF-8">
Syntax
<meta charset="UTF-8">
Explanation
Part	Meaning
<meta>	Defines metadata
charset	Specifies character encoding
UTF-8	Character encoding format
Why do we use UTF-8?

UTF-8 supports a very large range of characters and symbols.

For example:

Hello
Namaste
નમસ્તે
ગુજરાતી
你好
€
©
😊

Using UTF-8 helps the browser display these characters correctly.

Easy Explanation for Students

You can explain it like this:

charset tells the browser how to read and display the characters used in our webpage.

Think of it as a language/character interpreter between the HTML document and the browser.

3. Automatic Refresh Meta Tag

HTML also provides a meta tag that can tell the browser to automatically refresh the webpage.

Syntax:

<meta http-equiv="refresh" content="5">
Explanation

There are two important parts:

http-equiv
http-equiv="refresh"

This tells the browser that the meta tag is specifying an HTTP-like instruction, here specifically refresh.

content
content="5"

The number 5 represents the number of seconds.

Therefore:

<meta http-equiv="refresh" content="5">

means:

Refresh the webpage after 5 seconds.

4. How Automatic Refresh Works

Suppose we write:

<meta http-equiv="refresh" content="5">

The process is:

Webpage Opens
      ↓
Browser waits 5 seconds
      ↓
Webpage Refreshes
      ↓
Browser waits another 5 seconds
      ↓
Webpage Refreshes Again
      ↓
Continues

So the page will repeatedly refresh approximately every 5 seconds while the page remains open.

5. Small Demo

Create a file named:

index.html

Add the following code:

<!DOCTYPE html>
<html>


<head>


    <meta charset="UTF-8">


    <meta http-equiv="refresh" content="5">


    <title>Meta Tag Demo</title>


</head>


<body>


    <h1>Meta Tag Demo</h1>


    <p>This webpage will automatically refresh after 5 seconds.</p>


</body>


</html>