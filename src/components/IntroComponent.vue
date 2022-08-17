<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card shaped elevation="12" app>
					<v-carousel hide-delimiters :cycle="cycle" :show-arrows="false" >
					    <v-carousel-item
					      	v-for="(item,i) in items"
					      	:key="i"
					      	:src="item.src"
					    ></v-carousel-item>
					    <v-overlay absolute z-index="1" class="text-center">
					    	<div class="text-md-h1 text-h3">Gene Arthur</div>
					    	<div class="text-md-h2 text-h5">
					    		Web Application Developer
					    	</div>
					    	<div class="text-md-h5 pt-2">Laravel and VueJs</div>
					    </v-overlay>
					</v-carousel>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			items: [
	          {
	            src: '../src/assets/thumbnail/inventory_thumbnail.JPG',
	          },
	          {
	            src: '../src/assets/thumbnail/menuorder_thumbnail.JPG',
	          },
	          {
	            src: '../src/assets/thumbnail/onlineexam_thumbnail.JPG',
	          },
	          {
	            src: '../src/assets/thumbnail/payroll_thumbnail.JPG',
	          },
	        ],
	        cycle: true,
		})
	}
</script>