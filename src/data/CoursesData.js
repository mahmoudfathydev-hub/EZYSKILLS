import pythonImg from "../images/phyton.png";
import angularImg from "../images/Anglar.png";
import awsImg from "../images/AWS.png";
import coreUIImg from "../images/CoreUI.png";
import powerBIImg from "../images/PowerBI.png";
import testImg from "../images/test.png";
import vueImg from "../images/Vue.png";
import reactImg from "../images/React.png";

export const coursesData = [
    
    {
        id: 1,
        name: "Python",
        img: pythonImg,
        desc: "Python is an interpreted high-level general-purpose programming language.",
        about:
            "Python is a versatile language used in web development, data science, artificial intelligence, automation, and more. It is known for its readability, simplicity, and vast ecosystem of libraries.",
        objectives: [
            { id: 1, text: "Learn Python syntax and semantics" },
            { id: 2, text: "Work with variables, data types, and operators" },
            { id: 3, text: "Understand functions, modules, and packages" },
            { id: 4, text: "Handle files, exceptions, and errors" },
            { id: 5, text: "Learn object-oriented programming with Python" },
            { id: 6, text: "Build small projects to apply concepts" },
            {
                id: 7,
                text: "Work with popular Python libraries like pandas and matplotlib",
            },
            {
                id: 8,
                text: "Understand Python for web development using Flask/Django",
            },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Python Basics",
                requirements: [
                    { id: 1, textReq: "Introduction to Python" },
                    { id: 2, textReq: "Installing Python and IDE setup" },
                    { id: 3, textReq: "Variables and Data Types" },
                    { id: 4, textReq: "Operators and Expressions" },
                    { id: 5, textReq: "Comments and Code Style" },
                    { id: 6, textReq: "Input/Output Operations" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Control Flow",
                requirements: [
                    { id: 1, textReq: "If, Else, Elif statements" },
                    { id: 2, textReq: "For loops" },
                    { id: 3, textReq: "While loops" },
                    { id: 4, textReq: "Break and Continue" },
                    { id: 5, textReq: "Nested Loops" },
                    { id: 6, textReq: "Pass statement" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Functions & Modules",
                requirements: [
                    { id: 1, textReq: "Defining Functions" },
                    { id: 2, textReq: "Arguments and Return Values" },
                    { id: 3, textReq: "Lambda Functions" },
                    { id: 4, textReq: "Modules and Packages" },
                    { id: 5, textReq: "Importing Libraries" },
                    { id: 6, textReq: "Scope and Lifetime of Variables" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Data Structures",
                requirements: [
                    { id: 1, textReq: "Lists and Tuples" },
                    { id: 2, textReq: "Dictionaries" },
                    { id: 3, textReq: "Sets" },
                    { id: 4, textReq: "String Manipulation" },
                    { id: 5, textReq: "List Comprehensions" },
                    { id: 6, textReq: "Nested Data Structures" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "File Handling",
                requirements: [
                    { id: 1, textReq: "Reading Files" },
                    { id: 2, textReq: "Writing Files" },
                    { id: 3, textReq: "Working with CSV Files" },
                    { id: 4, textReq: "JSON Handling" },
                    { id: 5, textReq: "Context Managers" },
                    { id: 6, textReq: "Exception Handling" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Object-Oriented Programming",
                requirements: [
                    { id: 1, textReq: "Classes and Objects" },
                    { id: 2, textReq: "Attributes and Methods" },
                    { id: 3, textReq: "Inheritance" },
                    { id: 4, textReq: "Polymorphism" },
                    { id: 5, textReq: "Encapsulation" },
                    { id: 6, textReq: "Special Methods (__init__, __str__)" },
                ],
            },
            {
                id: 7,
                num: 7,
                textContent: "Advanced Python",
                requirements: [
                    { id: 1, textReq: "Decorators" },
                    { id: 2, textReq: "Generators" },
                    { id: 3, textReq: "Iterators" },
                    { id: 4, textReq: "Regular Expressions" },
                    { id: 5, textReq: "Multithreading" },
                    { id: 6, textReq: "Working with APIs" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Python Calculator",
                descPro:
                    "Build a fully functional calculator using Python functions and modules.",
            },
            {
                id: 2,
                taxtProjects: "ToDo App",
                descPro:
                    "Create a command-line ToDo application with file-based storage.",
            },
            {
                id: 3,
                taxtProjects: "Data Analysis with Pandas",
                descPro:
                    "Analyze datasets using pandas and visualize them with matplotlib.",
            },
            {
                id: 4,
                taxtProjects: "Simple Web Scraper",
                descPro:
                    "Scrape web data using BeautifulSoup and store results in CSV.",
            },
            {
                id: 5,
                taxtProjects: "Flask Blog Application",
                descPro:
                    "Develop a simple web blog using Flask framework and templates.",
            },
            {
                id: 6,
                taxtProjects: "Automation Scripts",
                descPro: "Automate repetitive tasks using Python scripts.",
            },
        ],
    },

    
    {
        id: 2,
        name: "Angular",
        img: angularImg,
        desc: "Angular is a JavaScript-based open-source front-end web framework for developing single-page applications.",
        about:
            "Angular is maintained mainly by Google and a community of developers. It allows developers to build dynamic web apps with reusable components, two-way data binding, and dependency injection.",
        objectives: [
            { id: 1, text: "Understand Angular architecture" },
            { id: 2, text: "Master components and modules" },
            { id: 3, text: "Learn two-way data binding" },
            { id: 4, text: "Manage routing in applications" },
            { id: 5, text: "Implement services and dependency injection" },
            { id: 6, text: "Use Angular forms effectively" },
            { id: 7, text: "Work with HTTP requests" },
            { id: 8, text: "Deploy Angular applications" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "HTML & CSS Basics",
                requirements: [
                    { id: 1, textReq: "Introduction to HTML" },
                    { id: 2, textReq: "Elements and Attributes" },
                    { id: 3, textReq: "Forms and Tables" },
                    { id: 4, textReq: "Introduction to CSS" },
                    { id: 5, textReq: "Selectors and Box Model" },
                    { id: 6, textReq: "Flexbox and Grid Layout" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Angular Components",
                requirements: [
                    { id: 1, textReq: "Creating Components" },
                    { id: 2, textReq: "Component Lifecycle Hooks" },
                    { id: 3, textReq: "Input and Output Properties" },
                    { id: 4, textReq: "Component Interaction" },
                    { id: 5, textReq: "Using ng-content" },
                    { id: 6, textReq: "Styling Components" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Directives",
                requirements: [
                    { id: 1, textReq: "Built-in Directives" },
                    { id: 2, textReq: "Structural Directives" },
                    { id: 3, textReq: "Attribute Directives" },
                    { id: 4, textReq: "Custom Directives" },
                    { id: 5, textReq: "Event Directives" },
                    { id: 6, textReq: "Template Reference Variables" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Services & Dependency Injection",
                requirements: [
                    { id: 1, textReq: "Creating Services" },
                    { id: 2, textReq: "Injecting Services" },
                    { id: 3, textReq: "Service Lifecycle" },
                    { id: 4, textReq: "Singleton Services" },
                    { id: 5, textReq: "Service Design Patterns" },
                    { id: 6, textReq: "Testing Services" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Routing & Navigation",
                requirements: [
                    { id: 1, textReq: "Setting up Router Module" },
                    { id: 2, textReq: "Defining Routes" },
                    { id: 3, textReq: "RouterLink and RouterOutlet" },
                    { id: 4, textReq: "Route Guards" },
                    { id: 5, textReq: "Lazy Loading Modules" },
                    { id: 6, textReq: "Child Routes" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Forms",
                requirements: [
                    { id: 1, textReq: "Template-driven Forms" },
                    { id: 2, textReq: "Reactive Forms" },
                    { id: 3, textReq: "Form Validation" },
                    { id: 4, textReq: "Form Arrays" },
                    { id: 5, textReq: "Custom Validators" },
                    { id: 6, textReq: "Dynamic Forms" },
                ],
            },
            {
                id: 7,
                num: 7,
                textContent: "HTTP & Observables",
                requirements: [
                    { id: 1, textReq: "HTTPClient Module" },
                    { id: 2, textReq: "GET, POST, PUT, DELETE Requests" },
                    { id: 3, textReq: "Observables and RxJS" },
                    { id: 4, textReq: "Error Handling" },
                    { id: 5, textReq: "Async Pipe" },
                    { id: 6, textReq: "Interceptors" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Hello World App",
                descPro:
                    "Your first Angular application to understand components and modules.",
            },
            {
                id: 2,
                taxtProjects: "CRUD App",
                descPro:
                    "Create, Read, Update, Delete operations using Angular and HTTPClient.",
            },
            {
                id: 3,
                taxtProjects: "Angular Material Dashboard",
                descPro: "Build a dashboard using Angular Material components.",
            },
            {
                id: 4,
                taxtProjects: "Routing Application",
                descPro: "Implement multi-page navigation using Angular routing.",
            },
            {
                id: 5,
                taxtProjects: "Reactive Form App",
                descPro:
                    "Develop a form-heavy application using reactive forms and validation.",
            },
            {
                id: 6,
                taxtProjects: "Service & API Integration",
                descPro:
                    "Consume external APIs using Angular services and observables.",
            },
        ],
    },

    
    {
        id: 3,
        name: "AWS",
        img: awsImg,
        desc: "AWS Coaching and Certification helps you build and validate your cloud computing skills.",
        about:
            "AWS is the leading cloud computing platform offering services for computing, storage, networking, databases, analytics, AI/ML, and deployment. Learning AWS opens opportunities for DevOps and cloud engineering careers.",
        objectives: [
            { id: 1, text: "Understand cloud computing concepts" },
            { id: 2, text: "Learn AWS core services" },
            { id: 3, text: "Manage EC2 instances" },
            { id: 4, text: "Work with S3 storage" },
            { id: 5, text: "Deploy applications on AWS" },
            { id: 6, text: "Monitor and scale cloud applications" },
            { id: 7, text: "Understand IAM and security best practices" },
            { id: 8, text: "Use AWS CLI and SDKs" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Cloud Basics",
                requirements: [
                    { id: 1, textReq: "Introduction to Cloud Computing" },
                    { id: 2, textReq: "Cloud Deployment Models" },
                    { id: 3, textReq: "Benefits of Cloud" },
                    { id: 4, textReq: "AWS Global Infrastructure" },
                    { id: 5, textReq: "AWS Regions and Availability Zones" },
                    { id: 6, textReq: "Setting up AWS Account" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Compute Services",
                requirements: [
                    { id: 1, textReq: "EC2 Basics" },
                    { id: 2, textReq: "Launch and Configure EC2" },
                    { id: 3, textReq: "Security Groups" },
                    { id: 4, textReq: "Elastic Load Balancing" },
                    { id: 5, textReq: "Auto Scaling" },
                    { id: 6, textReq: "Lambda Functions" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Storage Services",
                requirements: [
                    { id: 1, textReq: "S3 Buckets" },
                    { id: 2, textReq: "Bucket Policies and Permissions" },
                    { id: 3, textReq: "Versioning and Lifecycle Rules" },
                    { id: 4, textReq: "Glacier Storage" },
                    { id: 5, textReq: "EBS Volumes" },
                    { id: 6, textReq: "Elastic File System (EFS)" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Database Services",
                requirements: [
                    { id: 1, textReq: "RDS Basics" },
                    { id: 2, textReq: "DynamoDB" },
                    { id: 3, textReq: "Aurora" },
                    { id: 4, textReq: "Redshift" },
                    { id: 5, textReq: "Database Security" },
                    { id: 6, textReq: "Backups and Snapshots" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Networking & Security",
                requirements: [
                    { id: 1, textReq: "VPC Basics" },
                    { id: 2, textReq: "Subnets and Route Tables" },
                    { id: 3, textReq: "Security Groups and NACLs" },
                    { id: 4, textReq: "Elastic IP and NAT Gateway" },
                    { id: 5, textReq: "IAM Users and Roles" },
                    { id: 6, textReq: "Identity and Access Management Policies" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Deployment & Monitoring",
                requirements: [
                    { id: 1, textReq: "CloudFormation Basics" },
                    { id: 2, textReq: "Elastic Beanstalk" },
                    { id: 3, textReq: "AWS CLI Commands" },
                    { id: 4, textReq: "Monitoring with CloudWatch" },
                    { id: 5, textReq: "Logs and Metrics" },
                    { id: 6, textReq: "Scaling and Optimization" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Deploy Website on EC2",
                descPro:
                    "Deploy a static website on EC2 with security groups configured.",
            },
            {
                id: 2,
                taxtProjects: "S3 File Storage",
                descPro: "Set up S3 bucket and upload/download files programmatically.",
            },
            {
                id: 3,
                taxtProjects: "Serverless Lambda Function",
                descPro: "Build a serverless function to process events automatically.",
            },
            {
                id: 4,
                taxtProjects: "Database with RDS",
                descPro:
                    "Deploy a MySQL database in RDS and connect from an application.",
            },
            {
                id: 5,
                taxtProjects: "VPC Networking Project",
                descPro: "Create a custom VPC with public and private subnets.",
            },
            {
                id: 6,
                taxtProjects: "Cloud Monitoring Setup",
                descPro: "Monitor cloud resources using CloudWatch and create alerts.",
            },
        ],
    },

    
    {
        id: 4,
        name: "Core UI",
        img: coreUIImg,
        desc: "Learn the fastest way to build a modern dashboard for any platform.",
        about:
            "Core UI is a free and open-source UI library for building responsive dashboards and admin panels with Bootstrap 5. It provides ready-made components, layouts, and charts to accelerate development.",
        objectives: [
            { id: 1, text: "Understand Core UI architecture" },
            { id: 2, text: "Learn layout structure and grids" },
            { id: 3, text: "Use Core UI components effectively" },
            { id: 4, text: "Implement charts and tables" },
            { id: 5, text: "Customize themes and colors" },
            { id: 6, text: "Integrate with APIs" },
            { id: 7, text: "Build responsive dashboards" },
            { id: 8, text: "Optimize performance for web apps" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Getting Started",
                requirements: [
                    { id: 1, textReq: "Installation and Setup" },
                    { id: 2, textReq: "Folder Structure" },
                    { id: 3, textReq: "Importing Components" },
                    { id: 4, textReq: "Understanding Layouts" },
                    { id: 5, textReq: "Grid System Basics" },
                    { id: 6, textReq: "Responsive Design Principles" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Components",
                requirements: [
                    { id: 1, textReq: "Buttons and Inputs" },
                    { id: 2, textReq: "Cards and Panels" },
                    { id: 3, textReq: "Modals and Alerts" },
                    { id: 4, textReq: "Forms" },
                    { id: 5, textReq: "Tables and Pagination" },
                    { id: 6, textReq: "Dropdowns and Navigation" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Charts",
                requirements: [
                    { id: 1, textReq: "Line Charts" },
                    { id: 2, textReq: "Bar Charts" },
                    { id: 3, textReq: "Pie Charts" },
                    { id: 4, textReq: "Dynamic Data Binding" },
                    { id: 5, textReq: "Custom Styling" },
                    { id: 6, textReq: "Responsive Charts" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Theming",
                requirements: [
                    { id: 1, textReq: "Custom Colors" },
                    { id: 2, textReq: "Dark/Light Mode" },
                    { id: 3, textReq: "Typography" },
                    { id: 4, textReq: "Icon Libraries" },
                    { id: 5, textReq: "Component Customization" },
                    { id: 6, textReq: "Global Styles" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Forms & Validation",
                requirements: [
                    { id: 1, textReq: "Input Validation" },
                    { id: 2, textReq: "Select & Checkbox Handling" },
                    { id: 3, textReq: "Form Submission" },
                    { id: 4, textReq: "Error Handling" },
                    { id: 5, textReq: "Reactive Forms" },
                    { id: 6, textReq: "Integration with APIs" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Advanced Topics",
                requirements: [
                    { id: 1, textReq: "Performance Optimization" },
                    { id: 2, textReq: "Code Splitting" },
                    { id: 3, textReq: "Lazy Loading" },
                    { id: 4, textReq: "State Management Basics" },
                    { id: 5, textReq: "Deploying Dashboards" },
                    { id: 6, textReq: "Debugging Techniques" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Admin Dashboard",
                descPro:
                    "Build a fully responsive admin dashboard using Core UI components.",
            },
            {
                id: 2,
                taxtProjects: "Data Visualization Panel",
                descPro: "Create charts and tables with dynamic data integration.",
            },
            {
                id: 3,
                taxtProjects: "Theme Customizer",
                descPro: "Implement light/dark mode and custom colors.",
            },
            {
                id: 4,
                taxtProjects: "Form Management System",
                descPro: "Develop forms with validation and API integration.",
            },
            {
                id: 5,
                taxtProjects: "Performance Optimized Dashboard",
                descPro: "Optimize a large dashboard for fast load and responsiveness.",
            },
            {
                id: 6,
                taxtProjects: "Multi-page Core UI Project",
                descPro: "Implement multiple dashboard pages with navigation.",
            },
        ],
    },

    
    {
        id: 5,
        name: "Power BI",
        img: powerBIImg,
        desc: "An interactive data visualization software with focus on business intelligence.",
        about:
            "Power BI is a business analytics service by Microsoft. It provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
        objectives: [
            { id: 1, text: "Understand Power BI interface and tools" },
            { id: 2, text: "Load and transform data" },
            { id: 3, text: "Create interactive reports" },
            { id: 4, text: "Build dashboards with visualizations" },
            { id: 5, text: "Apply DAX formulas for calculations" },
            { id: 6, text: "Share reports and dashboards" },
            { id: 7, text: "Integrate with other Microsoft tools" },
            { id: 8, text: "Use Power BI service for publishing and collaboration" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Getting Started",
                requirements: [
                    { id: 1, textReq: "Installing Power BI Desktop" },
                    { id: 2, textReq: "Interface Overview" },
                    { id: 3, textReq: "Connecting to Data Sources" },
                    { id: 4, textReq: "Loading and Transforming Data" },
                    { id: 5, textReq: "Using Query Editor" },
                    { id: 6, textReq: "Data Cleaning Basics" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Data Modeling",
                requirements: [
                    { id: 1, textReq: "Relationships Between Tables" },
                    { id: 2, textReq: "Primary and Foreign Keys" },
                    { id: 3, textReq: "Calculated Columns" },
                    { id: 4, textReq: "Measures with DAX" },
                    { id: 5, textReq: "Hierarchies and Groups" },
                    { id: 6, textReq: "Data Types and Formatting" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Visualizations",
                requirements: [
                    { id: 1, textReq: "Charts: Bar, Line, Pie" },
                    { id: 2, textReq: "Tables and Matrices" },
                    { id: 3, textReq: "Custom Visuals" },
                    { id: 4, textReq: "Conditional Formatting" },
                    { id: 5, textReq: "Tooltips and Slicers" },
                    { id: 6, textReq: "Bookmarks and Drillthrough" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Reports & Dashboards",
                requirements: [
                    { id: 1, textReq: "Page Layouts" },
                    { id: 2, textReq: "Themes and Branding" },
                    { id: 3, textReq: "Interactive Filters" },
                    { id: 4, textReq: "Drill Down/Up Features" },
                    { id: 5, textReq: "Publishing Reports" },
                    { id: 6, textReq: "Sharing with Teams" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Advanced DAX",
                requirements: [
                    { id: 1, textReq: "Time Intelligence" },
                    { id: 2, textReq: "Calculated Tables" },
                    { id: 3, textReq: "Advanced Measures" },
                    { id: 4, textReq: "Ranking and Sorting" },
                    { id: 5, textReq: "Error Handling in DAX" },
                    { id: 6, textReq: "Performance Optimization" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Power BI Service",
                requirements: [
                    { id: 1, textReq: "Publishing Reports to Service" },
                    { id: 2, textReq: "Workspaces and Apps" },
                    { id: 3, textReq: "Scheduled Refresh" },
                    { id: 4, textReq: "Data Gateway" },
                    { id: 5, textReq: "Collaboration Features" },
                    { id: 6, textReq: "Mobile View and Accessibility" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Sales Dashboard",
                descPro:
                    "Create an interactive sales dashboard with charts and slicers.",
            },
            {
                id: 2,
                taxtProjects: "Finance Report",
                descPro:
                    "Build a detailed finance report with multiple visuals and DAX calculations.",
            },
            {
                id: 3,
                taxtProjects: "Customer Analytics Dashboard",
                descPro: "Analyze customer data using Power BI visuals and filters.",
            },
            {
                id: 4,
                taxtProjects: "Marketing KPI Dashboard",
                descPro: "Track key marketing KPIs with interactive charts.",
            },
            {
                id: 5,
                taxtProjects: "HR Analytics Report",
                descPro:
                    "Create HR reports with drillthrough and conditional formatting.",
            },
            {
                id: 6,
                taxtProjects: "Operational Dashboard",
                descPro: "Monitor operational metrics with real-time data refresh.",
            },
        ],
    },

    
    {
        id: 6,
        name: "Test",
        img: testImg,
        desc: "Evaluating and verifying that a software product does what it should.",
        about:
            "Software testing ensures that applications function correctly, meet requirements, and are free from bugs. It includes manual testing, automated testing, performance testing, and QA best practices.",
        objectives: [
            { id: 1, text: "Understand testing principles" },
            { id: 2, text: "Perform functional testing" },
            { id: 3, text: "Perform non-functional testing" },
            { id: 4, text: "Write test cases and plans" },
            { id: 5, text: "Use automated testing tools" },
            { id: 6, text: "Report bugs and issues effectively" },
            { id: 7, text: "Understand test automation frameworks" },
            { id: 8, text: "Integrate testing into CI/CD pipelines" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Introduction to Testing",
                requirements: [
                    { id: 1, textReq: "Software Development Life Cycle" },
                    { id: 2, textReq: "Importance of Testing" },
                    { id: 3, textReq: "Types of Testing" },
                    { id: 4, textReq: "Manual vs Automated Testing" },
                    { id: 5, textReq: "Testing Terminologies" },
                    { id: 6, textReq: "Testing Levels: Unit, Integration, System" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Functional Testing",
                requirements: [
                    { id: 1, textReq: "Unit Testing Basics" },
                    { id: 2, textReq: "Integration Testing" },
                    { id: 3, textReq: "System Testing" },
                    { id: 4, textReq: "Acceptance Testing" },
                    { id: 5, textReq: "Test Case Design Techniques" },
                    { id: 6, textReq: "Test Execution and Reporting" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Automation Testing",
                requirements: [
                    { id: 1, textReq: "Selenium Basics" },
                    { id: 2, textReq: "Creating Automated Scripts" },
                    { id: 3, textReq: "Locators and Actions" },
                    { id: 4, textReq: "TestNG and Reporting" },
                    { id: 5, textReq: "Data-driven Testing" },
                    { id: 6, textReq: "Integrating with CI/CD" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Performance Testing",
                requirements: [
                    { id: 1, textReq: "Load Testing" },
                    { id: 2, textReq: "Stress Testing" },
                    { id: 3, textReq: "Using JMeter" },
                    { id: 4, textReq: "Analyzing Performance Metrics" },
                    { id: 5, textReq: "Bottleneck Identification" },
                    { id: 6, textReq: "Optimization Recommendations" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Security Testing",
                requirements: [
                    { id: 1, textReq: "Common Vulnerabilities" },
                    { id: 2, textReq: "Penetration Testing Basics" },
                    { id: 3, textReq: "Authentication and Authorization Testing" },
                    { id: 4, textReq: "OWASP Top 10" },
                    { id: 5, textReq: "Reporting Security Issues" },
                    { id: 6, textReq: "Mitigation Strategies" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "Testing Tools & Best Practices",
                requirements: [
                    { id: 1, textReq: "JIRA and Bug Tracking" },
                    { id: 2, textReq: "Test Management Tools" },
                    { id: 3, textReq: "Best Practices in QA" },
                    { id: 4, textReq: "Code Review and Test Coverage" },
                    { id: 5, textReq: "Continuous Testing in DevOps" },
                    { id: 6, textReq: "Documentation and Reporting" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Unit Testing Project",
                descPro: "Write and execute unit tests for a sample application.",
            },
            {
                id: 2,
                taxtProjects: "Web App Automation",
                descPro: "Automate web application testing using Selenium.",
            },
            {
                id: 3,
                taxtProjects: "Performance Test Scenario",
                descPro: "Simulate load on an application and analyze results.",
            },
            {
                id: 4,
                taxtProjects: "Security Testing Demo",
                descPro: "Identify and report vulnerabilities in a test application.",
            },
            {
                id: 5,
                taxtProjects: "CI/CD Test Integration",
                descPro: "Integrate automated tests into a CI/CD pipeline.",
            },
            {
                id: 6,
                taxtProjects: "End-to-End Test Suite",
                descPro: "Develop an E2E testing suite for a small project.",
            },
        ],
    },

    
    {
        id: 7,
        name: "Vue JS",
        img: vueImg,
        desc: "An open-source front-end JavaScript framework for building user interfaces.",
        about:
            "Vue.js is a progressive JavaScript framework used to build modern web interfaces. It focuses on declarative rendering, components, and reactivity to create dynamic apps efficiently.",
        objectives: [
            { id: 1, text: "Understand Vue architecture and lifecycle" },
            { id: 2, text: "Build reusable components" },
            { id: 3, text: "Use directives and computed properties" },
            { id: 4, text: "Manage state with Vuex" },
            { id: 5, text: "Handle routing with Vue Router" },
            { id: 6, text: "Integrate with APIs" },
            { id: 7, text: "Deploy Vue applications" },
            { id: 8, text: "Use Vue CLI and project structure efficiently" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Getting Started",
                requirements: [
                    { id: 1, textReq: "Installation & Setup" },
                    { id: 2, textReq: "Project Structure" },
                    { id: 3, textReq: "Vue CLI Basics" },
                    { id: 4, textReq: "Hello World Component" },
                    { id: 5, textReq: "Template Syntax" },
                    { id: 6, textReq: "Data Binding" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Components",
                requirements: [
                    { id: 1, textReq: "Creating Components" },
                    { id: 2, textReq: "Props & Events" },
                    { id: 3, textReq: "Slots and Scoped Slots" },
                    { id: 4, textReq: "Lifecycle Hooks" },
                    { id: 5, textReq: "Dynamic Components" },
                    { id: 6, textReq: "Async Components" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "Directives & Computed",
                requirements: [
                    { id: 1, textReq: "v-if, v-for, v-show" },
                    { id: 2, textReq: "v-bind and v-model" },
                    { id: 3, textReq: "Computed Properties" },
                    { id: 4, textReq: "Watchers" },
                    { id: 5, textReq: "Custom Directives" },
                    { id: 6, textReq: "Event Handling" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Routing",
                requirements: [
                    { id: 1, textReq: "Installing Vue Router" },
                    { id: 2, textReq: "Configuring Routes" },
                    { id: 3, textReq: "Dynamic Routing" },
                    { id: 4, textReq: "Navigation Guards" },
                    { id: 5, textReq: "Named Views" },
                    { id: 6, textReq: "Lazy Loading Routes" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "State Management",
                requirements: [
                    { id: 1, textReq: "Introduction to Vuex" },
                    { id: 2, textReq: "State, Getters, Mutations" },
                    { id: 3, textReq: "Actions" },
                    { id: 4, textReq: "Modules" },
                    { id: 5, textReq: "Plugins" },
                    { id: 6, textReq: "Best Practices" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "API & Deployment",
                requirements: [
                    { id: 1, textReq: "Fetching API Data" },
                    { id: 2, textReq: "Axios Integration" },
                    { id: 3, textReq: "Error Handling" },
                    { id: 4, textReq: "Environment Variables" },
                    { id: 5, textReq: "Building for Production" },
                    { id: 6, textReq: "Deployment to Netlify/Heroku" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Todo App",
                descPro:
                    "Create a dynamic Todo app with components and state management.",
            },
            {
                id: 2,
                taxtProjects: "E-commerce App",
                descPro:
                    "Build a small e-commerce website using Vue components and routing.",
            },
            {
                id: 3,
                taxtProjects: "Blog App",
                descPro: "Develop a blog with dynamic routing and API integration.",
            },
            {
                id: 4,
                taxtProjects: "Dashboard",
                descPro: "Create a responsive admin dashboard using Vue.",
            },
            {
                id: 5,
                taxtProjects: "Weather App",
                descPro:
                    "Fetch real-time weather data from API and display dynamically.",
            },
            {
                id: 6,
                taxtProjects: "Portfolio Website",
                descPro: "Build a personal portfolio website using Vue components.",
            },
        ],
    },

    
    {
        id: 8,
        name: "React",
        img: reactImg,
        desc: "React is a free and open-source front-end JavaScript library for building UIs.",
        about:
            "React is maintained by Facebook and a community of developers. It allows building component-based user interfaces with virtual DOM, state management, and hooks for functional programming.",
        objectives: [
            { id: 1, text: "Understand React fundamentals" },
            { id: 2, text: "Build reusable components" },
            { id: 3, text: "Manage state with hooks" },
            { id: 4, text: "Handle events and forms" },
            { id: 5, text: "Implement routing with React Router" },
            { id: 6, text: "Fetch data from APIs" },
            { id: 7, text: "Deploy React applications" },
            { id: 8, text: "Use context and state management libraries" },
        ],
        contnent: [
            {
                id: 1,
                num: 1,
                textContent: "Getting Started",
                requirements: [
                    { id: 1, textReq: "React Setup & Create React App" },
                    { id: 2, textReq: "Project Structure" },
                    { id: 3, textReq: "JSX Syntax" },
                    { id: 4, textReq: "Rendering Elements" },
                    { id: 5, textReq: "Components Overview" },
                    { id: 6, textReq: "Functional vs Class Components" },
                ],
            },
            {
                id: 2,
                num: 2,
                textContent: "Components & Props",
                requirements: [
                    { id: 1, textReq: "Creating Components" },
                    { id: 2, textReq: "Passing Props" },
                    { id: 3, textReq: "Default Props" },
                    { id: 4, textReq: "Prop Types Validation" },
                    { id: 5, textReq: "Children Props" },
                    { id: 6, textReq: "Reusable Components" },
                ],
            },
            {
                id: 3,
                num: 3,
                textContent: "State & Hooks",
                requirements: [
                    { id: 1, textReq: "useState Hook" },
                    { id: 2, textReq: "useEffect Hook" },
                    { id: 3, textReq: "useContext Hook" },
                    { id: 4, textReq: "useReducer Hook" },
                    { id: 5, textReq: "Custom Hooks" },
                    { id: 6, textReq: "State Management Best Practices" },
                ],
            },
            {
                id: 4,
                num: 4,
                textContent: "Routing & Navigation",
                requirements: [
                    { id: 1, textReq: "Installing React Router" },
                    { id: 2, textReq: "Defining Routes" },
                    { id: 3, textReq: "Nested Routes" },
                    { id: 4, textReq: "Navigation Links" },
                    { id: 5, textReq: "Redirects and 404 Page" },
                    { id: 6, textReq: "Protected Routes" },
                ],
            },
            {
                id: 5,
                num: 5,
                textContent: "Forms & Events",
                requirements: [
                    { id: 1, textReq: "Handling Inputs" },
                    { id: 2, textReq: "Controlled Components" },
                    { id: 3, textReq: "Uncontrolled Components" },
                    { id: 4, textReq: "Form Validation" },
                    { id: 5, textReq: "Event Handlers" },
                    { id: 6, textReq: "Synthetic Events" },
                ],
            },
            {
                id: 6,
                num: 6,
                textContent: "API Integration",
                requirements: [
                    { id: 1, textReq: "Fetching Data with fetch()" },
                    { id: 2, textReq: "Axios Integration" },
                    { id: 3, textReq: "Handling Responses & Errors" },
                    { id: 4, textReq: "Dynamic Rendering of Data" },
                    { id: 5, textReq: "State Updates from API Data" },
                    { id: 6, textReq: "Using useEffect for API Calls" },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                taxtProjects: "Todo App",
                descPro:
                    "Build a React Todo App with state management and CRUD operations.",
            },
            {
                id: 2,
                taxtProjects: "Blog App",
                descPro: "Create a blog with multiple pages using React Router.",
            },
            {
                id: 3,
                taxtProjects: "E-commerce Site",
                descPro:
                    "Develop an e-commerce site with components and API integration.",
            },
            {
                id: 4,
                taxtProjects: "Weather App",
                descPro: "Fetch weather data from API and display it dynamically.",
            },
            {
                id: 5,
                taxtProjects: "Dashboard App",
                descPro: "Build an interactive dashboard with charts and tables.",
            },
            {
                id: 6,
                taxtProjects: "Portfolio Site",
                descPro: "Create a personal portfolio website with React components.",
            },
        ],
    },
];