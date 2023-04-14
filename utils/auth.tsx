const TOKEN_KEY = process.env.LOCAL_STORAGE_TOKEN_KEY || 'authToken'

export const saveAuth =(token:string)=>{
    localStorage.setItem(TOKEN_KEY,token)
}

export const getToken=()=>localStorage.getItem(TOKEN_KEY)

export const deleteAuth =()=>{
    window.location.href = '/'
    localStorage.removeItem(TOKEN_KEY)
}