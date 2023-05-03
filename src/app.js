import 'dotenv/config';
import CalculateDueDate from './CalculateDueDate.js';


console.log("Entry I ==>" + CalculateDueDate(new Date("05-02-2023 14:12:00"), 16));
console.log("Entry II ==>" + CalculateDueDate(new Date("05-05-2023 16:12:00"), 10));