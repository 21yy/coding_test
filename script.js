document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog_container");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const postsPerPage = 5;
    fetchPosts();
    function fetchPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            if (posts.length === 0) {
                // Display a alert when no posts are found
                alert("No posts found.");
            }
            else{
                    displayPost(posts);
            }
            
        }).catch(error => console.error("Fetching posts error:", error));
    }
    
    function displayPost(posts){
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const currPosts = posts.slice(start, end);

        blogContainer.innerHTML = "";
        currPosts.forEach(post => {
            const blogCard = document.createElement("div");
            blogCard.className = "blog_card";
            blogCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button class="delete_btn" onclick="deletePost(${post.id})">Delete</button>
            `;
            blogContainer.appendChild(blogCard);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPosts = 100;
        const totalPages = Math.ceil(totalPosts / postsPerPage);

        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            fetchPosts();
        }
    });

    nextButton.addEventListener("click", function () {
        const totalPosts = 100; // Assuming there are 100 posts in total
        const totalPages = Math.ceil(totalPosts / postsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            fetchPosts();
        }
    });
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
