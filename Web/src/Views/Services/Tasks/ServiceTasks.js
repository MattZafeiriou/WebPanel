function AddTask(props) {
  // get deadline in format yyyy-mm-dd hh:mm
  const taskDate = new Date(props.deadline);
  const now = new Date();

  let color = 'rgb(200,200,200)';
  let text = 'In Progress';
  if (props.status === 'Done') {
    text = 'Done';
    color = 'rgb(0, 200, 0)';
  }
  else if (props.status === 'In Progress') {
    if (taskDate < now) {
      color = 'rgb(200, 0, 0)';
      text = 'Overdue';
    }
  }

  return (
    <div className="container row">
      <div className="flex column" style={{ width: '8%' }}>
      <h4 style={{ color: color, fontSize: '1.2rem', fontWeight: '600' }}>{text}</h4>
      <h4 style={{ color: 'rgb(200,200,200)', fontSize: '0.9rem', marginTop: '.5rem' }}>{props.deadline}</h4>
      </div>
      <div style={{ width: '100%' }} className={"container container-inside row " + ((props.status === 'Done') ? "background-secondary-disabled" : "background-secondary") + " container-text"}>
        <div className="container column" style={{ width: '100%' }}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className="container row">
          <button className="container-text button-danger"><h3><b>Edit</b></h3></button>
          <button className="container-text button-danger"><h3><b>Delete</b></h3></button>
        </div>
      </div>
    </div>
  );
}

function EditTaskModal(props) {
  return (
    <div className="modal" id="editTaskModal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Task</h2>
          <span className="close" onClick={() => document.getElementById('editTaskModal').style.display = 'none'}>&times;</span>
        </div>
        <div className="modal-body">
          <form className="container column">
            <input type="text" placeholder="Task Name" />
            <input type="text" placeholder="Task Description" />
            <input type="datetime-local" />
            <select>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button className="container-text button-danger"><h3><b>Save</b></h3></button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ServiceTasks() {
  const service = window.location.pathname.split('/')[2];

  return (
    <div className="container container-inside" style={{ height: '100%' }}>
      <EditTaskModal />
      <div className="background container-box-shadow container-inside" style={{ maxHeight: '100%', overflowY: 'auto', boxSizing: 'border-box' }}>
        <h2>Tasks</h2>
        <hr />
        <div className="container row">
          <a style={{ width: '100%' }} href={"/services/" + service + "/tasks/new-task"}>
            <div className={"container container-inside column background-secondary container-text"}>
              <h3>Add New Task</h3>
            </div>
          </a>
        </div>
        <div className="container column" style={{ height: '100%', marginTop: '1rem' }}>
          <AddTask name="Nigga task" description="Second Payment for service Nigga." deadline="2025-01-01 12:00" status="Done" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2025-01-01 12:00" status="Done" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2025-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
          <AddTask name="Fucking i hate niggers" description="First Payment for service Nigga." deadline="2022-01-01 12:00" status="In Progress" />
        </div>
      </div>
    </div>
  );
}

export default ServiceTasks;