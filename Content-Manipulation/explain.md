# innerHTML – Read/Modify HTML Content

The ```innerHTML``` property reads or modifies the HTML structure and content inside an element. It also renders HTML tags. When you assign an HTML string, it completely overwrites the internal structure of the element.

**Syntax:**

```javascript
element.innerHTML = 'New HTML content';
let content = element.innerHTML;
```

**Example:**

```html
<div id="box">Hello, <b>World!</b></div>

<script>
    const box = document.getElementById('box');
    console.log(box.innerHTML);  // Output: "Hello, <b>World!</b>"

    // Modify the content
    box.innerHTML = '<p>This is new content!</p>';
</script>
```

**Explanation:**

1. ```innerHTML``` reads the entire HTML content.
2. We assign a new HTML string that overwrites the old content.

## outerHTML – Replace the Element

The ```outerHTML``` property reads the entire HTML structure of the element, including the element itself. When you assign new content to ```outerHTML```, it replaces the entire element.

**Syntax:**

```javascript
element.outerHTML = 'New HTML content';
let content = element.outerHTML;
```

**Example:**

```html
<div id="box">Hello, <b>World!</b></div>

<script>
    const box = document.getElementById('box');
    console.log(box.outerHTML);  // Output: "<div id='box'>Hello, <b>World!</b></div>"

    // Replace the entire element
    box.outerHTML = '<section>Replaced Content</section>';
</script>
```

**Explanation:**

1. ```outerHTML``` reads the full structure of the element (including ```<div>```).
2. When we assign new content, the entire ```<div>``` element gets replaced.

## textContent – Read/Modify Text (HTML Ignored)

The ```textContent``` property reads and modifies only the text inside the element. It ignores HTML tags and manages only plain text.

**Syntax:**

```javascript
element.textContent = 'New text content';
let content = element.textContent;
```

**Example:**

```html
<div id="box">Hello, <b>World!</b></div>

<script>
    const box = document.getElementById('box');
    console.log(box.textContent);  // Output: "Hello, World!"

    // Modify the text
    box.textContent = 'New plain text!';
</script>
```

**Explanation:**

1. ```textContent``` ignores HTML tags and returns only plain text.
2. When we assign new text, no HTML tags are used.

## innerText – Read/Modify Visible Text

The ```innerText``` property reads and modifies visible text. It also considers CSS rules; for instance, if the element is hidden, its text will not be shown in ```innerText```.

**Syntax:**

```javascript
element.innerText = 'New text content';
let content = element.innerText;
```

**Example:**

```html
<div id="box" style="display: none;">Hello, <b>World!</b></div>

<script>
    const box = document.getElementById('box');
    console.log(box.innerText);  // Output: "" (because the element is hidden)

    // Modify the text
    box.innerText = 'Visible Text Now!';
    console.log(box.innerText);  // Output: "Visible Text Now!"
</script>
```

**Explanation:**

1. ```innerText``` takes into account the CSS display property, so hidden text does not show up.
2. We assign new text that becomes visible.

## outerText – Replace with Text Outside the Element

The ```outerText``` property replaces the element with text. It converts the entire element into text content.

**Syntax:**

```javascript
element.outerText = 'New text content';
let content = element.outerText;
```

**Example:**

```html
<div id="box">Hello, <b>World!</b></div>

<script>
    const box = document.getElementById('box');
    console.log(box.outerText);  // Output: "Hello, World!"

    // Replace the entire element with text
    box.outerText = 'Replaced with text!';
</script>
```

**Explanation:**

1. ```outerText``` replaces the entire element with text.
2. The ```<div>``` element is converted directly into text content.
