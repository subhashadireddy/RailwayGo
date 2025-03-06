document.addEventListener('DOMContentLoaded', () => {
    const careerCards = document.querySelectorAll('.career-card');
    const popup = document.querySelector('.career-popup');
    const popupContent = document.querySelector('.career-popup-content');
    const closePopup = document.querySelector('.close-popup');

    const careerData = {
        'mtech': {
            title: 'Master of Technology (M.Tech)',
            image: 'a.png',
            description: `<p><strong>Higher Studies After CSE (M.Tech):</strong></p>
<p>Pursuing higher studies after completing an M.Tech in Computer Science and Engineering (CSE) can open up various career opportunities in research, academia, and specialized industries. Higher studies help in gaining in-depth knowledge, expertise, and advanced skills in various domains of computer science.</p>

<p><strong>Why Pursue Higher Studies After M.Tech in CSE?</strong></p>
<ul>
  <li>Enhances knowledge and expertise in specialized areas.</li>
  <li>Improves career prospects in research, academia, and industry.</li>
  <li>Opens opportunities for high-paying jobs and leadership roles.</li>
  <li>Allows for contributions to technological advancements and innovations.</li>
</ul>

<p><strong>Options for Higher Studies After M.Tech in CSE:</strong></p>
<ul>
  <li><strong>Ph.D. in Computer Science and Engineering:</strong> Research-focused program for those interested in academia and advanced research.</li>
  <li><strong>Postdoctoral Research:</strong> Advanced research in specialized fields of computer science.</li>
  <li><strong>Specialized Certifications:</strong> Industry-recognized certifications to enhance technical skills.</li>
  <li><strong>MBA in Technology Management:</strong> Combines technical expertise with management skills.</li>
</ul>

<p><strong>Ph.D. in Computer Science and Engineering:</strong></p>
<ul>
  <li><strong>Eligibility:</strong> M.Tech in CSE or equivalent qualification.</li>
  <li><strong>Duration:</strong> Typically 3-5 years.</li>
  <li><strong>Research Areas:</strong> Artificial Intelligence, Machine Learning, Cyber Security, Quantum Computing, IoT, Blockchain, etc.</li>
  <li><strong>Career Opportunities:</strong> Professorship, Research Scientist, R&D Engineer.</li>
</ul>

<p><strong>Postdoctoral Research:</strong></p>
<ul>
  <li>For those who have completed a Ph.D. and want to continue research.</li>
  <li>Opportunities available in universities, research labs, and industry.</li>
  <li>Focuses on publishing research papers, patents, and technological advancements.</li>
</ul>

<p><strong>Specialized Certifications:</strong></p>
<ul>
  <li><strong>Cloud Computing:</strong> AWS Certified Solutions Architect, Google Cloud Certification.</li>
  <li><strong>Cyber Security:</strong> Certified Ethical Hacker (CEH), CISSP, CISA.</li>
  <li><strong>Data Science & AI:</strong> Google AI, IBM Data Science, TensorFlow Developer.</li>
  <li><strong>Networking:</strong> CCNA, CCNP, Cisco Certifications.</li>
  <li><strong>Blockchain:</strong> Certified Blockchain Developer, Hyperledger Certification.</li>
</ul>

<p><strong>MBA in Technology Management:</strong></p>
<ul>
  <li>Combines business management with technical expertise.</li>
  <li>Prepares professionals for leadership roles in the tech industry.</li>
  <li>Career Opportunities: IT Manager, Technology Consultant, Product Manager.</li>
</ul>

<p><strong>Top Universities for Higher Studies in CSE:</strong></p>
<ul>
  <li><strong>India:</strong> IITs, NITs, IIITs, IISc Bangalore.</li>
  <li><strong>USA:</strong> MIT, Stanford, Harvard, UC Berkeley, Carnegie Mellon.</li>
  <li><strong>UK:</strong> University of Oxford, University of Cambridge, Imperial College London.</li>
  <li><strong>Canada:</strong> University of Toronto, University of British Columbia, McGill University.</li>
  <li><strong>Germany:</strong> TU Munich, RWTH Aachen, University of Stuttgart.</li>
</ul>

<p><strong>Career Opportunities After Higher Studies in CSE:</strong></p>
<ul>
  <li>Professor/Lecturer in universities and colleges.</li>
  <li>Research Scientist in tech firms or government organizations.</li>
  <li>Software Architect in multinational companies.</li>
  <li>Data Scientist specializing in AI and ML.</li>
  <li>Cyber Security Expert in defense and IT sectors.</li>
  <li>Entrepreneur in technology startups.</li>
</ul>

<p><strong>Conclusion:</strong></p>
<p>Higher studies after an M.Tech in CSE provide a pathway to advanced research, specialized knowledge, and better career opportunities. Depending on interests, one can choose a Ph.D., postdoctoral research, professional certifications, or management courses like an MBA in Technology Management.</p>
`,
            roles: [
                'Computer Science & Engineering',
                'Data Science & AI',
                'Embedded Systems',
                'Cybersecurity',
                'Software Engineering',
                'Career-OPPORTUNITIES:',
            
                  '......Software Engineer',
                  '......Research Scientist',
                  '......Data Analyst',
                  '......AI/ML Engineer',
                  '......University Professor'
            ],
            
            salaries: {
                'Entry Level': '₹6,00,000 - ₹10,00,000',
                'Mid Level': '₹10,00,000 - ₹18,00,000',
                'Senior Level': '₹18,00,000 - ₹30,00,000',
                'Lead/Architect': '₹25,00,000 - ₹40,00,000'
            },
            skills: [
                'Advanced Algorithms',
                'Machine Learning & AI',
                'High-Performance Computing',
                'Cybersecurity & Cryptography',
                'Research & Development'
            ]
        },
        'software-dev': {
            title: 'Software Development',
            image: 'b.png',
            description: 'Software developers create applications and systems that power the modern world.',
            roles: [
                'Full Stack Developer',
                'Mobile App Developer',
                'Systems Developer',
                'Game Developer'
            ],
            salaries: {
                'Entry Level': '₹5,00,000 - ₹7,00,000',
                'Mid Level': '₹7,00,000 - ₹12,00,000',
                'Senior Level': '₹12,00,000 - ₹18,00,000',
                'Lead/Architect': '₹18,00,000 - ₹30,00,000'
            },
            skills: [
                'Programming Languages',
                'Version Control',
                'Database Management',
                'API Design',
                'Testing'
            ]
        },
'data-science': {
            title: 'Data Science',
    image: 'c.png',
            description: 'Data scientists analyze and interpret complex data to help organizations make informed decisions.',
            roles: [
                'Data Analyst',
                'Machine Learning Engineer',
                'Data Engineer',
                'AI Researcher'
            ],
            salaries: {
                'Entry Level': '₹6,00,000 - ₹12,00,000',
                'Mid Level': '₹12,00,000 - ₹25,00,000',
                'Senior Level': '₹25,00,000 - ₹50,00,000',
                'Lead/Architect': '₹40,00,000 - ₹80,00,000'
            },
            skills: [
                'Data Analysis',
                'Machine Learning',
                'Big Data',
                'Statistical Modeling',
                'Deep Learning'
            ]
        },
        'cloud-computing': {
            title: 'Cloud Computing',
            image: 'd.png',
            description: 'Cloud computing professionals manage and deploy scalable computing resources over the internet.',
            roles: [
                'Cloud Engineer',
                'Cloud Architect',
                'DevOps Engineer',
                'Site Reliability Engineer'
            ],
            salaries: {
                'Entry Level': '₹6,00,000 - ₹15,00,000',
                'Mid Level': '₹15,00,000 - ₹30,00,000',
                'Senior Level': '₹30,00,000 - ₹60,00,000',
                'Lead/Architect': '₹50,00,000 - ₹1,00,00,000'
            },
            skills: [
                'Cloud Platforms',
                'Containerization',
                'Infrastructure as Code',
                'Networking',
                'Security'
            ]
        },
        'cyber-security': {
            title: 'Cyber Security',
            image: 'e.png',
            description: 'Cyber security professionals protect digital assets from threats and vulnerabilities.',
            roles: [
                'Security Analyst',
                'Penetration Tester',
                'Security Engineer',
                'Chief Information Security Officer (CISO)'
            ],
            salaries: {
                'Entry Level': '₹5,00,000 - ₹12,00,000',
                'Mid Level': '₹12,00,000 - ₹25,00,000',
                'Senior Level': '₹25,00,000 - ₹50,00,000',
                'Lead/Architect': '₹40,00,000 - ₹90,00,000'
            },
            skills: [
                'Network Security',
                'Ethical Hacking',
                'Incident Response',
                'Risk Assessment',
                'Encryption'
            ]
        },
        'ai-ml': {
            title: 'AI & Machine Learning',
            image: 'f.png',
            description: 'AI and ML professionals design intelligent systems that learn from data to automate processes and improve decision-making.',
            roles: [
                'Machine Learning Engineer',
                'AI Research Scientist',
                'Deep Learning Engineer',
                'NLP Engineer'
            ],
            salaries: {
                'Entry Level': '₹7,00,000 - ₹15,00,000',
                'Mid Level': '₹15,00,000 - ₹30,00,000',
                'Senior Level': '₹30,00,000 - ₹60,00,000',
                'Lead/Architect': '₹50,00,000 - ₹1,00,00,000'
            },
            skills: [
                'Neural Networks',
                'Computer Vision',
                'Natural Language Processing',
                'Reinforcement Learning',
                'Model Deployment'
            ]
        },
        'devops': {
            title: 'DevOps',
            image: 'g.png',
            description: 'DevOps engineers streamline development and operations processes through automation and continuous integration.',
            roles: [
                'DevOps Engineer',
                'Site Reliability Engineer',
                'Platform Engineer',
                'Release Manager'
            ],
            salaries: {
                'Entry Level': '₹6,00,000 - ₹14,00,000',
                'Mid Level': '₹14,00,000 - ₹28,00,000',
                'Senior Level': '₹28,00,000 - ₹55,00,000',
                'Lead/Architect': '₹45,00,000 - ₹95,00,000'
            },
            skills: [
                'CI/CD',
                'Kubernetes',
                'Infrastructure Automation',
                'Monitoring',
                'Cloud Computing'
            ]
        },
        'product-management': {
            title: 'Product Management',
            description: 'Product managers oversee the development and launch of innovative products.',
            roles: [
                'Product Manager',
                'Technical Product Manager',
                'Growth Product Manager',
                'VP of Product'
            ],
            salaries: {
                'Entry Level': '₹8,00,000 - ₹18,00,000',
                'Mid Level': '₹18,00,000 - ₹35,00,000',
                'Senior Level': '₹35,00,000 - ₹70,00,000',
                'Lead/Architect': '₹60,00,000 - ₹1,20,00,000'
            },
            skills: [
                'Market Research',
                'Agile Methodology',
                'User Experience',
                'Business Strategy',
                'Data Analysis'
            ]
        },
        'systems-architecture': {
            title: 'Systems Architecture',
            description: 'Systems architects design and optimize complex IT infrastructures and software systems.',
            roles: [
                'Software Architect',
                'Solutions Architect',
                'Enterprise Architect',
                'Cloud Architect'
            ],
            salaries: {
                'Entry Level': '₹8,00,000 - ₹18,00,000',
                'Mid Level': '₹18,00,000 - ₹35,00,000',
                'Senior Level': '₹35,00,000 - ₹75,00,000',
                'Lead/Architect': '₹65,00,000 - ₹1,30,00,000'
            },
            skills: [
                'System Design',
                'Microservices',
                'Cloud Computing',
                'Scalability',
                'Security'
            ]
        },
        'iot-development': {
            title: 'IoT Development',
            description: 'IoT developers build connected devices and networks to enable smart automation and data-driven insights.',
            roles: [
                'Embedded Systems Engineer',
                'IoT Developer',
                'IoT Security Specialist',
                'IoT Architect'
            ],
            salaries: {
                'Entry Level': '₹6,00,000 - ₹12,00,000',
                'Mid Level': '₹12,00,000 - ₹25,00,000',
                'Senior Level': '₹25,00,000 - ₹50,00,000',
                'Lead/Architect': '₹40,00,000 - ₹85,00,000'
            },
            skills: [
                'Embedded Programming',
                'IoT Protocols',
                'Edge Computing',
                'Networking',
                'Security'
            ]
        },
        'blockchain': {
            title: 'Blockchain',
            image: 'h.png',
            description: 'Blockchain developers create secure and decentralized digital transaction systems.',
            roles: [
                'Blockchain Developer',
                'Smart Contract Engineer',
                'Blockchain Architect',
                'Cryptography Engineer'
            ],
            salaries: {
                'Entry Level': '₹7,00,000 - ₹15,00,000',
                'Mid Level': '₹15,00,000 - ₹30,00,000',
                'Senior Level': '₹30,00,000 - ₹60,00,000',
                'Lead/Architect': '₹50,00,000 - ₹1,00,00,000'
            },
            skills: [
                'Cryptography',
                'Smart Contracts',
                'Consensus Algorithms',
                'DeFi',
                'Security'
            ]
        }
        // Add similar data objects for other careers
    };
    
    function showCareerPopup(career) {
        const data = careerData[career];
        popupContent.innerHTML = `
            <button class="close-popup">×</button>
            <h2>${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" class="career-image">
            <p>${data.description}</p>
            
            <h3>Key Roles</h3>
            <ul>
                ${data.roles.map(role => `<li>${role}</li>`).join('')}
            </ul>

            <div class="salary-range">
                <h3>Salary Ranges</h3>
                <ul class="salary-list">
                    ${Object.entries(data.salaries)
                .map(([level, range]) => `
                            <li>
                                <span>${level}</span>
                                <span>${range}</span>
                            </li>
                        `).join('')}
                </ul>
            </div>

            <h3>Required Skills</h3>
            <ul>
                ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;

        popup.classList.add('active');
    }


    careerCards.forEach(card => {
        card.addEventListener('click', () => {
            showCareerPopup(card.dataset.career);
        });
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup || e.target.classList.contains('close-popup')) {
            popup.classList.remove('active');
        }
    });

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    careerCards.forEach(card => observer.observe(card));
});