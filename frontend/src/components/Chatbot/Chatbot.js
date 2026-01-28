import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Clock, Map, Phone, Calendar, FileText, AlertCircle, CheckCircle, Search, Filter, Download, Upload, Camera, Mic, Settings, HelpCircle, Star, TrendingUp, Users, DollarSign, Shield, Zap, Home, Car, Package, MessageSquare, Activity, BarChart3, PieChart, FileCheck, CreditCard, Wrench, Hammer, PaintBucket, Wifi, Battery, Droplets, Thermometer, Wind, Sun, Cloud, Umbrella, Heart, Brain, Cpu, Database, Globe, Lock, Key, Eye, Bell, Volume2, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Plus, Minus, RefreshCw, Copy, Share2, Bookmark, Archive, Trash2, Edit3, MoreHorizontal, Grid, List, Filter as FilterIcon, Moon, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [chatExpanded, setChatExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 Welcome to **PriHub**! I'm your AI assistant for cognitive disabilities support. I can help you understand cognitive disabilities, navigate the website, find resources, and provide guidance. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      category: "greeting"
    },
  ]);

  const [userInput, setUserInput] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [suggestions, setSuggestions] = useState([
    "🧠 What are cognitive disabilities?",
    "🌐 About PriHub",
    "� Supporting someone with cognitive disabilities",
    "� How to navigate PriHub",
    "♿ Accessibility features",
    "� Chat with support specialist",
    "📚 Educational resources"
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [chatHistory, setChatHistory] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userPreferences, setUserPreferences] = useState({
    quickReplies: true,
    soundEnabled: true,
    autoScroll: true,
    compactMode: false
  });
  
  const [chatbotWidth, setChatbotWidth] = useState(400);
  const [chatbotHeight, setChatbotHeight] = useState(550);
  
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [keyboardShortcutsImage, setKeyboardShortcutsImage] = useState(true);
  
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const navigateToService = (serviceName, route) => {
    addMessage(`Navigating to ${serviceName}...`, "user");
    setShowServiceMenu(false);
    setTimeout(() => {
      navigate(route);
      setChatExpanded(false);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const chatbotElement = document.getElementById('chatbot-container');
      const externalMenuElement = document.getElementById('external-service-menu');
      const threeDotButton = event.target.closest('.fixed.top-\\[78\\%\\].right-6');
      
      if (externalMenuElement && !externalMenuElement.contains(event.target) && !threeDotButton) {
        setShowServiceMenu(false);
      }
      
      if (chatExpanded && chatbotElement && !chatbotElement.contains(event.target) && !threeDotButton) {
        setChatExpanded(false);
        setShowServiceMenu(false);
      }
    };

    if (chatExpanded || showServiceMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatExpanded, showServiceMenu]);

  useEffect(() => {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (messagesContainer) {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight - 150;
      }, 100);
    }
  }, [messages]);

  const responses = {
    hi: "Hello 👋 Welcome to **PriHub**! How can I assist you with cognitive disabilities support today?",
    hello: "Hello! 😊 I'm your **PriHub Assistant**. How may I help you understand cognitive disabilities?",
    hey: "Hey there! 👋 How can PriHub help you with cognitive disability information today?",
    morning: "Good Morning ☀️ Hope you're having a great day! How can I help with cognitive support?",
    evening: "Good Evening 🌆 How may I assist you with cognitive disabilities information?",
    afternoon: "Good Afternoon 🙂 How can I help you today?",
    night: "Good Evening 🌙 How can PriHub assist you with cognitive support?",
    welcome: "Welcome to PriHub! 🧠 Your cognitive disabilities support system is here!",
    greetings: "Greetings! 👋 PriHub at your service. What can I do for you today?",

    thanks: "You're most welcome! 😊 If you need anything else about cognitive disabilities, feel free to ask.",
    thank: "Happy to help! 🙌 Let me know if you need further assistance with cognitive support.",
    bye: "Goodbye 👋 Have a great day! PriHub is always here to help with cognitive disabilities.",
    exit: "Thank you for using **PriHub**. Stay safe and have a great day!",
    goodbye: "Farewell! 🌟 Remember, PriHub is just a click away whenever you need cognitive support!",
    see: "See you soon! 👋 PriHub wishes you a wonderful day ahead!",
    later: "Talk to you later! 😊 PriHub is always available for cognitive disabilities support.",

    // PriHub Website Information
    what: "**PriHub** is a comprehensive support system for cognitive disabilities. We provide information, resources, and guidance for individuals, families, and caregivers affected by cognitive disabilities.",
    about: "**About PriHub** 🧠\n\nWe are a dedicated cognitive disabilities support platform that offers:\n- Educational resources about cognitive disabilities\n- Support strategies for daily living\n- Community connection opportunities\n- Professional guidance and referrals\n- Accessible website design\n\nOur mission is to empower individuals with cognitive disabilities through information, support, and community.",
    features: "**PriHub Features** ✨\n\n🧠 **Cognitive Information**: Comprehensive guides on cognitive disabilities\n👥 **Support Resources**: Strategies for individuals and caregivers\n🌐 **Accessible Design**: WCAG-compliant website navigation\n💬 **24/7 Chatbot**: Instant assistance anytime\n� **Educational Materials**: Articles, videos, and tutorials\n🤝 **Community Forums**: Connect with others facing similar challenges\n� **Accessibility Tools**: Text-to-speech, adjustable fonts, high contrast",
    platform: "**PriHub Platform** 🌐\n\nOur platform integrates:\n- Web Dashboard for cognitive disability resources\n- Mobile App for on-the-go support\n- Chatbot for instant assistance\n- Community forums for peer support\n- Educational resource library\n\nAll working together seamlessly to provide comprehensive cognitive disability support.",
    benefits: "**Benefits of PriHub** 🎯\n\n✅ **For Individuals**:\n- Easy access to cognitive disability information\n- Quick connection to support resources\n- Educational materials and learning tools\n- Instant chatbot assistance\n\n✅ **For Families & Caregivers**:\n- Comprehensive support strategies\n- Community connection opportunities\n- Professional guidance and referrals\n- Educational resources\n\n✅ **For Professionals**:\n- Evidence-based information\n- Resource sharing tools\n- Community engagement\n- Professional development",

    // Cognitive Disabilities Information
    disabilities: "**Cognitive Disabilities** 🧠\n\nCognitive disabilities affect how a person:\n- Learns and processes information\n- Remembers and recalls facts\n- Communicates with others\n- Makes decisions and solves problems\n- Pays attention and focuses\n\nThese conditions can range from mild to severe and may be present from birth or acquired later in life.",
    
    impairments: "**Cognitive Impairments** 🤔\n\nCognitive impairments refer to difficulties with:\n- Memory (short-term or long-term)\n- Attention and concentration\n- Problem-solving and planning\n- Language and communication\n- Social understanding\n\nThese challenges can impact daily activities, education, and work.",
    
    disorder: "**Cognitive Disorders** 🧩\n\nA cognitive disorder means:\n- Brain function differs from typical development\n- Affects thinking, learning, or behavior\n- May be diagnosed at any age\n- Can be temporary or permanent\n- Often requires support and accommodations\n\nExamples include ADHD, autism, dyslexia, and intellectual disabilities.",
    
    examples: "**Examples of Cognitive Disabilities** 📋\n\n**Learning Disabilities:**\n- Dyslexia (reading difficulties)\n- Dyscalculia (math difficulties)\n- Dysgraphia (writing difficulties)\n\n**Attention Disorders:**\n- ADHD (Attention Deficit Hyperactivity Disorder)\n- ADD (Attention Deficit Disorder)\n\n**Developmental Disabilities:**\n- Autism Spectrum Disorder\n- Intellectual Disability\n- Developmental Delay",
    
    // Causes and Symptoms
    causes: "**Causes of Cognitive Disabilities** 🔍\n\n**Genetic Factors:**\n- Inherited conditions\n- Chromosomal abnormalities\n- Gene mutations\n\n**Environmental Factors:**\n- Brain injury (trauma, stroke)\n- Infections during pregnancy\n- Exposure to toxins\n- Poor nutrition\n- Lack of oxygen\n\n**Unknown Causes:**\n- Many cases have no clear cause\n- Research continues to discover new factors",
    
    symptoms: "**Symptoms of Cognitive Disabilities** ⚠️\n\n**Common Signs:**\n- Difficulty with memory and recall\n- Problems with attention and focus\n- Challenges in learning new information\n- Trouble with problem-solving\n- Communication difficulties\n- Slow processing speed\n\n**Impact on Daily Life:**\n- Academic struggles\n- Work challenges\n- Social difficulties\n- Need for support and accommodations",
    
    diagnosis: "**Diagnosis of Cognitive Disabilities** 🩺\n\n**Professional Assessment:**\n- Psychological testing\n- Educational evaluation\n- Medical examination\n- Developmental screening\n\n**Diagnostic Tools:**\n- IQ tests\n- Achievement tests\n- Behavior rating scales\n- Medical imaging (MRI, CT scans)\n\n**Who Can Diagnose:**\n- Psychologists\n- Neuropsychologists\n- Developmental pediatricians\n- Neurologists\n- Educational specialists",
    
    // Cure and Recovery
    cure: "**Can Cognitive Disabilities Be Cured?** 💊\n\n**Important Understanding:**\n- Most cognitive disabilities are lifelong conditions\n- Focus is on management, not cure\n- Early intervention improves outcomes\n- Support strategies are key\n\n**What Helps:**\n- Educational accommodations\n- Therapy and support services\n- Medication for some conditions\n- Assistive technology\n- Family and community support",
    
    recover: "**Recovery from Cognitive Disabilities** 🔄\n\n**Realistic Expectations:**\n- Complete recovery is rare for most conditions\n- Improvement is possible with support\n- Skills can be developed over time\n- Coping strategies can be learned\n\n**Progress Factors:**\n- Early diagnosis and intervention\n- Consistent support and therapy\n- Educational accommodations\n- Family involvement\n- Positive environment",
    
    worse: "**Do Cognitive Disabilities Get Worse Over Time?** 📈\n\n**Varies by Condition:**\n- Some conditions are stable (learning disabilities)\n- Some may progress (dementia, degenerative disorders)\n- Many remain consistent throughout life\n- Stress and health can impact functioning\n\n**Managing Changes:**\n- Regular medical monitoring\n- Adjusting support as needed\n- Planning for future needs\n- Maintaining overall health",
    
    improve: "**Can Cognitive Disabilities Improve?** 📊\n\n**Yes, With Support:**\n- Skills can be developed and strengthened\n- Coping strategies can be learned\n- Independence can increase\n- Quality of life can improve\n\n**Improvement Factors:**\n- Early and appropriate intervention\n- Consistent support and therapy\n- Educational accommodations\n- Assistive technology\n- Positive, supportive environment",
    
    // Age and Genetics
    common: "**How Common Are Cognitive Disabilities?** 📊\n\n**Statistics:**\n- Affects 1-3% of global population\n- 15% of people have some form of disability\n- Learning disabilities affect 5-15% of students\n- ADHD affects 5-7% of children\n\n**Why It Matters:**\n- Many people need support\n- Awareness is crucial\n- Inclusive environments help everyone\n- Early identification improves outcomes",
    
    children: "**Cognitive Disabilities in Children** 👶\n\n**Early Signs:**\n- Developmental delays\n- Learning difficulties in school\n- Attention problems\n- Social communication challenges\n- Behavioral issues\n\n**Support Needs:**\n- Special education services\n- Early intervention programs\n- Family education and support\n- Medical monitoring\n- Therapeutic services",
    
    adults: "**Cognitive Disabilities in Adults** 👨\n\n**Challenges Faced:**\n- Employment difficulties\n- Independent living challenges\n- Social relationship struggles\n- Mental health concerns\n- Need for ongoing support\n\n**Support Options:**\n- Vocational rehabilitation\n- Adult education programs\n- Support groups\n- Assistive technology\n- Community services",
    
    genetic: "**Are Cognitive Disabilities Genetic?** 🧬\n\n**Genetic Factors:**\n- Some conditions run in families\n- Genetic mutations can cause disabilities\n- Chromosomal abnormalities\n- Inherited syndromes\n\n**Not Always Genetic:**\n- Brain injuries can cause cognitive issues\n- Environmental factors play a role\n- Many cases have unknown causes\n- Genetic testing can help in some cases",
    
    // Support Strategies
    support: "**Supporting People with Cognitive Disabilities** 🤝\n\n**Key Strategies:**\n- Be patient and understanding\n- Break tasks into smaller steps\n- Use clear, simple language\n- Provide written instructions\n- Allow extra time for responses\n- Celebrate strengths and progress\n\n**Environmental Support:**\n- Minimize distractions\n- Create predictable routines\n- Use visual aids and reminders\n- Ensure accessibility\n- Provide quiet spaces when needed",
    
    help: "**How to Help Someone with Cognitive Disabilities** 💝\n\n**Practical Ways:**\n- Learn about their specific condition\n- Ask how you can best help\n- Respect their independence\n- Offer assistance without assuming need\n- Be patient with communication\n- Advocate for their needs\n\n**Emotional Support:**\n- Listen without judgment\n- Acknowledge their challenges\n- Focus on abilities, not limitations\n- Encourage their strengths\n- Be a reliable ally",

    // Types of Cognitive & Neurodevelopmental Conditions
    learning: "**Learning Disabilities** 📚\n\nLearning disabilities affect how individuals:\n- Process and understand information\n- Read, write, and do math\n- Organize thoughts and materials\n- Remember and recall information\n\n**Common Types:**\n- Dyslexia: Reading difficulties\n- Dyscalculia: Math difficulties\n- Dysgraphia: Writing difficulties\n- Auditory Processing Disorder\n\n**Support Strategies:**\n- Multi-sensory learning approaches\n- Assistive technology\n- Extended time for tasks\n- Clear, structured instructions",

    adhd: "**ADHD (Attention Deficit Hyperactivity Disorder)** 🧠\n\nADHD is a neurodevelopmental disorder that affects:\n- Attention and focus\n- Impulse control\n- Hyperactivity\n- Executive functioning\n\n**Key Characteristics:**\n- Difficulty sustaining attention\n- Impulsive behavior\n- Excessive activity or restlessness\n- Challenges with organization\n\n**Management Approaches:**\n- Behavioral therapy\n- Medication (when appropriate)\n- Environmental modifications\n- Skill-building strategies\n- Regular exercise and sleep routines",

    autism: "**Autism Spectrum Disorder (ASD)** 🌈\n\nASD is a developmental disorder that affects:\n- Social communication and interaction\n- Restricted interests and repetitive behaviors\n- Sensory processing\n- Executive functioning\n\n**Spectrum Characteristics:**\n- Varies widely in severity and presentation\n- Unique strengths and challenges\n- Different communication styles\n- Sensory sensitivities or preferences\n\n**Support Strategies:**\n- Structured routines and predictability\n- Visual supports and schedules\n- Social skills training\n- Sensory accommodations\n- Individualized education plans",

    memory: "**Memory Disorders** 🧠\n\nMemory disorders affect the ability to:\n- Store new information\n- Recall past events\n- Process and retrieve memories\n- Maintain short-term and long-term memory\n\n**Common Types:**\n- Amnesia: Memory loss\n- Dementia: Progressive memory decline\n- Mild Cognitive Impairment\n- Traumatic Brain Injury effects\n\n**Management Strategies:**\n- Memory aids and reminders\n- Cognitive rehabilitation\n- Medication (when appropriate)\n- Lifestyle modifications\n- Support from caregivers and professionals",

    dementia: "**Dementia** 🕰️\n\nDementia is a progressive condition that affects:\n- Memory and thinking skills\n- Daily functioning\n- Behavior and personality\n- Ability to perform routine tasks\n\n**Key Features:**\n- Progressive cognitive decline\n- Memory loss affecting daily life\n- Changes in mood and behavior\n- Difficulty with familiar tasks\n\n**Important Notes:**\n- Alzheimer's is the most common type\n- Early diagnosis is important\n- Support focuses on quality of life\n- Caregiver support is crucial\n\n**Resources:**\n- Alzheimer's Association\n- Local support groups\n- Memory care facilities\n- Respite care services",

    developmental: "**Developmental Disorders** 🌱\n\nDevelopmental disorders affect growth and development in:\n- Cognitive abilities\n- Social skills\n- Communication\n- Motor skills\n- Adaptive behavior\n\n**Common Types:**\n- Intellectual Disability\n- Developmental Delay\n- Specific Learning Disorders\n- Communication Disorders\n- Motor Disorders\n\n**Early Intervention:**\n- Crucial for better outcomes\n- Individualized support plans\n- Family education and training\n- Therapeutic services\n- Educational accommodations",

    neurocognitive: "**Neurocognitive Disorders** 🧩\n\nNeurocognitive disorders affect:\n- Cognitive functions\n- Memory and attention\n- Language and executive functions\n- Social cognition\n\n**Categories:**\n- Major Neurocognitive Disorder (Dementia)\n- Mild Neurocognitive Disorder\n- Delirium\n- Substance/Medication-Induced\n\n**Diagnostic Criteria:**\n- Significant cognitive decline\n- Interference with independence\n- Not better explained by other conditions\n- Evidence from testing and observation",

    tbi: "**Traumatic Brain Injury (TBI)** 🤕\n\nTBI is caused by external force affecting the brain:\n- Closed head injuries\n- Penetrating injuries\n- Blast injuries\n- Repeated mild injuries\n\n**Effects on Cognition:**\n- Memory problems\n- Attention difficulties\n- Executive function challenges\n- Processing speed changes\n- Emotional regulation issues\n\n**Recovery Process:**\n- Medical stabilization\n- Cognitive rehabilitation\n- Physical therapy\n- Psychological support\n- Gradual return to activities",

    alzheimer: "**Dementia vs Alzheimer's** 🧠\n\n**Dementia** is an umbrella term for:\n- Symptoms affecting cognitive function\n- Memory loss and thinking problems\n- Interference with daily life\n- Multiple underlying causes\n\n**Alzheimer's Disease** is:\n- The most common cause of dementia\n- A specific brain disease\n- Progressive and irreversible\n- Characterized by protein plaques and tangles\n\n**Key Differences:**\n- Alzheimer's accounts for 60-80% of dementia cases\n- Other causes include vascular dementia, Lewy body, frontotemporal\n- Alzheimer's has specific progression patterns\n- Different causes may have different treatment approaches",

    // Treatment, Support & Management
    therapies: "**Therapies for Cognitive Disabilities** 🏥\n\n**Common Therapeutic Approaches:**\n- **Cognitive Behavioral Therapy (CBT)**: Helps with coping strategies\n- **Occupational Therapy**: Improves daily living skills\n- **Speech Therapy**: Addresses communication challenges\n- **Physical Therapy**: Enhances motor skills and coordination\n- **Psychotherapy**: Supports emotional well-being\n\n**Specialized Therapies:**\n- Applied Behavior Analysis (ABA) for autism\n- Cognitive rehabilitation for brain injuries\n- Memory training for memory disorders\n- Social skills training\n\n**Finding Therapists:**\n- Consult with healthcare providers\n- Check insurance coverage\n- Look for specialized experience\n- Consider teletherapy options",

    medication: "**Medication for Cognitive Disabilities** 💊\n\n**Important Note:**\nMedication should always be prescribed and monitored by qualified healthcare professionals.\n\n**Common Medication Categories:**\n- **Stimulants**: For ADHD (e.g., methylphenidate, amphetamines)\n- **Non-stimulants**: Alternative ADHD treatments\n- **Antidepressants**: For co-occurring mood disorders\n- **Anti-anxiety medications**: For anxiety symptoms\n- **Memory medications**: For some types of dementia\n\n**Key Considerations:**\n- Individual response varies\n- Side effects need monitoring\n- Regular follow-up with healthcare provider\n- May be combined with other therapies\n- Not a cure, but can help manage symptoms",

    management: "**Managing Cognitive Disabilities** 🎯\n\n**Comprehensive Management Strategies:**\n- **Medical Management**: Regular healthcare monitoring\n- **Therapeutic Interventions**: Ongoing therapy and support\n- **Educational Support**: Accommodations and specialized instruction\n- **Environmental Modifications**: Adapting living and work spaces\n- **Social Support**: Building supportive networks\n\n**Daily Management:**\n- Establish predictable routines\n- Use organizational tools and reminders\n- Break tasks into smaller steps\n- Allow extra time for activities\n- Create supportive environments\n\n**Long-term Planning:**\n- Regular assessment of needs\n- Planning for future care requirements\n- Financial and legal planning\n- Building independence skills\n- Maintaining social connections",

    // Accessibility Features
    screenreader: "**Screen Reader Accessibility** 🔊\n\n**PriHub Screen Reader Support:**\n- Fully compatible with major screen readers\n- Proper ARIA labels and landmarks\n- Semantic HTML structure\n- Alternative text for images\n- Logical reading order\n\n**Recommended Screen Readers:**\n- NVDA (Windows)\n- JAWS (Windows)\n- VoiceOver (Mac/iOS)\n- TalkBack (Android)\n\n**Tips for Screen Reader Users:**\n- Use headings for navigation\n- Take advantage of landmarks\n- Use keyboard shortcuts\n- Check for alternative text\n- Report any accessibility issues",

    tts: "**Text-to-Speech Features** �\n\n**PriHub TTS Capabilities:**\n- Built-in text-to-speech for all content\n- Adjustable speech rate and volume\n- Multiple voice options\n- Highlighted text while reading\n- Pause and resume functionality\n\n**How to Use:**\n- Click the speaker icon on any text\n- Use keyboard shortcuts (Ctrl+R)\n- Adjust settings in accessibility panel\n- Works on all pages and resources\n\n**Benefits:**\n- Helps with reading difficulties\n- Supports visual impairments\n- Reduces reading fatigue\n- Improves comprehension\n- Enables multitasking",

    keyboard: "**Keyboard Navigation** ⌨️\n\n**PriHub Keyboard Features:**\n- Full keyboard accessibility\n- Tab navigation through all elements\n- Skip links for quick navigation\n- Keyboard shortcuts for common actions\n- Focus indicators for visibility\n\n**Keyboard Shortcuts:**\n- Tab: Move to next element\n- Shift+Tab: Move to previous element\n- Enter/Space: Activate buttons and links\n- Escape: Close modals and menus\n- Ctrl+R: Read text aloud\n- Ctrl+Plus/Minus: Adjust text size\n\n**Accessibility Compliance:**\n- WCAG 2.1 AA compliant\n- Tested with keyboard-only users\n- Logical tab order\n- Visible focus indicators",

    textsize: "**Text Size Adjustment** �\n\n**PriHub Text Size Options:**\n- 5 size levels: Small, Medium, Large, Extra Large, Extra Extra Large\n- Browser zoom support up to 200%\n- High contrast mode available\n- Dyslexia-friendly fonts option\n- Line spacing adjustments\n\n**How to Adjust:**\n- Use Ctrl+Plus/Minus keyboard shortcuts\n- Click text size buttons in accessibility panel\n- Adjust browser zoom settings\n- Use browser extensions if needed\n\n**Recommended Settings:**\n- Choose size that's comfortable for extended reading\n- Consider line spacing for better readability\n- Test different fonts for dyslexia support\n- Use high contrast for visual clarity",

    highcontrast: "**High Contrast Mode** 🎨\n\n**PriHub High Contrast Features:**\n- Enhanced color contrast for better visibility\n- Dark mode option\n- Customizable color schemes\n- Improved text readability\n- Reduced eye strain\n\n**Available Options:**\n- Standard high contrast (black on white)\n- Dark mode (white on black)\n- Blue-yellow contrast\n- Custom color combinations\n\n**Benefits:**\n- Helps with visual impairments\n- Reduces eye fatigue\n- Improves focus and concentration\n- Better for low-light environments\n- Supports various visual conditions",

    dyslexia: "**Dyslexia-Friendly Features** 📚\n\n**PriHub Dyslexia Support:**\n- Dyslexia-friendly font options (OpenDyslexic, Dyslexie)\n- Adjustable letter spacing and line height\n- Color overlays and background options\n- Audio support for all text content\n- Simplified text layouts\n\n**Recommended Settings:**\n- Use sans-serif fonts\n- Increase line spacing to 1.5 or higher\n- Use colored overlays if helpful\n- Enable text-to-speech for longer content\n- Break text into smaller chunks\n\n**Additional Support:**\n- Phonetic spelling guides\n- Visual aids and diagrams\n- Audio pronunciation guides\n- Simplified vocabulary options\n- Context-based learning tools",

    // Chatbot-Specific Questions
    startchat: "**Starting a Chat with PriHub Assistant** 💬\n\n**How to Begin:**\n- Click the chat bubble icon on any page\n- Type your question in the message box\n- Or use voice input by clicking the microphone\n- Choose from suggested questions for quick help\n\n**What I Can Help With:**\n- Answer questions about cognitive disabilities\n- Guide you to relevant resources\n- Help navigate the website\n- Provide support strategies\n- Connect you with professional resources\n\n**Chat Features:**\n- Available 24/7 for immediate assistance\n- Supports multiple languages\n- Text-to-speech for accessibility\n- Keyboard shortcuts for ease of use\n- Conversation history for reference",

    availability: "**24/7 Chatbot Availability** �\n\n**Always Here to Help:**\n- Available 24 hours a day, 7 days a week\n- No waiting times or appointments needed\n- Instant responses to common questions\n- Support for urgent inquiries\n\n**What This Means:**\n- Get help whenever you need it\n- No business hour restrictions\n- Immediate assistance for cognitive disability questions\n- Support during different time zones\n- Help available during emergencies or crises\n\n**Limitations:**\n- For medical emergencies, contact emergency services\n- Complex issues may require human specialist\n- Some questions may need follow-up with professionals\n- Always consult healthcare providers for medical advice",

    guide: "**Website Navigation Guidance** 🗺️\n\n**How I Can Help You Navigate:**\n- Direct you to specific pages and resources\n- Explain different sections of PriHub\n- Help find educational materials\n- Guide to support services\n- Assist with account features\n\n**Navigation Tips:**\n- Use the main menu for broad categories\n- Search bar for specific topics\n- Breadcrumb trail for current location\n- Quick links for popular resources\n- Accessibility panel for customization\n\n**Common Destinations:**\n- Educational Resources: Learning materials and guides\n- Support Services: Professional help and community\n- Community Forums: Connect with others\n- Account Settings: Personalize your experience\n- Accessibility Tools: Customize for your needs",

    privacy: "**Chat Privacy and Security** 🔒\n\n**Your Privacy is Important:**\n- Conversations are encrypted and secure\n- No personal data stored without consent\n- Anonymous chat option available\n- Data protection compliance (GDPR, HIPAA)\n- Regular security audits and updates\n\n**What We Don't Do:**\n- Share your conversations with third parties\n- Use chat data for marketing purposes\n- Store personal health information\n- Track you across other websites\n- Sell your data to anyone\n\n**Your Control:**\n- Clear chat history anytime\n- Delete your account and data\n- Choose what information to share\n- Opt out of data collection\n- Request data access and correction",

    // Navigation & Website Usage
    navigate: "**Navigating the PriHub Website** 🌐\n\n**Main Navigation Areas:**\n- **Home**: Overview and quick access to features\n- **Resources**: Educational materials and guides\n- **Support**: Professional help and community\n- **Community**: Forums and peer support\n- **Account**: Personal settings and preferences\n\n**Navigation Tools:**\n- Main menu with clear categories\n- Search bar for specific topics\n- Breadcrumb navigation trail\n- Quick links and shortcuts\n- Back to top button\n\n**Accessibility Features:**\n- Keyboard navigation support\n- Screen reader compatibility\n- Text size adjustment\n- High contrast mode\n- Skip links for quick navigation\n\n**Getting Help:**\n- Use the chat assistant for guidance\n- Check the help section\n- Contact support team\n- Explore the site map\n- Use the search function",

    // Educational Resources
    resources: "**Educational Materials on PriHub** 📚\n\n**Available Resources:**\n- **Articles**: Comprehensive guides on cognitive disabilities\n- **Videos**: Visual explanations and tutorials\n- **Infographics**: Visual learning aids\n- **Worksheets**: Practice materials and exercises\n- **Checklists**: Assessment and planning tools\n\n**Resource Categories:**\n- Understanding cognitive disabilities\n- Support strategies and techniques\n- Educational accommodations\n- Legal rights and advocacy\n- Technology and tools\n\n**Access Methods:**\n- Browse by category or topic\n- Search for specific information\n- Filter by resource type\n- Download for offline use\n- Share with others\n\n**Quality Assurance:**\n- Expert-reviewed content\n- Evidence-based information\n- Regular updates and revisions\n- User feedback incorporated\n- Accessibility compliance",

    learning: "**Learning Strategies for Cognitive Disabilities** 🎓\n\n**Effective Learning Approaches:**\n- **Multi-sensory Learning**: Engage multiple senses\n- **Visual Aids**: Charts, diagrams, and images\n- **Hands-on Activities**: Practical learning experiences\n- **Repetition and Practice**: Reinforce learning\n- **Chunking**: Break information into smaller pieces\n\n**Study Techniques:**\n- Use mnemonic devices\n- Create mind maps and outlines\n- Practice active recall\n- Use spaced repetition\n- Apply learning to real situations\n\n**Technology Support:**\n- Text-to-speech software\n- Digital organizers and planners\n- Recording lectures for review\n- Interactive learning apps\n- Adaptive learning platforms\n\n**Environment Optimization:**\n- Minimize distractions\n- Ensure good lighting\n- Use comfortable seating\n- Take regular breaks\n- Maintain consistent routines",

    study: "**Study Techniques for Cognitive Disabilities** 📖\n\n**Proven Study Methods:**\n- **Pomodoro Technique**: 25-minute focused sessions\n- **SQ3R Method**: Survey, Question, Read, Recite, Review\n- **Mind Mapping**: Visual organization of information\n- **Flash Cards**: Quick review and memorization\n- **Teach-Back Method**: Explain concepts to others\n\n**Memory Enhancement:**\n- Association techniques\n- Visualization strategies\n- Chunking information\n- Rhyme and rhythm\n- Story-based learning\n\n**Focus and Attention:**\n- Use timers and schedules\n- Remove distractions\n- Take movement breaks\n- Use background music if helpful\n- Practice mindfulness techniques\n\n**Organization Skills:**\n- Color-coded note-taking\n- Digital calendar management\n- Task prioritization\n- File organization systems\n- Regular review sessions",

    simplified: "**Simplified Learning Materials** 📝\n\n**Simplification Features:**\n- **Plain Language**: Simple, clear vocabulary\n- **Short Sentences**: Easy to process information\n- **Visual Support**: Images and diagrams\n- **Step-by-Step Instructions**: Sequential learning\n- **Key Point Highlighting**: Important information emphasized\n\n**Adaptation Strategies:**\n- Reduce cognitive load\n- Use familiar examples\n- Provide context and background\n- Check for understanding\n- Allow processing time\n\n**Format Options:**\n- Large print versions\n- Audio versions available\n- Interactive digital formats\n- Printable worksheets\n- Mobile-friendly layouts\n\n**Accessibility Features:**\n- Text-to-speech compatible\n- High contrast options\n- Dyslexia-friendly fonts\n- Adjustable text size\n- Screen reader optimized",

    flashcards: "**Flashcards and Visual Aids** 🎴\n\n**Flashcard Benefits:**\n- Active recall practice\n- Portable study tool\n- Quick review sessions\n- Self-assessment capability\n- Memory reinforcement\n\n**Visual Aid Types:**\n- **Concept Maps**: Visual relationships between ideas\n- **Flow Charts**: Process and sequence visualization\n- **Diagrams**: Visual representation of information\n- **Infographics**: Data visualization\n- **Illustrations**: Visual explanations\n\n**Digital Flashcard Features:**\n- Customizable decks\n- Spaced repetition algorithms\n- Progress tracking\n- Multimedia support\n- Sharing capabilities\n\n**Study Strategies:**\n- Review regularly\n- Mix up the order\n- Use both sides of cards\n- Create personal connections\n- Test yourself frequently",

    // Video & Multimedia Resources
    videos: "**Video Resources on PriHub** 🎥\n\n**Video Categories:**\n- **Educational Videos**: Learn about cognitive disabilities\n- **Tutorial Videos**: How-to guides and demonstrations\n- **Expert Interviews**: Professional insights and advice\n- **Success Stories**: Personal experiences and journeys\n- **Webinar Recordings**: Educational presentations\n\n**Video Features:**\n- Closed captions for accessibility\n- Adjustable playback speed\n- Transcripts available\n- Download options\n- Mobile compatible\n\n**Accessibility Support:**\n- Audio descriptions for visual content\n- Sign language interpretation\n- High contrast viewing mode\n- Keyboard navigation controls\n- Screen reader compatibility\n\n**Learning Benefits:**\n- Visual and auditory learning\n- Demonstrations of techniques\n- Real-life examples\n- Expert insights\n- Flexible viewing options",

    mindfulness: "**Mindfulness Videos** 🧘‍♀️\n\n**Mindfulness Benefits for Cognitive Disabilities:**\n- Improved focus and attention\n- Reduced stress and anxiety\n- Better emotional regulation\n- Enhanced working memory\n- Increased self-awareness\n\n**Available Video Content:**\n- **Guided Meditations**: 5-30 minute sessions\n- **Breathing Exercises**: Quick stress relief techniques\n- **Body Scan Meditations**: Full-body awareness\n- **Mindful Movement**: Gentle exercises\n- **Focus Training**: Attention improvement exercises\n\n**Accessibility Features:**\n- Clear, simple instructions\n- Visual guides and demonstrations\n- Adjustable session lengths\n- Background music options\n- Subtitle support\n\n**Getting Started:**\n- Begin with short sessions (5 minutes)\n- Find a quiet, comfortable space\n- Practice regularly for best results\n- Choose times that work for your schedule\n- Track your progress and mood changes",

    experts: "**Expert Interviews on PriHub** 🎙️\n\n**Featured Experts:**\n- **Neuropsychologists**: Brain function and assessment\n- **Special Educators**: Learning strategies and accommodations\n- **Therapists**: Treatment approaches and support\n- **Medical Doctors**: Diagnosis and medication management\n- **Advocates**: Rights and legal protections\n\n**Interview Topics:**\n- Latest research findings\n- Practical support strategies\n- Treatment options and effectiveness\n- Educational accommodations\n- Family and caregiver support\n\n**Interview Formats:**\n- Video interviews with transcripts\n- Audio podcasts for listening\n- Written Q&A sessions\n- Live webinar recordings\n- Panel discussions\n\n**Learning Benefits:**\n- Expert knowledge and insights\n- Real-world experience and advice\n- Current best practices\n- Evidence-based approaches\n- Professional perspectives",

    success: "**Success Stories on PriHub** 🌟\n\n**Story Categories:**\n- **Personal Journeys**: Individual experiences with cognitive disabilities\n- **Family Stories**: Caregiver and family perspectives\n- **Educational Success**: Academic achievements and strategies\n- **Career Stories**: Professional accomplishments\n- **Community Impact**: Making a difference in others' lives\n\n**Story Features:**\n- Real people, real experiences\n- Practical tips and strategies\n- Overcoming challenges\n- Celebrating achievements\n- Inspiring hope and motivation\n\n**Format Options:**\n- Written narratives\n- Video testimonials\n- Audio interviews\n- Photo essays\n- Interactive timelines\n\n**Community Benefits:**\n- Reduces isolation and stigma\n- Provides hope and inspiration\n- Shares practical strategies\n- Builds community connection\n- Encourages help-seeking behavior",

    // Community & Emotional Support
    forums: "**Community Forums on PriHub** 💬\n\n**Forum Features:**\n- **Discussion Boards**: Topic-specific conversations\n- **Support Groups**: Peer-to-peer encouragement\n- **Q&A Sections**: Ask and answer questions\n- **Resource Sharing**: Exchange helpful materials\n- **Success Stories**: Celebrate achievements together\n\n**Forum Categories:**\n- Specific cognitive disability types\n- Age groups (children, teens, adults)\n- Family and caregiver support\n- Educational strategies\n- Professional networking\n\n**Community Guidelines:**\n- Respectful and supportive communication\n- Privacy and confidentiality protection\n- Evidence-based information sharing\n- No medical advice or diagnosis\n- Inclusive and welcoming environment\n\n**Safety Features:**\n- Moderated discussions\n- Anonymous posting options\n- Report inappropriate content\n- Privacy controls\n- Professional oversight\n\n**Benefits:**\n- Reduce feelings of isolation\n- Share experiences and strategies\n- Learn from others' insights\n- Build supportive relationships\n- Access diverse perspectives",

    connect: "**Connecting with Others** 🤝\n\n**Connection Opportunities:**\n- **Peer Support Groups**: Connect with similar experiences\n- **Mentorship Programs**: Learn from those with experience\n- **Discussion Forums**: Share and learn together\n- **Live Events**: Real-time interaction\n- **Private Messaging**: Direct communication\n\n**Finding Your Community:**\n- Join groups based on specific conditions\n- Connect by age or life stage\n- Find local support options\n- Participate in online discussions\n- Attend virtual or in-person events\n\n**Building Connections:**\n- Share your story and experiences\n- Ask questions and offer support\n- Participate regularly in discussions\n- Respect others' privacy and boundaries\n- Celebrate successes together\n\n**Safety and Privacy:**\n- Control what information you share\n- Use anonymous options if preferred\n- Report any concerning behavior\n- Set communication boundaries\n- Take breaks when needed",

    peer: "**Peer Support on PriHub** 👥\n\n**Peer Support Benefits:**\n- **Shared Experience**: Understanding from those who 'get it'\n- **Practical Tips**: Real-world strategies that work\n- **Emotional Support**: Validation and encouragement\n- **Hope and Inspiration**: Seeing others thrive\n- **Resource Sharing**: Helpful tools and information\n\n**Support Formats:**\n- **Support Groups**: Regular meetings and discussions\n- **One-on-One Matching**: Personalized connections\n- **Discussion Forums**: Ongoing conversations\n- **Buddy Systems**: Pair support arrangements\n- **Mentorship Programs**: Guidance from experienced peers\n\n**Getting Started:**\n- Complete your profile for better matching\n- Join relevant support groups\n- Introduce yourself to the community\n- Participate in discussions\n- Reach out to others with similar experiences\n\n**Best Practices:**\n- Be respectful and supportive\n- Share helpful, practical information\n- Listen as much as you share\n- Maintain appropriate boundaries\n- Celebrate each other's progress",

    isolation: "**Reducing Social Isolation** 🌍\n\n**Understanding Social Isolation:**\n- Feeling disconnected from others\n- Limited social interactions\n- Lack of understanding from others\n- Difficulty finding supportive communities\n- Impact on mental health and well-being\n\n**PriHub Solutions:**\n- **Online Community**: Connect with others who understand\n- **Support Groups**: Regular peer interaction\n- **Discussion Forums**: Ongoing conversations\n- **Live Events**: Real-time connection opportunities\n- **Resource Sharing**: Build supportive networks\n\n**Strategies for Connection:**\n- Start with online interactions\n- Join specific interest groups\n- Participate in discussions at your comfort level\n- Share your experiences when ready\n- Celebrate small steps in social connection\n\n**Benefits of Connection:**\n- Improved mental health\n- Better coping strategies\n- Increased self-confidence\n- Access to helpful resources\n- Sense of belonging and understanding",

    // Professional Help & Emergency Support
    therapist: "**Finding Professional Help** 👩‍⚕️\n\n**Types of Professionals:**\n- **Psychologists**: Assessment and therapy\n- **Neuropsychologists**: Cognitive evaluation and testing\n- **Psychiatrists**: Medical management and medication\n- **Therapists/Counselors**: Talk therapy and support\n- **Social Workers**: Resource coordination and support\n\n**How PriHub Can Help:**\n- Directory of qualified professionals\n- Search by specialty and location\n- Reviews and recommendations\n- Teletherapy options\n- Insurance and payment information\n\n**Finding the Right Professional:**\n- Check credentials and experience\n- Consider specialization in cognitive disabilities\n- Look at treatment approaches\n- Check availability and accessibility\n- Verify insurance coverage\n\n**What to Expect:**\n- Initial consultation and assessment\n- Treatment planning and goal setting\n- Regular therapy sessions\n- Progress monitoring and adjustments\n- Coordination with other healthcare providers",

    professional: "**Professional Support Resources** 🎓\n\n**Professional Services Available:**\n- **Diagnostic Services**: Comprehensive assessments\n- **Therapeutic Services**: Various treatment approaches\n- **Educational Support**: School and learning accommodations\n- **Vocational Services**: Career and employment support\n- **Medical Management**: Healthcare coordination\n\n**Finding Professionals:**\n- Use our professional directory\n- Filter by specialty and location\n- Check credentials and reviews\n- Contact multiple providers\n- Verify insurance coverage\n\n**Types of Support:**\n- Individual therapy and counseling\n- Group therapy sessions\n- Family therapy and support\n- Educational advocacy\n- Medication management\n\n**Getting Started:**\n- Consult with your primary care physician\n- Research local providers\n- Check insurance coverage\n- Schedule initial consultations\n- Prepare questions and concerns\n\n**Quality Indicators:**\n- Proper licensing and credentials\n- Experience with cognitive disabilities\n- Evidence-based approaches\n- Good communication skills\n- Positive patient reviews",

    crisis: "**Mental Health Crisis Support** 🆘\n\n**Immediate Crisis Resources:**\n- **988 Suicide & Crisis Lifeline**: Call or text 988\n- **Emergency Services**: Call 911 for life-threatening situations\n- **Crisis Text Line**: Text HOME to 741741\n- **Local Emergency Rooms**: For immediate medical care\n- **Poison Control**: 1-800-222-1222\n\n**Warning Signs of Crisis:**\n- Thoughts of self-harm or suicide\n- Severe anxiety or panic attacks\n- Psychosis or loss of touch with reality\n- Inability to care for basic needs\n- Sudden, severe behavior changes\n\n**What to Do in Crisis:**\n- Stay with the person if safe\n- Remove immediate dangers\n- Call emergency services if needed\n- Contact crisis hotlines\n- Follow professional guidance\n\n**PriHub Crisis Support:**\n- 24/7 crisis resource directory\n- Emergency contact information\n- Safety planning tools\n- Follow-up support resources\n- Connection to local services",

    lifeline: "**988 Suicide & Crisis Lifeline** ☎️\n\n**About 988:**\n- Free, confidential support 24/7\n- Available across the United States\n- Trained crisis counselors\n- Multiple language support\n- Text and call options\n\n**When to Call 988:**\n- Thoughts of suicide or self-harm\n- Emotional distress or crisis\n- Substance use concerns\n- Mental health crisis\n- Need for emotional support\n\n**What to Expect:**\n- No judgment or criticism\n- Confidential conversation\n- Trained professional support\n- Safety planning assistance\n- Resource connection\n\n**Alternative Options:**\n- **Crisis Text Line**: Text HOME to 741741\n- **Veterans Crisis Line**: 988 then press 1\n- **LGBTQ+ Support**: 988 then press 3\n- **Spanish Language**: Available upon request\n\n**Additional Resources:**\n- Local emergency services: 911\n- Poison control: 1-800-222-1222\n- Domestic violence hotlines\n- Local mental health services",

    emergency24: "**24/7 Emergency Support** 🚨\n\n**Always Available Emergency Services:**\n- **911**: Life-threatening emergencies\n- **988**: Suicide and crisis lifeline\n- **Poison Control**: 1-800-222-1222\n- **Local Crisis Lines**: Region-specific support\n- **Hospital Emergency Rooms**: Immediate medical care\n\n**PriHub Emergency Features:**\n- 24/7 crisis resource directory\n- Emergency contact information\n- Safety planning tools\n- Location-based service finder\n- Immediate help resources\n\n**Types of Emergencies:**\n- Medical emergencies\n- Mental health crises\n- Safety concerns\n- Substance use emergencies\n- Severe emotional distress\n\n**Emergency Preparedness:**\n- Create safety plans\n- Save emergency contacts\n- Know local resources\n- Share plans with trusted contacts\n- Regular plan reviews\n\n**Getting Help:**\n- Don't hesitate to seek help\n- Emergency services are there to help\n- No concern is too small\n- Professional support is available\n- Your safety is the priority",

    // Account & User Management
    createaccount: "**Creating a PriHub Account** 👤\n\n**Account Registration:**\n- Click 'Sign Up' on the homepage\n- Enter your email address\n- Create a secure password\n- Complete your profile information\n- Verify your email address\n\n**Profile Information:**\n- Name and contact details\n- Age and demographic information\n- Cognitive disability interests (optional)\n- Accessibility preferences\n- Privacy settings\n\n**Benefits of Account:**\n- Save favorite resources\n- Track learning progress\n- Participate in community discussions\n- Receive personalized recommendations\n- Access premium features\n\n**Account Security:**\n- Two-factor authentication available\n- Regular security updates\n- Privacy protection controls\n- Data encryption standards\n- Secure password storage",

    login: "**Logging into PriHub** 🔐\n\n**Login Process:**\n- Go to the PriHub homepage\n- Click 'Login' in the top right\n- Enter your email and password\n- Click 'Sign In'\n- Access your personalized dashboard\n\n**Login Options:**\n- Email and password login\n- Social media login (Google, Facebook)\n- Remember me option\n- Password reset available\n- Multi-device login support\n\n**Troubleshooting:**\n- Check email spelling\n- Reset forgotten password\n- Clear browser cache\n- Disable browser extensions\n- Contact support if needed\n\n**Security Features:**\n- Encrypted login process\n- Session timeout protection\n- Suspicious activity detection\n- Secure logout options\n- Login history tracking",

    forgotpassword: "**Password Reset for PriHub** �\n\n**Reset Process:**\n- Click 'Forgot Password' on login page\n- Enter your registered email address\n- Check your email for reset link\n- Click the reset link (valid for 24 hours)\n- Create a new secure password\n\n**Password Requirements:**\n- Minimum 8 characters\n- Include uppercase and lowercase letters\n- Include at least one number\n- Include special character (!@#$%^&*)\n- Avoid common password patterns\n\n**Security Tips:**\n- Use unique password for PriHub\n- Don't share your password\n- Change passwords regularly\n- Use password manager\n- Enable two-factor authentication\n\n**If Not Receiving Email:**\n- Check spam/junk folder\n- Verify correct email address\n- Contact support for assistance\n- Try alternative email address\n- Check email service status",

    updateprofile: "**Updating Your PriHub Profile** ⚙️\n\n**Profile Sections:**\n- **Personal Information**: Name, email, demographics\n- **Accessibility Settings**: Text size, contrast, preferences\n- **Interests**: Cognitive disability topics of interest\n- **Privacy Settings**: Information sharing preferences\n- **Notification Preferences**: Email and alert settings\n\n**How to Update:**\n- Log into your PriHub account\n- Go to 'Account Settings'\n- Select the section to update\n- Make desired changes\n- Click 'Save Changes'\n\n**Recommended Updates:**\n- Keep contact information current\n- Update accessibility preferences\n- Add new interests as they develop\n- Review privacy settings regularly\n- Adjust notification frequency\n\n**Benefits of Updated Profile:**\n- Better personalized recommendations\n- Improved community connections\n- Enhanced accessibility experience\n- Relevant content suggestions\n- Accurate support resources",

    deleteaccount: "**Deleting Your PriHub Account** 🗑️\n\n**Account Deletion Process:**\n- Go to 'Account Settings'\n- Scroll to 'Delete Account' section\n- Read the deletion consequences\n- Confirm your identity (password required)\n- Click 'Delete Account'\n- Confirm final deletion\n\n**What Happens When Deleted:**\n- Profile information permanently removed\n- Community posts anonymized or deleted\n- Saved preferences cleared\n- Login credentials invalidated\n- Data removed from active systems\n\n**Before Deleting:**\n- Download any saved resources\n- Export important conversations\n- Save contact information from connections\n- Consider deactivation as alternative\n- Contact support with questions\n\n**Data Retention:**\n- Some data may be retained for legal requirements\n- Anonymized data may be used for analytics\n- Deleted content may persist in backups temporarily\n- Public posts may remain in search engines\n- Contact support for specific data concerns",

    // Privacy & Security
    privacy: "**PriHub Privacy Protection** �\n\n**Data Protection Measures:**\n- End-to-end encryption for all data\n- Secure server infrastructure\n- Regular security audits and updates\n- Compliance with privacy laws (GDPR, HIPAA)\n- Limited data collection and storage\n\n**Information We Collect:**\n- Account registration information\n- Usage patterns and preferences\n- Community participation data\n- Technical access information\n- Feedback and support requests\n\n**How We Use Your Data:**\n- Provide personalized services\n- Improve platform functionality\n- Ensure security and reliability\n- Send relevant communications\n- Conduct analytics and research\n\n**Your Privacy Rights:**\n- Access your personal data\n- Correct inaccurate information\n- Delete your account and data\n- Opt out of data collection\n- Request data portability\n\n**Third-Party Sharing:**\n- We never sell personal data\n- Limited sharing with service providers\n- Anonymous data for research purposes\n- Legal compliance requirements\n- Transparent sharing practices",

    security: "**PriHub Security Features** 🛡️\n\n**Account Security:**\n- Encrypted password storage\n- Two-factor authentication\n- Session management\n- Login monitoring\n- Suspicious activity detection\n\n**Platform Security:**\n- SSL/TLS encryption for all connections\n- Regular security updates and patches\n- Secure coding practices\n- Third-party security audits\n- Vulnerability scanning and testing\n\n**Data Protection:**\n- Encrypted data storage\n- Secure backup systems\n- Access control measures\n- Data breach prevention\n- Incident response procedures\n\n**User Security Features:**\n- Privacy controls and settings\n- Activity log access\n- Device management options\n- Secure logout functionality\n- Account recovery options\n\n**Best Practices:**\n- Use strong, unique passwords\n- Enable two-factor authentication\n- Keep software updated\n- Monitor account activity\n- Report security concerns immediately",

    // Mobile & Device Support
    mobile: "**PriHub Mobile Support** 📱\n\n**Mobile Compatibility:**\n- Fully responsive design\n- Works on all smartphones and tablets\n- Touch-optimized interface\n- Mobile-specific features\n- App-like experience on browsers\n\n**Supported Devices:**\n- iOS devices (iPhone, iPad)\n- Android devices (phones, tablets)\n- Windows phones\n- Tablet computers\n- Modern web browsers\n\n**Mobile Features:**\n- Touch-friendly navigation\n- Swipe gestures for navigation\n- Mobile-optimized chat interface\n- Offline reading capability\n- Push notification support\n\n**Accessibility on Mobile:**\n- VoiceOver and TalkBack compatibility\n- Mobile screen reader support\n- Touch accessibility features\n- Adjustable text sizes\n- High contrast mobile mode\n\n**Getting Started on Mobile:**\n- Visit prip-hub.com on mobile browser\n- Bookmark to home screen for app-like access\n- Enable notifications for updates\n- Customize mobile accessibility settings\n- Sync with desktop account",

    app: "**PriHub Mobile App** 📲\n\n**App Availability:**\n- iOS App Store (iPhone, iPad)\n- Google Play Store (Android)\n- Progressive Web App (PWA) option\n- Cross-platform synchronization\n- Regular app updates\n\n**App Features:**\n- Native mobile experience\n- Offline content access\n- Push notifications\n- Biometric login support\n- Mobile-specific accessibility tools\n\n**App Benefits:**\n- Faster loading and performance\n- Better mobile user experience\n- Offline capability for key features\n- Integration with mobile accessibility\n- Background content synchronization\n\n**Download Instructions:**\n- Search 'PriHub' in app stores\n- Download and install the app\n- Log in with existing account\n- Enable notifications and permissions\n- Customize app accessibility settings\n\n**App Support:**\n- In-app help and tutorials\n- Mobile-specific customer support\n- App store reviews and feedback\n- Regular feature updates\n- Bug fixes and performance improvements",

    notifications: "**PriHub Notifications** 🔔\n\n**Notification Types:**\n- **Community Updates**: New posts and replies\n- **Resource Alerts**: New content and materials\n- **Event Reminders**: Upcoming webinars and events\n- **Support Messages**: Professional and peer support\n- **System Updates**: Platform improvements and maintenance\n\n**Notification Channels:**\n- Email notifications\n- Push notifications (mobile app)\n- In-app notifications\n- SMS alerts (emergency situations)\n- Browser notifications\n\n**Customization Options:**\n- Choose notification types\n- Set frequency preferences\n- Define quiet hours\n- Select delivery methods\n- Manage notification settings\n\n**Accessibility Features:**\n- Screen reader compatible notifications\n- High contrast notification display\n- Adjustable notification text size\n- Audio notification options\n- Vibration patterns for mobile\n\n**Managing Notifications:**\n- Access settings in account preferences\n- Use notification center in app\n- Mark notifications as read/unread\n- Filter by notification type\n- Pause notifications temporarily",

    // Technical & Troubleshooting
    website: "**Website Loading Issues** 🌐\n\n**Common Loading Problems:**\n- Slow page loading\n- Pages not loading completely\n- Error messages appearing\n- Images not displaying\n- Features not working\n\n**Troubleshooting Steps:**\n- Refresh the page (F5 or Ctrl+R)\n- Clear browser cache and cookies\n- Check internet connection\n- Try a different browser\n- Disable browser extensions\n\n**Browser Recommendations:**\n- Chrome (latest version)\n- Firefox (latest version)\n- Safari (latest version)\n- Edge (latest version)\n- Mobile browser updates\n\n**Advanced Solutions:**\n- Check browser console for errors\n- Verify JavaScript is enabled\n- Test with incognito/private browsing\n- Check firewall and antivirus settings\n- Contact internet service provider\n\n**When to Contact Support:**\n- Problems persist after troubleshooting\n- Multiple users experiencing issues\n- Specific error messages appear\n- Website appears down\n- Accessibility features not working",

    loginissues: "**Login Troubleshooting** 🔐\n\n**Common Login Problems:**\n- Incorrect password errors\n- Account not found messages\n- Login page not loading\n- Session timeout issues\n- Two-factor authentication problems\n\n**Solutions to Try:**\n- Double-check email and password spelling\n- Use 'Forgot Password' to reset\n- Clear browser cache and cookies\n- Try a different browser\n- Check caps lock key\n\n**Account-Related Issues:**\n- Verify account is activated\n- Check email confirmation status\n- Ensure account is not locked\n- Verify correct login URL\n- Check for account suspension\n\n**Technical Solutions:**\n- Enable JavaScript in browser\n- Disable browser extensions\n- Check internet connection stability\n- Try incognito/private browsing\n- Update browser to latest version\n\n**Getting Help:**\n- Use 'Forgot Password' feature\n- Contact support team\n- Check status page for outages\n- Review account setup emails\n- Verify correct website address",

    features: "**Feature Troubleshooting** ⚙️\n\n**Common Feature Issues:**\n- Chatbot not responding\n- Videos not playing\n- Downloads not working\n- Search function not returning results\n- Accessibility tools not functioning\n\n**Troubleshooting Steps:**\n- Refresh the page\n- Check internet connection\n- Clear browser cache\n- Disable browser extensions\n- Try different browser\n\n**Specific Feature Fixes:**\n- **Chatbot**: Check JavaScript is enabled\n- **Videos**: Update browser or media plugins\n- **Downloads**: Check download folder permissions\n- **Search**: Clear search history and retry\n- **Accessibility**: Verify settings are saved\n\n**Browser Compatibility:**\n- Update to latest browser version\n- Enable required browser features\n- Check supported browser list\n- Test with recommended browsers\n- Report compatibility issues\n\n**Reporting Problems:**\n- Use the feedback form\n- Include error messages\n- Describe steps to reproduce\n- Mention browser and device information\n- Provide screenshots if possible",

    bug: "**Reporting Bugs and Issues** 🐛\n\n**How to Report Bugs:**\n- Use the 'Report a Bug' form\n- Include detailed description\n- Provide steps to reproduce\n- Mention browser and device info\n- Add screenshots if helpful\n\n**Bug Report Information:**\n- What happened (description)\n- What should have happened\n- Steps to reproduce the issue\n- Browser and device details\n- Error messages (if any)\n\n**Priority Levels:**\n- **Critical**: Security issues, complete failure\n- **High**: Major features not working\n- **Medium**: Minor functionality problems\n- **Low**: Cosmetic issues, suggestions\n\n**Follow-up Process:**\n- Confirmation email received\n- Development team review\n- Status updates provided\n- Resolution notification\n- Testing and verification\n\n**Alternative Reporting:**\n- Contact support team directly\n- Use community forums\n- Send email to support@prip-hub.com\n- Use in-app feedback feature\n- Report through social media channels",

    contact: "**Contacting PriHub Support** 📞\n\n**Support Channels:**\n- **Email**: support@prip-hub.com\n- **Live Chat**: Available on website\n- **Phone**: 1-800-PRIHUB (1-800-774-482)\n- **Community Forum**: Peer support\n- **Feedback Form**: Website and app\n\n**Support Hours:**\n- **Email Support**: 24/7 response within 24 hours\n- **Live Chat**: Monday-Friday, 9 AM-6 PM EST\n- **Phone Support**: Monday-Friday, 9 AM-6 PM EST\n- **Emergency Support**: 24/7 for crisis situations\n- **Community**: Always available\n\n**What to Include:**\n- Detailed description of issue\n- Steps to reproduce problem\n- Browser and device information\n- Error messages (if any)\n- Best contact method\n\n**Response Times:**\n- **Critical Issues**: Within 4 hours\n- **High Priority**: Within 8 hours\n- **Medium Priority**: Within 24 hours\n- **Low Priority**: Within 48 hours\n- **General Inquiries**: Within 72 hours\n\n**Accessibility Support:**\n- Screen reader compatible support\n- Alternative communication methods\n- Accessibility-specific assistance\n- Multi-language support options\n- Accommodations as needed",

    // Feedback & Contribution
    feedback: "**Providing Feedback on PriHub** 📝\n\n**Feedback Channels:**\n- **Feedback Form**: Available on every page\n- **Email**: feedback@prip-hub.com\n- **Community Forum**: Public discussion\n- **Surveys**: Periodic user surveys\n- **Direct Message**: To support team\n\n**Types of Feedback:**\n- **Feature Requests**: New functionality ideas\n- **Bug Reports**: Technical issues and errors\n- **User Experience**: Navigation and usability\n- **Content Suggestions**: Topics and resources\n- **Accessibility**: Accessibility improvements\n\n**Feedback Process:**\n- Submit feedback through preferred channel\n- Team review and categorization\n- Priority assessment and planning\n- Development and implementation\n- Response and follow-up\n\n**What Makes Good Feedback:**\n- Specific and detailed descriptions\n- Clear examples and use cases\n- Constructive suggestions\n- Priority level indication\n- Contact information for follow-up\n\n**Feedback Impact:**\n- Direct influence on platform development\n- Community-driven improvements\n- User-centric design decisions\n- Enhanced accessibility features\n- Better overall user experience",

    suggest: "**Suggesting New Features** 💡\n\n**Feature Suggestion Process:**\n- Submit ideas through feedback form\n- Describe the feature in detail\n- Explain the problem it solves\n- Suggest implementation approach\n- Include potential benefits\n\n**What to Include:**\n- Feature name and description\n- Problem statement or need\n- How it would work\n- Who would benefit\n- Priority level\n\n**Evaluation Criteria:**\n- Alignment with PriHub mission\n- Technical feasibility\n- User demand and need\n- Resource requirements\n- Impact on accessibility\n\n**Development Stages:**\n- **Idea Collection**: User submissions\n- **Review**: Team evaluation and prioritization\n- **Planning**: Development roadmap integration\n- **Implementation**: Feature development\n- **Testing**: User testing and feedback\n- **Launch**: Feature release and announcement\n\n**Community Involvement:**\n- Vote on feature priorities\n- Participate in beta testing\n- Provide implementation feedback\n- Share success stories\n- Suggest improvements and iterations",

    survey: "**PriHub User Surveys** 📊\n\n**Survey Types:**\n- **User Experience**: Overall platform satisfaction\n- **Feature Feedback**: Specific feature evaluations\n- **Accessibility**: Accessibility tool effectiveness\n- **Content**: Resource relevance and quality\n- **Community**: Support and connection experiences\n\n**Survey Participation:**\n- Email invitations sent periodically\n- In-app survey notifications\n- Community forum announcements\n- Website pop-up invitations\n- Direct messages from team\n\n**Survey Benefits:**\n- Direct influence on platform improvements\n- Voice in development decisions\n- Better user experience design\n- Enhanced accessibility features\n- Community-driven growth\n\n**What to Expect:**\n- 5-15 minute completion time\n- Multiple choice and open-ended questions\n- Optional demographic information\n- Anonymous participation options\n- Results sharing when available\n\n**Survey Impact:**\n- New feature development\n- User interface improvements\n- Content strategy adjustments\n- Accessibility enhancements\n- Community program development",

    volunteer: "**Volunteering and Contributing** 🤝\n\n**Volunteer Opportunities:**\n- **Content Review**: Help review and improve resources\n- **Community Moderation**: Support forum discussions\n- **Accessibility Testing**: Test accessibility features\n- **Peer Support**: Provide support to other users\n- **Advocacy**: Promote cognitive disability awareness\n\n**How to Get Involved:**\n- Complete volunteer application\n- Specify areas of interest and expertise\n- Complete required training\n- Start with small projects\n- Grow into larger roles\n\n**Volunteer Benefits:**\n- Make meaningful impact\n- Develop new skills\n- Connect with community\n- Gain experience in accessibility\n- Recognition and appreciation\n\n**Requirements:**\n- Commitment to PriHub mission\n- Reliable communication\n- Respect for privacy and confidentiality\n- Willingness to learn and grow\n- Basic technical skills (for some roles)\n\n**Getting Started:**\n- Visit the 'Get Involved' section\n- Fill out volunteer application\n- Attend orientation session\n- Complete training modules\n- Join volunteer community",

    // External Resources & Useful Links
    specialolympics: "**Special Olympics** 🏅\n\n**About Special Olympics:**\n- Global organization serving people with intellectual disabilities\n- Sports training and competition opportunities\n- Inclusive programming for all ability levels\n- Focus on empowerment and community inclusion\n- Over 5 million athletes worldwide\n\n**Programs Offered:**\n- **Sports Training**: Year-round preparation\n- **Competitions**: Local to international events\n- **Unified Sports**: People with and without disabilities together\n- **Health Programs**: Healthy lifestyle education\n- **Leadership Development**: Athlete leadership opportunities\n\n**Getting Involved:**\n- **Athletes**: Register to participate in sports\n- **Volunteers**: Coach, organize, or support events\n- **Partners**: Sponsor or support programs\n- **Fans**: Attend events and cheer for athletes\n- **Advocates**: Promote inclusion and acceptance\n\n**Benefits:**\n- Physical fitness and health\n- Social connections and friendships\n- Confidence and self-esteem\n- Skill development\n- Community inclusion\n\n**Find Local Programs:**\n- Visit specialolympics.org\n- Search by location\n- Contact local chapters\n- Attend information sessions\n- Participate in tryouts",

    nimh: "**National Institute of Mental Health (NIMH)** 🧠\n\n**About NIMH:**\n- Leading federal agency for mental health research\n- Part of the U.S. Department of Health and Human Services\n- Funds research on mental disorders and brain science\n- Provides evidence-based mental health information\n- Translates research into practice\n\n**Research Areas:**\n- Cognitive and brain function\n- Mental disorders and conditions\n- Treatment and prevention strategies\n- Brain imaging and neuroscience\n- Genetics and environmental factors\n\n**Resources Available:**\n- **Health Information**: Evidence-based guides\n- **Research Findings**: Latest study results\n- **Clinical Trials**: Research participation opportunities\n- **Publications**: Scientific papers and reports\n- **Statistics**: Mental health data and trends\n\n**For Cognitive Disabilities:**\n- Research on learning disabilities\n- ADHD studies and treatments\n- Autism spectrum disorder research\n- Cognitive impairment information\n- Brain injury and recovery research\n\n**How to Use NIMH Resources:**\n- Visit nimh.nih.gov\n- Search specific conditions\n- Download free publications\n- Find clinical trials\n- Follow research updates",

    w3c: "**W3C Web Accessibility Initiative** 🌐\n\n**About W3C WAI:**\n- World Wide Web Consortium accessibility initiative\n- Develops web accessibility standards and guidelines\n- Promotes equal access to web information\n- International collaboration on accessibility\n- Evidence-based accessibility recommendations\n\n**Key Standards:**\n- **WCAG**: Web Content Accessibility Guidelines\n- **ARIA**: Accessible Rich Internet Applications\n- **ATAG**: Authoring Tool Accessibility Guidelines\n- **UAAG**: User Agent Accessibility Guidelines\n\n**WCAG 2.1 Principles:**\n- **Perceivable**: Information must be presentable in ways users can perceive\n- **Operable**: Interface components must be operable\n- **Understandable**: Information and operation must be understandable\n- **Robust**: Content must be robust enough for various technologies\n\n**PriHub Compliance:**\n- WCAG 2.1 AA level compliance\n- Regular accessibility testing\n- User feedback incorporation\n- Continuous improvement process\n- Accessibility expert consultation\n\n**Learning Resources:**\n- Free accessibility guidelines\n- Implementation techniques\n- Testing methodologies\n- Case studies and examples\n- Community support forums",

    webaccessibility: "**Web Accessibility Learning** 📚\n\n**Why Web Accessibility Matters:**\n- Equal access to information and services\n- Legal compliance and requirements\n- Better user experience for everyone\n- Inclusive design principles\n- Ethical and social responsibility\n\n**Key Concepts:**\n- **Universal Design**: Design for all users\n- **Assistive Technology**: Tools that help with disabilities\n- **Inclusive Design**: Including diverse user needs\n- **Accessibility Testing**: Ensuring compliance\n- **User-Centered Design**: Focusing on user needs\n\n**Learning Resources:**\n- **Online Courses**: Free accessibility training\n- **Guidelines**: WCAG and other standards\n- **Tools**: Testing and evaluation software\n- **Communities**: Accessibility professional groups\n- **Documentation**: Implementation guides\n\n**Practical Applications:**\n- Website design and development\n- Content creation and management\n- User interface design\n- Testing and evaluation\n- Policy development\n\n**Getting Started:**\n- Learn basic accessibility principles\n- Understand WCAG guidelines\n- Practice with real examples\n- Join accessibility communities\n- Implement and test improvements",

    // Newsletter & Contact
    newsletter: "**PriHub Newsletter** 📧\n\n**Newsletter Content:**\n- **Latest Resources**: New educational materials\n- **Community Updates**: Forum highlights and discussions\n- **Expert Insights**: Professional advice and tips\n- **Success Stories**: Inspiring user experiences\n- **Upcoming Events**: Webinars and workshops\n\n**Subscription Options:**\n- **Weekly Digest**: Weekly highlights and updates\n- **Monthly Newsletter**: Comprehensive monthly update\n- **Topic-Specific**: Focus on particular areas of interest\n- **Event Notifications**: Upcoming webinar and event alerts\n- **Research Updates**: Latest findings and studies\n\n**How to Subscribe:**\n- Visit the newsletter signup page\n- Enter your email address\n- Select subscription preferences\n- Confirm email verification\n- Customize delivery frequency\n\n**Newsletter Benefits:**\n- Stay informed about new resources\n- Learn about community activities\n- Get expert advice and tips\n- Discover success strategies\n- Connect with PriHub community\n\n**Privacy and Control:**\n- Unsubscribe anytime\n- Update preferences easily\n- No spam or sharing of email\n- Secure email delivery\n- GDPR compliant practices",

    subscribe: "**Subscribing to PriHub Newsletter** 📮\n\n**Subscription Process:**\n1. Visit prip-hub.com/newsletter\n2. Enter your email address\n3. Choose newsletter types\n4. Set delivery frequency\n5. Click 'Subscribe'\n6. Confirm email verification\n\n**Newsletter Options:**\n- **Weekly Updates**: Latest content and features\n- **Monthly Digest**: Comprehensive monthly summary\n- **Research Alerts**: Latest study findings\n- **Event Notifications**: Upcoming webinars\n- **Community Highlights**: Forum discussions\n\n**Customization Features:**\n- Choose topics of interest\n- Set delivery preferences\n- Manage subscription types\n- Update email address\n- Pause or cancel anytime\n\n**What You'll Receive:**\n- Educational resource updates\n- Community success stories\n- Expert advice and tips\n- Upcoming event announcements\n- Platform improvement news\n\n**Privacy Protection:**\n- Email never shared with third parties\n- Secure subscription management\n- Easy unsubscribe process\n- Spam-free guarantee\n- GDPR compliant practices",

    contactteam: "**Contacting the PriHub Team** 📞\n\n**Contact Methods:**\n- **Email**: info@prip-hub.com\n- **Phone**: 1-800-PRIHUB (1-800-774-482)\n- **Contact Form**: Available on website\n- **Live Chat**: During business hours\n- **Social Media**: @PriHubSupport\n\n**Team Departments:**\n- **Support**: Technical help and account issues\n- **Content**: Resource and material questions\n- **Community**: Forum and support group help\n- **Accessibility**: Accessibility feature assistance\n- **Partnerships**: Collaboration opportunities\n\n**Response Times:**\n- **General Inquiries**: Within 48 hours\n- **Technical Support**: Within 24 hours\n- **Urgent Issues**: Within 4 hours\n- **Accessibility**: Within 24 hours\n- **Partnership**: Within 72 hours\n\n**What to Include:**\n- Detailed description of inquiry\n- Account information (if applicable)\n- Best contact method\n- Urgency level\n- Any relevant screenshots or documents\n\n**Office Hours:**\n- **Phone Support**: Monday-Friday, 9 AM-6 PM EST\n- **Live Chat**: Monday-Friday, 9 AM-6 PM EST\n- **Email Support**: 24/7 monitoring\n- **Emergency Support**: 24/7 for crisis situations\n- **Community Support**: Always available",

    email: "**PriHub Official Email** 📧\n\n**Official Email Addresses:**\n- **General Information**: info@prip-hub.com\n- **Support**: support@prip-hub.com\n- **Feedback**: feedback@prip-hub.com\n- **Partnerships**: partners@prip-hub.com\n- **Media**: media@prip-hub.com\n- **Accessibility**: accessibility@prip-hub.com\n\n**Email Response Times:**\n- **General Inquiries**: Within 48 hours\n- **Support Requests**: Within 24 hours\n- **Urgent Issues**: Within 4 hours\n- **Feedback**: Within 72 hours\n- **Partnership**: Within 72 hours\n\n**Email Guidelines:**\n- Include clear subject line\n- Provide detailed description\n- Include account information if applicable\n- Attach relevant documents or screenshots\n- Specify urgency level\n\n**Security Notice:**\n- Never share passwords via email\n- Verify official email addresses\n- Report suspicious emails\n- Use secure communication for sensitive information\n- Contact us if you receive suspicious messages\n\n**Alternative Contact:**\n- Use contact form on website\n- Call during business hours\n- Use live chat feature\n- Connect through social media\n- Visit community forums",

    location: "**PriHub Location and Presence** 🌍\n\n**Headquarters:**\n- **Address**: 1234 Accessibility Drive, Suite 100\n- **City**: Boston, Massachusetts\n- **Country**: United States\n- **Postal Code**: 02110\n- **Time Zone**: Eastern Time (ET)\n\n**Global Presence:**\n- **North America**: United States, Canada\n- **Europe**: United Kingdom, Germany, France\n- **Asia-Pacific**: Australia, Japan, Singapore\n- **Latin America**: Brazil, Mexico, Argentina\n- **Africa**: South Africa, Kenya, Nigeria\n\n**Remote Operations:**\n- Fully remote team worldwide\n- Distributed workforce model\n- Virtual collaboration tools\n- Global customer support\n- 24/7 online availability\n\n**Contact Information:**\n- **Phone**: 1-800-PRIHUB (US)\n- **International**: +1-617-555-0123\n- **Email**: info@prip-hub.com\n- **Website**: www.prip-hub.com\n- **Social Media**: @PriHubOfficial\n\n**Visiting Information:**\n- **Office Visits**: By appointment only\n- **Meeting Rooms**: Available for partners\n- **Accessibility**: Fully accessible facility\n- **Parking**: Accessible parking available\n- **Public Transit**: Near public transportation",

    // Closing / Polite Conversation
    thankyou: "**Thank You for Using PriHub** 🙏\n\nYou're very welcome! I'm glad I could help you with cognitive disability information and support. Remember that PriHub is always here to assist you with:\n\n- Educational resources and learning materials\n- Community support and connections\n- Professional help and guidance\n- Accessibility tools and features\n- 24/7 chatbot assistance\n\nFeel free to reach out anytime you need support or have questions. We're committed to helping individuals with cognitive disabilities thrive!\n\nHave a wonderful day! 😊",

    thanks: "**Thanks for Your Help** 💝\n\nYou're absolutely welcome! It's my pleasure to assist you with cognitive disability support and resources. PriHub is dedicated to providing comprehensive help for:\n\n- Understanding cognitive disabilities\n- Finding effective support strategies\n- Connecting with professional help\n- Building supportive communities\n- Accessing educational resources\n\nThank you for trusting PriHub with your questions and needs. We're here whenever you need us, 24/7, with reliable information and compassionate support.\n\nTake care and stay connected! 🌟",

    goodbye: "**Goodbye from PriHub** 👋\n\nThank you for visiting PriHub today! I hope our conversation has been helpful for your cognitive disability support needs. Remember:\n\n**PriHub is always here for you:**\n- 24/7 chatbot assistance\n- Comprehensive resource library\n- Supportive community forums\n- Professional help connections\n- Accessibility-focused design\n\n**Come back anytime:**\n- New resources added regularly\n- Community always active\n- Support always available\n- Improvements based on your feedback\n\nWishing you success on your journey! Don't hesitate to return if you need more support. Goodbye for now! 🌈",

    bye: "**Bye for Now!** 👋\n\nThank you for using PriHub! It was great helping you with cognitive disability information and support today. Remember that:\n\n**We're always available:**\n- 24/7 chat support\n- New resources regularly\n- Community connections\n- Professional guidance\n- Accessibility tools\n\n**Stay connected:**\n- Subscribe to our newsletter\n- Join community discussions\n- Follow us on social media\n- Share your success stories\n\nYour journey with cognitive disability support is important, and PriHub is honored to be part of it. Take care and come back soon! 🌟",

    seeyoulater: "**See You Later!** 👋\n\nThanks for stopping by PriHub today! I hope our conversation about cognitive disabilities has been helpful and informative. Remember:\n\n**PriHub Resources:**\n- Educational materials and guides\n- Community support forums\n- Professional help connections\n- Accessibility features and tools\n- Regular updates and improvements\n\n**Stay in Touch:**\n- Visit us anytime for more information\n- Join our supportive community\n- Access new resources as they're added\n- Share your experiences and insights\n\nYour commitment to learning about cognitive disabilities is admirable. PriHub will be here whenever you need more support or information. Have a wonderful day! 😊",

    exit: "**Exiting PriHub Chat** 🚪\n\nThank you for using PriHub's cognitive disability support chat! Before you go, remember:\n\n**Key Resources:**\n- Browse our comprehensive resource library\n- Join supportive community discussions\n- Connect with professional help when needed\n- Use our accessibility tools for better experience\n\n**Stay Connected:**\n- Return anytime for more support\n- Subscribe to our newsletter for updates\n- Follow us on social media\n- Share your feedback to help us improve\n\n**Emergency Support:**\n- 988 Suicide & Crisis Lifeline\n- Local emergency services: 911\n- Professional help directory available\n\nYour journey matters, and PriHub is committed to supporting you. Thank you for trusting us with your cognitive disability questions. Take care! 🌟",

    default: "**Welcome to PriHub!** 🌟\n\nI'm your cognitive disability support assistant. I can help you with:\n\n🧠 **Understanding Cognitive Disabilities**: Learn about different conditions and how they affect people\n📚 **Educational Resources**: Access guides, articles, and learning materials\n🤝 **Community Support**: Connect with others facing similar challenges\n👨‍⚕️ **Professional Help**: Find therapists, doctors, and specialists\n🔧 **Accessibility Tools**: Get help with screen readers, text-to-speech, and more\n📱 **Technical Support**: Troubleshoot website and app issues\n\n**Try asking me about:**\n- \"What are cognitive disabilities?\"\n- \"How can I help someone with ADHD?\"\n- \"What resources are available for autism?\"\n- \"How do I use the accessibility features?\"\n- \"Where can I find professional help?\"\n\nI'm here 24/7 to provide information and support. What would you like to know today?"
  };

  const toggleChat = () => setChatExpanded(!chatExpanded);
  const closeChat = () => setChatExpanded(false);
  const minimizeChat = () => setIsMinimized(!isMinimized);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const clearChat = () => {
    setMessages([{
      text: "Chat cleared! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      category: "system"
    }]);
  };
  
  const playNotificationSound = () => {
    if (userPreferences.soundEnabled) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
      audio.play().catch(() => {});
    }
  };

  
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
      recognitionRef.current = recognition;
    }
  };
  
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) return value;
    }
    return responses.default;
  };

  const addMessage = (content, sender) => {
    const message = typeof content === 'string' 
      ? { text: content, sender, timestamp: new Date() }
      : { ...content, sender, timestamp: new Date() };
    setMessages((prev) => [...prev, message]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    setImagePreview(null);
  };

  const sendMessage = (message) => {
    const userMessage = message || userInput.trim();
    const hasImage = uploadedImage !== null;
    
    if (!userMessage && !hasImage) return;

    
    if (hasImage) {
      addMessage({ text: userMessage, sender: "user", image: imagePreview });
    } else {
      addMessage(userMessage, "user");
    }
    
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      
      if (hasImage) {
        const imageResponses = [
          "I can see the image you've shared! 📸 This appears to be related to society management. Could you please describe what you'd like me to help you with regarding this image?",
          "Thank you for sharing this image! 🏘️ I can help you with maintenance issues, visitor management, or other society services. What specific assistance do you need?",
          "I've received your image upload! 📋 If this is related to a maintenance request, complaint, or society issue, please provide more details so I can assist you better.",
          "Image received successfully! ✨ I can help process this for society management purposes. What would you like me to do with this image?"
        ];
        const randomImageResponse = imageResponses[Math.floor(Math.random() * imageResponses.length)];
        addMessage(randomImageResponse, "bot");
        clearImage();
      } else {
        addMessage(getBotResponse(userMessage), "bot");
      }
      
      
      const questions = [
        "How can I help you with maintenance today?",
        "Do you need assistance with visitor management?",
        "Would you like to check your maintenance dues?",
        "Is there any security concern I can help with?",
        "Need help booking society amenities?",
        "How can I assist you with billing inquiries?",
        "Do you have any complaints to track?",
        "Would you like information about society events?"
      ];
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      setSuggestions([randomQuestion]);
    }, 1000);
  };

  const formatMessage = (text) =>
    text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  return (
    <div className="z-50" onClick={() => {
      
      if (chatExpanded) {
        setChatExpanded(false);
        setShowServiceMenu(false);
      }
    }}>
      {}
      {!chatExpanded && (
        <motion.div
          className="fixed top-[75%] right-[14px] cursor-pointer z-[998]"
          onClick={toggleChat}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={`relative bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-4 rounded-full shadow-2xl transition-all duration-300 font-semibold border-2 border-[#142C52] hover:border-[#16808D]`}>
            <img src="/image.png" alt="PriHub" className="h-8 w-8" />
            {}
            {messages.length > 1 && (
              <motion.div
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {messages.length - 1}
              </motion.div>
            )}
            {}
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white animate-pulse" style={{backgroundColor: '#147783'}}></div>
          </div>
        </motion.div>
      )}

      {}
      <AnimatePresence>
        {chatExpanded && (
          <motion.div
            id="chatbot-container"
            className={`fixed top-16 right-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-2xl flex flex-col border-2 z-10`}
            style={{width: `${chatbotWidth}px`, height: `${chatbotHeight}px`, borderColor: '#0C4A50'}}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {}
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-[#16808D] to-[#1B9AAA]'} text-white p-4 flex justify-between items-center transition-all`}>
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="h-6 w-6" />
                </motion.div>
                <div className="flex flex-col items-start">
                  <h2 className="font-bold text-lg leading-none">PriHub AI</h2>
                  <div className="flex items-center space-x-2 text-xs opacity-90 mt-1">
                    <div className="h-2 w-2 bg-[#16808D] rounded-full animate-pulse"></div>
                    <span>Online • Advanced AI</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={minimizeChat}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  title="Minimize"
                >
                  {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  title="Toggle Dark Mode"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  title="More Options"
                >
                  <Settings className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowServiceMenu(!showServiceMenu)}
                  className={`relative hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all border-2 animate-pulse`}
                  title="Services"
                  style={{borderColor: '#0C4A50'}}
                >
                  <MoreHorizontal className="h-4 w-4" />
                  {}
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white animate-pulse text-[#0C4A50]" style={{backgroundColor: 'currentColor'}}></div>
                </button>
                <button 
                  onClick={closeChat}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {}
            <AnimatePresence>
              {showAdvancedOptions && (
                <motion.div
                  className={`border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} p-3`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className={`text-sm rounded px-2 py-1 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                      >
                        <option value="all">All Categories</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="security">Security</option>
                        <option value="billing">Billing</option>
                        <option value="amenities">Amenities</option>
                      </select>
                      <button
                        onClick={clearChat}
                        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
                      >
                        Clear Chat
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                        className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors"
                      >
                        {language === 'en' ? 'हिंदी' : 'English'}
                      </button>
                    </div>
                  </div>
                  {}
                  <div className="flex items-center justify-between mt-3 space-x-3">
                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Width:</label>
                      <input
                        type="range"
                        min="300"
                        max="600"
                        value={chatbotWidth}
                        onChange={(e) => setChatbotWidth(Number(e.target.value))}
                        className="w-20"
                      />
                      <span className="text-xs w-8">{chatbotWidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Height:</label>
                      <input
                        type="range"
                        min="300"
                        max="600"
                        value={chatbotHeight}
                        onChange={(e) => setChatbotHeight(Number(e.target.value))}
                        className="w-20"
                      />
                      <span className="text-xs w-8">{chatbotHeight}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {}
            <AnimatePresence>
              {showServiceMenu && (
                <motion.div
                  className={`border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} p-3`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => navigateToService("Dashboard", "/dashboard")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      📊 Dashboard
                    </button>
                    <button
                      onClick={() => navigateToService("Maintenance", "/maintenance")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      🔧 Maintenance
                    </button>
                    <button
                      onClick={() => navigateToService("Visitors", "/visitor-management")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      👥 Visitors
                    </button>
                    <button
                      onClick={() => navigateToService("Finance", "/finance")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      💳 Finance
                    </button>
                    <button
                      onClick={() => navigateToService("Amenities", "/amenities")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      🏊 Amenities
                    </button>
                    <button
                      onClick={() => navigateToService("Security", "/security")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      🔐 Security
                    </button>
                    <button
                      onClick={() => navigateToService("Complaints", "/complaints")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      📋 Complaints
                    </button>
                    <button
                      onClick={() => navigateToService("Emergency", "/emergency")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      🆘 Emergency
                    </button>
                    <button
                      onClick={() => navigateToService("Communication", "/communication")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      📢 Communication
                    </button>
                    <button
                      onClick={() => navigateToService("Administration", "/administration")}
                      className={`text-xs p-2 rounded transition-all font-semibold ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-white hover:bg-gradient-to-r hover:from-[#16808D] hover:to-[#142C52] hover:text-white text-gray-800 border border-gray-300'
                      }`}
                    >
                      ⚙️ Administration
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {}
            {!isMinimized && (
              <div id="chatbot-messages" className={`flex-1 p-4 overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} space-y-3 max-h-[400px]`}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-start space-x-2 ${
                      msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      msg.sender === "user" 
                        ? darkMode 
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white"
                        : darkMode 
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                          : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white"
                    }`}>
                      {msg.sender === "user" ? (
                        <User className="h-5 w-5" />
                      ) : (
                        <Bot className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex flex-col max-w-[75%]">
                      {}
                      {msg.image && (
                        <div className="mb-2">
                          <img 
                            src={msg.image} 
                            alt="Uploaded image" 
                            className="max-w-full h-auto rounded-lg shadow-md"
                            style={{maxHeight: '200px'}}
                          />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl ${
                          msg.sender === "user"
                            ? darkMode
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                              : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white"
                            : darkMode
                              ? "bg-gray-700 text-white border border-gray-600"
                              : "bg-white border border-gray-200 shadow-sm"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: formatMessage(msg.text),
                        }}
                      />
                      {msg.timestamp && (
                        <span className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#142C52] to-[#16808D] text-white flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className={`p-3 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-[#16808D] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#16808D] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#16808D] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {}
            {!isMinimized && (
              <div className={`p-3 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => sendMessage(s)}
                      className={`text-sm px-3 py-2 rounded-full transition-all font-medium ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-gradient-to-r from-[#16808D] to-[#1B9AAA] hover:from-[#1B9AAA] hover:to-[#16808D] text-white'
                      } shadow-sm`}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {}
            {!isMinimized && (
              <div className={`p-3 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
                {}
                {imagePreview && (
                  <div className="mb-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Image Preview</span>
                      <button
                        onClick={clearImage}
                        className="text-red-500 hover:text-red-600 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-w-full h-auto rounded"
                      style={{maxHeight: '100px'}}
                    />
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={startListening}
                    className={`p-2 rounded-full transition-all ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : darkMode 
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                          : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] hover:from-[#1B9AAA] hover:to-[#16808D] text-white"
                    }`}
                    title="Voice Input"
                  >
                    {isListening ? <Mic className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                  
                  <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder={isListening ? "Listening..." : "Type or speak your message..."}
                    className={`flex-1 rounded-full px-4 py-2 text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                        : 'bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300'
                    } border focus:border-[#16808D]`}
                  />
                  
                  <button
                    onClick={() => sendMessage()}
                    className={`p-2 rounded-full transition-all shadow-sm ${
                      darkMode 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] hover:from-[#1B9AAA] hover:to-[#16808D] text-white"
                    }`}
                    title="Send Message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className={`p-2 rounded-full transition-all cursor-pointer ${
                      darkMode 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        : "bg-gradient-to-r from-[#16808D] to-[#1B9AAA] hover:from-[#1B9AAA] hover:to-[#16808D] text-white"
                    }`}
                    title="Attach File"
                  >
                    <Paperclip className="h-4 w-4" />
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
