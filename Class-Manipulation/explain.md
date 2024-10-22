# JavaScript DOM Class Manipulation Methods

JavaScript’s class manipulation methods allow you to dynamically modify CSS classes of HTML elements. These methods help add, remove, toggle, or check classes to alter an element’s appearance and behavior dynamically.

## classList.add() – Adding a Class

The ```classList.add()``` method adds one or more classes to an element’s ```class``` attribute. If the class already exists, it won’t be added again.

- **Syntax:**

```javascript
element.classList.add(class1, class2, ...);
```

- ```class1, class2```: These are the class names to be added to the element.
- If the class already exists, no changes are made.

**Example:**

```bash
<div id="box">Hello, World!</div>

<script>
    const box = document.getElementById('box');
    box.classList.add('blue', 'rounded');  // Adds 'blue' and 'rounded' classes
    console.log(box.className);  // Output: "blue rounded"
</script>
```

**Explanation:**

- We targeted the ```box``` div element using ```getElementById()```.
- Added the ```blue``` and ```rounded``` classes using ```classList.add()```.
- Verified the classes with ```console.log()```.

## classList.remove() – Removing a Class

The classList.remove() method removes specified classes from an element. If the class is not present, nothing happens.

**Syntax:**

```javascript
element.classList.remove(class1, class2, ...);
```

**Example:**

```bash
<div id="box" class="blue rounded">Hello!</div>

<script>
    const box = document.getElementById('box');
    box.classList.remove('rounded');  // Removes 'rounded' class
    console.log(box.className);  // Output: "blue"
</script>
```

**Explanation:**

- Initially, the ```box``` div had ```blue``` and ```rounded``` classes.
- We removed the ```rounded``` class using ```classList.remove()```.
- The final output contains only the ```blue``` class.

## classList.toggle() – Toggling a Class

The ```classList.toggle()``` method adds a class if it doesn’t exist and removes it if it does.

- **If present**: Removes the class.
- **If absent**: Adds the class.

You can also pass an optional ```force``` parameter:

- ```true```: Ensures the class is added.
- ```false```: Ensures the class is removed.

**Syntax:**

```javascript
element.classList.toggle(className, [force]);
```

**Example:**

```bash
<div id="box" class="border">Hello!</div>

<script>
    const box = document.getElementById('box');
    box.classList.toggle('border');  // Removes 'border' class
    console.log(box.className);  // Output: ""

    box.classList.toggle('shadow');  // Adds 'shadow' class
    console.log(box.className);  // Output: "shadow"
</script>
```

**Explanation:**

- Initially, the ```border``` class was present, so it was removed.
- Next, the ```shadow``` class was added using ```toggle()```.

## classList.contains() – Checking a Class

The ```classList.contains()``` method checks if a specified class exists in the element. It returns true if the class is present, otherwise false.

**Syntax:**

```javascript
element.classList.contains(className);
```

**Example:**

```bash
<div id="box" class="blue shadow">Hello!</div>

<script>
    const box = document.getElementById('box');
    console.log(box.classList.contains('shadow'));  // Output: true
    console.log(box.classList.contains('border'));  // Output: false
</script>
```

**Explanation:**

- The first ```console.log()``` returns ```true``` because the ```shadow``` class exists.
- The second ```console.log()``` returns ```false``` because the ```border``` class doesn’t exist.

## className – Managing Classes as a String

The ```className``` property returns all the element’s classes as a string. You can also directly modify it, but doing so overwrites all existing classes.

**Syntax:**

```javascript
element.className = "class1 class2 ...";
```

**Example:**

```bash
<div id="box" class="blue">Hello!</div>

<script>
    const box = document.getElementById('box');
    console.log(box.className);  // Output: "blue"

    // Overwrite existing classes
    box.className = "red border";
    console.log(box.className);  // Output: "red border"
</script>
```

**Explanation:**

- Initially, the ```box``` element had the ```blue``` class.
- We used ```className``` to replace the existing class with ```"red border"```.
- Verified the new classes with ```console.log()```.
