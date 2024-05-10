// Importing the PostFetcher class from "PostFetcher.js" file.
import { PostFetcher } from "./PostFetcher.js";
// Importing the HtmlLoader class from "pageContentLoader.js" file.
import { HtmlLoader } from "./pageContentLoader.js";

// Parsing URL parameters to get the "post_id" value.
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("post_id");
console.log(id);

// If no "post_id" is provided in the URL, redirect to the index.html page.
if (!id) {
    window.location = "index.html";
}

// Creating an instance of HtmlLoader class to load menu content.
let htmlLoader = new HtmlLoader();
htmlLoader.loadHtml("/components/menu.html", "menuContent");

// Creating an instance of PostFetcher class to fetch and display the post with the specified ID.
let fetch = new PostFetcher();
fetch.fetchPost(id);
