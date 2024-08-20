<script>
import Store from "../data/store.js";
import Chat from "./Chat.vue";
import SingleChat from "./SingleChat.vue";
import Settings from "./Settings.vue";
import AddContact from "./AddContact.vue";
export default {
	name: "ContainerApp",
	components: {
		Chat,
		SingleChat,
		Settings,
		AddContact,
	},
	data() {
		return {
			Store,
		};
	},
};
</script>

<template>
	<div id="containerApp">
		<Chat v-if="Store.activeView === 'Chat'" />
		<SingleChat v-if="Store.activeView === 'SingleChat'" />
		<Settings v-if="Store.activeView === 'Settings'" />
		<AddContact v-if="Store.activeView === 'AddContact'" />
	</div>
</template>

<style scoped>
#containerApp {
	height: 680px;
	width: 380px;
	background-color: white;
	border: 10px solid black;
	border-radius: 20px;
	position: relative;
}
</style>
