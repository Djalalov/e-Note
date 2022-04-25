import * as api from "../api";

// Action Creators

export const getPosts = () => async dispatch => {
	try {
		/* 1-destructuring the coming data 
      2- payload was originalyly equal to [] 
      now its assigned to coming data
    */
		const { data } = await api.fetchPosts();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = post => async dispatch => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};
