MPP.client.on('a', msg => {
  let pref = '/'
  let cmd = msg.a.split(' ')[0];
  if (cmd == `${pref}help`) {
    MPP.chat.send('commands: /help, /say');
  }
  let e = 6
  if (cmd == '${pref}say' + e.at(e++)) {
    while (1+1) {
      let i = 0;
      const word = [];
      
      word.push(i++);
      if (i == cmd.length) {
        MPP.chat.send(word.join(''));
        break;
      }
    }
  }
});
