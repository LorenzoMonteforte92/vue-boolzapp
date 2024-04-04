const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                ],
              },
            ],

            activeContact: 0,
            newMessage: ``,
            searchTxt: ``
        };
    },
    methods: {
      activateChat(clickedIndex){
        this.activeContact = clickedIndex;
      },

      writeNewMessage(contactIndex){
        // creare un nuovo oggetto message da pushare nell'array "messages" di ciascun contatto
        //quando scrivo in una chat e invio un messaggio questo vinene pushato dentro l'array con dato indice
        const newMsg = {
            date: '10/01/2020 15:30:55',
            message: this.newMessage,
            status: 'sent'   
          }
        this.contacts[contactIndex].messages.push(newMsg)
        this.newMessage = ``
      },

      replyOk(contactIndex){
        const newReply = {
          date: '10/01/2020 15:30:55',
          message: `ok`,
          status: 'received'   
        }
      this.contacts[contactIndex].messages.push(newReply)
      },
      //vedere come far partire il timeout
      autoReply(){
        setTimeout(this.replyOk, 1000);
      },

//collegare la barra di ricerca a una variabile
//in una funzione confrontare il contenuto della variabile col contenuto delle chiavi name di ogni oggetto
//aggiungi la classe display none a quei contatti la cui chiave nome non corrisponde ai valori della variabile
    },
}).mount('#app');

