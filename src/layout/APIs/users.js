import axios from "axios";

export const postUser = async(user) => {
    const { data } = await axios.post('https://event-management-server-nu.vercel.app/users' , user)
    return data;
}

export const getAllUsers = async() => {
    const { data } = await axios.get("https://event-management-server-nu.vercel.app/getusers")
    return data;
}

export const changeRole = async (userEmail, role) => {
    const userRole={role}
    const { data } = await axios.patch(`https://event-management-server-nu.vercel.app/changeRole/${userEmail}` , userRole)
    return data;
}
export const changePrem = async (userEmail, role) => {
    const userRole={role}
    const { data } = await axios.patch(`https://event-management-server-nu.vercel.app/changePrem/${userEmail}` , userRole)
    return data;
}

export const deleteUserContactReq= async (id) => {
    const { data } = await axios.delete(`https://event-management-server-nu.vercel.app/deleteUserContactReq/${id}`)
    return data;
}

export const addBiodata = async(biodata) => {
    const { data } = await axios.put('https://event-management-server-nu.vercel.app/addBiodata' , biodata)
    return data;
}

export const getAllBiodatas = async() => {
    const { data } = await axios('https://event-management-server-nu.vercel.app/events')
    return data;
}

export const deleteEvent= async (id) => {
    const { data } = await axios.delete(`https://event-management-server-nu.vercel.app/deleteEvent/${id}`)
    return data;
}
export const deleteUserEvent= async (id) => {
    const { data } = await axios.delete(`https://event-management-server-nu.vercel.app/deleteUserEvent/${id}`)
    return data;
}

export const bookedEvent = async(booked) => {
    const { data } = await axios.post('https://event-management-server-nu.vercel.app/bookedEvent' , booked)
    return data;
}
export const addfav = async(fav) => {
    const { data } = await axios.post('https://event-management-server-nu.vercel.app/fav' , fav)
    return data;
}
export const isfav = async(userEmail, id) => {
    const { data } = await axios.post(`https://event-management-server-nu.vercel.app/isfav/${userEmail}` , id)
    return data;
}
export const getUserbookedEvents = async(userEmail) => {
    const { data } = await axios.get(`https://event-management-server-nu.vercel.app/userBooked/${userEmail}`)
    return data;
}
export const getFavEvents = async(userEmail) => {
    const { data } = await axios.get(`https://event-management-server-nu.vercel.app/userFav/${userEmail}`)
    return data;
}

export const getSingleUser = async(userEmail) => {
    const { data } = await axios.get(`https://event-management-server-nu.vercel.app/user/${userEmail}`)
    return data;
}

export const updateEvent = async(id, event) => {
    const { data } = await axios.patch (`https://event-management-server-nu.vercel.app/updateEvent/${id}` , event)
    return data;
}
