<template>
	<v-container>
			<v-row>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" shaped>
						<v-img contain alt="inventory" src="../src/assets/thumbnail/inventory_thumbnail.JPG"></v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Inventory (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn to="/project#inventory" right absolute plain text>Details</v-btn>
							</v-card-actions>
						</v-responsive>
					</v-card>
				</v-col>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" shaped>
						<v-img contain alt="menu ordering" src="../src/assets/thumbnail/menuorder_thumbnail.JPG"></v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Menu Ordering (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn to="/project#menuorder" right absolute plain text>Details</v-btn>
							</v-card-actions>
						</v-responsive>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" shaped>
						<v-img contain alt="onlineexam" src="../src/assets/thumbnail/onlineexam_thumbnail.JPG"></v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Online Examination (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn to="/project#onlineexam" right absolute plain text>Details</v-btn>
							</v-card-actions>
						</v-responsive>					
					</v-card>
				</v-col>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" shaped>
						<v-img contain alt="payroll" src="../src/assets/thumbnail/payroll_thumbnail.JPG"></v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Payroll (Laravel)</v-card-subtitle>
							<v-card-actions>
								<v-btn to="/project#payroll" right absolute plain text>Details</v-btn>
							</v-card-actions>
						</v-responsive>		
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" shaped>
						<v-img contain alt="payroll" src="../src/assets/thumbnail/thesisweb.JPG"></v-img>
						<v-responsive content-class="d-flex">
							<v-card-subtitle class="font-weight-bold">Thesis (PHP)</v-card-subtitle>
							<v-card-actions>
								<v-btn to="/project#thesis" right absolute plain text>Details</v-btn>
							</v-card-actions>
						</v-responsive>	
					</v-card>
				</v-col>
			</v-row>
		</v-container>
</template>

<script>
	export default {
		data: () => ({

		}),
	}
</script>