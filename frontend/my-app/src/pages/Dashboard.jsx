import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ActivityItem from "../components/ActivityItem";
import "../theme/Dashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [sprints, setSprints] = useState([]);
  const [members] = useState(["You"]);
  const [workspaceStorage, setWorkspaceStorage] = useState({ used: 0, total: 10 });

  const [deleteModal, setDeleteModal] = useState({ visible: false, type: "", index: null });

  useEffect(() => {
    document.body.classList.toggle("modal-open", deleteModal.visible);
  }, [deleteModal.visible]);

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length || 1; // prevent zero divide

  const sprintChartData = [
    { name: "Completed", value: completedTasks },
    { name: "Remaining", value: Math.max(totalTasks - completedTasks, 1) }
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <h2>Dashboard Overview</h2>
        <p className="muted-text">Welcome back! Here's what's happening.</p>

        {/* STAT CARDS */}
        <div className="stats-grid">
          <StatCard title="Active Sprints" value={sprints.length} />
          <StatCard title="Total Tasks" value={tasks.length} />
          <StatCard title="Deadlines" value={tasks.filter(t => t.deadline).length} />
          <StatCard title="My Projects" value={projects.length} />
          <StatCard title="My Tasks" value={tasks.length} />
        </div>

        {/* ACTIVITY + CHART */}
        <div className="bottom-grid">
          <div className="activity card card--glow">
            <h3>Recent Activity</h3>
            {tasks.length + projects.length === 0 ? (
              <p className="empty-text">Create a project or task to see recent activity</p>
            ) : (
              <>
                {tasks.map((task, i) => (
                  <ActivityItem
                    key={i}
                    user={task.user}
                    action={task.action}
                    time={task.time}
                  />
                ))}
              </>
            )}
          </div>

          <div className="progress card card--glow">
            <h3>Sprint Progress</h3>

            <div className="sprint-chart-wrapper">
              <ResponsiveContainer width="100%" height={170}>
                <PieChart>
                  <Pie
                    data={sprintChartData}
                    innerRadius={55}
                    outerRadius={75}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#22c55e" />
                    <Cell fill="#334155" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="sprint-chart-center">
                <h4>{completedTasks}/{tasks.length}</h4>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW GRID */}
        <div className="overview-grid">
          <div className="big-card card card--glow">
            <h3>Team Performance</h3>
            <div className="performance-stats">
              <div className="perf-box success">
                <h2>{completedTasks}</h2>
                <span>Completed</span>
              </div>
              <div className="perf-box info">
                <h2>{tasks.length - completedTasks}</h2>
                <span>In Progress</span>
              </div>
            </div>
          </div>

          <div className="big-card card card--glow">
            <h3>Workspace Overview</h3>
            <div className="workspace-item">
              <span>Active Projects</span>
              <strong>{projects.length}</strong>
            </div>
            <div className="workspace-item">
              <span>Team Members</span>
              <strong>{members.length}</strong>
            </div>

            <div className="workspace-storage">
              <span>Storage</span>
              <strong>{workspaceStorage.used}GB / {workspaceStorage.total}GB</strong>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(workspaceStorage.used / workspaceStorage.total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
