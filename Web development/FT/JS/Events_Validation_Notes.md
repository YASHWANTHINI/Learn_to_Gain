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
