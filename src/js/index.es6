import HttpRequest from "./HttpRequest.js";

(new HttpRequest()).get("https://jsonplaceholder.typicode.com/posts/1", (response) => {
    console.log(response);
});

(new HttpRequest()).post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1
}, (response) => {
    console.log(response);
});

(new HttpRequest()).put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "foo",
    body: "bar",
    userId: 1
}, (response) => {
    console.log(response);
});

(new HttpRequest()).delete("https://jsonplaceholder.typicode.com/posts/1", (response) => {
    console.log(response);
});
