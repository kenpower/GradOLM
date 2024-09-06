<script>
  import Stars from "./Stars.svelte";

  export let area;

  // Track which criteria are checked
  let checkedCriteria = new Set();

  function toggleCheck(criteria) {
    if (checkedCriteria.has(criteria)) {
      checkedCriteria.delete(criteria);
    } else {
      checkedCriteria.add(criteria);
    }
  }

  function isChecked(criteria) {
    return checkedCriteria.has(criteria);
  }

  console.log(area);
</script>

<div>
  <div class="skill-area" style="--color: {area.color}">
    <h2>
      {area.name}
      <span style="background-color: {area.color}">
        <Stars filled={3} />
      </span>
    </h2>
    <p>{area.description}</p>

    {#each area.skills as skill}
      <div class="skill">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>

        {#each Object.entries(skill.criteria) as [level, criteria]}
          <div class="criteria-level">
            <h4>{level.charAt(0).toUpperCase() + level.slice(1)}</h4>
            <ul class="criteria-list">
              {#each criteria as criterion}
                <li>
                  <input
                    type="checkbox"
                    class="checkbox"
                    checked={isChecked(criterion)}
                    on:change={() => toggleCheck(criterion)}
                  />
                  <span
                    class="criteria-label {isChecked(criterion)
                      ? 'checked'
                      : ''}">{criterion}</span
                  >
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .skill-area {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    background-color: #f7f9fa;
    border: 1px solid #ddd;
  }

  .skill-area h2 {
    color: var(--color);
  }

  .skill {
    margin-bottom: 20px;
  }

  .criteria-level {
    margin-bottom: 10px;
  }

  .criteria-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .criteria-list li {
    padding: 5px 0;
    display: flex;
    align-items: center;
  }

  .checkbox {
    margin-right: 10px;
  }

  .checked {
    text-decoration: line-through;
  }

  .criteria-label {
    flex-grow: 1;
  }
</style>
