document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog_container");
            if (posts.length === 0) {
                // Display a alert when no posts are found
                alert("No posts found.");
            }
            else{
                    posts.forEach(post => {
                        const blogCard = document.createElement("div");
                        blogCard.className = "blog_card";
                        blogCard.innerHTML = `
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                            <button class="delete_btn" onclick="deletePost(${post.id})">Delete</button>
                        `;
                    blogContainer.appendChild(blogCard);
                });
            }
            
        })
        .catch(error => console.error("Fetching posts error:", error));
    });

    function deletePost(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                alert("Post deleted successfully!");
                location.reload(); // Reload the page to reflect the changes
            } else {
                throw new Error("Failed to delete post");
            }
        })
        .catch(error => console.error("Deleting post error:", error));
    }