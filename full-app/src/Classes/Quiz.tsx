import converterDecimalToHexadecimal from "../Controllers/decimalToHexa";
import converterHexadecimalToDecimal from "../Controllers/hexaToDecimal";

export  class Quiz {
    private numberLength : number = 0;

    private question : any;
    private response : any;

    constructor(
        private level : string,
        private responseType : string
        ){
            if (level==="facile") {
                this.numberLength = 2
            } else if (level==="moyen") {
                this.numberLength = 4
            } else {
                this.numberLength = 6
            }
        }

        public init () {
            if (this.responseType ==="hexaDecimal") {
                this.question = Math.floor(Math.random() * this.numberLength);
                this.response = converterDecimalToHexadecimal(this.question) ;
            } else {
                this.question = this.myHexaGenerator(this.numberLength)
                this.response = converterHexadecimalToDecimal(this.question);
            }

            let date :Date = new Date();
            return {
                "id" : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}:${Math.random() * 100}`,
                "quiz" : this.question,
                "propositions" : this.propositionsGenerator(),
                "response" : this.response
            }
        }

        private  myHexaGenerator(length : number) {
            let hexa = '';
            const characters = 'ABCDEF0123456789abcdef';
            const charactersLength = characters.length;
            let i = 0;
            while (i < length) {
              hexa += characters.charAt(Math.floor(Math.random() * charactersLength));
              i += 1;
            }
            return hexa;
        }

        private propositionsGenerator() : Array<string | number> {
            const responseId : number = Math.floor(Math.random()*4);
            let i:number = 0 ;
            let propsArray: Array<string | number> = [];

            while (i<4) {
                if (i===responseId) {
                        propsArray.push(this.response) ;
                } else {
                    if (this.responseType ==="hexaDecimal") {
                        propsArray.push(this.myHexaGenerator(this.numberLength)) ;
                    } else {
                        propsArray.push(converterHexadecimalToDecimal(this.myHexaGenerator(this.numberLength))) ;
                    }
                }
                i+=1;
            }

            return propsArray;
        }
    
    
        public note (userResponse:any){
            return userResponse === this.response ? 10 : 0 ;
        }
}