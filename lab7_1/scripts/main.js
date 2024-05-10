// Importing the PostFetcher class from "PostFetcher.js" file.
import { PostFetcher } from "./PostFetcher.js";
// Importing the HtmlLoader class from "pageContentLoader.js" file.
import { HtmlLoader } from "./pageContentLoader.js"

// Creating an instance of HtmlLoader class to load menu content.
let htmlLoader = new HtmlLoader();
htmlLoader.loadHtml("/components/menu.html", "menuContent");
// htmlLoader.loadHtml("/components/menu.html", "content"); // Commented out line

// Creating an instance of PostFetcher class.
let fetcher = new PostFetcher();

// Checking if the current page is "page2.html".
if (window.location.pathname == "/page2.html") {
    // If so, retrieve favorite posts from local storage.
    let posts = JSON.parse(localStorage.getItem("postCollection"));
    // Display the favorite posts without buttons.
    fetcher.displayPosts(posts, false);
} else {
    // If not, fetch and display all posts from the external API.
    fetcher.fetchPosts();
}


// pt serverelere care accepta asa se scriu date
// fetch("https://jsonplaceholder.typicode.com/posts",
// {
//     method:"POST",
//   body:{ datele tarle}  .
// })

