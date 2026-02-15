How it works:

1. We select all the buttons and content elements and store them in the `ui` object.

2. We loop through each button and add a click event listener to it.

3. When a button is clicked, we get the value of its `data-tab` attribute, which corresponds to the content we want to show.

4. We remove the "active" class from all buttons and content elements to hide them.

5. We add the "active" class to the clicked button to highlight it.

6. We select the content element that has the same `data-tab` value as the clicked button and add the "active" class to it, making it visible.

