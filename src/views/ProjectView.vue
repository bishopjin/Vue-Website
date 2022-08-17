<template>
	<div>
		<v-container>
			<v-row>
				<v-col>
					<ProjectComponent v-for="(item, i) in data" :key="i" :card-title="item.name" :card-iD="item.idLabel" 
						:card-image-url="item.imageUrl" :card-text="item.text" :card-url="item.url" :ss-array="item.imgArr"/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import ProjectComponent from '../components/ProjectComponent.vue'

	export default {
		data: () => ({
			data: [
				{
					name: 'Inventory',
					idLabel: '#inventory',
					imageUrl: '../src/assets/thumbnail/inventory_thumbnail.JPG',
					url: 'https://laravelwebapp.genesedan.com/',
					text: `Monitor the stock of product from your storage, add new item, order and add stock to the inventory. 
							Monitor employee login and logout, serve also as daily time recorder.
							Edit user access from non-admin to admin access and enable/disable user access to the system.`,
					imgArr: [
						{ src: '../src/assets/images/inventory/inventory-dashboard.png' }, 
						{ src: '../src/assets/images/inventory/inventory-add-new-product.JPG' },
						{ src: '../src/assets/images/inventory/inventory-delivery.JPG' },
						{ src: '../src/assets/images/inventory/inventory-employee-change-access.JPG' },
						{ src: '../src/assets/images/inventory/inventory-employee-edit.JPG' },
						{ src: '../src/assets/images/inventory/inventory-employee-log.JPG' },
						{ src: '../src/assets/images/inventory/inventory-item-request.JPG' },
						{ src: '../src/assets/images/inventory/inventory-login.JPG' },
						{ src: '../src/assets/images/inventory/inventory-register.JPG' },
					],
				},
				{
					name: 'Simple Menu Ordering',
					idLabel: '#menuorder',
					imageUrl: '../src/assets/thumbnail/menuorder_thumbnail.JPG',
					url: 'https://laravelwebapp.genesedan.com/',
					text: `Simple online menu ordering, where user can select an item from the menu, 
						set the quantity of the order and input the coupon code for discount. The system also 
						apply tax for the total amount of order. A summary of order will be displayed after placing 
						the order and recorded upon confirmation. Summary of all the order made are also displayed, where the user can see all his previous order.`,
					imgArr: [
						{ src: '../src/assets/images/menuorder/menu-ordering-index.png' }, 
						{ src: '../src/assets/images/menuorder/menu-ordering-login.JPG' },
						{ src: '../src/assets/images/menuorder/menu-ordering-order-details.JPG' },
						{ src: '../src/assets/images/menuorder/menu-ordering-order-summary.JPG' },
						{ src: '../src/assets/images/menuorder/menu-ordering-register.JPG' },
					],
				},
				{
					name: 'Online Examination',
					idLabel: '#onlineexam',
					imageUrl: '../src/assets/thumbnail/onlineexam_thumbnail.JPG',
					url: 'https://laravelwebapp.genesedan.com/',
					text: `Create an online examination for the student. Faculty can create an examination 
						form based on subject and generate an examination code. This code will serve as an 
						access for the student to take the examination. Correct answer to the question is encrypted 
						before storing it in the database, so only the user created the exam knows the correct answer.`,
					imgArr: [
						{ src: '../src/assets/images/onlineexam/online-exam-admin-add-course.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-dashboard.png' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-edit-profile.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-faculty-add-new-subject.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-faculty-create-exam-form.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-faculty-dashboard.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-faculty-exam-form-generated.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-faculty-exam-form-preview.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-login.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-register.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-student-dashboard.JPG' }, 
						{ src: '../src/assets/images/onlineexam/online-exam-student-examination.JPG' }, 
					],
				},
				{
					name: 'Payroll',
					idLabel: '#payroll',
					imageUrl: '../src/assets/thumbnail/payroll_thumbnail.JPG',
					url: 'https://laravelwebapp.genesedan.com/',
					text: `Simple payroll system with maintenance page and daily time recorder, etc.`,
					imgArr: [
						{ src: '../src/assets/images/payroll/add_dashboard_item.JPG' }, 
						{ src: '../src/assets/images/payroll/admin_dashboard.JPG' },
						{ src: '../src/assets/images/payroll/dtr.JPG' },
						{ src: '../src/assets/images/payroll/edit_dashboard_item.JPG' },
						{ src: '../src/assets/images/payroll/none_admin_dashboard.JPG' },
						{ src: '../src/assets/images/payroll/registration.JPG' },
					],
				},
				{
					name: 'Thesis',
					idLabel: '#thesis',
					imageUrl: '../src/assets/thumbnail/thesisweb.JPG',
					url: 'https://thesiswebapp.genesedan.com/',
					text: `Web application that we used for our college thesis. Function, gather data related to student 
						soft and technical skills through assessment. Provide graphical (chart) representation of the result.`,
					imgArr: [
						{ src: '../src/assets/images/thesiswebapp/admin.JPG' }, 
						{ src: '../src/assets/images/thesiswebapp/login.JPG' },
						{ src: '../src/assets/images/thesiswebapp/register.JPG' },
						{ src: '../src/assets/images/thesiswebapp/student.JPG' },
						{ src: '../src/assets/images/thesiswebapp/thesisweb.JPG' },
					],
				},
			], 
		}),
		components: {
			ProjectComponent,
		}
	}
</script>