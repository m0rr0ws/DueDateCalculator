function calculateDueDate(submitDate, turnaroundTime) {
    // Define the working hours
    const startWorkHour = 9;
    const endWorkHour = 17;
  
    // Define the workdays and holidays
    const workdays = [1, 2, 3, 4, 5]; // Monday to Friday
    const holidays = []; // Add holiday dates here
  
    // Convert submitDate to Date object
    const submitDateTime = new Date(submitDate);
  
    // Check if submitDateTime is within working hours
    if (submitDateTime.getHours() < startWorkHour || submitDateTime.getHours() >= endWorkHour) {
      throw new Error('Submit date should be within working hours (9AM to 5PM)');
    }
  
    // Calculate the due date
    let dueDateTime = new Date(submitDateTime);
    let remainingTime = turnaroundTime;
  
    while (remainingTime > 0) {
      // Move dueDateTime to the next working hour
      dueDateTime.setTime(dueDateTime.getTime() + 60 * 60 * 1000); // add 1 hour
      if (dueDateTime.getHours() < startWorkHour) {
        // move to the start of the next working day
        dueDateTime.setHours(startWorkHour);
        dueDateTime.setDate(dueDateTime.getDate() + 1);
      } else if (dueDateTime.getHours() >= endWorkHour) {
        // move to the start of the next working day
        dueDateTime.setHours(startWorkHour);
        dueDateTime.setDate(dueDateTime.getDate() + 1);
      } else if (!workdays.includes(dueDateTime.getDay())) {
        // move to the start of the next working day
        dueDateTime.setHours(startWorkHour);
        dueDateTime.setDate(dueDateTime.getDate() + 1);
      } else if (holidays.some(h => h.toDateString() === dueDateTime.toDateString())) {
        // move to the start of the next working day
        dueDateTime.setHours(startWorkHour);
        dueDateTime.setDate(dueDateTime.getDate() + 1);
      } else {
        remainingTime--;
      }
    }
  
    return dueDateTime;
  }
  

export default calculateDueDate;