// // Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Skills Data
const skills = [
    {
        name: "Programming Languages",
        description : `
        <p> A programming language is a set of instructions that tells a computer how to perform tasks. Some popular programming languages include Python, Java, JavaScript, C#, Ruby, Scala, and C++.</p>
        <p>Features of a good programming language</p>
        <ul><li>Easy to learn: The language should be simple, easy to use, and have good readability </li>
        <li>Portable: The language should be portable across different platforms </li>
        <li>Efficient: The language should be efficient so that it can be converted into machine code and uses little memory </li>
        <li>Well-structured: The language should be well-structured and documented </li>
        <li>Integrated Development Environment: The language should provide an Integrated Development Environment (IDE) for development, debugging, testing, and maintenance </li> </ul>
        <p>Some popular programming languages:</p>
        <p><strong>Python </strong></p>
        <p>Python is a high-level, versatile programming language known for its readability and simplicity. Widely adopted in data science, web development, and automation, Python’s large standard library and supportive community make it a favorite for beginners and experts alike.
</p>
        <p>Features:</p>
        <ul>
        <li>Easy-to-read syntax</li>
        <li>Extensive libraries and frameworks</li>
        <li>Supports multiple programming paradigms</li>
        </ul>
        <p>Uses:</p>
        <ul>
        <li>Commonly used in data science </li>
        <li>web development</li>
        <li>automation</li>
        <li>machine learning applications</li></ul>
        <p><strong>Java:</strong></p>
<p>Java is a popular, object-oriented language valued for its portability and robustness. Known for its "write once, run anywhere" capability, Java remains a top choice for enterprise-level applications and Android development.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Platform-independent via JVM</li>
  <li>Strong memory management</li>
  <li>Extensive libraries and frameworks</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Used in enterprise applications</li>
  <li>Android development</li>
  <li>Server-side applications</li>
</ul>

<p><strong>C:</strong></p>
<p>C is a foundational, low-level language that offers direct access to hardware, making it ideal for system programming. With a simple syntax and powerful features, C remains essential for operating systems and embedded systems.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Low-level memory access</li>
  <li>Small runtime</li>
  <li>High performance and portability</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Commonly used in operating systems</li>
  <li>Embedded systems</li>
  <li>High-performance applications</li>
</ul>

<p><strong>C++:</strong></p>
<p>C++ builds on C, adding object-oriented features and libraries that make it powerful for both system and application development. Its performance and efficiency are highly valued in real-time and resource-constrained applications.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Object-oriented programming</li>
  <li>Low-level memory manipulation</li>
  <li>Standard Template Library (STL)</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Used in game development</li>
  <li>System software</li>
  <li>High-performance applications like trading systems</li>
</ul>

<p><strong>C#:</strong></p>
<p>Developed by Microsoft, C# is a modern, object-oriented language used primarily for Windows applications. It integrates well with the .NET ecosystem, making it versatile for desktop, mobile, and web applications.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Rich .NET library support</li>
  <li>Automatic memory management</li>
  <li>Cross-platform via .NET Core</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Used in enterprise applications</li>
  <li>Game development (Unity)</li>
  <li>Windows software development</li>
</ul>

<p><strong>JavaScript:</strong></p>
<p>JavaScript is a versatile, high-level language primarily used to create dynamic and interactive web content. Widely supported across browsers, JavaScript powers everything from simple animations to complex web applications, making it a cornerstone of modern web development.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Asynchronous programming with promises and async/await</li>
  <li>Extensive libraries and frameworks (e.g., React, Angular)</li>
  <li>Client-side and server-side support (with Node.js)</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>JavaScript is used for front-end development</li>
  <li>Server-side scripting</li>
  <li>Game development and mobile apps</li>
</ul>

<p><strong>HTML/CSS:</strong></p>
<p>HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the foundational languages of web content. HTML structures content, while CSS styles it, creating visually engaging and organized web pages.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>HTML tags for structuring content elements</li>
  <li>CSS styling for layout, colors, and responsiveness</li>
  <li>Widely compatible across browsers</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>HTML and CSS are used to build static web pages</li>
  <li>Structure user interfaces</li>
  <li>Ensure responsive design</li>
</ul>

<p><strong>Go:</strong></p>
<p>Created by Google, Go is designed for simplicity, reliability, and efficiency, especially in networked and concurrent applications. Its lightweight concurrency model makes it ideal for cloud applications.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Simple and clean syntax</li>
  <li>Built-in concurrency support (goroutines)</li>
  <li>Fast compilation and execution</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Commonly used in web servers</li>
  <li>Cloud computing</li>
  <li>Distributed systems</li>
</ul>

<p><strong>Kotlin:</strong></p>
<p>Kotlin is a statically typed language that’s fully interoperable with Java. It was developed to improve developer productivity. It’s officially supported for Android development, making it a popular choice for mobile applications.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Interoperable with Java</li>
  <li>Null safety to avoid common errors</li>
  <li>Concise and expressive syntax</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Primarily used in Android development and web development with JVM</li>
</ul>

<p><strong>Ruby:</strong></p>
<p>Ruby is an easy-to-learn, dynamically typed language focused on simplicity and productivity. It’s known for its role in web development, particularly with the Ruby on Rails framework.</p>

<p><strong>Features:</strong></p>
<ul>
  <li>Concise and readable syntax</li>
  <li>Dynamic typing</li>
  <li>Large support community and libraries</li>
</ul>

<p><strong>Uses:</strong></p>
<ul>
  <li>Commonly used in web development and scripting applications</li>
</ul>
        `
    },
    {
        name: "Data Structures & Algorithms",
        description: `
            <p><strong>Data Structures and Algorithms (DSA):</strong></p>
<p>Data structures and algorithms (DSA) are concepts used in computer science to organize data and solve problems.</p>

<p><strong>Data Structures:</strong></p>
<ul>
  <li><strong>Arrays:</strong> A fixed-size chunk of contiguous memory</li>
  <li><strong>Linked lists:</strong> A linear data structure where elements are linked using pointers</li>
  <li><strong>Hashing:</strong> A method for efficient searching, insertion, and deletion</li>
  <li><strong>Trees:</strong> A hierarchical way of storing data that allows for faster searching than arrays or linked lists</li>
  <li><strong>Queues:</strong> A linear data structure that stores items in a First In First Out (FIFO) manner</li>
</ul>

<p><strong>Algorithms:</strong></p>
<ul>
  <li><strong>Binary search:</strong> A search algorithm that finds the position of a target value within a sorted array</li>
  <li><strong>Depth-first search (DFS):</strong> An algorithm for traversing or searching tree or graph data structures</li>
  <li><strong>Dynamic programming:</strong> A mathematical optimization method and an algorithmic paradigm</li>
</ul>

<p><strong>Learning DSA:</strong></p>
<ul>
  <li>Learning data structures first can make it easier to understand algorithms</li>
  <li>DSA can be challenging due to its abstract nature, but it can be mastered with practice and the right resources</li>
  <li>Java and C++ are commonly used programming languages for DSA</li>
</ul>

<p><strong>Key Features of DSA:</strong></p>
<ul>
  <li><strong>Data Organization:</strong> DSA provides various data structures like arrays, linked lists, trees, graphs, stacks, and queues, which allow data to be organized in a structured manner based on problem requirements, enabling efficient access and manipulation.</li>
  <li><strong>Algorithmic Efficiency:</strong> Algorithms are designed to solve problems with specific time and space complexities, ensuring that the program runs optimally, especially when dealing with large datasets.</li>
  <li><strong>Scalability:</strong> DSA principles enable systems to handle increasing data volumes and user demands without significant performance degradation.</li>
  <li><strong>Problem-Solving Approach:</strong> By understanding DSA, developers can break down complex problems into smaller, manageable steps, leading to well-structured solutions.</li>
  <li><strong>Versatility:</strong> DSA concepts are applicable across diverse domains like web development, database management, artificial intelligence, networking, and operating systems.</li>
</ul>

<p><strong>Common Uses of DSA:</strong></p>
<ul>
  <li><strong>Web Development:</strong> Implementing search functionalities, user session management, dynamic content updates, and optimizing data retrieval on websites.</li>
  <li><strong>Database Systems:</strong> Designing efficient indexing mechanisms (like B-trees) to quickly retrieve data from large databases.</li>
  <li><strong>Networking:</strong> Routing algorithms (like Dijkstra's) to find the shortest path for data packets in a network.</li>
  <li><strong>Operating Systems:</strong> Memory management, scheduling algorithms to optimize process execution.</li>
  <li><strong>Machine Learning and Data Science:</strong> Efficient data processing and analysis techniques for large datasets.</li>
  <li><strong>Game Development:</strong> Implementing game mechanics like pathfinding, collision detection, and AI behaviors.</li>
  <li><strong>E-commerce Platforms:</strong> Optimizing product search, recommendation systems, and shopping cart functionality.</li>
</ul>

        `
    },
    {
        name: "Web Development",
        description: `
        <p><strong>Web Development:</strong></p>
<p>Web development is the process of creating and maintaining websites, involving coding and design to build functional and visually appealing online platforms accessible through web browsers. It utilizes languages like HTML, CSS, and JavaScript to structure content, style appearance, and add interactivity.</p>
<p>It encompasses both the user-facing "front-end" and server-side "back-end" functionalities to deliver a seamless user experience across different devices.</p>

<p><strong>What Does a Web Developer Do?</strong></p>
<ul>
  <li>Create and manage websites for organizations</li>
  <li>Meet with clients to discuss needs, design, and functionality</li>
  <li>Design user interfaces</li>
  <li>Write and review code</li>
  <li>Create prototypes and mockups</li>
  <li>Determine layout</li>
  <li>Integrate multimedia content</li>
  <li>Test web applications</li>
  <li>Monitor website traffic</li>
  <li>Troubleshoot problems</li>
</ul>

<p><strong>Key Points About Web Development:</strong></p>
<ul>
  <li><strong>Core Languages:</strong> HTML (structure), CSS (styling), JavaScript (interactivity)</li>
  <li><strong>Front-end Development:</strong> Focuses on the user interface, what the visitor sees and interacts with</li>
  <li><strong>Back-end Development:</strong> Deals with server-side logic, database management, and data processing</li>
  <li><strong>Full-stack Development:</strong> Expertise in both front-end and back-end development</li>
  <li><strong>Key Aspects:</strong> Planning, design, coding, testing, deployment, and maintenance</li>
</ul>

<p>Web development encompasses features like responsive design, accessibility, single-page applications, progressive web apps, frameworks, and the use of artificial intelligence. These features allow developers to create interactive and dynamic websites and applications accessible across various devices. Key uses include e-commerce platforms, social media networks, and business information portals, all aimed at providing a seamless user experience.</p>

<p><strong>Key Features of Web Development:</strong></p>
<ul>
  <li><strong>Responsive Design:</strong> Ensures websites adapt seamlessly to different screen sizes and devices, providing optimal viewing on desktops, tablets, and smartphones.</li>
  <li><strong>Accessibility:</strong> Incorporates features like keyboard navigation, screen reader compatibility, and text-to-speech functionality to make websites accessible to users with disabilities.</li>
  <li><strong>Single-Page Applications (SPAs):</strong> Delivers content dynamically on a single web page, allowing for faster loading times and smoother user interaction.</li>
  <li><strong>Progressive Web Applications (PWAs):</strong> Combines web technologies with native app-like features, enabling offline access and push notifications on mobile devices.</li>
  <li><strong>Frameworks:</strong> Pre-built code libraries like React, Angular, and Vue.js that simplify development by providing structured components and functionalities.</li>
  <li><strong>Artificial Intelligence (AI):</strong> Integration of AI features like chatbots, personalized recommendations, and predictive analytics to enhance user experience.</li>
  <li><strong>E-commerce Functionality:</strong> Enables online shopping capabilities including product listings, payment gateways, and shopping carts.</li>
  <li><strong>Web Servers:</strong> Backend infrastructure that stores website content and delivers it to users when requested.</li>
  <li><strong>Content Management Systems (CMS):</strong> Platforms like WordPress that allow non-technical users to easily manage website content.</li>
</ul>

<p><strong>Uses of Web Development:</strong></p>
<ul>
  <li><strong>Business Websites:</strong> Creating an online presence for companies to showcase products, services, and contact information.</li>
  <li><strong>E-commerce Stores:</strong> Building online platforms for selling goods and services directly to customers.</li>
  <li><strong>Social Media Platforms:</strong> Developing interactive online communities for user engagement and content sharing.</li>
  <li><strong>Web Applications:</strong> Creating custom software that can be accessed through a web browser, including project management tools and internal company applications.</li>
  <li><strong>Mobile Apps (via Hybrid Frameworks):</strong> Developing cross-platform mobile apps using web technologies.</li>
  <li><strong>Educational Platforms:</strong> Designing online learning environments with course materials and interactive features.</li>
  <li><strong>Digital Marketing Tools:</strong> Building websites and landing pages for lead generation and campaign management.</li>
</ul>

        `
    },
    {
        name: "Database Management",
        description: `
        <p><strong>Database Management:</strong></p>
<p>Database management is the process of organizing, storing, and maintaining data in a database. A database management system (DBMS) is a software tool that helps users manage their databases.</p>

<p><strong>How Does Database Management Work?</strong></p>
<ul>
  <li>Users can create, define, and manipulate data in the database.</li>
  <li>Users can access data quickly and efficiently.</li>
  <li>DBMSs can enforce data integrity and security.</li>
  <li>DBMSs can help users manage and analyze data.</li>
</ul>

<p><strong>Why Is Database Management Important?</strong></p>
<ul>
  <li>Businesses can use database management to run operations, track customers, and automate processes.</li>
  <li>Database management can help businesses make strategic decisions, improve marketing, and optimize operations.</li>
  <li>Without proper database management, businesses can face problems like inconsistent data sets and poor-quality data.</li>
</ul>

<p><strong>Types of Database Management Systems:</strong></p>
<ul>
  <li><strong>Relational Databases:</strong> Model data as rows and columns in tables.</li>
  <li><strong>Non-relational Databases (NoSQL):</strong> Use different query languages and flexible data structures.</li>
  <li><strong>Columnar Databases:</strong> Store data in tables focused on columns for optimized analytics.</li>
  <li><strong>Hierarchical DBMS:</strong> Data is structured in a tree-like hierarchy with parent-child relationships.</li>
  <li><strong>Network DBMS:</strong> Allows for complex many-to-many relationships between data entities.</li>
</ul>

<p><strong>Examples of DBMSs:</strong></p>
<ul>
  <li>Microsoft SQL Server</li>
  <li>Oracle</li>
  <li>MySQL</li>
  <li>Snowflake</li>
  <li>Amazon Redshift</li>
</ul>

<p><strong>Key Features of a DBMS:</strong></p>
<ul>
  <li><strong>Data Storage and Organization:</strong> Stores data in a structured format using tables, rows, and columns, allowing for efficient data retrieval and manipulation.</li>
  <li><strong>Data Access and Querying:</strong> Enables users to query the database using a query language like SQL to retrieve specific data based on defined criteria.</li>
  <li><strong>Data Integrity:</strong> Maintains data consistency and accuracy by implementing constraints like primary keys and foreign keys, preventing invalid data entries.</li>
  <li><strong>Concurrency Control:</strong> Manages simultaneous access to the database by multiple users, preventing conflicts and ensuring data consistency during updates.</li>
  <li><strong>Security Management:</strong> Implements user authentication and access controls to restrict unauthorized access to sensitive data.</li>
  <li><strong>Backup and Recovery:</strong> Provides mechanisms to regularly back up the database and restore data in case of system failure or corruption.</li>
  <li><strong>Data Manipulation:</strong> Allows users to insert, update, and delete data within the database.</li>
  <li><strong>Data Dictionary:</strong> Maintains metadata about the database, including table structures, data types, and relationships.</li>
</ul>

<p><strong>Common Uses of a DBMS:</strong></p>
<ul>
  <li><strong>Customer Relationship Management (CRM):</strong> Storing and managing customer information like contact details, purchase history, and preferences.</li>
  <li><strong>E-commerce Platforms:</strong> Managing product catalogs, customer orders, and payment details.</li>
  <li><strong>Inventory Management:</strong> Tracking stock levels, product locations, and supplier information.</li>
  <li><strong>Financial Systems:</strong> Recording transactions, generating reports, and managing account balances.</li>
  <li><strong>Healthcare Systems:</strong> Maintaining patient records, medical history, and appointment details.</li>
  <li><strong>Scientific Research:</strong> Storing and analyzing large datasets from experiments.</li>
</ul>

        `
    },
    {
        name: "Operating Systems",
        description: `<p><strong>Operating System (OS):</strong></p>
<p>An operating system (OS) is software that allows users to interact with their computer's hardware. It performs basic tasks like memory management, file management, and controlling devices like printers and disk drives.</p>

<p><strong>Popular Operating Systems:</strong></p>
<ul>
  <li><strong>Windows:</strong> A popular OS that many users prefer because it's compatible with many other software programs.</li>
  <li><strong>macOS:</strong> Apple's proprietary OS for Mac computers that's known for its security, performance, and creativity.</li>
  <li><strong>Linux:</strong> A free, open-source OS that runs on many platforms, including PCs, laptops, servers, and smartphones.</li>
  <li><strong>Android:</strong> A mobile OS based on a modified version of the Linux kernel.</li>
  <li><strong>iOS:</strong> Apple's OS for iPhone and other multitouch devices.</li>
</ul>

<p><strong>Choosing an Operating System:</strong></p>
<p>When choosing an OS, you can consider things like:</p>
<ul>
  <li>The range of hardware options.</li>
  <li>The range of software available.</li>
  <li>The interface design.</li>
  <li>The included apps and utilities.</li>
  <li>The mobile and cloud integrations.</li>
  <li>The stability, security, and updates.</li>
</ul>

<p><strong>Features of OS:</strong></p>
<ul>
  <li><strong>Memory Management:</strong> Manages the computer's memory by allocating and deallocating space to processes.</li>
  <li><strong>Security:</strong> Manages user accounts, permissions, and access controls to protect data and system resources.</li>
  <li><strong>Device Management:</strong> Manages input, output, and storage devices to ensure they run effectively and data is stored safely.</li>
  <li><strong>File Management:</strong> Manages resource allocation and deallocation, and keeps track of file information, location, and status.</li>
  <li><strong>Process Management:</strong> Develops and eliminates processes, and allocates and deallocates the CPU.</li>
</ul>

<p><strong>Uses of OS:</strong></p>
<ul>
  <li>Controls all the computer resources.</li>
  <li>Coordinates the execution of user programs.</li>
  <li>Provides resources for user programs.</li>
  <li>Hides the complexity of software.</li>
  <li>Supports multiple execution modes.</li>
  <li>Monitors the execution of user programs to prevent errors.</li>
  <li>Ensures that only authorized users can access certain resources and perform specific actions.</li>
  <li>Keeps records of the status and locations of files.</li>
  <li>Allocates and deallocates resources.</li>
  <li>Decides who gets the resources.</li>
</ul>
`
    },
    {
        name: "Computer Networks",
        description: `
        <p><strong>Computer Network:</strong></p>
<p>A computer network is a system that connects many independent computers to share information (data) and resources. The integration of computers and other different devices allows users to communicate more easily. A computer network is a collection of two or more computer systems that are linked together. A network connection can be established using either cable or wireless media. Hardware and software are used to connect computers and tools in any network. Computer networks allow users to communicate, share resources, and access information. They can also help businesses scale and operate more efficiently.</p>

<p><strong>Types of Networks:</strong></p>
<ul>
  <li><strong>Local Area Network (LAN):</strong> A small network typically used in homes, schools, and small companies.</li>
  <li><strong>Metropolitan Area Network (MAN):</strong> A network that covers a city or residence.</li>
  <li><strong>Wide Area Network (WAN):</strong> A network that covers a large area like a country or the world.</li>
</ul>

<p><strong>What Do Computer Networks Do?</strong></p>
<p>Computer networks are one of the important aspects of computer science. In the early days, they were used for data transmission on telephone lines and had very limited use, but nowadays, they are used in a variety of places.</p>
<p>Modern computer networks have the following functionality:</p>
<ul>
  <li>Computer networks help in operating virtually.</li>
  <li>Computer networks integrate on a large scale.</li>
  <li>Computer networks respond very quickly in case of conditions change.</li>
  <li>Computer networks help in providing data security.</li>
</ul>

<p><strong>Key Concepts Of Computer Networks:</strong></p>
<p>Key concepts in computer networks include devices, connections, protocols, topologies, and addresses.</p>

<p><strong>Devices:</strong></p>
<ul>
  <li><strong>Nodes:</strong> The physical devices or connection points that can send, receive, create, or store information. Examples include computers, printers, modems, and switches.</li>
  <li><strong>Routers:</strong> Physical devices that forward data packets between networks.</li>
  <li><strong>Switches:</strong> Devices that connect other devices and help in node-to-node communication.</li>
</ul>

<p><strong>Connections:</strong></p>
<ul>
  <li><strong>Links:</strong> The connections that connect the devices to each other.</li>
  <li><strong>Ports:</strong> The starting and ending points of communications.</li>
</ul>

<p><strong>Protocols:</strong></p>
<ul>
  <li>The rules that govern the communications between two computers connected to the network.</li>
  <li>Examples of protocols include IP, TCP, UDP, and FTP.</li>
</ul>

<p><strong>Topologies:</strong></p>
<ul>
  <li>The arrangement or layout of devices within a network.</li>
  <li>Some common topologies include bus, ring, mesh, star, and tree networks.</li>
</ul>

<p><strong>Addresses:</strong></p>
<ul>
  <li><strong>IP Addresses:</strong> Internet Protocol addresses are unique numbers that represent the address where you live on the Internet.</li>
  <li>Each device that is connected to the network has a string of numbers or IP addresses.</li>
</ul>

<p><strong>Features Of Computer Networks:</strong></p>
<ul>
  <li><strong>Security:</strong> Protects networks from unauthorized access, theft, and damage.</li>
  <li><strong>Scalability:</strong> Can accommodate future changes like increased traffic, new technologies, or business expansion.</li>
  <li><strong>Reliability:</strong> Has alternative sources of supply to ensure a consistent networking experience.</li>
</ul>

<p><strong>Uses Of Computer Networks:</strong></p>
<ul>
  <li><strong>Communication:</strong> Allows users to communicate through email, instant messaging, voice and video calls, and more.</li>
  <li><strong>Resource Sharing:</strong> Allows users to share computing resources like printers and storage devices.</li>
  <li><strong>File Sharing:</strong> Allows users to share files and information with authorized users.</li>
  <li><strong>Distributed Computing:</strong> Allows users to collaborate on tasks by using resources from multiple computers.</li>
  <li><strong>Network Management:</strong> Cloud-based networking solutions can help organizations manage networks more cost-effectively and flexibly.</li>
</ul>

        `
    },
    {
        name: "Software Engineering",
        description: `
        <p><strong>Software Engineering:</strong></p>
<p>Software engineering is a computer science field that involves designing, developing, testing, and maintaining software applications. It applies engineering principles and programming expertise to create reliable and efficient software systems that meet user needs. Essentially, it's the process of building software using structured methodologies and best practices.</p>

<p><strong>Skills of Software Engineers:</strong></p>
<ul>
  <li>Software engineers need to be proficient in programming languages like JavaScript, Python, or C++.</li>
  <li>They need to have strong problem-solving abilities and an innovative mindset.</li>
  <li>They need to be able to work collaboratively with a variety of teams.</li>
</ul>

<p><strong>Key Points About Software Engineering:</strong></p>
<ul>
  <li><strong>Core activities:</strong> Design, development, testing, deployment, and maintenance of software applications.</li>
  <li><strong>Focus on quality:</strong> Aims to create software that is reliable, efficient, scalable, and secure.</li>
  <li><strong>Engineering principles:</strong> Utilizes structured approaches like software design patterns, methodologies (Agile, Waterfall), and project management techniques.</li>
  <li><strong>Programming languages:</strong> Software engineers use various programming languages depending on the project, like Java, Python, C++, etc.</li>
  <li><strong>Different roles:</strong> Includes front-end developers, back-end developers, full-stack developers, quality assurance engineers, data engineers, and more.</li>
</ul>

<p><strong>Features of Software Engineering:</strong></p>
<ul>
  <li><strong>Engineering principles:</strong> Software engineering uses engineering principles and best practices to create reliable, efficient, and effective software.</li>
  <li><strong>Methodologies:</strong> Software engineering uses methodologies like Agile and continuous integration to improve efficiency and quality.</li>
  <li><strong>Testing:</strong> Software engineering includes structured testing to ensure that software meets requirements and is free of bugs.</li>
  <li><strong>Reusability:</strong> Software engineering creates reusable components that can be used in multiple projects.</li>
  <li><strong>Maintenance:</strong> Software engineering includes regularly updating and improving software to fix bugs, add new features, and address security vulnerabilities.</li>
</ul>

<p><strong>Uses of Software Engineering:</strong></p>
<ul>
  <li>Software engineering is used to create computer games, business applications, operating systems, network control systems, and middleware.</li>
  <li>Software engineering is used to solve real-world problems by developing computer applications.</li>
</ul>

        `
    },  
    {
        name: "Cloud Computing",
        description: `
        <p><strong>Cloud Computing:</strong></p>
<p>Cloud computing is the delivery of computing services over the internet, allowing users to access applications and data from anywhere. It involves storing and accessing data and programs on remote servers hosted on the internet instead of the computer’s hard drive or local server.</p>
<p>Cloud computing is also referred to as Internet-based computing. It is a technology where resources are provided as a service through the internet to users. The data stored can be files, images, documents, or any other storable document.</p>

<p><strong>Operations Performed with Cloud Computing:</strong></p>
<ul>
  <li>Storage, backup, and recovery of data</li>
  <li>Delivery of software on demand</li>
  <li>Development of new applications and services</li>
  <li>Streaming videos and audio</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
  <li>Users pay for what they use, rather than buying and maintaining physical servers and data centers.</li>
  <li>Users can access a virtual pool of shared resources, including storage, networking, and computing services.</li>
  <li>Users can scale up or down as their needs change.</li>
</ul>

<p><strong>Types of Cloud Computing:</strong></p>
<ul>
  <li>Public cloud</li>
  <li>Private cloud</li>
  <li>Hybrid cloud</li>
  <li>Cloud computing services:
    <ul>
      <li>Infrastructure as a Service (IaaS)</li>
      <li>Platform as a Service (PaaS)</li>
      <li>Software as a Service (SaaS)</li>
      <li>Serverless computing</li>
    </ul>
  </li>
  <li>Cloud computing providers:
    <ul>
      <li>Amazon Web Services (AWS)</li>
    </ul>
  </li>
</ul>

<p><strong>Benefits of Cloud Computing:</strong></p>
<ul>
  <li><strong>Cost savings:</strong> Users only pay for what they use, which can lower operating costs.</li>
  <li><strong>Flexibility:</strong> Users can scale up or down as their needs change.</li>
  <li><strong>Innovation:</strong> Cloud computing enables faster innovation and the use of cutting-edge technologies.</li>
  <li><strong>Remote work:</strong> Users can access data and applications from anywhere.</li>
</ul>

<p><strong>Key Features of Cloud Computing:</strong></p>
<ul>
  <li><strong>Scalability:</strong> Ability to quickly increase or decrease computing power based on demand, without significant infrastructure changes.</li>
  <li><strong>Accessibility:</strong> Access to data and applications from any device with an internet connection.</li>
  <li><strong>On-demand access:</strong> Users can access computing resources as needed, without upfront hardware investment.</li>
  <li><strong>Pay-as-you-go pricing:</strong> Users pay only for the resources they use, usually on a subscription basis.</li>
  <li><strong>Elasticity:</strong> Dynamically allocating resources based on real-time requirements.</li>
  <li><strong>High Availability:</strong> Redundant systems ensure data and application availability even in case of hardware failures.</li>
  <li><strong>Automatic updates:</strong> Cloud providers manage software updates and security patches automatically.</li>
  <li><strong>Collaboration tools:</strong> Facilitates real-time collaboration on documents and projects between users.</li>
</ul>

<p><strong>Common Uses of Cloud Computing:</strong></p>
<ul>
  <li><strong>Software as a Service (SaaS):</strong> Accessing applications like email, office suites, and CRM systems through a web browser without needing to install software locally.</li>
  <li><strong>Platform as a Service (PaaS):</strong> Providing a development environment for building and deploying applications on the cloud, including tools, operating systems, and databases.</li>
  <li><strong>Infrastructure as a Service (IaaS):</strong> Renting virtualized computing resources like servers, storage, and networking on demand.</li>
</ul>

<p><strong>Specific Use Cases:</strong></p>
<ul>
  <li><strong>Business applications:</strong> Hosting customer relationship management (CRM), enterprise resource planning (ERP), and accounting software on the cloud.</li>
  <li><strong>Data storage and backup:</strong> Storing large volumes of data securely in the cloud for easy access and disaster recovery.</li>
  <li><strong>Web development:</strong> Building and deploying websites on cloud servers.</li>
  <li><strong>Big data analysis:</strong> Utilizing cloud computing power to process large datasets for insights.</li>
  <li><strong>Remote work:</strong> Enabling employees to access work files and applications from anywhere with an internet connection.</li>
  <li><strong>DevOps practices:</strong> Utilizing cloud services for continuous integration and deployment of software applications.</li>
</ul>

        `
    },
    {
        name: "Artificial Intelligence",
        description: `
        <p><strong>Artificial Intelligence (AI):</strong></p>
<p>Artificial intelligence (AI) is the ability of machines to learn, think, and perform tasks, often in ways that mimic human intelligence. AI is a technology that allows computers to perform tasks that typically require human intelligence. AI can see, understand language, analyze data, make decisions, and more.</p>

<p><strong>History of AI:</strong></p>
<ul>
  <li>Alan Turing published his work "Computer Machinery and Intelligence" in the 1950s, which eventually became The Turing Test.</li>
  <li>John McCarthy, an American computer scientist, coined the term "artificial intelligence".</li>
</ul>

<p><strong>How Does AI Work?</strong></p>
<ul>
  <li>AI can automate workflows and processes.</li>
  <li>AI can work independently or autonomously from a human team.</li>
  <li>AI can learn from data and make predictions.</li>
  <li>AI can recognize patterns.</li>
  <li>AI can solve problems.</li>
</ul>

<p><strong>Types of AI:</strong></p>
<ul>
  <li><strong>Reactive machines:</strong> These AI systems have no memory and are task-specific. For example, they can play chess.</li>
  <li><strong>Generative AI:</strong> These AI systems can create new data from text prompts. For example, they can create text, images, audio, video, software code, and more.</li>
</ul>

<p><strong>Examples of AI in Use:</strong></p>
<ul>
  <li>Voice assistants</li>
  <li>Map directions</li>
  <li>Online suggestions</li>
  <li>Speech recognition</li>
  <li>Customer service hotlines</li>
  <li>Disease diagnosis</li>
  <li>Facial recognition</li>
  <li>Energy consumption reduction</li>
  <li>Art creation</li>
</ul>

<p><strong>AI Used in:</strong></p>
<ul>
  <li><strong>Machine learning:</strong> A subset of AI that uses algorithms to analyze data and make decisions.</li>
  <li><strong>Deep learning:</strong> A subset of machine learning that uses neural networks to perform predictive analytics.</li>
  <li><strong>Natural language processing:</strong> A type of AI that allows computers to understand, analyze, and generate human language.</li>
  <li><strong>Generative AI:</strong> A type of AI that can create new content, such as images, videos, and text, from text prompts.</li>
</ul>

<p><strong>AI Applications:</strong></p>
<ul>
  <li><strong>Virtual assistants:</strong> Use AI to respond to user inputs and perform tasks.</li>
  <li><strong>Chatbots:</strong> Use AI to respond to user inputs and perform tasks.</li>
  <li><strong>Recommendation systems:</strong> Use AI to make recommendations based on user data.</li>
  <li><strong>Self-driving cars:</strong> Use AI to navigate and perform tasks.</li>
  <li><strong>Robot vacuum cleaners:</strong> Use AI to perform tasks.</li>
  <li><strong>Security systems:</strong> Use AI to perform tasks.</li>
</ul>

<p><strong>Features of AI:</strong></p>
<ul>
  <li><strong>Learning:</strong> AI can learn from data and experience.</li>
  <li><strong>Reasoning:</strong> AI can solve problems using logical deduction.</li>
  <li><strong>Perception:</strong> AI can interpret sensory information to understand its environment.</li>
  <li><strong>Language understanding:</strong> AI can understand and process human language.</li>
  <li><strong>Automation:</strong> AI can perform repetitive tasks and manage workflows with minimal human intervention.</li>
</ul>

<p><strong>Uses of AI:</strong></p>
<ul>
  <li><strong>Natural language processing:</strong> AI can interpret human language, read text, and hear speech.</li>
  <li><strong>Computer vision:</strong> AI can interpret the visual world, identify and classify objects, and make decisions.</li>
  <li><strong>Chatbots:</strong> AI-powered virtual assistants can answer customer queries, guide users through processes, or provide recommendations.</li>
  <li><strong>Robotics:</strong> AI can be used in robotics, such as robot vacuum cleaners or security systems.</li>
  <li><strong>Auto-navigation:</strong> AI can be used in auto-navigation.</li>
  <li>AI can also be used in medical image analysis, surveillance, manufacturing, and more.</li>
</ul>

        `
    },
    {
        name: "Cybersecurity",
        description: `
        <p><strong>Cyber Security:</strong></p>
<p>Cyber security is the practice of protecting computers, servers, mobile devices, networks, and data from malicious attacks. It involves implementing technologies, processes, and controls to safeguard digital assets from cyber threats.</p>

<p><strong>Importance of Cyber Security:</strong></p>
<ul>
  <li>Prevents unauthorized access to sensitive data.</li>
  <li>Protects organizations from financial losses due to cyber attacks.</li>
  <li>Ensures privacy and confidentiality of user information.</li>
  <li>Maintains the integrity of digital systems and networks.</li>
</ul>

<p><strong>Types of Cyber Security:</strong></p>
<ul>
  <li><strong>Network Security:</strong> Protects computer networks from cyber threats such as hackers and malware.</li>
  <li><strong>Information Security:</strong> Ensures the confidentiality, integrity, and availability of data.</li>
  <li><strong>Application Security:</strong> Focuses on securing software applications from vulnerabilities and attacks.</li>
  <li><strong>Cloud Security:</strong> Protects data, applications, and services stored in cloud environments.</li>
  <li><strong>Endpoint Security:</strong> Secures individual devices like computers, smartphones, and tablets from cyber threats.</li>
</ul>

<p><strong>Common Cyber Threats:</strong></p>
<ul>
  <li><strong>Malware:</strong> Malicious software like viruses, worms, and ransomware that infects systems.</li>
  <li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information by pretending to be a trustworthy entity.</li>
  <li><strong>Denial-of-Service (DoS) Attacks:</strong> Overloading a system or network to make it unavailable to users.</li>
  <li><strong>Man-in-the-Middle Attacks:</strong> Cybercriminals intercept communication between two parties to steal or manipulate data.</li>
  <li><strong>Password Attacks:</strong> Attempts to guess or steal passwords to gain unauthorized access to systems.</li>
</ul>

<p><strong>Cyber Security Measures:</strong></p>
<ul>
  <li><strong>Firewalls:</strong> Prevents unauthorized access to networks.</li>
  <li><strong>Antivirus Software:</strong> Detects and removes malicious software from devices.</li>
  <li><strong>Encryption:</strong> Converts data into a secure format to prevent unauthorized access.</li>
  <li><strong>Multi-Factor Authentication (MFA):</strong> Requires multiple verification steps for secure access.</li>
  <li><strong>Security Patches:</strong> Regular updates to software and systems to fix vulnerabilities.</li>
</ul>

<p><strong>Cyber Security Best Practices:</strong></p>
<ul>
  <li>Use strong and unique passwords for different accounts.</li>
  <li>Enable two-factor authentication (2FA) for added security.</li>
  <li>Avoid clicking on suspicious links or downloading unknown files.</li>
  <li>Regularly update software and operating systems to patch security vulnerabilities.</li>
  <li>Back up important data to prevent data loss in case of cyber attacks.</li>
</ul>

<p><strong>Applications of Cyber Security:</strong></p>
<ul>
  <li><strong>Banking and Finance:</strong> Protects financial transactions and sensitive customer data.</li>
  <li><strong>Healthcare:</strong> Secures patient records and medical devices from cyber threats.</li>
  <li><strong>Government and Military:</strong> Safeguards national security data and infrastructure.</li>
  <li><strong>Business and Enterprises:</strong> Ensures the security of corporate networks and intellectual property.</li>
  <li><strong>Online Services:</strong> Protects e-commerce, cloud storage, and social media platforms.</li>
</ul>

<p><strong>Features of Cyber Security:</strong></p>
<ul>
  <li><strong>Threat Detection:</strong> Identifies and prevents cyber threats before they cause harm.</li>
  <li><strong>Risk Management:</strong> Assesses and mitigates security risks in an organization.</li>
  <li><strong>Incident Response:</strong> Quick response and recovery from cyber attacks.</li>
  <li><strong>Data Protection:</strong> Ensures sensitive information is securely stored and transmitted.</li>
  <li><strong>Security Compliance:</strong> Adheres to security regulations and industry standards.</li>
</ul>

<p><strong>Uses of Cyber Security:</strong></p>
<ul>
  <li>Protects businesses from cyber attacks and data breaches.</li>
  <li>Ensures secure online transactions for e-commerce and banking.</li>
  <li>Prevents identity theft and fraud.</li>
  <li>Maintains the integrity of government and corporate digital assets.</li>
  <li>Enables safe browsing and communication on the internet.</li>
</ul>

        `
    }
];

// DOM Elements
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const skillsContainer = document.getElementById('skills-container');
const popup = document.getElementById('skill-popup');
const closePopup = document.getElementById('close-popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');

// Initial Animations
window.addEventListener('load', () => {
    // Animate title and logo
    gsap.to('#main-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.to('#cse-logo', {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Animate programming symbols
    document.querySelectorAll('.programming-symbol').forEach(symbol => {
        // Random position within viewport
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        
        // Set animation variables
        symbol.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        symbol.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        symbol.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    });
});

// Update the dropdown toggle code in script.js
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdownMenu.classList.remove('active');
    }
});

// Create and animate skill buttons
skills.forEach((skill, index) => {
    const button = document.createElement('button');
    button.className = 'skill-button';
    button.innerHTML = `<h3>${skill.name}</h3>`;

    // Add click handler
    button.addEventListener('click', () => showSkillPopup(skill));

    skillsContainer.appendChild(button);

    // Create scroll trigger animation
    gsap.from(button, {
        scrollTrigger: {
            trigger: button,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
image = document.querySelector(".image");

// Popup Functions
function showSkillPopup(skill) {
    popupTitle.textContent = skill.name;
    popupDescription.innerHTML = skill.description;  // Now supports HTML content
    image.src = `${skills.indexOf(skill)}.png`;
    popup.classList.remove('hidden');
    popup.classList.add('active');
}

closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
    setTimeout(() => popup.classList.add('hidden'), 300);
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
        setTimeout(() => popup.classList.add('hidden'), 300);
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        popup.classList.remove('active');
        setTimeout(() => popup.classList.add('hidden'), 300);
        dropdownMenu.classList.add('hidden');
    }
});
