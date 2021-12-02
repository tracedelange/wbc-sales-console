import { baseURL } from "./globals";

export const submitSignup = async (signupObject) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = signupObject
    const response = await fetch(`${baseURL}/signup`, { method: method, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()
    return data
}

export const submitLogin = async (loginObject) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = loginObject
    const response = await fetch(`${baseURL}/login`, { method: method, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()
    return data
}

export const getUserInfo = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/me`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}


export const submitReport = async (file, distributorID) => {
    let token = localStorage.getItem('jwt')
    const method = "POST"
    const body = file
    const headers = { "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/reports?distributer_id=${distributorID}`, { method: method, headers: headers, body: body })
    const data = await response.json()
    return data
}


export const getProducts = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/products`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}

export const createNewProduct = async (productName) => {
    let token = localStorage.getItem('jwt')
    const method = "POST"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/products?product_name=${productName}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}


export const getSpecificProduct = async (id) => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/products/${id}`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}
export const getDistributors = async () => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/distributers`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}

export const getSpecificDistributor = async (id) => {
    let token = localStorage.getItem('jwt')
    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/distributers/${id}`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}

export const updateDistributerProduct = async (id, product_id) => {
    let token = localStorage.getItem('jwt')
    const method = "PATCH"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    const response = await fetch(`${baseURL}/distributer_products/${id}?product_id=${product_id}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}

