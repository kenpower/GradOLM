import { skillAreas } from "./data.js";

let data = skillAreas;
let i = 0;

// Function to add an 'id' field to each skill and criteria
const addIds = (data) => {
  data.forEach((area) => {
    area.area_id = i++;
    console.log(area);
    area.skills.forEach((skill) => {
      // Generate and assign a unique ID for the skill
      skill.skill_id = i++;

      // Assign IDs to each criteria level within the skill
      var new_criteria = [];
      for (const level in skill.criteria) {
        skill.criteria[level].forEach((criterion) => {
          new_criteria.push({
            criteria_id: i++,
            description: criterion,
            level: level,
          });
        });
      }
      skill.criteria = new_criteria;
    });
  });
};

// Apply the function to add IDs
addIds(data);

// Output the modified data
console.log(JSON.stringify(data, null, 2));
