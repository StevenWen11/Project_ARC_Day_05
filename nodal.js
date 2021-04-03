const express = require("express");
const path = require('path');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const fs = require('fs');
const http = require('http');
const { nextTick } = require("process");

let networkTotal = 0;
let internetTotal = 0;
let deviceTotal = 0;
let protoTotal = 0;
let osiTotal = 0;
let tcpTotal = 0;
let encapTotal = 0;
let decapTotal = 0;
let pduTotal = 0;
let addressTotal = 0;
let macTotal = 0;
let ipTotal = 0;
let portTotal = 0;
let routeTotal = 0;
let dnsTotal = 0;
let httpTotal = 0;

String.prototype.insert = function(index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }
    
    return string + this;
};

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

const app = express();

cloudinary.config({
    cloud_name: 'secret',
    api_key: 'secret',
    api_secret: 'secret'
});

let data = [];

// use the express-static middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.static(path.join(__dirname, '/'), {index: '_'}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//GET

// define the first route
app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/main-page.html');
    // fs.readFile('./main-page.html', function read(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     const content = data;
    //     console.log(content);
    //     res.send(content);
    //     processFile(content);
    // });
    cloudinary.search
    .expression('resource_type:raw AND public_id:data_base.txt')
    .sort_by('public_id','desc')
    .max_results(30)
    .execute().then((result)=>{
        console.log(result);
        someFunc(result)
    }).catch(error=>console.log(error));

    function someFunc(result) {
        let imgUrl = result.resources[0].url +'?ie=' + (new Date()).getTime();
        http.get(imgUrl, function(res){
            let str = '';
            console.log('Response is '+res.statusCode);
    
            res.on('data', function (chunk) {
                str += chunk;
            });
    
            res.on('end', function () {
                console.log('succeeded');
                processFunc(str);
            });
        });
    }

    function processFunc(outputStr) {
        let processStr = outputStr.split('\n');
        for(let i = 1; i < processStr.length-1; ++i) {
            let tempData = []
            for(let j = 0; j < 16; ++j) {
                tempData.push(parseInt(processStr[i][j]));
            }
            data.push(tempData);
        }
        console.log(data);         
        fs.readFile('./main-page.html', function read(err, data2) {
            if (err) {
                throw err;
            }
            const content = data2;
            console.log(content);
            processFile(content.toString());
        });
    }
    function processFile(content) {
        let contentStr = content;
        let searchStr = '<input class="forNode"';
        if(data.length == 0) {   
            let replaceIndexes = getAllIndexes(contentStr, searchStr);
            for(let i = 0; i < replaceIndexes.length; ++i) {
                contentStr = contentStr.insert(replaceIndexes[i] + 42 + i, '0');
            }
        } else {
            let dataTotal = data.length;
            for(let i = 0; i < data.length; ++i) {
                networkTotal += data[i][0];
                internetTotal += data[i][1];
                deviceTotal += data[i][2];
                protoTotal += data[i][3];
                osiTotal += data[i][4];
                tcpTotal += data[i][5];
                encapTotal += data[i][6];
                decapTotal += data[i][7];
                pduTotal += data[i][8];
                addressTotal += data[i][9];
                macTotal += data[i][10];
                ipTotal += data[i][11];
                portTotal += data[i][12];
                routeTotal += data[i][13];
                dnsTotal += data[i][14];
                httpTotal += data[i][15];
            }
            let replaceIndexes = getAllIndexes(contentStr, searchStr);
            contentStr = contentStr.insert(replaceIndexes[0] + 42 + 0, ((Math.floor(networkTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[1] + 42 + 1, ((Math.floor(internetTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[2] + 42 + 2, ((Math.floor(deviceTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[3] + 42 + 3, ((Math.floor(protoTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[4] + 42 + 4, ((Math.floor(osiTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[5] + 42 + 5, ((Math.floor(tcpTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[6] + 42 + 6, ((Math.floor(encapTotal /dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[7] + 42 + 7, ((Math.floor (decapTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[8] + 42 + 8, ((Math.floor(pduTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[9] + 42 + 9, ((Math.floor(addressTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[10] + 42 + 10, ((Math.floor(macTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[11] + 42 + 11, ((Math.floor(ipTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[12] + 42 + 12, ((Math.floor(portTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[13] + 42 + 13, ((Math.floor (routeTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[14] + 42 + 14, ((Math.floor(dnsTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[15] + 42 + 15, ((Math.floor(httpTotal / dataTotal) % 5)+1).toString());
            // for(let i = 0; i < replaceIndexes.length; ++i) {
            //     contentStr = contentStr.insert(replaceIndexes[i] + 42 + i, '0');
            // }
        }
        res.send(contentStr);
    }
});

app.post('/', function(request, response) {
    // Network
    let dataArr = initData(request);

    let networkArr = dataArr[0];
    let internetArr = dataArr[1];
    let deviceArr = dataArr[2];
    let protoArr = dataArr[3];
    let osiArr = dataArr[4];
    let tcpArr = dataArr[5];
    let encapArr = dataArr[6];
    let decapArr = dataArr[7];
    let pduArr = dataArr[8];
    let addArr = dataArr[9];
    let macArr = dataArr[10];
    let ipArr = dataArr[11];
    let portArr = dataArr[12];
    let routeArr = dataArr[13];
    let dnsArr = dataArr[14];
    let httpArr = dataArr[15];

    let flag = true;
    if(networkArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(internetArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(deviceArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(protoArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(osiArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(tcpArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(encapArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(decapArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(pduArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(addArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(macArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(ipArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(portArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(routeArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(dnsArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(httpArr[0].toString() == 'rgba(0, 0, 0, 0)') {
        flag = false;
    }
    if(flag == false) {
        response.send('ISI SEMUA <a href="index.html">click link untuk kembali</a>');
    }
    //network
    let tempData = [];
    for(let i = 0; i < 5; ++i) {
        if(networkArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            networkTotal += i+1; //1
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(internetArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            internetTotal += i+1; //2
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(deviceArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            deviceTotal += i+1; //3
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(protoArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            protoTotal += i+1; //4
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(osiArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            osiTotal += i+1; //5
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(tcpArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            tcpTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(encapArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            encapTotal += i+1; //6
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(decapArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            decapTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(pduArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            pduTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(addArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            addressTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(macArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            macTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(ipArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            ipTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(portArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            portTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(routeArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            routeTotal += i+1;
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(dnsArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            dnsTotal += i+1; 
        }
    }
    for(let i = 0; i < 5; ++i) {
        if(httpArr[i].toString() == 'rgb(0, 0, 0)') {
            tempData.push(i+1);
            httpTotal += i+1;
        }
    }
    data.push(tempData);
    let toCloud = 'database\n';
    for(let i = 0; i < data.length; ++i) {
        for(let j = 0; j < 16; ++j) {
            toCloud += data[i][j];
        }
        toCloud += '\n';
    }
    let cld_upload_stream = cloudinary.uploader.upload_stream(
        {
            public_id: 'data_base.txt',
            resource_type: 'raw'
        },
        function(error, result) {
            console.log(error, result);
        }
    );
    streamifier.createReadStream(toCloud).pipe(cld_upload_stream);
    fs.readFile('./main-page.html', function read(err, data) {
        if (err) {
            throw err;
        }
        const content = data;
        console.log(content);
        processFile2(content.toString());
    });
    function processFile2(content) {
        let contentStr = content;
        let searchStr = '<input class="forNode"';
        if(data.length == 0) {   
            let replaceIndexes = getAllIndexes(contentStr, searchStr);
            for(let i = 0; i < replaceIndexes.length; ++i) {
                contentStr = contentStr.insert(replaceIndexes[i] + 42 + i, '0');
            }
        } else {
            let dataTotal = data.length;
            let replaceIndexes = getAllIndexes(contentStr, searchStr);
            contentStr = contentStr.insert(replaceIndexes[0] + 42 + 0, ((Math.floor(networkTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[1] + 42 + 1, ((Math.floor(internetTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[2] + 42 + 2, ((Math.floor(deviceTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[3] + 42 + 3, ((Math.floor(protoTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[4] + 42 + 4, ((Math.floor(osiTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[5] + 42 + 5, ((Math.floor(tcpTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[6] + 42 + 6, ((Math.floor(encapTotal /dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[7] + 42 + 7, ((Math.floor (decapTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[8] + 42 + 8, ((Math.floor(pduTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[9] + 42 + 9, ((Math.floor(addressTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[10] + 42 + 10, ((Math.floor(macTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[11] + 42 + 11, ((Math.floor(ipTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[12] + 42 + 12, ((Math.floor(portTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[13] + 42 + 13, ((Math.floor (routeTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[14] + 42 + 14, ((Math.floor(dnsTotal / dataTotal) % 5)+1).toString());
            contentStr = contentStr.insert(replaceIndexes[15] + 42 + 15, ((Math.floor(httpTotal / dataTotal) % 5)+1).toString());
            
        }
        response.send(contentStr);
    }
});

function initData(request) {
    // Network
    var networkArr = [];
    networkArr.push(request.body.network1);
    networkArr.push(request.body.network2);
    networkArr.push(request.body.network3);
    networkArr.push(request.body.network4);
    networkArr.push(request.body.network5);

    // internet
    var internetArr = [];
    internetArr.push(request.body.internet1);
    internetArr.push(request.body.internet2);
    internetArr.push(request.body.internet3);
    internetArr.push(request.body.internet4);
    internetArr.push(request.body.internet5);

    // device
    var deviceArr = [];
    deviceArr.push(request.body.device1);
    deviceArr.push(request.body.device2);
    deviceArr.push(request.body.device3);
    deviceArr.push(request.body.device4);
    deviceArr.push(request.body.device5);

    // proto
    var protoArr = [];
    protoArr.push(request.body.proto1);
    protoArr.push(request.body.proto2);
    protoArr.push(request.body.proto3);
    protoArr.push(request.body.proto4);
    protoArr.push(request.body.proto5);

    // osi
    var osiArr = [];
    osiArr.push(request.body.osi1);
    osiArr.push(request.body.osi2);
    osiArr.push(request.body.osi3);
    osiArr.push(request.body.osi4);
    osiArr.push(request.body.osi5);

    // tcp
    var tcpArr = [];
    tcpArr.push(request.body.tcp1);
    tcpArr.push(request.body.tcp2);
    tcpArr.push(request.body.tcp3);
    tcpArr.push(request.body.tcp4);
    tcpArr.push(request.body.tcp5);

    // encap
    var encapArr = [];
    encapArr.push(request.body.encap1);
    encapArr.push(request.body.encap2);
    encapArr.push(request.body.encap3);
    encapArr.push(request.body.encap4);
    encapArr.push(request.body.encap5);

    // decap
    var decapArr = [];
    decapArr.push(request.body.decap1);
    decapArr.push(request.body.decap2);
    decapArr.push(request.body.decap3);
    decapArr.push(request.body.decap4);
    decapArr.push(request.body.decap5);

    // pdu
    var pduArr = [];
    pduArr.push(request.body.pdu1);
    pduArr.push(request.body.pdu2);
    pduArr.push(request.body.pdu3);
    pduArr.push(request.body.pdu4);
    pduArr.push(request.body.pdu5);

    // add
    var addArr = [];
    addArr.push(request.body.add1);
    addArr.push(request.body.add2);
    addArr.push(request.body.add3);
    addArr.push(request.body.add4);
    addArr.push(request.body.add5);

    // mac
    var macArr = [];
    macArr.push(request.body.mac1);
    macArr.push(request.body.mac2);
    macArr.push(request.body.mac3);
    macArr.push(request.body.mac4);
    macArr.push(request.body.mac5);

    // ip
    var ipArr = [];
    ipArr.push(request.body.ip1);
    ipArr.push(request.body.ip2);
    ipArr.push(request.body.ip3);
    ipArr.push(request.body.ip4);
    ipArr.push(request.body.ip5);

    // port
    var portArr = [];
    portArr.push(request.body.port1);
    portArr.push(request.body.port2);
    portArr.push(request.body.port3);
    portArr.push(request.body.port4);
    portArr.push(request.body.port5);

    // route
    var routeArr = [];
    routeArr.push(request.body.route1);
    routeArr.push(request.body.route2);
    routeArr.push(request.body.route3);
    routeArr.push(request.body.route4);
    routeArr.push(request.body.route5);

    // dns
    var dnsArr = [];
    dnsArr.push(request.body.dns1);
    dnsArr.push(request.body.dns2);
    dnsArr.push(request.body.dns3);
    dnsArr.push(request.body.dns4);
    dnsArr.push(request.body.dns5);

    // http
    var httpArr = [];
    httpArr.push(request.body.http1);
    httpArr.push(request.body.http2);
    httpArr.push(request.body.http3);
    httpArr.push(request.body.http4);
    httpArr.push(request.body.http5);

    return [networkArr, 
            internetArr, 
            deviceArr, 
            protoArr, 
            osiArr, 
            tcpArr, 
            encapArr, 
            decapArr, 
            pduArr, 
            addArr, 
            macArr, 
            ipArr, 
            portArr, 
            routeArr, 
            dnsArr, 
            httpArr];
}

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

