export const postWithoutAuth = (url, data) =>{
    var result = fetch("http://localhost:8080/v1/auth/"+url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
    return result
}