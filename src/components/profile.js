import Vue from 'vue'

export default Vue.component('Profile', {
	data: () => ({
        name: 'Yoda'
    }),
	template: `
        <div class="profile">
            <h1>Hellow {{ name }}</h1>
        </div>
    `
})