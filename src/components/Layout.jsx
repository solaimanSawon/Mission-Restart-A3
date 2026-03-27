import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== "idle";

  return (
    <>
      <Header />
      {isNavigating && <div className="route-progress" aria-hidden="true" />}
      <main className="site-main container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
