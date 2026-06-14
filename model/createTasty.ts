export const creaateTasty=(title:string,url:string,location:string,address:string)=>{
    return{
        title,
        url,
        location,
        address,
        id: new Date().toString()+Math.random().toString()
    }
}