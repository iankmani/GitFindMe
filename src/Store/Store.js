import create from 'zustand'

 const useStore = create((set) => ({
    username: null,
    repositories: [],
    followers: [],
    following: [],

    setUsername: (username) => 
        set({username}),
    setRepositories: (repositories) => 
        set({repositories}),
    setFollowers: (followers) => 
        set({followers}),
    setFollowing: (following) => 
        set({following}),

 }));
 export default useStore;