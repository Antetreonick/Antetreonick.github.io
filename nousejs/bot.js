MPP.client.on("a", function (msg) {
  let cmd = msg.a; 
    
  if (cmd == "/help") { 
    MPP.chat.send("Commands: /help, /say"
    );
  }
  if (cmd.at(0) + cmd.at(1) + cmd.at(2) + cmd.at(3) == "/say") {
    if (cmd == "/say") {
      MPP.chat.send('/say (message)');
    }
    let i = 5;
    const e = [ ];
    while (1+1) {
      e.push(cmd.at(i++));
      if (i == cmd.length) {
        MPP.chat.send(e.join(''));
        break;
      }
    }
  }
});
