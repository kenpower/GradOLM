<script>
  import Stars from "./Stars.svelte";
  import { appData } from "./router.js";

  export let area = $appData;

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
    <h2>{area.name}</h2>

    <Stars filled={3} background_color={area.color} />

    <p>{area.description}</p>

    {#each area.skills as skill}
      <div class="skill">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>

        {#each Object.entries(skill.criteria) as [level, criteria]}
          {#if level != "expert" && level != "advanced"}
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
                    <Stars filled={1} number={3} color={"#F8B143"} />
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        {/each}
        <h6>advanced and expert criteria hidden ...</h6>
        <h4>Resources for {skill.name}</h4>
        <ul>
          <li><a href="https://www.google.com">Google</a></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
          <li><a href="https://www.github.com">GitHub</a></li>
        </ul>
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
