import { reactive } from "vue";

const iMieiDati = reactive({
	contacts: [
		{
			name: "Michele",
			avatar: "avatar_1.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Hai portato a spasso il cane?",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "Ricordati di stendere i panni",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "16:15",
					message: "Tutto fatto!",
					status: "received",
				},
			],
		},
		{
			name: "Fabio",
			avatar: "avatar_2.jpg",
			visible: true,
			messages: [
				{
					date: "20/03/2020",
					hour: "16:30",
					message: "Ciao come stai?",
					status: "sent",
				},
				{
					date: "20/03/2020",
					hour: "16:30",
					message: "Bene grazie! Stasera ci vediamo?",
					status: "received",
				},
				{
					date: "20/03/2020",
					hour: "16:35",
					message: "Mi piacerebbe ma devo andare a fare la spesa.",
					status: "sent",
				},
			],
		},
		{
			name: "Samuele",
			avatar: "avatar_3.jpg",
			visible: true,
			messages: [
				{
					date: "28/03/2020",
					hour: "10:10",
					message: "La Marianna va in campagna",
					status: "received",
				},
				{
					date: "28/03/2020",
					hour: "10:20",
					message: "Sicuro di non aver sbagliato chat?",
					status: "sent",
				},
				{
					date: "28/03/2020",
					hour: "16:15",
					message: "Ah scusa!",
					status: "received",
				},
			],
		},
		{
			name: "Alessandro B.",
			avatar: "avatar_4.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Lo sai che ha aperto una nuova pizzeria?",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "Si, ma preferirei andare al cinema",
					status: "received",
				},
			],
		},
		{
			name: "Alessandro L.",
			avatar: "avatar_5.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Ricordati di chiamare la nonna",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "Va bene, stasera la sento",
					status: "received",
				},
			],
		},
		{
			name: "Claudia",
			avatar: "avatar_6.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Ciao Claudia, hai novità?",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "Non ancora",
					status: "received",
				},
				{
					date: "10/01/2020",
					hour: "15:51",
					message: "Nessuna nuova, buona nuova",
					status: "sent",
				},
			],
		},
		{
			name: "Federico",
			avatar: "avatar_7.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Fai gli auguri a Martina che è il suo compleanno!",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "Grazie per avermelo ricordato, le scrivo subito!",
					status: "received",
				},
			],
		},
		{
			name: "Davide",
			avatar: "avatar_8.jpg",
			visible: true,
			messages: [
				{
					date: "10/01/2020",
					hour: "15:30",
					message: "Ciao, andiamo a mangiare la pizza stasera?",
					status: "received",
				},
				{
					date: "10/01/2020",
					hour: "15:50",
					message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
					status: "sent",
				},
				{
					date: "10/01/2020",
					hour: "15:51",
					message: "OK!!",
					status: "received",
				},
			],
		},
	],
	activeView: "Chat",
	activeContact: 0,
});

export default iMieiDati;
