/*
Leonid Iudakov
Leo-MathGuy
2021 Copyright

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

var rhost = ""; // The rhost

for(var i = 0; i < 3; i++) { // 4 numbers

	rhost += (Math.round(Math.random()*255)); // Number
	rhost += ".";
}

rhost += "305";

// The code to loop:

var hackertypercode = `export RHOST="` + rhost + `"
nmap -sS -sC -sV -A -vvv -t5 $RHOST -o scan.txt\n
ftp $RHOST
Username for root@` + rhost + `: anonymous
Password for anonymous:
ACCESS GRANTED\n
> exit
FTP 201 GOODBYE\n
open script.sh\n\n
use bash
send(ip, b){
    send_ping(ip)
    method = (b)
    with b send_test(ip)
    if reply == true {
        do_reverse_shell(ip, b)
    } else {
        do_bind_shell(method, ip, botnet)
    }
}
send($RHOST, [reverse, bind])
listen --localhost
LISTENING TO INCOMING CONNECTIONS
ftp $RHOST
> upload script.sh
> exit
FTP 201 GOODBYE
run_remote $RHOST script.sh
CONNECTION INCOMING
FRIENDLY CONNECTION
WARNING: PROXY DENYING SHELL, CRACKING PROXY PASSWORD
admin
123
proxy
proxy123 [PASSWORD FOUND]
WARNING: FIREWALL v.4.2.0 INPENETRABLE
SWITCHING TO BIND SHELL...
SHELL RECIEVED
SHUTTING FIREWALL DOWN...
DONE!
SWITCHING TO REVERSE SHELL
root> echo "L0l Upgr4d3 y0ur 53cur1ty n00bs" > READ.txt\n\n\n`;

function hackkkk() {
	return hackertypercode;
}
