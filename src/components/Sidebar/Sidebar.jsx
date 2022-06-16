import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CallIcon from "@mui/icons-material/Call";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <li className="active">
            <div className="activeBar active"></div>
            <DashboardIcon className="icon active" />
            <span>Dashboard</span>
          </li>
          <li>
            <div className="activeBar"></div>
            <InsertDriveFileIcon className="icon" />
            <span>Project</span>
          </li>
          <li>
            <div className="activeBar"></div>

            <CalendarMonthIcon className="icon" />
            <span>Calendar</span>
          </li>
          <li>
            <div className="activeBar"></div>

            <SendIcon className="icon" />
            <span>Messages</span>
            <div className="noti">5</div>
          </li>
          <li>
            <div className="activeBar"></div>

            <NotificationsActiveIcon className="icon" />
            <span>Notification</span>
            <div className="noti">5</div>
          </li>
          <li>
            <div className="activeBar"></div>

            <CallIcon className="icon" />
            <span>Contacts</span>
          </li>

          <p className="title">Promotions</p>

          <li>
            <div className="activeBar"></div>

            <ShowChartIcon className="icon" />
            <span>Promotions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
