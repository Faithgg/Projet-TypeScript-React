const hexaToDecimalRule = new Map();
hexaToDecimalRule.set("A",10);
hexaToDecimalRule.set("B",11);
hexaToDecimalRule.set("C",12);
hexaToDecimalRule.set("D",13);
hexaToDecimalRule.set("E",14);
hexaToDecimalRule.set("F",15);

const isValid = [0,1,2,3,4,5,6,7,8,9];

export default function converterHexadecimalToDecimal(hexa:string){
    let decimal = 0;
    let valid : boolean = true ;

    [...hexa].map(
        (value, key) => {
            if (isValid.includes(parseInt(value)) || hexaToDecimalRule.has(value.toUpperCase())) {
                hexaToDecimalRule.has(value.toUpperCase())? (
                    decimal +=(16**(hexa.length - (key + 1)))*hexaToDecimalRule.get(value.toUpperCase())
                ) : (
                    decimal += (16**(hexa.length - (key + 1)))*parseInt(value) 
                );
            } else {
                valid = false;
                return ;
            }
            
        }
    )
    
    return valid?decimal:"Bad HexaDecimal number";
}