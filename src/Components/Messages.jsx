import React, { useEffect } from 'react'
import SingleMessage from './SingleMessage'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

function Messages() {

  const dispatch = useDispatch();
  // Display our Email Timestamp
  // const emails = useSelector(store => store.appSlice.emails) // One way
  const { emails } = useSelector(store => store.appSlice) //Other way destructor Email obj

  //Fetch Email data from Firebase database for Display on UI
  useEffect(() => {
    // For sorting to display recent email
    const q = query(collection(db, "emails"), orderBy("createdAt", 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
    
      const allEmails = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
     
      // console.log(allEmails);
      dispatch(setEmails(allEmails));

    });

    // Cleanup for removing unnecessary timer from other page 
    return () => unsubscribe();

  }, [dispatch]);

  return (
    <div >
      {
        //Pass email as a props in singleMessage
        Array.isArray(emails) && emails.map((email) => <SingleMessage key={email.id} email={email} />)
      }

    </div>
  )
}
export default Messages;
