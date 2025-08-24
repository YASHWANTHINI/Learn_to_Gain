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

## event Loop
What is the Event Loop (in short)?

The event loop is what makes JavaScript asynchronous. It processes:

Call stack: runs your synchronous code line by line

Web APIs: like DOM events, timers, etc.

Callback queue: for events like blur, click, submit

Event loop: pulls from the queue when the stack is empty

🧪 Your Form Example — Event Loop in Action

Let’s walk through what happens when a user interacts with your form, step-by-step:

🔹 1. User focuses and blurs a field (blur event)
Example:

User clicks on the “Full Name” field, types text, then clicks into “Email”.

What happens:

Blur event triggers for Full Name.

JS engine places the blur handler (the function you attached) in the callback queue.

If the call stack is empty, the event loop pulls that handler and executes it.

The handler runs:

It gets the input value.

If invalid, it shows an alert() — which blocks everything temporarily until dismissed.

After alert, the stack clears and event loop continues.

🔹 2. User clicks “Submit”
Example:

User fills in form (or doesn’t) and clicks “Register”.

What happens:

The submit event is triggered.

The form's submit handler is added to the callback queue.

If the call stack is empty, the event loop picks it up.

The handler runs:

e.preventDefault() prevents actual form submission.

All validations (if coded) are triggered again.

If valid, form data is logged or submitted.

If any alert() calls happen in the middle, they pause the stack (alerts are synchronous).

🔁 Summary of Event Loop Flow
User Interaction (e.g., blur or submit)
↓
Browser detects event
↓
Places event handler in Callback Queue
↓
Event Loop checks if Call Stack is empty
↓
If empty → Moves handler from queue to stack
↓
Handler runs (e.g., validation, alert)
↓
If alert → JS is paused until user closes it
↓
Stack clears → Event Loop continues

🧪 Real Example (Blur on “Full Name”)
form.fullName.addEventListener('blur', () => {
  const val = form.fullName.value.trim();
  if (!val) alert('Full Name is required.');
});


Execution:

User blurs the field.

blur → Web API registers it.

Callback goes into queue.

Event loop executes the callback → JS engine runs the function.

If invalid, alert() runs and blocks everything.

Once alert is dismissed, the engine returns control to the event loop.

⚠️ Note on alert() Blocking

When an alert() is shown, nothing else runs — it freezes:

DOM updates are paused.

Other events wait in the queue.

It’s synchronous and blocks the event loop.

✅ Conclusion

Your form’s event-driven interactions go through this typical loop:

User input → Event triggers → Handler runs → UI feedback

The event loop coordinates everything behind the scenes.

alert() blocks the loop temporarily — but that’s okay for basic validation UX.
