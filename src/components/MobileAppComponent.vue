<template>
	<v-container>
			<v-row>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" class="mobile-thumbnail-size" shaped>
						<v-img contain alt="mobile calc" src="../src/assets/images/android_app/calculator.png"></v-img>
						<v-card-subtitle>Simple Calculator</v-card-subtitle>
					</v-card>
				</v-col>
				<v-col md="6" cols="12" class="d-flex">
					<v-card elevation="12" class="mobile-thumbnail-size" shaped>
						<v-img contain alt="mobile dice" src="../src/assets/images/android_app/roll_dice_start.png"></v-img>
						<v-card-subtitle>Roll a Dice</v-card-subtitle>
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