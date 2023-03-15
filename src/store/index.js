import { defineStore } from "pinia";


export const mainStore = defineStore('main',{
    state:() => {
        return{
            sayMsg:'hi pinia',
            count:1,
            phone:'13401009991',
        }
    },

    getters:{
        setPhone(){
            return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')
        }
    },

    actions:{
        setSattte(){
            this.sayMsg= 'goer',
            this.count += 2
        } 
    },
    
})