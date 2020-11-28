import React, { useReducer, useContext } from "react";
import ProfileContext from "./profileContext";
import { FirebaseContext } from "../firebase";
import profileReducer from "./profileReducer";
import { RATE_ITEM, ADD_ITEM, GET_MYLIST, GET_RATINGS } from "../types";

const ProfileState = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
  const user = firebase.auth().currentUser || {};
  const myList = db.collection("/mylist");
  const myRatings = db.collection("/myratings");

  const initialState = {
    ratings: [],
    list: [],
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const getMyList = async () => {
    await myList
      .where("email", "==", `${user.email}`)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        dispatch({
          type: GET_MYLIST,
          payload: allContent,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getRatings = async () => {
    await myRatings
      .where("email", "==", `${user.email}`)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        dispatch({
          type: GET_RATINGS,
          payload: allContent,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const rateItem = async (title, rating) => {
    const item = {
      email: user.email,
      rating: rating,
      title,
    };
    if (rating) {
      await myRatings
        .where("email", "==", `${user.email}`)
        .where("title", "==", `${title}`)
        .get()
        .then((snapshot) => {
          const allContent = snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }));
          if (allContent.length > 0) {
            myRatings.doc(allContent[0].docId).update({ rating: rating });
          } else {
            myRatings.add(item);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      await myRatings
        .where("email", "==", `${user.email}`)
        .where("title", "==", `${title}`)
        .get()
        .then((snapshot) => {
          const allContent = snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }));
          if (allContent.length > 0) {
            myRatings.doc(allContent[0].docId).delete();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const addItem = async (item, title, onlist) => {
    const itemobj = {
      email: user.email,
      title,
      data: item,
    };
    if (onlist) {
      await myList
        .where("email", "==", `${user.email}`)
        .where("title", "==", `${title}`)
        .get()
        .then((snapshot) => {
          const allContent = snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }));
          if (allContent.length > 0) {
            myList.doc(allContent[0].docId).delete();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      myList.add(itemobj);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        ratings: state.ratings,
        list: state.list,
        getRatings,
        getMyList,

        addItem,
        rateItem,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
