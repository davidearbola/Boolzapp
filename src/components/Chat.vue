<script>
import Store from "../data/store.js";
export default {
	name: "ChatList",
	data() {
		return {
			Store,
			contactSearch: false,
			inputSearchValue: "",
		};
	},
	methods: {
		getImg(path) {
			let risultato = new URL(`../assets/img/${path}`, import.meta.url);
			return risultato.href;
		},
		getLastMsg(array) {
			return array.length - 1;
		},
		singleChat(i) {
			Store.activeView = "SingleChat";
			Store.activeContact = i;
		},
		searchContact() {
			for (let index = 0; index < Store.contacts.length; index++) {
				const element = Store.contacts[index];
				element.visible = false;
				this.contactSearch = element.name.toLowerCase().includes(this.inputSearchValue.toLowerCase());
				if (this.contactSearch) {
					element.visible = true;
				}
			}
		},
		viewSettings() {
			Store.activeView = "Settings";
		},
		viewNewContact() {
			Store.activeView = "AddContact";
		},
	},
};
</script>

<template>
	<div id="chatListHeader">
		<h4>Chat</h4>
		<input v-model="inputSearchValue" @input="searchContact()" type="text" />
	</div>
	<div id="chatListBody" class="my_bar">
		<template v-for="(contact, i) in Store.contacts">
			<div v-if="contact.visible" @click="singleChat(i)" class="d-flex justify-content-between py-3 px-2 border">
				<div class="d-flex">
					<div>
						<img class="contact_img" :src="getImg(contact.avatar)" />
					</div>
					<div class="ms-2">
						<h5 class="m-0">{{ contact.name }}</h5>
						<p v-if="contact.messages.length > 0" class="m-0 text_small">{{ contact.messages[getLastMsg(contact.messages)].message }}</p>
					</div>
				</div>
				<div v-if="contact.messages.length > 0">
					<span class="text_small"
						>{{ contact.messages[getLastMsg(contact.messages)].date }} {{ contact.messages[getLastMsg(contact.messages)].hour }}</span
					>
				</div>
			</div>
		</template>
	</div>
	<div id="chatListFooter" class="row m-0">
		<div class="text-center col-4">
			<i class="fa-solid fa-comments"></i>
			<p class="m-0">Chat</p>
		</div>
		<div @click="viewSettings()" class="text-center col-4">
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
#chatListHeader {
	height: 80px;
	padding: 0 0.7rem;
}

#chatListBody {
	height: calc(100% - 130px);
	border-top: 1px solid lightgrey;
	overflow: scroll;
}

#chatListFooter {
	height: 50px;
	background-color: lightgray;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}

.contact_img {
	width: 3rem;
	aspect-ratio: 1;
	border-radius: 100%;
}

.text_small {
	color: lightgray;
	font-size: 10px;
}
</style>
