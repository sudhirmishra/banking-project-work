import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txDescription'
})
export class TxDescriptionPipe implements PipeTransform {

  transform(element) {
    function beautify_txn_type(type){
        let vocab = {
            "INVESTMENT": "Invested in",
            "DEPOSIT": "Deposited to",
            "TRANSFER": "Transfered",
            "REFUND": "Refund",
            "WITHDRAWAL": "Funds withdrawn from"
        }
        return vocab[type]
    }
    function beautify_txn_method(method){
        let vocab = {
            "ACH": "Payment cleared",
        }
        if (vocab.hasOwnProperty(method)){
            return vocab[method]
        }else{
            return ""
        }
    }
    let type_segment = beautify_txn_type(element.type)
    // let method_segment = beautify_txn_method(element.method)
    
    if(element.source.type === "INVESTOR"){
        // Debit
        return `${type_segment} ${element.destination.description}`
    }else{
        // Credit
        return `Recieved from ${element.source.description}`
    }
    return element;
  }

}
