import { UserEntity } from '../domain/user.entity';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.config';
import { UserValue } from '../domain/user.value';

export class FirebaseUserRepository {

  //Register
    async registerUser(userValue: UserValue): Promise<string | null> {
        try {
          // Convierte UserValue a un objeto plano
          const userData = {
            name: userValue.name,
            email: userValue.email,
            edad: userValue.edad,
            trabajo: userValue.trabajo,
          };
    
          const usersCollection = collection(db, 'users');
          const docRef = await addDoc(usersCollection, userData);
          return docRef.id;
        } catch (error) {
          console.error('Error registering user:', error);
          return null;
        }
      }

  //List
  async listUser(): Promise<UserEntity[] | null> {
    try {
      const usersCollection = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollection);
      const users: UserEntity[] = [];

      querySnapshot.forEach((doc) => {
        const userData = doc.data() as UserEntity;
        const user: UserEntity = { ...userData, id: doc.id };
        users.push(user);
      });

      return users;
    } catch (error) {
      console.error('Error listing users:', error);
      return null;
    }
  }

  //Delete
  async deleteUser(userId: string): Promise<boolean | null> {
    try {
        const userDocRef = doc(db, 'users', userId);
        await deleteDoc(userDocRef);
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        return false;  
    }
}

//Update
async updateUser(userId: string, userValue: UserValue): Promise<boolean | null> {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userData = {
      name: userValue.name,
      email: userValue.email,
      edad: userValue.edad,
      trabajo: userValue.trabajo,
    };

    await updateDoc(userDocRef, userData);
    return true;
  } catch (error) {
    console.error('Error updating user:', error);
    return false; 
  }
}
}
