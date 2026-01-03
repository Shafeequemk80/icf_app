import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Navigate, Outlet,  } from 'react-router';

function ProtectedLayout() {
    const {user} = useSelector((state: RootState) => state.auth);
    
return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedLayout
