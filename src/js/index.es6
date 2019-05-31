import Request from "./Request.js";

(new Request()).get("https://jsonplaceholder.typicode.com/posts/1", (response) => {
    console.log(response);
});

(new Request()).post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1
}, (response) => {
    console.log(response);
});

(new Request()).put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "foo",
    body: "bar",
    userId: 1
}, (response) => {
    console.log(response);
});

(new Request()).delete("https://jsonplaceholder.typicode.com/posts/1", (response) => {
    console.log(response);
});