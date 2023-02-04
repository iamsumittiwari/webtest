const axiosdata = JSON.stringify({
  query: `query user {
   user(username: "biomathcode") {
    name
  	photo
    numPosts
    publicationDomain
    isEvangelist
    socialMedia {
      github
      website
    }
    publication{
      posts(page: 1){
        type
        coverImage
        numUniqueUsersWhoReacted
        slug
        title
        brief
        contentMarkdown
        
      }
    }
    numPosts
    blogHandle
    socialMedia {
      twitter
      linkedin
      github
    }
  }
}`,
  variables: {},
});

var config = {
  method: "post",
  url: "https://api.hashnode.com/",
  headers: {
    Authorization: "80458ae0-c222-4f7d-80f1-cb1da6e1f678",
    "Content-Type": "application/json",
  },
  data: axiosdata,
};

export { config };