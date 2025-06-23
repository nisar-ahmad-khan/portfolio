import { defineStore } from "pinia";


export const authStore = defineStore('auth',()=>{
    state:()=>({
        signup : {
            userName : "", 
            email  : "",
            
        }
    })
})