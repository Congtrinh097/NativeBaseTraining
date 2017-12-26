import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCUAwb_NUEdtHfZgll8KBK5_PBQgqyuGpM',
  authDomain: 'myself-b566d',
  databaseURL: 'https://myself-b566d.firebaseio.com/',
  storageBucket: 'gs://myself-b566d.appspot.com'
};
class FirebaseService {

  constructor(){
    firebase.initializeApp(config);
  }
  async SignUpWithEmailAndPassword(email: string, password: string): Promise<any> {
    try {
      return await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      return err;
    }
  }

  async SignInWithEmailAndPassword(email: string, password: string): Promise<any> {
    try {
      return await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      return err;
    }
  }

  async SignInWithFacebook(token: any) {
    let credential = firebase.auth.FacebookAuthProvider.credential(token);
    try {
      return await firebase.auth().signInWithCredential(credential);
    } catch (err) {
      return err;
    }
  }

  GetCurrentUser(): LoginResultUser {
    let cUser = firebase.auth().currentUser;
    if (cUser == null) return null;
    return {
      Id: cUser.uid,
      Email: cUser.email,
      Name: cUser.email
    }
  }

  async ForgotPassword(email: string) {
    try {
      return await firebase.auth().sendPasswordResetEmail(email);
    } catch (err) {
      return err;
    }
  }

  async SignOut(): Promise<any> {
    try {
      let result = await firebase.auth().signOut();
      return result;
    } catch (err) {
      return err;
    }
  }

}

const FirebaseServiceInstance = new  FirebaseService();
export default FirebaseServiceInstance;
