import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useIsMounted } from "react-tidy";

import { auth, db } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  FieldValue,
  limit,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";

function AccountScreen({ navigation }) {
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState({});
  console.log(currentLoggedInUser);

  const getUserName = () => {
    const user = auth?.currentUser?.uid;
    console.log(user);
    const q = onSnapshot(
      collection(db, "users"),
      where("user_id", "==", user),
      (snap) => {
        snap.docs.map((doc) => {
          console.log(doc.data());
          let data = {
            username: doc.data().displayName,
            avatar: doc.data().photoURL,
            user_id: doc.data().user_id,
          };
          // console.log(data);
          setcurrentLoggedInUser(data);
        });
      }
    );
    return q;
  };
  useEffect(() => {
    getUserName();
  }, []);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
