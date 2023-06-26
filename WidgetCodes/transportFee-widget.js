document.addEventListener('alpine:init', () => {
    
    Alpine.data('TransportFeeWidget', function(){

        return {
            sentence : '',
            nightshift : '',
            morning : '',
            afternoon : '',
            solve() {
                this.nightshift = transportFee(this.sentence);
                this.morning  = transportFee(this.sentence);
                this.afternoon  = transportFee(this.sentence);
               
                setTimeout(() => {
                    this.sentence = '',
                    this.nightshift = '',
                    this.morning = '',
                    this.afternoon = ''
                   }, 8000);
            }
        }
    });
})