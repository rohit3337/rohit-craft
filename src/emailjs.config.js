// ==========================================
// EmailJS Configuration
// ==========================================
// 
// SETUP INSTRUCTIONS (5 minutes, totally free):
//
// 1. Go to https://www.emailjs.com/ and create a FREE account
//
// 2. ADD EMAIL SERVICE:
//    - Go to "Email Services" → "Add New Service"
//    - Choose "Gmail" → Connect your Gmail (3337.rohit64@gmail.com)
//    - Note down your SERVICE ID (e.g., "service_xxxxxxx")
//
// 3. CREATE CONTACT TEMPLATE:
//    - Go to "Email Templates" → "Create New Template"
//    - Set Subject: "New Contact Message from {{from_name}}"
//    - Set Body:
//        Name: {{from_name}}
//        Email: {{from_email}}
//        Subject: {{subject}}
//        Message: {{message}}
//    - Save → Note down TEMPLATE ID (e.g., "template_contact")
//
// 4. CREATE FEEDBACK TEMPLATE:
//    - Create another template
//    - Set Subject: "New Feedback from {{from_name}} ({{rating}}★)"
//    - Set Body:
//        Name: {{from_name}}
//        Rating: {{rating}} / 5 stars
//        Message: {{message}}
//    - Save → Note down TEMPLATE ID (e.g., "template_feedback")
//
// 5. GET PUBLIC KEY:
//    - Go to "Account" → "API Keys"
//    - Copy your "Public Key"
//
// 6. REPLACE the values below with your actual IDs:
// ==========================================

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_rcz2l4s',       // ← Replace with your EmailJS Service ID
  CONTACT_TEMPLATE_ID: 'template_3yleezq',  // ← Replace with Contact template ID
  FEEDBACK_TEMPLATE_ID: 'template_vyl0jm7', // ← Replace with Feedback template ID
  PUBLIC_KEY: 'i9_ZtQ6wYNG_ggfo5',        // ← Replace with your EmailJS Public Key
}
