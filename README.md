# Dynamic Blog Cards with API Integration

## Task 1 Blog Cards

### Fetch and Display Blog Cards

1. The `fetch` API is used to retrieve blog post data from the JSONPlaceholder API.
2. For each post, a new HTML element is dynamically created, representing a blog card with a title, body, and a delete button.
3. The delete button is associated with a `deletePost` function, passing the post ID as a parameter.

### Delete Functionality

- The `deletePost` function handles the deletion of a post. It sends a DELETE request to the JSONPlaceholder API, targeting the specific post ID.
- Upon successful deletion, an alert is displayed, and the page is reloaded to reflect the changes.

### HTML Structure

- The HTML document contains a container element with a specific ID, acting as a placeholder for the dynamically created blog cards.

## Task 2 Sum of All Positive Integers

### My approach
-Using a for loop to iterate through this array. When the current element is positve, add to `sum`.

### Optimizations
- If the input array is very large and has many negative interger. Sorting it in descending order, then add elements to `sum` until 0 in a loop .
- If the input array just very large. Using parallel streams to improve the performance.# coding_test
