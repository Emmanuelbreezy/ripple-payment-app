import { AppContent } from "../../component";

export default function withDashboardLayout(
    WrappedComponent: () => JSX.Element,
    className?: string,
  ) {
    const DashboardLayout = (props: any) => {
      return (
        <>
          <AppContent>
            <WrappedComponent {...props} />
          </AppContent>
        </>
      );
    };
  
    DashboardLayout.displayName = "DashboardLayout";
    return DashboardLayout;
  }
  