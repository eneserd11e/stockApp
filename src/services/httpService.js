export const postWithoutAuth = (data) =>{
    var result = fetch("http://localhost:8080/v1/auth/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
    return result
}