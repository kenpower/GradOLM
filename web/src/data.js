// export const skillAreas = [
//   {
//     title: "Doing Research",
//     description: [
//       "Have disciplinary expertise",
//       "Perform scientific research",
//       "Conduct interdisciplinary research",
//       "Write research documents",
//       "Apply research ethics and integrity principles",
//     ],
//     color: "#d28900",
//   },
//   {
//     title: "Managing Research",
//     description: [
//       "Mobilise resources",
//       "Manage projects",
//       "Negotiate",
//       "Evaluate research",
//       "Promote open access publications",
//     ],
//     color: "#556fbf",
//   },
//   {
//     title: "Making an Impact",
//     description: [
//       "Participate in the publication process",
//       "Disseminate results to the research community",
//       "Teach in academic or vocational contexts",
//       "Communicate to the broad public",
//       "Increase impact of science on policy & society",
//       "Promote open innovation",
//       "Promote the transfer of knowledge",
//     ],
//     color: "#8e3d96",
//   },
//   {
//     title: "Managing Research Tools",
//     description: [
//       "Manage research data",
//       "Promote citizen science",
//       "Manage intellectual property rights",
//       "Operate open source software",
//     ],
//     color: "#5aac3b",
//   },
//   {
//     title: "Working with Others",
//     description: [
//       "Interact professionally",
//       "Develop networks",
//       "Work in teams",
//       "Ensure wellbeing at work",
//       "Build mentor-mentee relationships",
//       "Promote inclusion & diversity",
//     ],
//     color: "#e7543d",
//   },
//   {
//     title: "Self Management",
//     description: [
//       "Manage personal professional development",
//       "Show entrepreneurial spirit",
//       "Plan self-organisation",
//       "Cope with pressure",
//     ],
//     color: "#a9815f",
//   },
//   {
//     title: "Cognitive Abilities",
//     description: [
//       "Abstract thinking",
//       "Critical thinking",
//       "Analytical thinking",
//       "Strategic thinking",
//       "Systemic thinking",
//       "Problem solving",
//       "Creativity",
//     ],
//     color: "#00a9b5",
//   },
// ];

export const skillAreas = [
  {
    name: "Cognitive Abilities",
    description: "Abilities related to thinking and understanding.",
    color: "#00a9b5",
    skills: [
      {
        name: "Abstract Thinking",
        description:
          "Demonstrate the ability to use concepts to make and understand generalisations, and relate or connect them to other items, events, or experiences.",
        criteria: {
          foundational: [
            "Assimilates concepts from own discipline.",
            "Establishes relationships with own knowledge.",
          ],
          intermediate: [
            "Elaborates concepts independently.",
            "Identifies and understands complex trends and patterns.",
          ],
          advanced: [
            "Uses with confidence concepts from other disciplines.",
            "Provides insights beyond the obvious.",
          ],
          expert: [
            "Connects unrelated ideas and concepts to elaborate theories.",
            "Contributes outstanding insights pushing the frontiers of knowledge.",
          ],
        },
      },
      {
        name: "Critical Thinking",
        description:
          "Exercise critical judgement and thinking, develop own assumptions, and establish a way of working based on critical thinking.",
        criteria: {
          foundational: [
            "Understands complex arguments.",
            "Is humble and curious to listen to others’ thoughts.",
          ],
          intermediate: [
            "Formulates assumptions based on own knowledge and information acquired.",
            "Consciously tries to avoid biased thinking and behaviour.",
          ],
          advanced: [
            "Makes sound and realistic judgements based on evidence.",
            "Includes approaches to ensure focus on critical thinking in research projects.",
          ],
          expert: [
            "Stimulates critical thinking in less experienced researchers and peers.",
            "Builds research processes and environments where critical thinking is central.",
          ],
        },
      },
      {
        name: "Analytical Thinking",
        description:
          "Using logic and reasoning to develop alternative solutions, conclusions, or approaches to problems and identify their strengths and weaknesses.",
        criteria: {
          foundational: [
            "Analyses basic information, data, and ideas.",
            "Assesses and evaluates own findings and datasets.",
          ],
          intermediate: [
            "Critically analyses complex information, data, and ideas from diverse sources.",
            "Assesses and evaluates findings and datasets of others.",
          ],
          advanced: [
            "Masters a broad range of analytical methods, and actively seeks to learn new ones.",
            "Supports less experienced researchers and staff to develop their critical analytical skills.",
          ],
          expert: [
            "Makes an outstanding use of logic and reasoning to analyse research problems.",
            "Develops new analytical approaches and methods.",
          ],
        },
      },
      {
        name: "Strategic Thinking",
        description:
          "Develop a vision to turn ideas into action. Obtain and synthesize information to identify and explore trends, opportunities, threats (also based on intuition and creativity) to achieve a long-term goal and to thrive in a competitive, changing environment.",
        criteria: {
          foundational: [
            "Synthesises basic information, data and ideas.",
            "Positions own research in the field’s research landscape and connects it with existing knowledge.",
          ],
          intermediate: [
            "Understands the broader context of research.",
            "Strategically aligns own research with institutional and/or disciplinary focus.",
          ],
          advanced: [
            "Creates visionary ideas and/or ways of working.",
            "Critically synthesises complex information, data, and ideas from diverse sources.",
          ],
          expert: [
            "Establishes new and unexpected connections across research areas and sectors.",
            "Ideates visionary research projects.",
          ],
        },
      },
      {
        name: "Systemic Thinking",
        description:
          "Understand and take account of the characteristics of (inter)national research systems where researchers interact with all relevant stakeholders and of the position of individual researchers and their organisation within the system.",
        criteria: {
          foundational: [
            "Differentiates between complicated and complex research challenges and knows why this distinction matters.",
            "Understands the national and international research landscape of own discipline.",
          ],
          intermediate: [
            "Actively engages in collaborative interactions within the research system.",
            "Understands the research landscape, and the complex interaction between its actors, beyond own discipline.",
          ],
          advanced: [
            "Enables others to appreciate and engage with complex research challenges.",
            "Masters the main components of a specific research system and identifies properties of components and key interactions.",
          ],
          expert: [
            "Establishes relationships with all relevant stakeholders inside and outside academia to develop own research area.",
            "Changes and improves the complex interconnections between research and other sectors.",
          ],
        },
      },
      {
        name: "Problem Solving",
        description:
          "Develop and implement solutions to practical, operational or conceptual problems which arise in the execution of work in a wide range of contexts.",
        criteria: {
          foundational: [
            "Inquires about basic themes of own research.",
            "Elaborates simple research hypotheses.",
          ],
          intermediate: [
            "Assesses the effectiveness of own and others’ solutions to research problems.",
            "Formulates and verifies hypotheses addressing a broad range of research problems.",
          ],
          advanced: [
            "Tackles new, complex, and interdisciplinary problems.",
            "Challenges existing hypotheses and proposes new ones based on evidence.",
          ],
          expert: [
            "Ideates projects challenging traditional thinking and brings new knowledge through own research.",
            "Makes major contributions to understanding and solving complex problems.",
          ],
        },
      },
      {
        name: "Creativity",
        description:
          "Develop several ideas and opportunities to create value, including better solutions to existing and new challenges. Explore and experiment with innovative approaches.",
        criteria: {
          foundational: [
            "Is inquisitive, curious, and open-minded.",
            "Seeks different perspectives.",
          ],
          intermediate: [
            "Generates, expresses, and tests new ideas and solutions.",
            "Explores ideas also from different areas.",
          ],
          advanced: [
            "Creates novel and valuable ideas.",
            "Inspires and develops others’ inquiry style.",
          ],
          expert: [
            "Expands existing solutions, or proposes new ones, for relevant scientific problems.",
            "Challenges the status quo in a visionary way.",
          ],
        },
      },
    ],
  },
  {
    name: "Working with Others",
    description: "Skills required for effective teamwork and collaboration.",
    color: "#e7543d",
    skills: [
      {
        name: "Interact Professionally",
        description:
          "Show consideration to others and professional collegial behaviour. Engage effectively and in a goal-directed manner with other people in a professional setting.",
        criteria: {
          foundational: [
            "Listens to other people’s ideas with no prejudice.",
            "Understands the value of collegial behaviour and works professionally and collaboratively.",
          ],
          intermediate: [
            "Asks colleagues for feedback, advice, and critical appraisal of own work.",
            "Embraces behaviours that foster effective and positive interactions with colleagues in a goal-oriented manner.",
          ],
          advanced: [
            "Professionally interacts goal-oriented/productively with colleagues both in own and other disciplinary areas.",
            "Supervises and supports the development of less experienced colleagues.",
          ],
          expert: [
            "Communicates as peers with colleagues of any rank.",
            "Is recognised for own effective leadership style.",
          ],
        },
      },
      {
        name: "Develop Networks",
        description:
          "Develop alliances, contacts or partnerships, and exchange information with others. Foster integrated and open collaborations where different stakeholders co-create shared value research and innovations.",
        criteria: {
          foundational: [
            "Understands the value of collaborative work.",
            "Builds and fosters working relationships with colleagues.",
          ],
          intermediate: [
            "Promotes oneself as collaborative and accessible.",
            "Contributes to multi- or cross-disciplinary collaborative teams.",
          ],
          advanced: [
            "Develops collaborative networks and actively includes colleagues in these.",
            "Makes use of face-to-face and online networking environments for promotion of own profile and research.",
          ],
          expert: [
            "Builds and leads collaboration partnerships within and outside own institution.",
            "Is an influential leader of large international consortia with academic and non-academic partners.",
          ],
        },
      },
      {
        name: "Work in Teams",
        description:
          "Work confidently within a group with each doing their part in the service of the whole.",
        criteria: {
          foundational: [
            "Works within teams under supervision to produce research outputs.",
            "Appreciates the impact of own behaviour on teamwork.",
          ],
          intermediate: [
            "Recognises the importance of team leadership behaviours.",
            "Understands own priorities and those of own coworkers, creates a cooperative work environment, and optimizes the output of teamwork.",
          ],
          advanced: [
            "Understands team dynamics and how to manage conflict and appraisal of team members.",
            "Leverages the strengths of different team members to achieve outstanding results.",
          ],
          expert: [
            "Is known for building and leading successful teams.",
            "Enhances the transformative capacity of the organisation by recruiting, training, and building teams.",
          ],
        },
      },
      {
        name: "Ensure Wellbeing at Work",
        description:
          "Understand the links between work, physical and mental health, and wellbeing. Be adequately informed about health promotion and disease prevention to take responsibility for the personal work situation.",
        criteria: {
          foundational: [
            "Understands the link between work, physical and mental health, and wellbeing.",
            "Uses support and advisory resources to avoid stress and pressure.",
          ],
          intermediate: [
            "Maintains a leveled work-life balance.",
            "Is well informed about health promotion and takes responsibility for own work situation.",
          ],
          advanced: [
            "Assists colleagues manage pressure and stress and contributes to a healthy work environment.",
            "Actively pursues and promotes work-life balance and tracks well-being issues at work, for self and team.",
          ],
          expert: [
            "Designs and implements policies on work-life balance and well-being at work.",
            "Supports the whole organisation in developing a healthy work environment.",
          ],
        },
      },
      {
        name: "Build Mentor-Mentee Relationships",
        description:
          "Contribute to the learning and development of others. Build mutually beneficial, trusting relationships, and contribute to learning and development of others and to one's own development.",
        criteria: {
          foundational: [
            "Shows interest in learning from others.",
            "Understands that mentor-mentee relationships contribute to the development of oneself and others.",
          ],
          intermediate: [
            "Approaches less experienced colleagues, offering help and advice.",
            "Engages in informal mentoring relationships.",
          ],
          advanced: [
            "Engages in formal mentor-mentee relationships.",
            "Contributes to a supportive environment and development of mentees.",
          ],
          expert: [
            "Designs mentor-mentee programmes for the benefit of others.",
            "Establishes a culture where mentoring is encouraged and valued.",
          ],
        },
      },
      {
        name: "Promote Inclusion & Diversity",
        description:
          "Actively promote inclusive environments in which every individual or group is welcomed, respected, supported, and valued to fully participate.",
        criteria: {
          foundational: [
            "Understands the value of diversity and inclusion.",
            "Promotes inclusivity and avoids behaviours that would exclude others.",
          ],
          intermediate: [
            "Engages in discussions on inclusion and diversity in the workplace.",
            "Advocates for inclusive practices within the team and wider organisation.",
          ],
          advanced: [
            "Implements strategies to enhance diversity and inclusion in the workplace.",
            "Serves as a role model for inclusive practices.",
          ],
          expert: [
            "Shapes organisational culture to be inclusive and diverse.",
            "Leads initiatives to promote inclusion and diversity at a national or international level.",
          ],
        },
      },
    ],
  },
  {
    name: "Self Management",
    description: "Skills for managing personal and professional development.",
    color: "#a9815f",
    skills: [
      {
        name: "Manage Personal Professional Development",
        description:
          "Actively plan and pursue personal and professional growth to enhance competencies.",
        criteria: {
          foundational: [
            "Recognizes areas for personal and professional growth.",
            "Seeks opportunities for learning and development.",
          ],
          intermediate: [
            "Sets personal and professional development goals.",
            "Engages in activities that enhance skills and knowledge.",
          ],
          advanced: [
            "Creates a structured personal development plan.",
            "Actively mentors others in their development.",
          ],
          expert: [
            "Leads personal development programs at an organisational level.",
            "Influences professional development strategies beyond own organisation.",
          ],
        },
      },
      {
        name: "Show Entrepreneurial Spirit",
        description:
          "Demonstrate initiative and entrepreneurial behaviour to create value and drive change.",
        criteria: {
          foundational: [
            "Shows enthusiasm for new opportunities and challenges.",
            "Initiates new projects or ideas.",
          ],
          intermediate: [
            "Develops and pitches ideas to stakeholders.",
            "Seeks out and leverages opportunities for innovation.",
          ],
          advanced: [
            "Successfully leads entrepreneurial initiatives.",
            "Mentors others in developing entrepreneurial skills.",
          ],
          expert: [
            "Influences the strategic direction of an organisation through entrepreneurial efforts.",
            "Recognized as a thought leader in fostering innovation.",
          ],
        },
      },
      {
        name: "Plan Self-Organisation",
        description:
          "Effectively plan, organize, and manage time and resources for personal and professional productivity.",
        criteria: {
          foundational: [
            "Manages daily tasks effectively.",
            "Understands the importance of planning and prioritization.",
          ],
          intermediate: [
            "Creates and follows a structured plan to achieve objectives.",
            "Adapts plans and strategies based on situational needs.",
          ],
          advanced: [
            "Demonstrates high efficiency in managing multiple tasks and deadlines.",
            "Teaches others time management and organizational skills.",
          ],
          expert: [
            "Develops time management frameworks for others to follow.",
            "Optimizes organisational processes to improve productivity.",
          ],
        },
      },
      {
        name: "Cope with Pressure",
        description:
          "Manage stress and pressure effectively to maintain performance and wellbeing.",
        criteria: {
          foundational: [
            "Recognizes own stress signals and takes steps to manage stress.",
            "Seeks support when necessary.",
          ],
          intermediate: [
            "Maintains performance under pressure.",
            "Uses stress management techniques to cope with challenges.",
          ],
          advanced: [
            "Mentors others in managing stress and maintaining resilience.",
            "Implements strategies to reduce stress in the workplace.",
          ],
          expert: [
            "Leads initiatives to promote mental health and resilience in the workplace.",
            "Recognized as a leader in promoting a balanced and supportive work environment.",
          ],
        },
      },
    ],
  },
  {
    name: "Making an Impact",
    description:
      "Skills to make a significant impact through research and dissemination.",
    color: "#8e3d96",
    skills: [
      {
        name: "Participate in the Publication Process",
        description:
          "Actively engage in the publication process to disseminate research findings and contribute to the body of knowledge.",
        criteria: {
          foundational: [
            "Understands the basics of the publication process.",
            "Collaborates with others to publish research.",
          ],
          intermediate: [
            "Publishes as lead author in peer-reviewed journals.",
            "Guides less experienced researchers through the publication process.",
          ],
          advanced: [
            "Serves as a reviewer or editor for academic journals.",
            "Develops strategies for disseminating research to a broader audience.",
          ],
          expert: [
            "Leads initiatives to improve publication practices and accessibility.",
            "Influences the development of new standards in scholarly publishing.",
          ],
        },
      },
      {
        name: "Disseminate Results to the Research Community",
        description:
          "Effectively share research results with the academic and research community to advance knowledge and foster collaboration.",
        criteria: {
          foundational: [
            "Presents research findings at local conferences or meetings.",
            "Shares results with colleagues and peers.",
          ],
          intermediate: [
            "Presents at national or international conferences.",
            "Engages in discussions and collaborations based on research findings.",
          ],
          advanced: [
            "Organizes sessions or workshops at conferences.",
            "Actively contributes to the dissemination of findings across disciplines.",
          ],
          expert: [
            "Leads global dissemination efforts to advance research in their field.",
            "Shapes the agenda of major research conferences and symposiums.",
          ],
        },
      },
      {
        name: "Teach in Academic or Vocational Contexts",
        description:
          "Engage in teaching and training activities to impart knowledge and skills in academic or vocational settings.",
        criteria: {
          foundational: [
            "Assists in teaching or training activities.",
            "Develops basic teaching materials and lesson plans.",
          ],
          intermediate: [
            "Leads lectures or workshops in own area of expertise.",
            "Evaluates and improves teaching practices based on feedback.",
          ],
          advanced: [
            "Designs comprehensive courses and curricula.",
            "Mentors other educators in developing their teaching skills.",
          ],
          expert: [
            "Leads initiatives to innovate teaching and learning methods.",
            "Recognized for excellence in teaching at the institutional or national level.",
          ],
        },
      },
      {
        name: "Communicate to the Broad Public",
        description:
          "Engage with non-academic audiences to communicate research findings and increase public understanding and appreciation of science.",
        criteria: {
          foundational: [
            "Participates in outreach activities and events.",
            "Develops basic communication materials for a lay audience.",
          ],
          intermediate: [
            "Writes articles or gives talks to explain research to non-specialists.",
            "Engages with media to share research findings.",
          ],
          advanced: [
            "Leads public engagement projects and initiatives.",
            "Trains others in effective science communication.",
          ],
          expert: [
            "Influences public policy through communication efforts.",
            "Recognized as a leader in public engagement and science communication.",
          ],
        },
      },
      {
        name: "Increase Impact of Science on Policy & Society",
        description:
          "Work towards ensuring that scientific research has a positive impact on policy and society.",
        criteria: {
          foundational: [
            "Understands the role of research in informing policy.",
            "Engages in basic policy discussions and networks.",
          ],
          intermediate: [
            "Advises policymakers based on research findings.",
            "Participates in policy-relevant research initiatives.",
          ],
          advanced: [
            "Leads research projects with clear policy implications.",
            "Develops relationships with policymakers and stakeholders.",
          ],
          expert: [
            "Shapes national or international policy through research contributions.",
            "Leads initiatives to integrate scientific evidence into policymaking processes.",
          ],
        },
      },
      {
        name: "Promote Open Innovation",
        description:
          "Foster open innovation practices to encourage the exchange of ideas and collaboration across sectors and disciplines.",
        criteria: {
          foundational: [
            "Understands the principles of open innovation.",
            "Participates in open innovation networks and projects.",
          ],
          intermediate: [
            "Develops and implements open innovation strategies.",
            "Facilitates collaboration across disciplines and sectors.",
          ],
          advanced: [
            "Leads major open innovation initiatives and projects.",
            "Mentors others in applying open innovation principles.",
          ],
          expert: [
            "Influences the development of policies and practices to promote open innovation.",
            "Recognized as a thought leader in the field of open innovation.",
          ],
        },
      },
      {
        name: "Promote the Transfer of Knowledge",
        description:
          "Facilitate the transfer of knowledge between academia, industry, and society to maximize the impact of research.",
        criteria: {
          foundational: [
            "Engages in knowledge transfer activities and collaborations.",
            "Shares research findings with industry and societal stakeholders.",
          ],
          intermediate: [
            "Develops strategies for effective knowledge transfer.",
            "Builds partnerships to enhance the impact of research.",
          ],
          advanced: [
            "Leads knowledge transfer initiatives at an institutional level.",
            "Advises others on knowledge transfer best practices.",
          ],
          expert: [
            "Shapes national or international knowledge transfer policies and practices.",
            "Recognized as a leader in maximizing the impact of research through knowledge transfer.",
          ],
        },
      },
    ],
  },
  {
    name: "Managing Research",
    description: "Skills to manage and lead research projects and initiatives.",
    color: "#556fbf",
    skills: [
      {
        name: "Mobilise Resources",
        description:
          "Identify and secure the resources needed for research projects, including funding, personnel, and infrastructure.",
        criteria: {
          foundational: [
            "Identifies basic resource needs for research projects.",
            "Applies for small grants or internal funding opportunities.",
          ],
          intermediate: [
            "Secures funding from national or international sources.",
            "Develops budgets and resource plans for research projects.",
          ],
          advanced: [
            "Leads large-scale research projects with significant resource needs.",
            "Mentors others in securing funding and resources.",
          ],
          expert: [
            "Influences resource allocation at an institutional or national level.",
            "Recognized for securing major grants and resources for research.",
          ],
        },
      },
      {
        name: "Manage Projects",
        description:
          "Plan, execute, and monitor research projects to ensure they meet their objectives, deadlines, and budget constraints.",
        criteria: {
          foundational: [
            "Assists in managing research projects.",
            "Understands basic project management principles.",
          ],
          intermediate: [
            "Leads small research projects or components of larger projects.",
            "Monitors project progress and makes adjustments as needed.",
          ],
          advanced: [
            "Leads large, complex research projects.",
            "Mentors others in project management skills.",
          ],
          expert: [
            "Shapes project management practices and standards at an institutional level.",
            "Recognized as a leader in managing high-impact research projects.",
          ],
        },
      },
      {
        name: "Negotiate",
        description:
          "Effectively negotiate with stakeholders, collaborators, and funding bodies to achieve favorable outcomes for research projects.",
        criteria: {
          foundational: [
            "Participates in basic negotiations with guidance.",
            "Understands key negotiation principles and techniques.",
          ],
          intermediate: [
            "Leads negotiations with collaborators or stakeholders.",
            "Develops negotiation strategies to achieve research objectives.",
          ],
          advanced: [
            "Mentors others in negotiation skills.",
            "Leads complex negotiations involving multiple stakeholders.",
          ],
          expert: [
            "Recognized as a leader in negotiation within the research community.",
            "Influences negotiation strategies and practices at an institutional or national level.",
          ],
        },
      },
      {
        name: "Evaluate Research",
        description:
          "Assess the quality, impact, and relevance of research projects and outputs.",
        criteria: {
          foundational: [
            "Evaluates basic research projects or outputs with guidance.",
            "Understands key principles of research evaluation.",
          ],
          intermediate: [
            "Leads evaluations of research projects or outputs.",
            "Develops criteria and methods for research evaluation.",
          ],
          advanced: [
            "Mentors others in research evaluation skills.",
            "Leads evaluations of large, complex research programs.",
          ],
          expert: [
            "Influences research evaluation practices and standards at an institutional or national level.",
            "Recognized as a leader in research evaluation.",
          ],
        },
      },
      {
        name: "Promote Open Access Publications",
        description:
          "Advocate for and contribute to open access publishing to increase the visibility and accessibility of research outputs.",
        criteria: {
          foundational: [
            "Publishes in open access journals or platforms.",
            "Understands the benefits of open access publishing.",
          ],
          intermediate: [
            "Advocates for open access publishing within own institution.",
            "Develops strategies to increase open access to research outputs.",
          ],
          advanced: [
            "Leads initiatives to promote open access publishing.",
            "Mentors others in open access publishing practices.",
          ],
          expert: [
            "Shapes open access publishing policies at an institutional or national level.",
            "Recognized as a leader in promoting open access to research.",
          ],
        },
      },
    ],
  },
  {
    name: "Doing Research",
    description:
      "Skills related to conducting and leading research activities.",
    color: "#d28900",
    skills: [
      {
        name: "Have Disciplinary Expertise",
        description:
          "Possess a deep understanding of own discipline, including key theories, methods, and research questions.",
        criteria: {
          foundational: [
            "Demonstrates knowledge of key theories and methods in own discipline.",
            "Engages in ongoing learning to deepen disciplinary expertise.",
          ],
          intermediate: [
            "Applies disciplinary knowledge to conduct research.",
            "Contributes to advancing knowledge in own discipline.",
          ],
          advanced: [
            "Mentors others in developing disciplinary expertise.",
            "Leads research projects that make significant contributions to the discipline.",
          ],
          expert: [
            "Recognized as a leading expert in own discipline.",
            "Shapes the development of the discipline through research and leadership.",
          ],
        },
      },
      {
        name: "Perform Scientific Research",
        description:
          "Conduct rigorous scientific research to generate new knowledge and understanding.",
        criteria: {
          foundational: [
            "Participates in research projects under supervision.",
            "Understands the basics of scientific research methods.",
          ],
          intermediate: [
            "Independently conducts research using appropriate methods.",
            "Publishes research findings in peer-reviewed journals.",
          ],
          advanced: [
            "Leads research projects and mentors others in research methods.",
            "Contributes to advancing research methods and practices.",
          ],
          expert: [
            "Recognized as a leader in conducting high-impact research.",
            "Shapes the research agenda in their field through innovative research.",
          ],
        },
      },
      {
        name: "Conduct Interdisciplinary Research",
        description:
          "Engage in research that integrates knowledge and methods from different disciplines to address complex questions and challenges.",
        criteria: {
          foundational: [
            "Participates in interdisciplinary research projects under supervision.",
            "Understands the value of integrating knowledge from different disciplines.",
          ],
          intermediate: [
            "Leads interdisciplinary research projects or components.",
            "Develops methods for integrating knowledge across disciplines.",
          ],
          advanced: [
            "Mentors others in interdisciplinary research skills.",
            "Leads large, complex interdisciplinary research projects.",
          ],
          expert: [
            "Recognized as a leader in interdisciplinary research.",
            "Shapes the development of interdisciplinary research practices and standards.",
          ],
        },
      },
      {
        name: "Write Research Documents",
        description:
          "Effectively communicate research findings through written documents, including papers, reports, and proposals.",
        criteria: {
          foundational: [
            "Writes basic research documents with guidance.",
            "Understands key principles of scientific writing.",
          ],
          intermediate: [
            "Independently writes research papers, reports, or proposals.",
            "Develops clear and compelling arguments in written documents.",
          ],
          advanced: [
            "Mentors others in scientific writing skills.",
            "Leads the development of major research documents.",
          ],
          expert: [
            "Recognized for excellence in scientific writing.",
            "Influences the development of writing standards and practices in their field.",
          ],
        },
      },
      {
        name: "Apply Research Ethics and Integrity Principles",
        description:
          "Adhere to high standards of research ethics and integrity in conducting and reporting research.",
        criteria: {
          foundational: [
            "Understands the basic principles of research ethics and integrity.",
            "Applies ethical guidelines in research practice.",
          ],
          intermediate: [
            "Leads efforts to promote research ethics and integrity in own research group.",
            "Engages in discussions on ethical issues in research.",
          ],
          advanced: [
            "Mentors others in research ethics and integrity.",
            "Leads initiatives to promote ethical research practices.",
          ],
          expert: [
            "Recognized as a leader in promoting research ethics and integrity.",
            "Shapes policies and practices to promote ethical research at an institutional or national level.",
          ],
        },
      },
    ],
  },
  {
    name: "Managing Research Tools",
    description: "Skills for managing tools and resources for research.",
    color: "#5aac3b",
    skills: [
      {
        name: "Manage Research Data",
        description:
          "Effectively manage research data throughout the data lifecycle, from collection and storage to analysis and sharing.",
        criteria: {
          foundational: [
            "Understands the basics of research data management.",
            "Follows data management protocols and guidelines.",
          ],
          intermediate: [
            "Develops data management plans for research projects.",
            "Ensures data is stored securely and ethically.",
          ],
          advanced: [
            "Leads data management efforts for large research projects.",
            "Mentors others in research data management practices.",
          ],
          expert: [
            "Recognized as a leader in research data management.",
            "Shapes policies and practices for data management at an institutional or national level.",
          ],
        },
      },
      {
        name: "Promote Citizen Science",
        description:
          "Encourage and facilitate public participation in scientific research through citizen science initiatives.",
        criteria: {
          foundational: [
            "Participates in citizen science projects under guidance.",
            "Understands the value of public participation in research.",
          ],
          intermediate: [
            "Develops and implements citizen science projects.",
            "Engages the public in research activities.",
          ],
          advanced: [
            "Leads major citizen science initiatives.",
            "Mentors others in citizen science practices.",
          ],
          expert: [
            "Recognized as a leader in citizen science.",
            "Influences the development of citizen science policies and practices.",
          ],
        },
      },
      {
        name: "Manage Intellectual Property Rights",
        description:
          "Effectively manage intellectual property rights to protect and maximize the value of research outputs.",
        criteria: {
          foundational: [
            "Understands the basics of intellectual property rights.",
            "Follows institutional guidelines for managing intellectual property.",
          ],
          intermediate: [
            "Develops strategies for protecting intellectual property in research projects.",
            "Ensures compliance with intellectual property regulations.",
          ],
          advanced: [
            "Leads efforts to manage intellectual property rights for major research projects.",
            "Mentors others in intellectual property management practices.",
          ],
          expert: [
            "Recognized as a leader in managing intellectual property in research.",
            "Shapes intellectual property policies and practices at an institutional or national level.",
          ],
        },
      },
      {
        name: "Operate Open Source Software",
        description:
          "Use and contribute to open source software to enhance research processes and outcomes.",
        criteria: {
          foundational: [
            "Understands the basics of open source software.",
            "Uses open source tools and platforms in research.",
          ],
          intermediate: [
            "Contributes to open source software projects.",
            "Develops skills in using and adapting open source tools for research.",
          ],
          advanced: [
            "Leads initiatives to promote the use of open source software in research.",
            "Mentors others in open source software practices.",
          ],
          expert: [
            "Recognized as a leader in open source software in research.",
            "Influences the development of open source software policies and practices.",
          ],
        },
      },
    ],
  },
];
