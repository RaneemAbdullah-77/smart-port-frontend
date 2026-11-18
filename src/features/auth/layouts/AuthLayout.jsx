import { Outlet } from "react-router-dom";
import AuthCard from "../components/AuthCard";

export default function AuthLayout() {
    return (
        <main className="auth-layout">
            <AuthCard>
                <Outlet />
            </AuthCard>
        </main>
    );
}
