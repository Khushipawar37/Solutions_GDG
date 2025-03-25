const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore") ;
require("dotenv").config({ path: "../.env" })


const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
  }
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


  const blogData =  [
      {
        "careerId": "information_security_officer_001",
        "careerName": "Information Security Officer",
        "title": "Guardians of Digital Assets: The Role of an Information Security Officer",
        "quote": "The best way to predict the future is to create it — and secure it.",
        "quoteAuth": "Peter Drucker",
        "author": "Nathan Carter",
        "data": "An Information Security Officer (ISO) is responsible for safeguarding an organization's digital assets by implementing security policies, monitoring threats, and ensuring compliance with cybersecurity regulations. This role involves risk assessment, security framework implementation, and incident response planning to mitigate cyber threats. With the rising frequency of cyberattacks, ISOs play a critical role in preventing data breaches and ensuring business continuity. They work closely with IT teams, executives, and compliance officers to enforce security best practices. The role requires continuous learning due to the ever-evolving nature of cyber threats. Future trends in information security include AI-driven threat detection, zero-trust architecture, and increased regulatory scrutiny, making the ISO role more crucial than ever.",
        "content": [
          {
            "question": "What skills are necessary for this career?",
            "answer": "To become an Information Security Officer, a strong foundation in cybersecurity principles, risk management, and compliance frameworks is essential. Technical skills in network security, cryptography, incident response, and ethical hacking are valuable. Knowledge of security standards like ISO 27001, NIST, and GDPR compliance is crucial. Proficiency in security tools such as SIEM (Security Information and Event Management), firewalls, intrusion detection systems, and vulnerability scanners is necessary. Soft skills like communication, problem-solving, and decision-making are equally important, as ISOs must communicate risks and security strategies to non-technical stakeholders."
          },
          {
            "question": "What are the growth opportunities and future trends in this industry?",
            "answer": "The demand for cybersecurity professionals is rapidly growing, with ISOs advancing to roles like Chief Information Security Officer (CISO), Security Consultant, or Cybersecurity Director. Specialization in fields like cloud security, ethical hacking, and forensic analysis can open niche opportunities. Future trends include the rise of AI-powered security solutions, zero-trust security models, and increased focus on data privacy regulations. Organizations are prioritizing cybersecurity due to the increasing number of ransomware attacks and data breaches, ensuring continued job opportunities and career growth in this field."
          },
          {
            "question": "What type of work environment should one expect?",
            "answer": "Information Security Officers typically work in corporate offices, government agencies, or cybersecurity firms. The job involves regular assessments of IT infrastructure, security audits, and responding to cyber threats. Many companies offer remote or hybrid work options, especially for security analysts and consultants. The work can be high-pressure, especially during security incidents, but it is rewarding as it contributes to the overall protection of an organization’s sensitive data. Collaboration with IT teams, executives, and compliance officers is common, requiring strong teamwork and communication skills."
          },
          {
            "question": "Advice I would give to someone starting this career?",
            "answer": "Start by gaining foundational knowledge in cybersecurity through certifications like CompTIA Security+, CEH (Certified Ethical Hacker), or CISSP (Certified Information Systems Security Professional). Hands-on experience in penetration testing, security audits, and incident response is valuable. Stay updated with the latest cyber threats and security trends through research and networking with professionals in the field. Build a portfolio by participating in bug bounty programs or contributing to open-source security projects. Internships and entry-level roles in IT security are excellent stepping stones to becoming an Information Security Officer."
          },
          {
            "question": "What are the challenges that I faced in this field?",
            "answer": "One of the biggest challenges in this field is keeping up with the ever-evolving threat landscape. Cybercriminals constantly develop new attack vectors, requiring continuous learning and adaptation. Managing security incidents and breaches can be stressful, as organizations rely on ISOs to respond quickly and mitigate damage. Balancing security with business efficiency is another challenge—implementing strict security measures may sometimes hinder workflow, leading to resistance from employees. Regulatory compliance is also complex, as organizations must adhere to different security frameworks depending on their industry and location."
          },
          {
            "question": "How did I get started in this field?",
            "answer": "I began my career in IT, working as a network administrator before transitioning into cybersecurity. I developed an interest in security through hands-on experience with firewalls, threat monitoring, and security audits. To enhance my knowledge, I pursued cybersecurity certifications and attended security conferences. I gained practical experience by participating in Capture The Flag (CTF) competitions and ethical hacking challenges. My breakthrough came when I led a security audit that identified vulnerabilities in my company’s network, proving my expertise and securing my first role as an Information Security Officer. From there, I continued learning and specializing in areas like cloud security and incident response."
          }
        ]
      }
    ];
    

async function addBlogsToFirestore() {
  const blogsCollection = collection(db, "blogs");

  for (const blog of blogData) {
    try {
      await addDoc(blogsCollection, blog);
      console.log(`Added blog for career: ${blog.careerId}`);
    } catch (error) {
      console.error(`Error adding blog for career ${blog.careerId}:`, error);
    }
  }
}

addBlogsToFirestore();
