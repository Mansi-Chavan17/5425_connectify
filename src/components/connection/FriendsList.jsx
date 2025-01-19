// import { useState,useEffect } from "react";
// const FriendsList = ({ currentUserId }) => {
//     const [friends, setFriends] = useState([]);
  
//     useEffect(() => {
//       const fetchFriends = async () => {
//         const userDoc = await db.collection("users").doc(currentUserId).get();
//         const data = userDoc.data();
//         setFriends(data.connections?.friends || []);
//       };
  
//       fetchFriends();
//     }, [currentUserId]);
  
//     return (
//       <div>
//         <h2>Your Connections</h2>
//         {friends.map((friendId) => (
//           <div key={friendId}>
//             <p>{friendId}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default FriendsList;
  