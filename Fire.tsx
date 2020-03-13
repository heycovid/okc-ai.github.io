import firebase from 'firebase'; 

class Fire {
    constructor() {
      this.init();
          // 1.
    this.observeAuth();
    }
    // 2.
    init = () =>
      firebase.initializeApp({
        apiKey: 'AIzaSyDLgW8QG1qO8O5WZLC1U8WaqCr5-CvEVmo',
        authDomain: 'chatter-b85d7.firebaseapp.com',
        databaseURL: 'https://chatter-b85d7.firebaseio.com',
        projectId: 'chatter-b85d7',
        storageBucket: '',
        messagingSenderId: '861166145757',
      });

        // 2.
  observeAuth = () =>
  firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
// 3.
onAuthStateChanged = user => {
  if (!user) {
    try {
      // 4.
      firebase.auth().signInAnonymously();
    } catch ({ message }) {
      alert(message);
    }
  }
};

// 1.
get ref() {
    return firebase.database().ref('messages');
  }
  // 2.
  on = callback =>
      this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));

  // 4.
  off() {
    this.ref.off();
  }




  parse = snapshot => {
    // 1.
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    // 2.
    const timestamp = new Date(numberStamp);
    // 3.
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
   return message;
  };
  // 1.
  
get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  // 2.
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  // 3.
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      // 4.
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };
  // 5.
  append = message => this.ref.push(message);
  
  }


Fire.shared = new Fire();
export default Fire;