import Navbar from "navbar/RemoteNavbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-blue-700 text-3xl text-center mt-8 font-medium">
        This is a host app <span className="text-orange-400">Dashboard</span>
      </h1>
    </div>
  );
};

export default Dashboard;
