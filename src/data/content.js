// OneCare RPM — canonical page content.
// Copy this file verbatim to src/data/content.js. Do not reword any string:
// every line is the real copy from onecarehealth.com/remote-patient-monitoring/.
// `icon` values are lucide-react export names.

export const nav = [
  { label: 'Core Modules', href: '#devices' },
  { label: 'Why OneCare', href: '#why' },
  { label: 'Integration', href: '#how-it-works' },
  { label: 'AI Features', href: '#care-plan' },
  { label: 'Blogs', href: '#' },
];

export const hero = {
  eyebrow: 'Remote Patient Monitoring',
  headline: 'Your patients are at home.',
  headlineAccent: 'Your care continues without interruption.',
  sub: 'OneCare RPM connects patients, devices, and doctors into one continuous care system — so you don’t wait for complications, you prevent them.',
  primaryCta: 'Book a Demo',
  secondaryCta: 'Talk to Our Experts',
};

export const stats = [
  { value: 4, suffix: '×', label: 'more patients per consultant' },
  { value: 60, suffix: ' sec', label: 'vitals refresh interval' },
  { value: 99.5, suffix: '%', label: 'device data uptime on secure cloud', decimals: 1 },
];

// Live-vitals card rendered in the hero. Mirrors the Step 5 copy.
export const heroCard = {
  patient: 'Rekha M.',
  meta: 'Post-discharge · Day 4',
  vitals: [
    { label: 'Blood Pressure', value: '128/82', unit: 'mmHg', state: 'ok' },
    { label: 'SpO₂', value: '97', unit: '%', state: 'ok' },
    { label: 'Glucose', value: '430', unit: 'mg/dL', state: 'critical' },
    { label: 'Heart Rate', value: '78', unit: 'bpm', state: 'ok' },
  ],
  alert: 'Critical alert · Glucose 430 mg/dL — care team notified',
};

export const challenge = {
  heading: 'The challenge every hospital administrator goes through',
  intro:
    'India has one doctor for every 834 patients. Beds are limited, OPDs are overloaded, and post-discharge follow-up falls through the cracks. OneCare RPM lets your hospital extend quality care beyond the ward — at scale, and without adding headcount.',
  cards: [
    {
      num: '01',
      icon: 'HeartPulse',
      title: 'Post-discharge cardiac care',
      desc: 'Monitor BP, SpO2, ECG, and weight daily for patients discharged after MI, bypass, or angioplasty. Intervene before the next cardiac event.',
    },
    {
      num: '02',
      icon: 'Droplets',
      title: 'Diabetic patient management',
      desc: 'Continuous glucose and HbA1c trend monitoring for high-risk diabetics across your entire patient population — without scheduling monthly OPD visits.',
    },
    {
      num: '03',
      icon: 'Bandage',
      title: 'Post-surgical recovery tracking',
      desc: 'Track vitals, wound site temperature, and mobility for patients recovering at home after major surgery, reducing hospital stay duration by up to 2 days.',
    },
    {
      num: '04',
      icon: 'Wind',
      title: 'Chronic respiratory monitoring',
      desc: 'SpO2 and respiratory rate tracking for COPD and asthma patients helps prevent emergency admissions — the most expensive and avoidable cost in pulmonology.',
    },
    {
      num: '05',
      icon: 'Baby',
      title: 'High-risk pregnancy watch',
      desc: 'Remote foetal heart rate and maternal BP monitoring for high-risk pregnancies, especially critical for patients in tier-2 cities far from your facility.',
    },
    {
      num: '06',
      icon: 'BedDouble',
      title: 'ICU step-down & HDU overflow',
      desc: 'Move stable ICU patients to a remote monitoring ward earlier — freeing up critical beds while maintaining the same level of clinical oversight.',
    },
  ],
};

// Section heading exactly as it appears on the live page.
export const devicesSection = {
  heading: 'RPM Devices',
};

export const deviceBrands = ['ALL DEVICES', 'FORA', 'TRANSTEK', 'OMRON', 'CONTEC', 'LUCKCOME'];

// 21 devices. `brand` is inferred from the device name — the source page exposes
// the filter tabs but never states the mapping.
export const devices = [
  {
    name: 'FORA IR42 Thermometer',
    brand: 'FORA',
    desc: 'The FORA IR42 Thermometer measures body temperature quickly and accurately using infrared technology. It displays temperature readings in °C (Celsius) or °F (Fahrenheit) for easy monitoring.',
    unit: '°C / °F',
  },
  {
    name: 'FORA TN’G BP',
    brand: 'FORA',
    desc: 'Measures blood pressure and pulse rate quickly and displays the readings on the device screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'FORA TN’G Scale 550',
    brand: 'FORA',
    desc: 'Measures body weight and displays the reading clearly on the digital screen.',
    unit: 'kg / lb',
  },
  {
    name: 'FORA TN’G SpO2',
    brand: 'FORA',
    desc: 'Measures blood oxygen saturation and pulse rate quickly. Displays SpO₂ and pulse readings on the device screen.',
    unit: '% (SpO₂), bpm (Pulse Rate)',
  },
  {
    name: 'Fora 6 Connect',
    brand: 'FORA',
    desc: 'Measures blood glucose levels quickly using a small blood sample. Displays the glucose reading clearly on the device screen.',
    unit: 'mg/dL (Blood Glucose), mmol/L',
  },
  {
    name: 'FORA D40g',
    brand: 'FORA',
    desc: 'Measures blood pressure and pulse rate using an upper-arm cuff. Displays systolic, diastolic, and pulse readings on the device screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'Test N’GO Advance Voice',
    brand: 'FORA',
    desc: 'Measures blood pressure and pulse rate using an upper-arm cuff. Provides voice guidance and announces the readings for easy monitoring.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'Vtrust Pulse Oximeter',
    brand: 'TRANSTEK',
    desc: 'Measures blood oxygen level and pulse rate quickly. Displays SpO₂ and pulse readings on the device screen.',
    unit: '% (SpO₂), bpm (Pulse Rate)',
  },
  {
    name: 'TeleRPM BGM Gen 1',
    brand: 'TRANSTEK',
    desc: 'Measures blood glucose levels using a small blood sample. Displays the glucose reading clearly on the device screen.',
    unit: 'mg/dL (Blood Glucose), mmol/L',
  },
  {
    name: 'TeleRPM BPM Gen 1',
    brand: 'TRANSTEK',
    desc: 'Measures blood pressure and pulse rate using an arm cuff. Displays systolic, diastolic, and pulse readings clearly on the device screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'Body Composition Monitor HBF-222T',
    brand: 'OMRON',
    desc: 'Measures body weight and body composition using a digital scale. Displays weight and body composition readings on the device screen.',
    unit: 'kg / lb (Weight), % (Body Fat)',
  },
  {
    name: 'Digital Weight Scale HN-300T2',
    brand: 'OMRON',
    desc: 'Measures body weight quickly and accurately. Displays the weight reading clearly on the digital screen.',
    unit: 'kg / lb',
  },
  {
    name: 'OMRON Automatic BP HEM-7361T',
    brand: 'OMRON',
    desc: 'Measures blood pressure and pulse rate automatically using an upper-arm cuff. Displays systolic, diastolic, and pulse readings on the screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'OMRON BPM HEM-7156T',
    brand: 'OMRON',
    desc: 'Automatically measures blood pressure and pulse rate using an upper-arm cuff. Displays systolic, diastolic, and pulse readings clearly on the screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'OMRON BPM HEM-7141T1',
    brand: 'OMRON',
    desc: 'Measures blood pressure and pulse rate automatically using an upper-arm cuff. Displays systolic, diastolic, and pulse readings clearly on the screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'OMRON BPM Hem7600T',
    brand: 'OMRON',
    desc: 'Measures blood pressure and pulse rate using an upper-arm cuff. Displays systolic, diastolic, and pulse readings clearly on the screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'OMRON Wrist BPM HEM-6232T',
    brand: 'OMRON',
    desc: 'Measures blood pressure and pulse rate from the wrist. Displays systolic, diastolic, and pulse readings clearly on the screen.',
    unit: 'mmHg (Blood Pressure), bpm (Pulse Rate)',
  },
  {
    name: 'OMRON HBF-255T',
    brand: 'OMRON',
    desc: 'Measures body weight and body composition using a digital scale. Displays weight and body composition readings clearly on the screen.',
    unit: 'kg / lb (Weight), % (Body Fat)',
  },
  {
    name: 'PM10 Portable ECG Monitor',
    brand: 'CONTEC',
    desc: 'Records and displays the heart’s electrical activity (ECG) and heart rate. Designed for quick and convenient cardiac monitoring.',
    unit: 'bpm (Heart Rate), mV (ECG)',
  },
  {
    name: 'CONTEC PM20 Portable ECG Monitor',
    brand: 'CONTEC',
    desc: 'Records a 6-lead ECG and measures heart rate. Displays and stores ECG waveforms for convenient cardiac monitoring.',
    unit: 'bpm (Heart Rate), mV (ECG)',
  },
  {
    name: 'Luckcome EFM-50 Bluetooth Fetal Monitor',
    brand: 'LUCKCOME',
    desc: 'Monitors fetal heart rate and uterine contractions during pregnancy. Supports Bluetooth connectivity for transmitting fetal monitoring data.',
    unit: 'bpm (Fetal Heart Rate), bpm (Maternal Heart Rate), % (TOCO)',
  },
];

export const howItWorks = {
  heading: 'How it works',
  intro:
    'Every step of the RPM journey is managed inside OneCare — from clinical eligibility to device activation to real-time monitoring and escalation.',
  steps: [
    {
      step: 'Step 1',
      title: 'Patient Enrollment & Clinical Eligibility',
      desc: 'Select the patient, define the monitoring timeline, add diagnosis, and confirm clinical eligibility — ensuring only the right patients are enrolled for remote care.',
    },
    {
      step: 'Step 2',
      title: 'Device Ordering & Consent',
      desc: 'Select device (glucose meter, BP monitor, etc.), define the vitals to track, and capture digital or manual patient consent.',
    },
    {
      step: 'Step 3',
      title: 'Technical & Identity Verification',
      desc: 'Verify patient mobile compatibility (Android/iOS), check signal strength for uninterrupted data flow, and confirm patient identity — ensuring smooth, reliable monitoring from day one.',
    },
    {
      step: 'Step 4',
      title: 'Device Provisioning & Activation',
      desc: 'Assign device from inventory, map it to the patient via mobile app, and complete handover. Patient is now connected.',
    },
    {
      step: 'Step 5',
      title: 'Patient Onboarding & Monitoring Begins',
      desc: 'Patient logs into the OneCare app. Device sends readings via Bluetooth, data syncs instantly, and the clinical dashboard shows real-time vitals. A glucose reading of 430 mg/dL triggers a critical alert immediately.',
    },
    {
      step: 'Step 6',
      title: 'Alerts, Intervention & Recovery',
      desc: 'Alerts are triggered automatically, patients receive care instructions instantly, and doctors intervene early.',
    },
    {
      step: 'Step 7',
      title: 'Provider Visibility & Continuous Care',
      desc: 'Doctors see real-time dashboards, complete vitals history, and full alert tracking with timestamps — both patient and care team always aligned, without waiting for an OPD visit.',
    },
  ],
};

export const carePlan = {
  heading: 'Care plan & personalisation',
  subheading: 'Every patient gets a structured care plan',
  intro:
    'OneCare RPM is not just monitoring — it is managed care. Each enrolled patient receives a personalised plan built around their condition, goals, and clinical team.',
  cards: [
    {
      num: '01',
      label: 'Plan',
      icon: 'ClipboardList',
      title: 'Personalised Care Plans',
      desc: 'Define treatment intent, monitoring duration, and care strategy for each patient individually.',
    },
    {
      num: '02',
      label: 'Goals',
      icon: 'Target',
      title: 'SMART Goals',
      desc: 'Track measurable outcomes — glucose control, weight reduction, BP normalisation — with defined timelines.',
    },
    {
      num: '03',
      label: 'Team',
      icon: 'Users',
      title: 'Care Team Assignment',
      desc: 'Assign doctors, nurses, or dietitians per patient. Use predefined care templates to save setup time.',
    },
    {
      num: '04',
      label: 'Alerts',
      icon: 'BellRing',
      title: 'Alert Thresholds',
      desc: 'Set patient-specific vitals limits with severity levels — from mild to critical — and define escalation paths.',
    },
    {
      num: '05',
      label: 'Routine',
      icon: 'CalendarClock',
      title: 'Monitoring Routine',
      desc: 'Define how often each vital is recorded — morning fasting glucose, post-meal BP, or continuous SpO2.',
    },
    {
      num: '06',
      label: 'Docs',
      icon: 'FolderOpen',
      title: 'Attachments & Education',
      desc: 'Upload reports, prescriptions, discharge summaries, and patient care plan — all in one care record.',
    },
  ],
};

export const useCases = {
  heading: 'Use cases',
  subheading: 'The conditions OneCare RPM manages best',
  intro:
    'From chronic disease to post-surgical recovery, OneCare RPM extends quality care for the patients who need continuous oversight the most.',
  cards: [
    {
      num: '01',
      icon: 'Activity',
      title: 'Chronic Disease Management',
      desc: 'Monitor diabetes, hypertension, and long-term cardiovascular conditions with daily vitals tracking and trend analytics — no monthly OPD visits needed.',
    },
    {
      num: '02',
      icon: 'Stethoscope',
      title: 'Post-Discharge Monitoring',
      desc: 'Track recovery after surgery or hospitalisation. Reduce readmissions by identifying deterioration early — before it becomes an emergency.',
    },
    {
      num: '03',
      icon: 'MapPin',
      title: 'Remote & Rural Care',
      desc: 'Monitor patients in tier-2 and tier-3 locations on 3G connections. Quality care no longer depends on proximity to your facility.',
    },
    {
      num: '04',
      icon: 'ShieldAlert',
      title: 'High-Risk Patient Watch',
      desc: 'Identify early signs of deterioration for post-cardiac, post-surgical, and high-risk pregnancy patients — and intervene before the crisis point.',
    },
  ],
};

export const deviceTypes = {
  heading: 'Works with Devices Patients Already Use',
  intro: 'You prescribe based on clinical need and patient affordability.',
  items: [
    { icon: 'Gauge', label: 'BP monitors' },
    { icon: 'Droplet', label: 'Glucometers' },
    { icon: 'Thermometer', label: 'Pulse oximeters & thermometers' },
    { icon: 'Activity', label: 'ECG devices' },
    { icon: 'Watch', label: 'Smart wearables' },
    { icon: 'Baby', label: 'Foetal dopplers and medical-grade devices' },
  ],
  outro: 'OneCare connects with all major medical device brands and protocols',
};

export const whyOneCare = {
  heading: 'Why OneCare RPM',
  subheading: 'Built different — not just another monitoring tool',
  intro:
    'OneCare RPM is a fully integrated, end-to-end care system — not a standalone device dashboard bolted onto your existing HIS.',
  cards: [
    {
      icon: 'Layers',
      title: 'Fully Integrated Ecosystem',
      desc: 'RPM connects directly with OneCare RIS, HIS, and EMR — no middleware, no separate login, no duplicate records.',
    },
    {
      icon: 'Radio',
      title: 'Real-Time Monitoring & Smart Alerts',
      desc: 'AI-driven risk scoring and threshold alerts — customised per patient to eliminate alert fatigue and surface only what matters.',
    },
    {
      icon: 'Workflow',
      title: 'Structured Clinical Workflows',
      desc: 'Enrollment, consent, care plans, alerts, and billing — every step is governed and auditable from a single clinical dashboard.',
    },
    {
      icon: 'Boxes',
      title: 'Device + Software + Care Plan in One',
      desc: 'From device provisioning to care plan management to billing — the entire RPM programme lives inside OneCare.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Secure Enterprise Cloud Infrastructure',
      desc: 'Encrypted medical IoT data pipeline. Role-based access, full audit trail, and data never leaving Indian shores.',
    },
  ],
};

export const faq = {
  heading: 'Frequently Asked Questions',
  intro: 'Everything you need to know about OneCare RPM',
  items: [
    {
      q: 'What is RPM in healthcare?',
      a: ['Remote Patient Monitoring (RPM) is a care delivery model that enables hospitals to track patients’ vital signs and health data in real time, outside the hospital setting. Using connected devices and digital platforms, clinicians can monitor patients remotely, detect early warning signs, and intervene before complications arise.'],
    },
    {
      q: 'How does OneCare RPM work?',
      a: ['OneCare RPM connects patients to your care team through medical-grade devices that capture vitals such as BP, SpO₂, ECG, glucose levels, and more. This data is transmitted securely to a centralized dashboard where clinicians can track trends, receive alerts for abnormal readings, and take timely action — all without requiring the patient to visit the hospital.'],
    },
    {
      q: 'Who should implement RPM?',
      a: ['RPM is ideal for hospitals and healthcare providers managing:'],
      bullets: [
        'Chronic conditions (cardiac, diabetes, respiratory)',
        'Post-discharge patients',
        'High-risk populations (elderly, high-risk pregnancies)',
        'ICU step-down or long-term care patients',
      ],
      tail: 'It is particularly valuable for hospitals looking to scale care, optimize resources, and improve continuity of care.',
    },
    {
      q: 'Does RPM integrate with our existing HIS or EMR?',
      a: ['Yes. OneCare RPM is designed to integrate seamlessly with existing Hospital Management Systems (HMS) and Electronic Medical Records (EMR). This ensures that patient data flows into your existing workflows without duplication, enabling a unified view of patient health and minimizing disruption to clinical operations.'],
    },
    {
      q: 'Is the RPM platform secure?',
      a: ['OneCare RPM is built on secure, industry-grade cloud infrastructure. The platform uses end-to-end encryption, role-based access controls, and secure data transmission protocols to ensure patient data is always protected.'],
    },
  ],
};

export const closingCta = {
  heading: 'Extend your hospital beyond its walls',
  sub: 'Deliver continuous, connected care with OneCare RPM. Build a program tailored to your specialties, patient volumes, and revenue goals.',
  primary: 'Book Free Demo',
  secondary: 'Speak with Expert',
};

export const footer = {
  blurb:
    'Elevate your medical journey with OneCare, the great platform where seekers and mentors unite for a healthier and more informed tomorrow.',
  columns: [
    { title: 'Company', links: ['Home', 'About Us', 'Application', 'FAQ', 'Blogs', 'Case Studies'] },
    { title: 'Access', links: ['Provider Login', 'Doctor Login', 'Patient Login', 'For Demo'] },
    { title: 'Legal', links: ['Contact', 'Privacy Policy', 'Terms & Conditions'] },
  ],
  modules: [
    'Clinic Management Software',
    'Hospital Management Software',
    'Lab Management Software',
    'Pharmacy Management Software',
    'Radiology Management Software',
    'Remote Patient Monitoring',
  ],
  subscribeTitle: 'Join With Us!',
  subscribeCta: 'Subscribe',
  address: '65, AA Arcade First Floor, Subramaniyam Avenue, Vilankuruchi Main Road, Coimbatore, Tamil Nadu – 641035',
  phone: '+91 78454 96222',
  email: 'sales@onecarehealth.com',
  copyright: '© 2024 OneCare. All Rights Reserved.',
  socials: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'],
};
