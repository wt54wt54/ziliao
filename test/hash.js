const crypto =require('crypto')
const hash={ 

    createSignatue(obj){

        let {timestamp,nonceStr,jsapi_ticket,url}=obj
        let str=`jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
        console.log(str)
        let signature=crypto.createHash('sha1').update(str).digest('hex')
        console.log(signature)
        // 加密处理
      return signature
    }
}

module.exports=hash