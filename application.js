radarApplicationData = {
  svg_id: "radar",
  width: 1450,
  height: 1200,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Tech Radar - Application - April 2022",
  quadrants: [
    { name: "Platform tools" }, // quadrant 0
    { name: "Other" },          // quadrant 1
    { name: "Languages" },      // quadrant 2
    { name: "Persistence" },    // quadrant 3
  ],
  rings: [
    { name: "MAINSTREAM", color: "#93c47d" }, // ring 0
    { name: "PROPOSED", color: "#93d2c2" },   // ring 1
    { name: "CONTAIN", color: "#fbdb84" },    // ring 2
    { name: "AVOID", color: "#efafa9" },      // ring 3
  ],
  print_layout: true,
  entries: [

    // Notes & Questions:
    //  - We could standardise on naming, (not always an easy thing e.g. "Spring Boot" vs. "Spring Framework") but this would help us to integrate later with a BOM producer/scanner
    //  - Would we prefer Scala over Erlang?
    //  - Do we have any services using Ruby?
    //  - Would we go as far as saying to contain JavaScript in favour of TypeScript?
    //  - How detailed would we like to be, e.g. is 'Apache Kafka' fine with a caveat that a CP managed service should be used?

    // Platform tools
    { "quadrant": 0, "ring": 0, "label": "Alpine", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Amazon ECS", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Amazon EKS", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Amazon Fargate", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "AWS Lambda", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Azure AKS", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Azure VMs", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Docker", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 0, "label": "Terraform", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "Linux - Apache", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "Linux - Ubuntu", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "Rancher", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "Ubuntu", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "VMWare ESX", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "VMWARe NSX", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "VMWare on AWS", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 2, "label": "VMWare", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 3, "label": "HP-UX", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 3, "label": "Kubernetes", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 0, "ring": 3, "label": "RHEL", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    // Other
    // Languages
    { "quadrant": 2, "ring": 0, "label": ".Net Core", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "Java Spring", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "Node js", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "Python", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "React.js", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "TypeScript", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 0, "label": "Vue.js", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 1, "label": "Erlang", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 1, "label": "Golang", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 1, "label": "R", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 1, "label": "Ruby", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 1, "label": "Scala", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 2, "label": "Angular.js", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 2, "label": "JavaScript", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 3, "label": ".Net Framework", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 3, "label": "Java EE", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 2, "ring": 3, "label": "PHP", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    // Persistence
    { "quadrant": 3, "ring": 0, "label": "Amazon Kinesis", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 3, "ring": 0, "label": "RDS Postgres", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
    { "quadrant": 3, "ring": 1, "label": "Apache Kafka", "active": false, "link": "../data_processing/aws_emr.html", "moved": 0 },
  ]
};
