const main = {note1: '', note2: '', note3: '', note4: ''};

function add(arg) {
  if (s.value == 'note1') {
    main.note1 = arg;
  }
  if (s.value == 'note2') {
    main.note2 = arg;
  }
  if (s.value == 'note3') {
    main.note3 = arg;
  }
  if (s.value == 'note4') {
    main.note3 = arg;
  }
}

function load(arg) {
  if (arg == 'note1') {
    i.value = main.note1;
  }
  if (arg == 'note2') {
    i.value = main.note2;
  }
  if (arg == 'note3') {
    i.value = main.note3;
  }
  if (arg == 'note4') {
    i.value = main.note4;
  }
}