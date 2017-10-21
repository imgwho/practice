function cssStyle2DomStyle(sName){
    var chars = sName.split('-')
    var arr = []
    for(var i=0;i<chars.length;i++){
        if(chars[i] != '')
            arr.push(chars[i])
    }
    var str =arr[0].toString()
    for(var j=1;j<arr.length;j++){
        str += arr[j].toString().substring(0,1).toUpperCase() + arr[j].toString().substring(1)
    }
    return str
}

var sName = 'list-style-image'
result = cssStyle2DomStyle(sName)
console.log(result)   //listStyleImage