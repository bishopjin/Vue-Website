<template>
	<div>
		<v-container>
			<v-row>
				<v-col md="4" cols="12">
					<div class="position-absolute d-none d-md-flex">
						<div class="text-center">
							<v-avatar rounded="50" size="130" color="black">
								<v-img alt="me" contain src="./src/assets/images/meImage.jpg"></v-img>
							</v-avatar>
							<PersonalInfoComponent/>
						</div>
					</div>
					<!-- mobile view -->
					<div class="d-flex d-md-none">
						<v-bottom-sheet v-model="sheet" persistent>
							<template v-slot:activator="{ on, attrs }">
								<v-btn outlined color="success" rounded v-bind="attrs" v-on="on">
									<v-avatar rounded="50" size="30" class="me-2">
										<v-img alt="me" contain src="./src/assets/images/meImage.jpg"></v-img>
									</v-avatar> 
									View Profile
								</v-btn>
							</template>
							<v-sheet>
								<v-container>
									<v-row>
										<v-col>
											<v-btn @click="sheet = !sheet" fixed right plain text link class="me-n5 mt-n2">
												<v-icon>mdi-close</v-icon>
											</v-btn>
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12" class="text-center">
											<v-avatar rounded="50" size="100" color="black">
												<v-img alt="me" contain src=""></v-img>
											</v-avatar>
										
											<PersonalInfoComponent/>
										</v-col>
									</v-row>
								</v-container>
							</v-sheet>
						</v-bottom-sheet>
					</div>
				</v-col>
				<v-col md="8" cols="12">
					<v-card elevation="12" shaped>
						
						<v-expansion-panels mandatory accordion>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Summary
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list dense class="text-md-subtitle-2 text-subtitle-2">
										<v-list-item>
											<v-list-item-content>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Nullam at vestibulum risus, in convallis mauris. In tincidunt est purus, 
												finibus dictum dolor laoreet eu. Fusce imperdiet quam id tempor sagittis. 
												Integer elementum sem ut auctor congue. Etiam mattis cursus nunc, ut mattis 
												tellus blandit auctor. Etiam aliquet ligula ut luctus tincidunt. Aenean eu 
												congue tellus. Suspendisse eleifend metus nec libero vehicula, et vehicula ante 
												placerat. Cras pellentesque purus in sagittis fringilla. Phasellus in turpis vitae 
												lectus fermentum porta. Sed interdum lobortis vulputate.
											</v-list-item-content>
										</v-list-item>
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Skills
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list dense class="text-md-subtitle-2 text-subtitle-2">
										<v-list-item>
											<v-list-item-content>
												Skills here
											</v-list-item-content>
										</v-list-item>
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header class="font-weight-bold">
									Interest
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-list dense class="text-md-subtitle-2 text-subtitle-2">
										<v-list-item>
											<v-list-item-content>
												Interest here
											</v-list-item-content>
										</v-list-item>
									</v-list>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import PersonalInfoComponent from '../components/PersonalInfoComponent.vue'
	export default {
		data: () => ({
			sheet: false,
		}),
		components: {
			PersonalInfoComponent,
		},
		computed: {
			getDarkModeState() {
				return this.$store.state.darkmode.darkMode
			}
		}
	}
</script>
