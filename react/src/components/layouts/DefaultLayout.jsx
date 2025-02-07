import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const DefaultLayout = () => {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>header</div>
                    <div>user info</div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
