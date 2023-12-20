const { createApp } = Vue;

createApp({
    data() {
        return {
            e_mails: [],
        };
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
                this.e_mails.push(response.data.response);
            })
        }
    },
}).mount("#app");
