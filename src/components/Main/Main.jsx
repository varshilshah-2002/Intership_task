import "./Main.scss";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import TaskIcon from "@mui/icons-material/Task";

export default function Main() {
  return (
    <div className="main_container">
      {/* Welcome Section*/}
      <div>
        <h1 className="title">Welcome back, Andrew!</h1>
        <p className="desc">Have a look at the Quick Progress Bar.</p>
        <div className="welcome_card_container">
          <div className="live card">
            <span className="cardBox_container">
              <span className="card_box icon_box">
                <SignalCellularAltIcon className="icon" />
                Live Projects
              </span>
              <span className="card_box view">View All</span>
            </span>
            <h1>56</h1>
            <p>Currently, the projects is in progress.</p>
          </div>
          <div className="progress card">
            <span className="card_box icon_box">
              <HourglassTopIcon className="icon" />
              In Progress
            </span>
            <h1>124</h1>
            <p>Projects in progress</p>
          </div>
          <div className="completed card">
            <span className="card_box icon_box">
              <TaskIcon className="icon" />
              Completed
            </span>
            <h1>24</h1>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>

      {/* Current Section*/}

      <div>
        <h1 className="title">Current Projects</h1>
        <p className="desc">Projects that are currently in progress</p>
        <div className="current_card_container">
          <div className="card">
            <h1 className="card_title">Construction Project</h1>
            <p className="card_desc">Property name</p>
            <span>
              <h2>100 - 800</h2>
              <h2>Deadline - 25 may</h2>
            </span>
            <span className="progess_bar"></span>
            <span className="progess">
              <p>Progress bar</p>
              <p className="bold">75%</p>
            </span>
            <span>
              <img src="images/profile.png" alt="profile" />
              <p className="card_desc">Vender's name</p>
              <button>View</button>
            </span>
          </div>
          <div className="card">
            <h1 className="card_title">Construction Project</h1>
            <p className="card_desc">Property name</p>
            <span>
              <h2>100 - 800</h2>
              <h2>Deadline - 25 may</h2>
            </span>
            <span className="progess_bar"></span>
            <span className="progess">
              <p>Progress bar</p>
              <p className="bold">75%</p>
            </span>
            <span>
              <img src="images/profile.png" alt="profile" />
              <p className="card_desc">Vender's name</p>
              <button>View</button>
            </span>
          </div>
          <div className="card">
            <h1 className="card_title">Construction Project</h1>
            <p className="card_desc">Property name</p>
            <span>
              <h2>100 - 800</h2>
              <h2>Deadline - 25 may</h2>
            </span>
            <span className="progess_bar"></span>
            <span className="progess">
              <p>Progress bar</p>
              <p className="bold">75%</p>
            </span>
            <span>
              <img src="images/profile.png" alt="profile" />
              <p className="card_desc">Vender's name</p>
              <button>View</button>
            </span>
          </div>
        </div>
      </div>

      {/* Pending Section*/}

      <div>
        <h1 className="title">Pending Invoice</h1>
        <p className="desc">Invoices that are currently pending</p>
        <div className="pending_card_container">
          <div className="card">
            <h1 className="card_title">$137.00</h1>
            <span>
              <p className="card_desc">Amount</p>
              <button className="approved">Approved</button>
            </span>
            <span className="profile">
              <img src="images/profile2.png" alt="profile" />
              <span className="details">
                <h2 className="card_desc">Erin Gonzales</h2>
                <span>
                  <p>#5331</p>
                  <p className="date">Date: 25 May</p>
                </span>
              </span>
            </span>
          </div>
          <div className="card">
            <h1 className="card_title">$137.00</h1>
            <span>
              <p className="card_desc">Amount</p>
              <button>Pending</button>
            </span>
            <span className="profile">
              <img src="images/profile2.png" alt="profile" />
              <span className="details">
                <h2 className="card_desc">Erin Gonzales</h2>
                <span>
                  <p>#5331</p>
                  <p className="date">Date: 25 May</p>
                </span>
              </span>
            </span>
          </div>
          <div className="card">
            <h1 className="card_title">$137.00</h1>
            <span>
              <p className="card_desc">Amount</p>
              <button>Pending</button>
            </span>
            <span className="profile">
              <img src="images/profile2.png" alt="profile" />
              <span className="details">
                <h2 className="card_desc">Erin Gonzales</h2>
                <span>
                  <p>#5331</p>
                  <p className="date">Date: 25 May</p>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
