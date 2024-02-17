import { Quiz } from "./Quiz";

export  class Exam {

    private quiz1 : Quiz ;
    private quiz2 : Quiz ;

    constructor(
        private level : string
        ){
            this.quiz1 = new Quiz (this.level, "decimal");
            this.quiz2 = new Quiz (this.level, "hexaDecimal");
        }

        public init(){
            let date :Date = new Date();
            return {
                "id" : `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
                "quiz1" : this.quiz1.init(),
                "quiz2" : this.quiz2.init()
            }
        }
    
    
        public note (userResponse1:number, userResponse2:string){
            return this.quiz1.note(userResponse1) + this.quiz2.note(userResponse2) ;
        }
}