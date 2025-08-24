Event Propagation -  determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

Reactions to the triggers. user ----> browser ---> events & event handler.

```
<button onclick="alert('Hello World!')">Greet</button>


<button id="greetBtn">Greet</button>

<script>
  document.getElementById("greetBtn").addEventListener("click", function () {
    alert("Hello World!");
  });
</script>
```

The full sequence when an event occurs is:
```
Capturing Phase: Window → Document → … → Parent of target
Target Phase: On the target element itself
Bubbling Phase: Target → Parent → … → Window
```
## 📌 Visual Representation
```
Capturing:   document → html → body → div → button  (↓)
Target:                                   [button clicked]
Bubbling:    document ← html ← body ← div ← button  (↑)
```
## Bubbling 
<form id="myForm">
  <input type="text" placeholder="Name">
  <button type="submit">Submit</button>
  <button type="button" id="cancelBtn">Cancel</button>
</form>

document.getElementById("cancelBtn").addEventListener("click", function (e) {
  alert("Cancel clicked");
});

##capturing
<div id="restricted-section">
  <button>Delete All Data</button>
</div>
const restrictedSection = document.getElementById("restricted-section");

let isLocked = true; // Simulate restricted state

document.addEventListener(
  "click",
  function (event) {
    if (isLocked && restrictedSection.contains(event.target)) {
      alert("🔒 Action blocked: Section is locked");
      event.stopPropagation(); // stop bubbling
      event.preventDefault();  // stop default action (like link clicks)
    }
  },
  true // <-- Capture phase!
);
If your listener is attached during the capturing phase (with addEventListener(type, handler, true)), calling stopPropagation() will prevent the event from continuing down the DOM tree to the target.

If your listener is attached during the bubbling phase (the default, with addEventListener(type, handler)), calling stopPropagation() will prevent the event from continuing up the DOM tree to ancestors.

```
<form id="myForm">
  <input type="text" id="name" required>
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      event.preventDefault(); // Stop form submission
      alert('Name is required!');
    }
  });
</script>
Prevents browser's default action
```


