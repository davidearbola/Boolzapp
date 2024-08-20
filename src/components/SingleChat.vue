<script>
import Store from "../data/store.js";
export default {
	name: "SingleChat",
	data() {
		return {
			Store,
			msg: "",
			popupDisplay: "d-none",
			activeMsg: null,
		};
	},
	methods: {
		getImg(path) {
			let risultato = new URL(`../assets/img/${path}`, import.meta.url);
			return risultato.href;
		},
		getHour() {
			const now = new Date();
			const hours = String(now.getHours()).padStart(2, "0");
			const minutes = String(now.getMinutes()).padStart(2, "0");
			return `${hours}:${minutes}`;
		},
		getToday() {
			const now = new Date();
			const day = String(now.getDate()).padStart(2, "0");
			const month = String(now.getMonth() + 1).padStart(2, "0");
			const year = String(now.getFullYear());
			return `${day}/${month}/${year}`;
		},
		sentMsg() {
			Store.contacts[Store.activeContact].messages.push({
				date: this.getToday(),
				hour: this.getHour(),
				message: this.msg,
				status: "sent",
			});
			this.msg = "";
			setTimeout(() => {
				Store.contacts[Store.activeContact].messages.push({
					date: "10/01/2020",
					hour: "15:30",
					message: "sta senz pensier",
					status: "received",
				});
			}, "1000");
		},
		backChat() {
			Store.activeView = "Chat";
			Store.contacts.forEach((element) => {
				element.visible = true;
			});
		},
		popup(index) {
			this.activeMsg = index;
			this.popupDisplay = "";
		},
		clearActiveMessage() {
			this.activeMsg = null;
			this.popupDisplay = "d-none";
		},
		deleteMessage(el, i) {
			if (confirm("Sei sicuro di voler eliminare questo messaggio?")) {
				el.splice(i, 1);
				this.clearActiveMessage();
			}
		},
	},
};
</script>

<template>
	<div id="singleChatHeader" class="d-flex justify-content-between align-items-center px-2">
		<div class="d-flex align-items-center">
			<i @click="backChat()" class="fa-solid fa-chevron-left me-2"></i>
			<img :src="getImg(Store.contacts[Store.activeContact].avatar)" />
			<h5 class="m-0">{{ Store.contacts[Store.activeContact].name }}</h5>
		</div>
		<div>
			<i class="fa-solid fa-phone fa-rotate-90"></i>
		</div>
	</div>
	<div id="singleChatBody" class="d-flex flex-column p-2 my_bar">
		<div
			:class="{ sent: msg.status === 'sent', received: msg.status === 'received' }"
			class="my_msg position-relative"
			v-for="(msg, i) in Store.contacts[Store.activeContact].messages">
			<div class="d-flex flex-column" @click="popup(i)">
				<span>{{ msg.message }}</span>
				<span class="text_small">{{ msg.hour }}</span>
			</div>
			<div v-if="activeMsg == i" :class="popupDisplay" class="my_popup">
				<span @click="deleteMessage(Store.contacts[Store.activeContact].messages, i)">Elimina Messaggio </span><br />
				<span @click="clearActiveMessage()">Annulla</span>
			</div>
		</div>
	</div>
	<div id="singleChatFooter">
		<input v-model="msg" @keyup.enter="sentMsg()" class="w-100" type="text" />
	</div>
</template>

<style scoped>
#singleChatHeader {
	height: 30px;
	background-color: white;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

#singleChatBody {
	height: calc(100% - 70px);
	background-image: url("../assets/img/mine.jpg");
	overflow: scroll;
}

#singleChatFooter {
	height: 40px;
	padding: 0 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}

img {
	height: 20px;
	margin-right: 1rem;
	border-radius: 100%;
}

.my_msg {
	padding: 0.5rem;
	border-radius: 10px;
	width: 60%;
	margin-bottom: 1rem;
}

.my_popup {
	padding: 0.5rem;
	border-radius: 10px;
	width: auto;
	height: auto;
	background-color: white;
	position: absolute;
	top: 0%;
	left: 0;
}

.sent {
	background-color: rgb(12, 192, 12);
	align-self: flex-end;
}

.received {
	background-color: white;
}

.text_small {
	font-size: 10px;
	align-self: flex-end;
}
</style>
