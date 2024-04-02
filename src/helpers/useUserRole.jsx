import { useEffect, useState } from 'react';

const useUserRole = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Extract user role from userData and set it to state
    if (userData && userData.user && userData.user.role) {
      setUserRole(userData.user.role);
    } else {
      setUserRole("No Data")
    }
  }, []);

  return userRole;
};

export default useUserRole;
