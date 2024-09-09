<script>
  import PrioritiseLists from "./PrioritiseLists.svelte";

  let priorities = [
    {
      name: "Have disciplinary expertise",
      type: "priority",
      category: "Doing Research",
      color: "orange",
    },
    {
      name: "Mobilise resources",
      type: "priority",
      category: "Managing Research",
      color: "green",
    },
    {
      name: "Perform scientific research",
      type: "priority",
      category: "Doing Research",
      color: "orange",
    },
    {
      name: "Conduct interdisciplinary research",
      type: "priority",
      category: "Doing Research",
      color: "orange",
    },
  ];

  let futureSkills = [
    {
      name: "Write research documents",
      type: "future",
      category: "Doing Research",
      color: "orange",
    },
    {
      name: "Apply research ethics and integrity principles",
      type: "future",
      category: "Doing Research",
      color: "orange",
    },
    {
      name: "Manage projects",
      type: "future",
      category: "Managing Research",
      color: "green",
    },
    {
      name: "Negotiate",
      type: "future",
      category: "Managing Research",
      color: "green",
    },
    {
      name: "Evaluate research",
      type: "future",
      category: "Doing Research",
      color: "green",
    },
    {
      name: "Promote open access publications",
      type: "future",
      category: "Managing Research",
      color: "green",
    },
  ];
</script>

<PrioritiseLists {priorities} {futureSkills} />
