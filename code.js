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

var hackertypercode = `
export RHOST="` + rhost + `"\\n
nmap -sS -sC -sV -A -vvv -t5 $RHOST -o scan.txt\\n
 \\n
ftp $RHOST\\n
Username for root@` + rhost + `: anonymous\\n
Password for anonymous:\\n
ACCESS GRANTED\\n
 \\n
> exit\\n
FTP 201 GOODBYE\\n
 \\n
open script.sh\\n
 \\n
 \\n
use bash\\n
send(ip, b){\\n
    send_ping(ip)\\n
    method = (b)\\n
    with b send_test(ip)\\n
    if reply == true {\\n
        do_reverse_shell(ip, b)\\n
    } else {\\n
        do_bind_shell(method, ip, botnet)\\n
    }\\n
}\\n
send($RHOST, [reverse, bind])\\n
listen --localhost\\n
LISTENING TO INCOMING CONNECTIONS\\n
ftp $RHOST\\n
> upload script.sh\\n
> exit\\n
FTP 201 GOODBYE\\n
run_remote $RHOST script.sh\\n
CONNECTION INCOMING\\n
FRIENDLY CONNECTION\\n
WARNING: PROXY DENYING SHELL, CRACKING PROXY PASSWORD\\n
admin\\n
123\\n
proxy\\n
proxy123 PASSWORD FOUND\\n
WARNING: FIREWALL v.4.2.0 INPENETRABLE\\n
SWITCHING TO BIND SHELL...\\n
SHELL RECIEVED\\n
SHUTTING FIREWALL DOWN...\\n
DONE!\\n
SWITCHING TO REVERSE SHELL\\n
root> echo "L0l Upgr4d3 y0ur 53cur1ty n00bs" > READ.txt\\n
`;

function hackkkk() {
	return hackertypercode;
}