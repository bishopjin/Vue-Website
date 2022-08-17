<template>
	<div>
		<v-tabs>
			<v-tab @click="introClick">
				<span class="d-md-flex d-none">Intro</span>
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-icon class="d-md-none d-flex" v-bind="attrs" v-on="on">mdi-domain</v-icon>
					</template>
					<span>Intro</span>
				</v-tooltip>
			</v-tab>
			<v-tab @click="webappClick">
				<span class="d-md-flex d-none">Web Application</span>
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-icon class="d-md-none d-flex" v-bind="attrs" v-on="on">mdi-web</v-icon>
					</template>
					<span>Web App</span>
				</v-tooltip>
			</v-tab>
			<v-tab @click="mobileClick">
				<span class="d-md-flex d-none">Simple Mobile App</span>
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-icon class="d-md-none d-flex" v-bind="attrs" v-on="on">mdi-tablet-cellphone</v-icon>
					</template>
					<span>Simple Mobile App</span>
				</v-tooltip>
			</v-tab>
		</v-tabs>
		<v-spacer></v-spacer>
		<WebAppComponent v-if="webApp"/>
		<IntroComponent v-if="intro"/>
		<MobileAppComponent v-if="mobile"/>
	</div>
</template>

<script>
	import IntroComponent from '../components/IntroComponent.vue'
	import WebAppComponent from '../components/WebAppComponent.vue'
	import MobileAppComponent from '../components/MobileAppComponent.vue'

	export default {
		data: () => ({
			intro: true,
			webApp: false,
			mobile: false,
		}),
		components: {
			WebAppComponent,
			IntroComponent,
			MobileAppComponent
		},
		methods: {
			introClick() {
				this.intro = true
				this.webApp = false
				this.mobile = false
			},
			webappClick() {
				this.intro = false
				this.webApp = true
				this.mobile = false
			},
			mobileClick() {
				this.intro = false
				this.webApp = false
				this.mobile = true
			}
		}
	}
</script>
