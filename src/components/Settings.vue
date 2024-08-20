<script>
import Store from "../data/store.js";
export default {
	name: "Settings",
	data() {
		return {
			Store,
		};
	},
	methods: {
		viewChat() {
			Store.activeView = "Chat";
		},
		viewNewContact() {
			Store.activeView = "AddContact";
		},
	},
};
</script>

<template>
	<div>Impostazioni</div>
	<div id="chatListFooter" class="row m-0">
		<div @click="viewChat()" class="text-center col-4">
			<i class="fa-solid fa-comments"></i>
			<p class="m-0">Chat</p>
		</div>
		<div class="text-center col-4">
			<i class="fa-solid fa-gears"></i>
			<p class="m-0">Settings</p>
		</div>
		<div @click="viewNewContact()" class="text-center col-4">
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
