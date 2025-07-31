import { Toaster } from "@admin/components/ui/toaster";
import { Toaster as Sonner } from "@admin/components/ui/sonner";
import { TooltipProvider } from "@admin/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@admin/components/auth/AuthProvider";
import { ProtectedRoute } from "@admin/components/auth/ProtectedRoute";
import { AdminLayout } from "@admin/components/layout/AdminLayout";
import { Dashboard } from "@admin/pages/Dashboard";
import { Categories } from "@admin/pages/Categories";
import { MenuItems } from "@admin/pages/MenuItems";
import { Profile } from "@admin/pages/Profile";
import NotFound from "@admin/pages/NotFound";
import './admin.generated.css';


const queryClient = new QueryClient();

const AdminApp = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="menu-items" element={<MenuItems />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default AdminApp;
