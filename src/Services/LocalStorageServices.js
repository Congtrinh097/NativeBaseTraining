import {AsyncStorage} from 'react-native';

const StorageKey = {
  CurrentUser: 'CurrentUser',
  IsSkipLogin: 'IsSkipLogin'
};

class LocalStorageServices {

  async getCurrentUser() {
    let currentUserStr = await AsyncStorage.getItem(StorageKey.CurrentUser);
    return currentUserStr != null ? JSON.parse(currentUserStr) : null;
  }

  async saveCurrentUser(currentUser ) {
    return await AsyncStorage.setItem(StorageKey.CurrentUser, currentUser != null ? JSON.stringify(currentUser) : null);
  }
}

const LocalStorageInstance = new LocalStorageServices();
export default LocalStorageInstance;