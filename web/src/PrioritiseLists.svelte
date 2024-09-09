<script>
  export let priorities = null;
  export let futureSkills = null;

  let draggedItem = null;
  let draggedFrom = null;

  // Handle drag start
  const handleDragStart = (item, fromList) => {
    draggedItem = item;
    draggedFrom = fromList;

    console.log("draggedItem", draggedItem, "draggedFrom", draggedFrom);
  };

  // Handle dropping an item
  const handleDrop = (targetList) => {
    if (draggedFrom === "priorities" && targetList === "futureSkills") {
      moveItem(priorities, futureSkills);
    } else if (draggedFrom === "futureSkills" && targetList === "priorities") {
      moveItem(futureSkills, priorities);
    }
    draggedItem = null;
    draggedFrom = null;
  };

  const moveItem = (fromList, toList) => {
    console.log("fromList", fromList, "toList", toList);
    const index = fromList.indexOf(draggedItem);
    if (index > -1) {
      fromList.splice(index, 1);
      toList.push(draggedItem);
    }

    priorities = [...priorities];
    futureSkills = [...futureSkills];
  };

  // Prevent default behavior when dragging over a valid target
  const allowDrop = (event) => event.preventDefault();
</script>

<div class="container">
  <h2 class="header">Prioritize Research Skills</h2>
  <p>
    Drag skills to reorder. Skills above the line are your current priorities.
  </p>

  <!-- Legend -->
  <div class="legend">
    <div><span style="background-color: orange;"></span> Doing Research</div>
    <div><span style="background-color: green;"></span> Managing Research</div>
  </div>

  <!-- Current Priorities -->
  <div
    class="skills-list"
    on:dragover={allowDrop}
    on:drop={() => handleDrop("priorities")}
  >
    {#each priorities as skill}
      <div
        class="skill-item"
        style="border-left: 4px solid {skill.color};"
        draggable="true"
        on:dragstart={() => handleDragStart(skill, "priorities")}
      >
        <p>{skill.name}</p>
        <p>Priority</p>
      </div>
    {/each}
  </div>

  <div class="priority-line"></div>

  <!-- Future Skills -->
  <div
    class="skills-list"
    on:dragover={allowDrop}
    on:drop={() => handleDrop("futureSkills")}
  >
    {#each futureSkills as skill}
      <div
        class="skill-item"
        style="border-left: 4px solid {skill.color};"
        draggable="true"
        on:dragstart={() => handleDragStart(skill, "futureSkills")}
      >
        <p>{skill.name}</p>
        <p>Future</p>
      </div>
    {/each}
  </div>

  <!-- Save Button -->
  <button>Save Priorities</button>
</div>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    font-family: sans-serif;
  }

  .header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .legend {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .legend div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .legend div span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
  }

  .skills-list {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 5px;
    min-height: 150px;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
  }

  .skill-item {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: grab;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skill-item p {
    margin: 0;
    padding: 0;
  }

  .priority-line {
    border-bottom: 1px dashed #ccc;
    margin: 1rem 0;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
