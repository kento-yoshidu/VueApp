Vue.createApp({
	data: function() {
		return {
			todoTitle: "aaa",
			todoDescription: "bbb",
			todoCategories: [],
			hideDoneTodo: false,
			searchWord: "ccc",
		}
	}
}).mount("#app")