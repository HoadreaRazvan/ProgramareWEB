// Importing the PostFetcher class from "PostFetcher.js" file.
import { PostFetcher } from "./PostFetcher.js";
// Importing the HtmlLoader class from "pageContentLoader.js" file.
import { HtmlLoader } from "./pageContentLoader.js"

// Creating an instance of HtmlLoader class to load menu content.
let htmlLoader = new HtmlLoader();
htmlLoader.loadHtml("/components/menu.html", "menuContent");
// htmlLoader.loadHtml("/components/menu.html", "content"); // Commented out line
