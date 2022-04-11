radarData = {
  svg_id: "radar",
  width: 1450,
  height: 1200,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Tech Radar - Engineering - April 2022",
  quadrants: [
    { name: "Code analysis" },  // quadrant 0
    { name: "Test tools" },     // quadrant 1
    { name: "Build tools" },    // quadrant 2
    { name: "Observability" }   // quadrant 3
  ],
  rings: [
    { name: "MAINSTREAM", color: "#93c47d" }, // ring 0
    { name: "PROPOSED", color: "#93d2c2" },   // ring 1
    { name: "CONTAIN", color: "#fbdb84" },    // ring 2
    { name: "AVOID", color: "#efafa9" }       // ring 3
  ],
  print_layout: true,
  //zoomed_quadrant: 1,
  //ENTRIES
  entries: [
    { quadrant: 0, ring: 0, label: "black", moved: 0, active: false, link: "#" },
    { quadrant: 0, ring: 0, label: "EditorConfig", moved: 0, active: false, link: "#" },
    { quadrant: 0, ring: 0, label: "flake8", moved: 0, active: false, link: "#" },
    { quadrant: 0, ring: 0, label: "pylint", moved: 0, active: false, link: "#" },
    { quadrant: 0, ring: 1, label: "tfsec", moved: 0, active: false, link: "#" },
    {
      quadrant: 0,
      ring: 0,
      label: "SonarQube",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "SonarCloud",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Dependabot",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "AWS CodeGuru",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Whitesource Bolt",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "AWS Container scanning",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "BlackDuck",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "snyk.io",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "nhsd-git-secrets",
      active: true,
      link: "https://github.com/NHSDigital/software-engineering-quality-framework/tree/main/tools/nhsd-git-secrets",
      moved: 0
    },
    { quadrant: 1, ring: 0, label: "BrowserStack", moved: 0, active: false, link: "../data_processing/aws_emr.html" },
    { quadrant: 1, ring: 0, label: "Cucumber", moved: 0, active: false, link: "../data_processing/aws_emr.html" },
    { quadrant: 1, ring: 0, label: "LocalStack", moved: 0, active: false, link: "#" },
    { quadrant: 1, ring: 0, label: "WireMock", moved: 0, active: false, link: "#" },
    {
      quadrant: 1,
      ring: 0,
      label: "Gatling",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Axe",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Postman",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Wave",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Locust",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Gerkin",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Specflow",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Jmeter",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 2,
      label: "Neoload",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "selenium",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    { quadrant: 2, ring: 0, label: "Docker", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 0, label: "git", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 0, label: "make", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 1, label: "CircleCI", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 1, label: "Serverless Framework", moved: 0, active: false, link: "https://www.serverless.com/" },
    { quadrant: 2, ring: 1, label: "Visual Studio Code", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 1, label: "Yarn", moved: 0, active: false, link: "https://yarnpkg.com/" },
    { quadrant: 2, ring: 2, label: "Gradle", moved: 0, active: false, link: "#" },
    {
      quadrant: 2,
      ring: 0,
      label: "Azure Devops",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "GitHub",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Gitlab - CDT",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Gitlab - Self Hosted",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "AWS CodePipeline",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Concourse CI",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Jenkins",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "SVN",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Team City",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Team Foundation Services",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Travis CI",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "VSS",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "DataDog",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Instana",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Nagios",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "New Relic",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Pingdom",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Prometheus",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Splunk",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Status Cake",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "UptimeRobot",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
  ]
  //ENTRIES
};
