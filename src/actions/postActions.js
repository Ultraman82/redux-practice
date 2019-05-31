import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("fetching");
  //  return function(dispatch) {};
  fetch("http://127.0.0.1:5000/items")
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts["items"]
      });
      console.log("posts from postAction:", posts.items);
    });
};

export const createPost = post => dispatch => {
  console.log(`post from createPost:${post}`);
  fetch(`http://127.0.0.1:5000/item/${post.name}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: NEW_POST,
        payload: posts
      })
    );
};
