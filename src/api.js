import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
});

// For Username

export const fetchUser = async (username) => {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
}
//for repositories

export const fetchRepositories = async (username) =>{
    const response = await githubApi.get(`/users/${username}/repos`)
    return response.data;
}
//for followers

export const fetchFollowers = async (username) => {
    const response = await githubApi.get(`/users/${username}/followers`);
    return response.data;
}
//for following

export const fetchFollowing = async (username) => {
    const response = await githubApi.get(`/users/${username}/following`)
    return response.data;
}