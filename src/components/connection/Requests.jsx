// const Requests = ({ currentUserId }) => {
//     const [requests, setRequests] = useState([]);
  
//     useEffect(() => {
//       const fetchRequests = async () => {
//         const userDoc = await db.collection("users").doc(currentUserId).get();
//         const data = userDoc.data();
//         setRequests(data.connections?.receivedRequests || []);
//       };
  
//       fetchRequests();
//     }, [currentUserId]);
  
//     const handleAccept = async (userId) => {
//       try {
//         // Move the request to "friends"
//         await db.collection("users").doc(currentUserId).update({
//           "connections.friends": db.FieldValue.arrayUnion(userId),
//           "connections.receivedRequests": db.FieldValue.arrayRemove(userId),
//         });
  
//         await db.collection("users").doc(userId).update({
//           "connections.friends": db.FieldValue.arrayUnion(currentUserId),
//           "connections.sentRequests": db.FieldValue.arrayRemove(currentUserId),
//         });
//       } catch (error) {
//         console.error("Error accepting connection: ", error);
//       }
//     };
  
//     const handleDecline = async (userId) => {
//       try {
//         await db.collection("users").doc(currentUserId).update({
//           "connections.receivedRequests": db.FieldValue.arrayRemove(userId),
//         });
  
//         await db.collection("users").doc(userId).update({
//           "connections.sentRequests": db.FieldValue.arrayRemove(currentUserId),
//         });
//       } catch (error) {
//         console.error("Error declining connection: ", error);
//       }
//     };
  
//     return (
//       <div>
//         <h2>Connection Requests</h2>
//         {requests.map((userId) => (
//           <div key={userId}>
//             <p>{userId}</p>
//             <button onClick={() => handleAccept(userId)}>Accept</button>
//             <button onClick={() => handleDecline(userId)}>Decline</button>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Requests;
  