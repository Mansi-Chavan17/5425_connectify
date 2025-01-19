import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Connections = ({ currentUserId }) => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const connectionsRef = collection(db, "connections");
        const q = query(connectionsRef, where("to", "==", currentUserId)); // Fetch incoming requests
        const querySnapshot = await getDocs(q);
        const connectionData = querySnapshot.docs.map((doc) => doc.data());
        setConnections(connectionData);
      } catch (error) {
        console.error("Error fetching connections:", error);
      }
    };

    fetchConnections();
  }, [currentUserId]);

  return (
    <div>
      <h2>Incoming Connection Requests</h2>
      <ul>
        {connections.map((conn, index) => (
          <li key={index}>
            Request from User ID: {conn.from}
            {/* Add actions like Accept/Reject if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
