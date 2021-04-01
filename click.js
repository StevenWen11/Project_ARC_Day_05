/*
var network1 = document.getElementById("network-1");
var network2 = document.getElementById("network-2");
var network3 = document.getElementById("network-3");
var network4 = document.getElementById("network-4");
var network5 = document.getElementById("network-5");

network1.onclick = function() {
    network1.setAttribute('style', 'Background-Color: #000000' );
    network2.setAttribute('style', 'Background-Color: #FFFFFF' );
    network3.setAttribute('style', 'Background-Color: #FFFFFF' );
    network4.setAttribute('style', 'Background-Color: #FFFFFF' );
    network5.setAttribute('style', 'Background-Color: #FFFFFF' );
}

network2.onclick = function() {
    network1.setAttribute('style', 'Background-Color: #FFFFFF' );
    network2.setAttribute('style', 'Background-Color: #000000' );
    network3.setAttribute('style', 'Background-Color: #FFFFFF' );
    network4.setAttribute('style', 'Background-Color: #FFFFFF' );
    network5.setAttribute('style', 'Background-Color: #FFFFFF' );
}

network3.onclick = function() {
    network1.setAttribute('style', 'Background-Color: #FFFFFF' );
    network2.setAttribute('style', 'Background-Color: #FFFFFF' );
    network3.setAttribute('style', 'Background-Color: #000000' );
    network4.setAttribute('style', 'Background-Color: #FFFFFF' );
    network5.setAttribute('style', 'Background-Color: #FFFFFF' );
}

network4.onclick = function() {
    network1.setAttribute('style', 'Background-Color: #FFFFFF' );
    network2.setAttribute('style', 'Background-Color: #FFFFFF' );
    network3.setAttribute('style', 'Background-Color: #FFFFFF' );
    network4.setAttribute('style', 'Background-Color: #000000' );
    network5.setAttribute('style', 'Background-Color: #FFFFFF' );
}

network5.onclick = function() {
    network1.setAttribute('style', 'Background-Color: #FFFFFF' );
    network2.setAttribute('style', 'Background-Color: #FFFFFF' );
    network3.setAttribute('style', 'Background-Color: #FFFFFF' );
    network4.setAttribute('style', 'Background-Color: #FFFFFF' );
    network5.setAttribute('style', 'Background-Color: #000000' );
}
*/

// Network
var networks = document.getElementsByClassName("network");

for(var i = 0; i < networks.length; ++i) {
    networks[i].onclick = function(e) {
        var target = (e || windows.event).target;
        console.log("perfect");
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(networks[j] != target) {
                networks[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Internet
var internet = document.getElementsByClassName("internet");

for(var i = 0; i < internet.length; ++i) {
    internet[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(internet[j] != target) {
                internet[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Networking Device
var device = document.getElementsByClassName("device");

for(var i = 0; i < device.length; ++i) {
    device[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(device[j] != target) {
                device[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Protocol
var proto = document.getElementsByClassName("proto");

for(var i = 0; i < proto.length; ++i) {
    proto[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(proto[j] != target) {
                proto[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// OSI
var osi = document.getElementsByClassName("osi");

for(var i = 0; i < osi.length; ++i) {
    osi[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(osi[j] != target) {
                osi[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// TCP
var tcp = document.getElementsByClassName("tcp");

for(var i = 0; i < tcp.length; ++i) {
    tcp[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(tcp[j] != target) {
                tcp[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Encap
var encap = document.getElementsByClassName("encap");

for(var i = 0; i < encap.length; ++i) {
    encap[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(encap[j] != target) {
                encap[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// De-encap
var decap = document.getElementsByClassName("decap");

for(var i = 0; i < decap.length; ++i) {
    decap[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(decap[j] != target) {
                decap[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// PDU
var pdu = document.getElementsByClassName("pdu");

for(var i = 0; i < pdu.length; ++i) {
    pdu[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(pdu[j] != target) {
                pdu[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Address
var address = document.getElementsByClassName("address");

for(var i = 0; i < address.length; ++i) {
    address[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(address[j] != target) {
                address[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Mac Address
var mac = document.getElementsByClassName("mac");

for(var i = 0; i < mac.length; ++i) {
    mac[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(mac[j] != target) {
                mac[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// IP Address
var ip = document.getElementsByClassName("ip");

for(var i = 0; i < ip.length; ++i) {
    ip[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(ip[j] != target) {
                ip[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Port Address
var port = document.getElementsByClassName("port");

for(var i = 0; i < port.length; ++i) {
    port[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(port[j] != target) {
                port[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// Routing
var route = document.getElementsByClassName("route");

for(var i = 0; i < route.length; ++i) {
    route[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(route[j] != target) {
                route[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// DNS
var dns = document.getElementsByClassName("dns");

for(var i = 0; i < dns.length; ++i) {
    dns[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(dns[j] != target) {
                dns[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}

// HTTPS
var http = document.getElementsByClassName("http");

for(var i = 0; i < http.length; ++i) {
    http[i].onclick = function(e) {
        var target = (e || windows.event).target;
        target.setAttribute('style', 'Background-Color: #000000');
        for( var j = 0; j < networks.length; ++j) {
            if(http[j] != target) {
                http[j].setAttribute('style', 'Background-Color: #FFFFFF');
            }
        }
    }
}
