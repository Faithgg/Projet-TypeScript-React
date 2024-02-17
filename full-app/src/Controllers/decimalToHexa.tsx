const decimalToHexarule = new Map();
decimalToHexarule.set(10,"A");
decimalToHexarule.set(11,"B");
decimalToHexarule.set(12,"C");
decimalToHexarule.set(13,"D");
decimalToHexarule.set(14,"E");
decimalToHexarule.set(15,"F");


export default function converterDecimalToHexadecimal(number:number) {
    
    let hexa = "";
    do {
        const current = decimalToHexarule.has(number%16)? decimalToHexarule.get(number%16) : number%16 ;
        hexa = `${current}${hexa}`;
        number = (number - number%16)/16;
    } while (number > 0);
    return hexa ;
}