export type Language = 'en' | 'el';

export const translations = {
  en: {
    // Navigation
    about: 'About',
    resume: 'Resume',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Sidebar
    computerScientist: 'Computer Scientist',
    showContacts: 'Show Contacts',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    email: 'EMAIL',
    phone: 'PHONE',
    location: 'LOCATION',
    my_name: 'Yannis Kaziales',
    my_location: 'Cambridge, United Kingdom',
    // my_location: 'Heraklion, Crete, Greece',
    last_updated: 'Updated: March 2026',
    
    // Contact
    getInTouch: 'Get in Touch',
    contactIntro: 'Feel free to reach out to me for any inquiries, or collaborations.',
    
    // About Me
    aboutMe: 'About Me',
    aboutMeText1: "I'm a computer scientist and recent M.Sc. graduate with a research-driven mindset. My interests mostly fall in the following areas:",
    aboutMeInterests: "signal processing, machine/deep learning, computer vision, algorithm design, deep generative models",
    aboutMeText2: "I have always been drawn to the way artificial intelligence can provide new perspectives on complex problems. I enjoy the process of taking a difficult challenge and finding an efficient way to solve it, backed by solid mathematical foundations. I have a particular interest in image, speech and audio processing tasks. Lately, I've been working on open-vocabulary image segmentation, focusing on improving how machines understand visual data in more flexible, real-world ways.",
    whatImDoing: "What I'm Doing",
    softwareDevelopment: 'Software Development',
    softwareDevelopmentDesc: 'Development of efficient, scalable algorithms and programs.',
    academicResearch: 'Academic Research',
    academicResearchDesc: 'Continuous study of the field and the relevant bibliography.',
    artificialIntelligence: 'Artificial Intelligence',
    artificialIntelligenceDesc: 'Use and development of machine learning and deep learning methods for real-world problems.',
    papercrafts: 'Papercrafts',
    papercraftsDesc: 'Design and folding of origami and 3d papercraft sculptures/models as a hobby.',
    
    // Resume
    experience: 'Experience',
    education: 'Education',
    technicalSkills: 'Technical Skills',
    honorsAndAwards: 'Honors & Awards',
    activities: 'Activities',
    teachingAssistant: 'Teaching Assistant for the following courses at CSD, UoC:',
    skillLevelAdvanced: 'Advanced',
    skillLevelIntermediate: 'Intermediate',
    skillLevelBasic: 'Basic',
    present: 'Present',
    languagesSection: 'Languages',
    hobbiesSection: 'Hobbies',
    languageGreek: 'Greek (native)',
    languageEnglish: 'English (fluent - C1)',
    languageGerman: 'German (basic)',
    hobbyOrigami: 'Origami',
    hobbyPapercrafts: 'Papercrafts',
    hobbyBoardGames: 'Board Games',
    hobbyCycling: 'Cycling',
    hobbyCooking: 'Cooking',
    hobbyReading: 'Reading',
    
    // Experience items
      // Roles
    siriSpeechIntern: 'Siri Speech Intern',
    gradResearchAssistant: 'Graduate Research Assistant',
    undergradIntern: 'Undergraduate Research Intern',
      // Companies
    APPLE: 'Apple',
    IACM_forth: 'Data Science Group - Institute of Applied and Computational Mathematics, FORTH',
    SPL_forth: 'Signal Processing Lab - Institute of Computer Science, FORTH',
      // Responsibilities
    responsibility0: 'Developed a neural network framework for open-vocabulary image segmentation',
    responsibility1: 'Explored foundation models in Computer Vision (SAM, CLIP, DINO, Stable Diffusion)',
    responsibility2: 'Working on voice generation',
    

    // Education items
    msCS: 'MSc in Computer Science',
    bsCS: 'BSc in Computer Science',
    UoC_csd: 'University of Crete, Computer Science Department',
    thesisMSc: 'Open-Vocabulary Image Segmentation algorithms with deep Neural Networks',
    thesisBSc: 'Image Segmentation algorithms based on "Transformer" Neural Networks',
    komod_advisor: 'Nikos Komodakis (Associate Professor)',
    
    // Honors & Awards
    deprofitDistinction: '"DEPROFIT" Distinction',
    deprofitPeriod: 'fall semester 2021-2022',
    deprofitInstitution: 'Computer Science Department, University of Crete',
    steliosScholarship: 'Distinguished Undergraduate Scholarship "Stelios Orphanoudakis"',
    steliosYears: '2019-2020, 2020-2021, 2021-2022',
    steliosInstitution: 'Institute of Computer Science, FORTH',
    hackathonAward: '3rd Place at FuturEd AI Hackathon',
    hackathonYear: '2025',
    hackathonInstitution: 'Computer Science Department, University of Crete (16 teams)',
    
    // Portfolio
    spade: 'SPADE',
    spadeDesc: 'Developed a deep learning framework for open-vocabulary image segmentation that utilizes diffusion generative models and foundation Vision and Language models.',
    meanShifter: 'MeanShifter',
    meanShifterDesc: 'Developed a novel transformer-based model for semantic image segmentation that utilizes Mean Shift blocks for accurate and efficient segmentation.',
    cardScanner: 'Automatic Card Detector & Bulk Scanner',
    cardScannerDesc: 'Developed an automatic webcam TCG card detection and bulk scanning application using image processing techniques and database management for efficient collection.',
    imageBlending: 'Image Blending & Editing',
    imageBlendingDesc: 'Developed a tool using traditional techniques (Poisson, Laplacian Pyramid) to seamlessly blend images and perform gradient domain manipulations.',
    ellipseTracking: 'Circle/Ellipse Tracking',
    ellipseTrackingDesc: 'Developed an efficient ellipse tracking algorithm using Particle Swarm Optimization to accurately track elliptical objects in videos.',
    digitRecognition: 'Optical Digit Recognition',
    digitRecognitionDesc: 'Developed an optical digit recognition system using Generalised Hough Transform and OpenCV for accurate detection of digits in images.',
    csdSchedule: 'CSD Schedule Web App',
    csdScheduleDesc: 'Contributed to a web application to view and manage the course schedule of the Computer Science Department at University of Crete.',
    coughsultant: 'CoughSultant',
    coughsultantDesc: 'Developed a Covid-19 detection system based on processing and analysis of cough sounds with machine learning techniques.',
    yago: 'Yet Another Galaxy Ontology (YAGO)',
    yagoDesc: 'Developed a DL knowledge base about the Milky Way galaxy using OWL for ontology representation and reasoning, and Flask for web interface.',
    akariSolver: 'Akari (Light Up) Puzzle Solver',
    akariSolverDesc: 'Developed an efficient solver for Akari puzzles using constraint satisfaction and backtracking algorithms to find optimal solutions quickly.',
    speakerIdentification: 'Speaker Identification System',
    speakerIdentificationDesc: 'Developed a speaker identification system using MFCC features and Gaussian Mixture Models for accurate speaker recognition.',
    speechEnhancement: 'Speech Enhancement System',
    speechEnhancementDesc: 'Developed a speech enhancement system, using Spectral Subtraction and Wiener filtering to improve audio quality.',
    vusDetector: 'Automatic VUS Detector',
    vusDetectorDesc: 'Developed a simple, adaptive, fully-automated speech VUS (Voice, Unvoiced, Silence) detector.',
    pacmanAI: 'Pacman AI Agent',
    pacmanAIDesc: 'Developed an AI agent for the Pacman game using search algorithms (DFS, BFS, A*), and learning techniques to optimize gameplay strategies.',
    spanakaz: '"Spanakaz" Compiler & VM',
    spanakazDesc: 'Developed a complete compiler, virtual machine, and library functions for the dynamic programming language "Spanakaz".',
    microTCP: 'MicroTCP Protocol',
    microTCPDesc: 'Developed a lightweight protocol for reliable data transfer over UDP, focusing on low latency and minimal resource usage.',
    sudokuSolver: 'Sudoku Solver and Generator',
    sudokuSolverDesc: 'Implemented a fast and efficient Sudoku solver utilizing backtracking algorithms, as well as a Sudoku board generator.',
    sorryBoardGame: 'Sorry! Board Game',
    sorryBoardGameDesc: 'Implemented the classic board game Sorry! with local multiplayer support using the MVC architectural pattern with a focus on performance and user experience.',
    
    
    // Categories
    computerVisionCat: 'Computer Vision',
    signalProcessing: 'Signal Processing',
    machineLearning: 'Machine Learning',
    neuralNetworks: 'Neural Networks',
    softDevelopment: 'Software Development',
    
    // Project Detail Page
    projectNotFound: 'Project Not Found',
    backToPortfolio: 'Back to Portfolio',
    viewOnGithub: 'View on GitHub',
    viewLiveDemo: 'Live Demo',
    projectImages: 'Project Images',
    technologiesUsed: 'Technologies Used',
    codeExample: 'Code Example',
    
    // Detailed project descriptions
    realTimeDetectionDetailed: 'This project implements a state-of-the-art real-time object detection system using a custom YOLO architecture optimized for edge devices. The system achieves over 60 FPS on mobile hardware while maintaining 95% accuracy. Key optimizations include model quantization, efficient memory management, and CUDA acceleration for GPU-enabled devices.',
    neuralSignalDetailed: 'A comprehensive neural signal classification system built using deep learning techniques. The model combines 1D Convolutional Neural Networks with LSTM layers to effectively process and classify bio-signals. The system shows a 15% improvement in classification accuracy compared to traditional signal processing methods, making it suitable for real-world biomedical applications.',
  },
  el: {
    // Navigation
    about: 'Σχετικά',
    resume: 'Βιογραφικό',
    portfolio: 'Χαρτοφυλάκιο',
    contact: 'Επικοινωνία',
    
    // Sidebar
    computerScientist: 'Επιστήμονας Υπολογιστών',
    showContacts: 'Εμφάνιση Επαφών',
    darkMode: 'Σκοτεινή Λειτουργία',
    lightMode: 'Φωτεινή Λειτουργία',
    email: 'EMAIL',
    phone: 'ΤΗΛΕΦΩΝΟ',
    location: 'ΤΟΠΟΘΕΣΙΑ',
    my_name: 'Γιάννης Καζιάλες',
    my_location: 'Κέιμπριτζ, Ηνωμένο Βασίλειο',
    // my_location: 'Ηράκλειο, Κρήτη, Ελλάδα',
    last_updated: 'Ενημερώθηκε: Μάρτιος 2026',
    
    // Contact
    getInTouch: 'Στοιχεία Επικοινωνίας',
    contactIntro: 'Μη διστάσετε να επικοινωνήσετε μαζί μου για οποιαδήποτε ερώτηση, ή συνεργασία.',
    
    // About Me
    aboutMe: 'Σχετικά με Εμένα',
    aboutMeText1: 'Είμαι επιστήμονας υπολογιστών και πρόσφατος απόφοιτος μεταπτυχιακού προγράμματος με ερευνητική νοοτροπία. Τα ενδιαφέροντά μου επικεντρώνονται κυρίως στους ακόλουθους τομείς:',
    aboutMeInterests: 'επεξεργασία σήματος, μηχανική/βαθιά μάθηση, υπολογιστική όραση, σχεδιασμός αλγορίθμων, βαθιά γενετικά μοντέλα',
    aboutMeText2: 'Πάντα με γοήτευε ο τρόπος με τον οποίο η τεχνητή νοημοσύνη μπορεί να προσφέρει νέες προοπτικές σε σύνθετα προβλήματα. Μου αρέσει η διαδικασία της ανάληψης μιας δύσκολης πρόκλησης και της εύρεσης ενός αποτελεσματικού τρόπου για την επίλυσή της, με τη στήριξη στέρεων μαθηματικών βάσεων. Έχω ιδιαίτερο ενδιαφέρον για εργασίες επεξεργασίας εικόνας, ομιλίας και ήχου. Τον τελευταίο καιρό, ασχολούμαι με την τμηματοποίηση εικόνων ανοικτού λεξιλογίου, εστιάζοντας στη βελτίωση του τρόπου με τον οποίο οι μηχανές κατανοούν τα οπτικά δεδομένα με πιο ευέλικτους, πραγματικούς τρόπους.',
    whatImDoing: 'Τι Κάνω',
    softwareDevelopment: 'Ανάπτυξη Λογισμικού',
    softwareDevelopmentDesc: 'Ανάπτυξη αποδοτικών και κλιμακούμενων αλγορίθμων και προγραμμάτων.',
    academicResearch: 'Ακαδημαϊκή Έρευνα',
    academicResearchDesc: 'Συνεχής μελέτη του πεδίου και της σχετικής βιβλιογραφίας.',
    artificialIntelligence: 'Τεχνητή Νοημοσύνη',
    artificialIntelligenceDesc: 'Χρήση και ανάπτυξη μεθόδων μηχανικής μάθησης και βαθιάς μάθησης για προβλήματα του πραγματικού κόσμου.',
    papercrafts: 'Χειροτεχνίες με Χαρτί',
    papercraftsDesc: 'Σχεδιασμός και δίπλωμα origami και τρισδιάστατων μοντέλων από χαρτί ως χόμπι.',
    
    // Resume
    education: 'Εκπαίδευση',
    experience: 'Εμπειρία',
    technicalSkills: 'Τεχνικές Δεξιότητες',
    honorsAndAwards: 'Τιμές & Βραβεία',
    activities: 'Δραστηριότητες',
    teachingAssistant: 'Βοηθός Διδασκαλίας για τα ακόλουθα μαθήματα στο CSD, UoC:',
    skillLevelAdvanced: 'Προχωρημένες',
    skillLevelIntermediate: 'Μέτριες',
    skillLevelBasic: 'Βασικές',
    present: 'Σήμερα',
    languagesSection: 'Γλώσσες',
    hobbiesSection: 'Χόμπι',
    languageGreek: 'Ελληνικά (μητρική)',
    languageEnglish: 'Αγγλικά (άριστα - C1)',
    languageGerman: 'Γερμανικά (βασικά)',
    hobbyOrigami: 'Οριγκάμι',
    hobbyPapercrafts: 'Χειροτεχνίες με Χαρτί',
    hobbyBoardGames: 'Επιτραπέζια Παιχνίδια',
    hobbyCycling: 'Ποδηλασία',
    hobbyCooking: 'Μαγειρική',
    hobbyReading: 'Ανάγνωση',
    
    // Experience items
      // Roles
    siriSpeechIntern: 'Ασκούμενος στην φωνητική τεχνολογία Siri',
    researchScientist: 'Ερευνητής Επιστήμονας',
    gradResearchAssistant: 'Μεταπτυχιακός Βοηθός Ερευνητής',
    undergradIntern: 'Προπτυχιακός Ασκούμενος Ερευνητής',
      // Companies
    APPLE: 'Apple',
    IACM_forth: 'Ομάδα Επιστήμης Δεδομένων - Ινστιτούτο Εφαρμοσμένων και Υπολογιστικών Μαθηματικών, ΙΤΕ',
    SPL_forth: 'Εργαστήριο Επεξεργασίας Σήματος - Ινστιτούτο Πληροφορικής, ΙΤΕ',
      // Responsibilities
    responsibility0: 'Ανάπτυξη ενός πλαισίου νευρωνικών δικτύων για τμηματοποίηση εικόνων με ανοικτό λεξιλόγιο',
    responsibility1: 'Εξερεύνηση foundation μοντέλων στην Υπολογιστική Όραση (SAM, CLIP, DINO, Stable Diffusion)',
    responsibility2: 'Εργάζομαι στον τομέα της παραγωγής φωνής',
    
    // Education items
    msCS: 'Μεταπτυχιακό στην Επιστήμη Υπολογιστών',
    bsCS: 'Πτυχίο στην Επιστήμη Υπολογιστών',
    UoC_csd: 'Πανεπιστήμιο Κρήτης, Τμήμα Επιστήμης Υπολογιστών',
    thesisMSc: 'Αλγόριθμοι Τμηματοποίησης Εικόνας με Ανοικτό Λεξιλόγιο με βαθιά Νευρωνικά Δίκτυα',
    thesisBSc: 'Αλγόριθμοι Τμηματοποίησης Εικόνας βασισμένοι σε Νευρωνικά Δίκτυα "Transformers"',
    komod_advisor: 'Νίκος Κομοντάκης (Αναπληρωτής Καθηγητής)',

    // Honors & Awards
    deprofitDistinction: 'Διάκριση "ΔΕΠΡΟΦΟΙΤ"',
    deprofitPeriod: 'χειμερινό εξάμηνο 2021-2022',
    deprofitInstitution: 'Τμήμα Επιστήμης Υπολογιστών, Πανεπιστήμιο Κρήτης',
    steliosScholarship: 'Διακεκριμένη Προπτυχιακή Υποτροφία "Στέλιος Ορφανουδάκης"',
    steliosYears: '2019-2020, 2020-2021, 2021-2022',
    steliosInstitution: 'Ινστιτούτο Πληροφορικής, ΙΤΕ',
    hackathonAward: '3η Θέση στο FuturEd AI Hackathon',
    hackathonYear: '2025',
    hackathonInstitution: 'Τμήμα Επιστήμης Υπολογιστών, Πανεπιστήμιο Κρήτης (16 ομάδες)',
    
    // Portfolio
    spade: 'SPADE',
    spadeDesc: 'Ανάπτυξη ενός πλαισίου βαθιάς μάθησης για τμηματοποίηση εικόνας με ανοικτό λεξιλόγιο που αξιοποιεί μοντέλα διάχυσης και θεμελιώδη μοντέλα Όρασης και Γλώσσας.',
    meanShifter: 'MeanShifter',
    meanShifterDesc: 'Ανάπτυξη ενός νέου μοντέλου βασισμένου σε transformers για σημασιολογική τμηματοποίηση εικόνας που χρησιμοποιεί μπλοκ Mean Shift για ακριβή και αποδοτική τμηματοποίηση.',
    cardScanner: 'Αυτόματος Ανιχνευτής & Μαζικός Σαρωτής Καρτών',
    cardScannerDesc: 'Ανάπτυξη αυτόματης εφαρμογής ανίχνευσης καρτών TCG μέσω webcam και μαζικής σάρωσης χρησιμοποιώντας τεχνικές επεξεργασίας εικόνας και διαχείριση βάσης δεδομένων.',
    imageBlending: 'Συγχώνευση & Επεξεργασία Εικόνας',
    imageBlendingDesc: 'Ανάπτυξη εργαλείου χρησιμοποιώντας παραδοσιακές τεχνικές (Poisson, Laplacian Pyramid) για ομαλή συγχώνευση εικόνων και επεξεργασία στο πεδίο των παραγώγων.',
    ellipseTracking: 'Παρακολούθηση Κύκλων/Ελλείψεων',
    ellipseTrackingDesc: 'Ανάπτυξη αποδοτικού αλγορίθμου παρακολούθησης ελλείψεων χρησιμοποιώντας Βελτιστοποίηση Σμήνους Σωματιδίων για ακριβή παρακολούθηση ελλειπτικών αντικειμένων σε βίντεο.',
    digitRecognition: 'Οπτική Αναγνώριση Ψηφίων',
    digitRecognitionDesc: 'Ανάπτυξη συστήματος οπτικής αναγνώρισης ψηφίων χρησιμοποιώντας το Γενικευμένο Μετασχηματισμό Hough και το OpenCV για ακριβή ανίχνευση ψηφίων σε εικόνες.',
    csdSchedule: 'Web Εφαρμογή Προγράμματος CSD',
    csdScheduleDesc: 'Συνεισφορά σε μια web εφαρμογή για προβολή και διαχείριση του προγράμματος σπουδών του Τμήματος Επιστήμης Υπολογιστών του Πανεπιστημίου Κρήτης.',
    coughsultant: 'CoughSultant',
    coughsultantDesc: 'Ανάπτυξη συστήματος ανίχνευσης Covid-19 βασισμένου στην επεξεργασία και ανάλυση ήχων βήχα με τεχνικές μηχανικής μάθησης.',
    yago: 'Yet Another Galaxy Ontology (YAGO)',
    yagoDesc: 'Ανάπτυξη βάσης γνώσεων DL για τον γαλαξία μας χρησιμοποιώντας OWL για αναπαράσταση και συλλογισμό οντολογίας, και Flask για διεπαφή ιστού.',
    akariSolver: 'Επίλυση Παζλ Akari (Light Up)',
    akariSolverDesc: 'Ανάπτυξη αποδοτικού επιλυτή για παζλ Akari χρησιμοποιώντας ικανοποίηση περιορισμών και αλγορίθμους backtracking για γρήγορη εύρεση βέλτιστων λύσεων.',
    speakerIdentification: 'Σύστημα Αναγνώρισης Ομιλητή',
    speakerIdentificationDesc: 'Ανάπτυξη συστήματος αναγνώρισης ομιλητή χρησιμοποιώντας χαρακτηριστικά MFCC και Μοντέλα Μίξης Γκαουσιανών για ακριβή αναγνώριση ομιλητών.',
    speechEnhancement: 'Σύστημα Βελτίωσης Ομιλίας',
    speechEnhancementDesc: 'Ανάπτυξη συστήματος βελτίωσης ομιλίας, χρησιμοποιώντας φασματική αφαίρεση και φίλτρο Wiener για βελτίωση της ποιότητας του ήχου.',
    vusDetector: 'Αυτόματος Ανιχνευτής VUS',
    vusDetectorDesc: 'Ανάπτυξη ενός απλού, προσαρμοστικού, πλήρως αυτοματοποιημένου ανιχνευτή ομιλίας VUS (Φωνή, Άφωνο, Σιωπή).',
    pacmanAI: 'AI Agent για το Pacman',
    pacmanAIDesc: 'Ανάπτυξη AI agent για το παιχνίδι Pacman χρησιμοποιώντας αλγορίθμους αναζήτησης (DFS, BFS, A*), και τεχνικές μάθησης για βελτιστοποίηση στρατηγικών παιχνιδιού.',
    spanakaz: '"Spanakaz" Compiler & VM',
    spanakazDesc: 'Ανάπτυξη πλήρους compiler, εικονικής μηχανής και βιβλιοθηκών για τη δυναμική γλώσσα προγραμματισμού "Spanakaz".',
    microTCP: 'Πρωτόκολλο MicroTCP',
    microTCPDesc: 'Ανάπτυξη ενός ελαφρού πρωτοκόλλου για αξιόπιστη μεταφορά δεδομένων μέσω UDP, με έμφαση σε χαμηλή καθυστέρηση και ελάχιστη χρήση πόρων.',
    sudokuSolver: 'Δημιουργία και Επίλυση Sudoku',
    sudokuSolverDesc: 'Υλοποίηση ενός γρήγορου και αποδοτικού επιλυτή Sudoku που χρησιμοποιεί αλγόριθμους backtracking, και μιας γεννήτριας νέων πινάκων Sudoku.',
    sorryBoardGame: 'Επιτραπέζιο Παιχνίδι Sorry!',
    sorryBoardGameDesc: 'Υλοποίηση του κλασσικού επιτραπέζιου παιχνιδιού Sorry! με υποστήριξη τοπικού multiplayer χρησιμοποιώντας το πρότυπο MVC με έμφαση στην απόδοση και την εμπειρία χρήστη.',
    
    // Categories
    computerVisionCat: 'Υπολογιστική Όραση',
    signalProcessing: 'Επεξεργασία Σήματος',
    machineLearning: 'Μηχανική Μάθηση',
    neuralNetworks: 'Νευρωνικά Δίκτυα',
    softDevelopment: 'Ανάπτυξη Λογισμικού',
    
    // Project Detail Page
    projectNotFound: 'Το Έργο Δεν Βρέθηκε',
    backToPortfolio: 'Επιστροφή στο Χαρτοφυλάκιο',
    viewOnGithub: 'Προβολή στο GitHub',
    viewLiveDemo: 'Ζωντανή Επίδειξη',
    projectImages: 'Εικόνες Έργου',
    technologiesUsed: 'Τεχνολογίες που Χρησιμοποιήθηκαν',
    codeExample: 'Παράδειγμα Κώδικα',
    
    // Detailed project descriptions
    realTimeDetectionDetailed: 'Αυτό το έργο υλοποιεί ένα σύστημα ανίχνευσης αντικειμένων σε πραγματικό χρόνο χρησιμοποιώντας μια προσαρμοσμένη αρχιτεκτονική YOLO βελτιστοποιημένη για edge συσκευές. Το σύστημα επιτυγχάνει πάνω από 60 FPS σε κινητό υλικό διατηρώντας ακρίβεια 95%. Οι κύριες βελτιστοποιήσεις περιλαμβάνουν κβαντοποίηση μοντέλου, αποδοτική διαχείριση μνήμης και επιτάχυνση CUDA για συσκευές με GPU.',
    neuralSignalDetailed: 'Ένα ολοκληρωμένο σύστημα ταξινόμησης νευρωνικών σημάτων που κατασκευάστηκε χρησιμοποιώντας τεχνικές βαθιάς μάθησης. Το μοντέλο συνδυάζει 1D Συνελικτικά Νευρωνικά Δίκτυα με στρώματα LSTM για αποτελεσματική επεξεργασία και ταξινόμηση βιο-σημάτων. Το σύστημα δείχνει βελτίωση 15% στην ακρίβεια ταξινόμησης σε σχέση με παραδοσιακές μεθόδους επεξεργασίας σημάτων.',
  },
};

export const getTranslation = (lang: Language, key: keyof typeof translations.en): string => {
  return translations[lang][key] || translations.en[key];
};
