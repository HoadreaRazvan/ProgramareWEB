// Define a class named Post, representing a post object.
export class Post {
    // Constructor function to initialize a new Post object.
    constructor(obj) {
        // Assigning the 'id' property of the object passed to the constructor to the 'id' property of the Post object.
        this.id = obj.id;
        // Assigning the 'title' property of the object passed to the constructor to the 'title' property of the Post object.
        this.title = obj.title;
        // Assigning the 'body' property of the object passed to the constructor to the 'body' property of the Post object.
        this.body = obj.body;
    }
}
