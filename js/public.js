var url='http://192.168.1.110:8081/hhdj';

function get(key){
    var str=location.search;

        var newStr=str.split('?')[1];
        var arr=newStr.split('&');
        var obj={};
        arr.forEach(function(item){
            obj[item.split('=')[0]]=item.split('=')[1];
        });
        return obj[key];


}