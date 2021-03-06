/* plugins */
dayjs.locale('it');
dayjs.extend(dayjs_plugin_customParseFormat);
dayjs().format('DD/MM/YYYY'+''+'HH:mm:ss');

const app = new Vue({
    el: ".app",
    data: { 
        
        
        // Elenco contatti
        yourPropNameHere: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
                messages: [
                    {
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
        indexUtente: 0,
        newMessage: '',
        ricerca: '',
        yourPropNameHereNew:[],
        rispostaRandom:['Ok','No','Si, va bene', 'Grazie', 'Fallo tu', 'Non voglio', 'Ciao', 'Sono occupato', 'Forse'],
    
    },
    methods:{
        messaggi(index){ 
            console.log(index);  
             this.indexUtente = index;
             console.log(this.yourPropNameHere[this.indexUtente].messages);
                
        },
        addMessage(){
            if(this.newMessage !== ''){
                this.yourPropNameHere[this.indexUtente].messages.push({
                    date: dayjs().format('DD/MM/YYYY'+' '+'HH:mm:ss'),
                    message: this.newMessage,
                    status: 'sent'
                });
                setTimeout(() => {
                    console.log('ok');
                    this.yourPropNameHere[this.indexUtente].messages.push({
                        date: dayjs().format('DD/MM/YYYY'+' '+'HH:mm:ss'),
                        message: this.rispostaRandom[this.random(this.rispostaRandom.length-1)],
                        status: 'received'
                    });

                },1000);
                this.newMessage = ''
            }
            
        },
        random(num){
           return Math.floor(Math.random() * num );
        },

        cancella(index){
            this.yourPropNameHere[this.indexUtente].messages.splice(index, 1);
        }
        
    },
    
})