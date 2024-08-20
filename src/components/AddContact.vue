<script>
import Store from "../data/store.js";
export default {
	name: "AddContact",
	data() {
		return {
			Store,
			inputValue: "",
		};
	},
	methods: {
		addNewContact() {
			Store.contacts.push({
				name: this.inputValue,
				avatar: "avatar_1.jpg",
				visible: true,
				messages: [],
			});
			Store.activeView = "Chat";
		},
		viewChat() {
			Store.activeView = "Chat";
		},
		viewSettings() {
			Store.activeView = "Settings";
		},
	},
};
</script>

<template>
	<div class="d-flex flex-column p-3">
		<label for="contact"> Name </label>
		<input v-model="inputValue" type="text" id="contact" />
		<span @click="addNewContact()" class="btn btn-success mt-2">Add</span>
	</div>
	<div id="chatListFooter" class="row m-0">
		<div @click="viewChat()" class="text-center col-4">
			<i class="fa-solid fa-comments"></i>
			<p class="m-0">Chat</p>
		</div>
		<div @click="viewSettings()" class="text-center col-4">
			<i class="fa-solid fa-gears"></i>
			<p class="m-0">Settings</p>
		</div>
		<div class="text-center col-4">
			<i class="fa-solid fa-user-plus"></i>
			<p class="m-0">Add Contact</p>
		</div>
	</div>
</template>

<style scoped>
#chatListFooter {
	height: 50px;
	background-color: lightgray;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
