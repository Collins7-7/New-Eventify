import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.user.role);
        setLoggedInUserId(data.user.id);
      });
  }, [storedToken]);

  return (
    <div>
    {storedToken ? (
      <Router>
        {role === "admin"? <AdminApp setStoredToken={setStoredToken}/> : 
        <>
        <Navbar setStoredToken={setStoredToken}/>
        <Routes>
        </Routes>
        <Footer /> 
        </>}
        
      </Router>
    ) : (
      <div>
      <Router>
      <Routes>
        <Route path="/login" element={<Login setStoredToken={setStoredToken}/>} exact/>
        <Route path="/signup" element={<Signup setStoredToken={setStoredToken}/>} exact/>
      </Routes>
      </Router>
      </div>
    )}
  </div>
  );
}

export default App;
