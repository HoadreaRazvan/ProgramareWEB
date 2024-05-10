// Importing the Post class from a file named "Post.js" in a directory called "Models".
import { Post } from "./Models/Post.js";

// This class handles fetching posts from an external API and displaying them on the webpage.
export class PostFetcher {

    // Method to fetch a single post by its ID from an external API.
    fetchPost(id) {
        // Fetching a single post using the provided ID from the JSONPlaceholder API.
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((resp) => {
                // Checking if the response is not OK (status code other than 200).
                if (!resp.ok) {
                    // Throwing an error if there's a network issue.
                    throw Error("NETWORK ISSUE");
                }
                // Parsing the response body as JSON.
                return resp.json();
            })
            .then((data) => {
                // Creating a new Post object using the retrieved data.
                return new Post(data);
            })
            .then((post) => {
                // Displaying the fetched post in the "content" element.
                let container = document.getElementById("content");
                this.displayPost(post, container);
            });
    }

    // Method to fetch all posts from an external API.
    fetchPosts() {
        // asta e o operatie asincrona
        //  am consumat un API
        // a = await fetch("https://jsonplaceholder.typicode.com/posts")
        // if a.status

        // Fetching all posts from the JSONPlaceholder API.
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => {
                // Checking if the response is not OK (status code other than 200).
                // resp.status == 200 -> resp.ok
                // resp.status == 404 -> resp.notfound
                // resp.status == 403 -> resp.forbidden

                if (!resp.ok) {
                    // Throwing an error if there's a network issue.
                    throw Error("NETWORK ISSUE");
                }
                // Parsing the response body as JSON.
                return resp.json();
            })
            .then((data) => {
                // Mapping the retrieved data to an array of Post objects.
                return data.map((item) => {
                    return new Post(item);
                });
            })
            .then((posts) => {
                // Displaying the fetched posts.
                this.displayPosts(posts);
            });
    }

    // Method to display a single post on the webpage.
    displayPost(element, output, addButtons = false) {
        // Creating HTML elements to represent the post title and body.
        let article = document.createElement("article");
        article.classList.add("post");

        let title = document.createElement("h2");
        title.textContent = element.title;
        title.classList.add("post-title");

        let text = document.createElement("p");
        text.textContent = element.body;
        text.classList.add("post-body");

        // Appending the title and body elements to the article.
        article.appendChild(title);
        article.appendChild(text);

        // Adding buttons (if specified) for opening the post in a new tab and saving to favorites.
        if (addButtons) {
            let openButton = document.createElement("button");
            openButton.textContent = "Open in new Tab";
            openButton.onclick = function () {
                window.open(`/post.html?post_id=${element.id}`);
            };

            let saveButton = document.createElement("button");
            saveButton.textContent = "Save To Favorites";
            saveButton.addEventListener('click', () => {
                this.saveToFavorites(element);
            });

            // Appending the buttons to the article.
            article.appendChild(openButton);
            article.appendChild(saveButton);
        }

        // Appending the article to the specified output element.
        output.appendChild(article);
    }

    // Method to save a post to favorites in local storage.
    saveToFavorites(post) {
        // Retrieving existing favorite posts from local storage or initializing an empty array.
        let favoritesPosts = JSON.parse(localStorage.getItem('postCollection')) || [];

        // Checking if the post is already in the favorites list.
        let filter = favoritesPosts.filter((p) => {
            return p.id == post.id;
        });

        // If the post is already in favorites, return without adding it again.
        if (filter.length)
            return;

        // Adding the post to the favorites array.
        favoritesPosts.push(post);

        // Saving the updated favorites array to local storage.
        localStorage.setItem('postCollection', JSON.stringify(favoritesPosts));
    }

    // Method to display multiple posts on the webpage.
    displayPosts(posts, buttons = true) {
        // Getting the output element where posts will be displayed.
        let output = document.getElementById("content");
        // Iterating over each post and displaying it.
        posts.forEach(element => {
            this.displayPost(element, output, buttons);
        });
    }
}