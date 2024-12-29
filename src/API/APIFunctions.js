import axios from "axios";
import {toast } from "react-toastify";

const API_URL = "http://localhost:3000";


// Function to get all news
async function getAllNews() {
    try {
        const response = await axios.get(`${API_URL}/news`);
        toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error)
    }
}

// Function to create a news
async function createNews(title, description, content) {
    try{
        const response = await axios.post(`${API_URL}/news`, {
            title,
            description,
            content
        });
        toast.success(response.data.message);
    }
    catch(error){
        toast.error(error.response.data.error);
    }
    
}

// Function to edit a news by title
async function editNewsbyTitle(title, description, content) {
    try{
        const response = await axios.put(`${API_URL}/news/${title}`, {
            description : description,
            content : content
        });
        toast.success(response.data.message);
    }
    catch(error){
        toast.error(error.response.data.error);
    }
}

// Function to delete a news by title
async function deleteNewsbyTitle(title) {
    try{
        const response = await axios.delete(`${API_URL}/news/${title}`);
        toast.success(response.data.message);
    }
    catch(error){
        toast.error(error.response.data.error);
    }
}

// Function to delete all news
async function deleteAllNews() {
    try{
        const response = await axios.delete(`${API_URL}/news`);
        toast.success(response.data.message);
    }
    catch(error){
        toast.error(error.response.data.error);
    }
}

export { getAllNews, deleteAllNews, createNews, deleteNewsbyTitle, editNewsbyTitle };