const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const containerEl = document.querySelector(".container")

/**
 * Generates the HTML string for a single post
 * @param {object} postData - An object from the posts array
 * @returns {string} The complete HTML string for the post section
 */
function getPostHtml(postData) {
    // The path starts with './' to correctly resolve the relative path from index.html
    return `
        <section>
            <div class="post-header">
                <img src="./${postData.avatar}" class="user-img">
                <div>
                    <p class="bold">${postData.name}</p> 
                    <p>${postData.location}</p>
                </div>
            </div>
            
            <div>
                <img src="./${postData.post}" alt="Post image for ${postData.name}" class="post-img">
            </div>

            <div class="interaction">
                <img src="./images/icon-heart.png">
                <img src="./images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>

            <div class="comments">
                <p class="bold bigger">${postData.likes} likes</p>
                <p><span class="bold">${postData.username}</span> ${postData.comment}</p>
            </div>
        </section>
    `
}

// 1. Join the array into one single HTML string
// 2. Set the innerHTML of the container to render all posts

let dynamicPosts = ''

for (let i = 0; i < posts.length; i++) {
    dynamicPosts += getPostHtml(posts[i])
}

containerEl.innerHTML = dynamicPosts

