import React, { useState } from 'react'

const Faq = () => {
  //
  const [openQuestion, setOpenQuestion] = useState(null);

  
  const faqData = [
    { 
      q: "1. How can I contact the support team?", 
      a: "You can contact us by filling out the form on our Contact Me page." 
    },
    { 
      q: "2. Is this service free or paid?", 
      a: "Our basic services are completely free, but advanced features require a subscription." 
    },
    { 
      q: "3. How long does it take to get a response after submission?", 
      a: "Usually, our team will review your message and reply via email within 24 hours." 
    },
    { 
      q: "4. Can I update my password after registration?", 
      a: "Yes, you can securely change your password anytime from your profile settings." 
    },
    { 
      q: "5. What should I do if my image upload fails?", 
      a: "Please ensure that your image format is PNG or JPG and the file size is less than 2MB." 
    }
  ];

  const handleToggle = (index) => {
    // ૩. જો એ જ સવાલ ફરી ક્લિક થાય તો બંધ (null) કરો, નહિતર નવો ઇન્ડેક્સ સેટ કરો
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Frequently Asked Questions</h1>
      <br />

      {faqData.map((item, index) => (
        <div key={index} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>{item.q}</span>
            <button 
              type="button" 
              onClick={() => handleToggle(index)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#222',
                padding: '0 10px'
              }}
            >
              +
            </button>
 
          </div>

          {/* ૪. જો ઓપન ક્વેશ્ચન અને સવાલનો નંબર સેમ હોય તો જ જવાબ બતાવો */}
          {openQuestion === index && (
            <div style={{ marginTop: '10px', padding: '10px', background: '#f9f9f9', borderRadius: '4px' }}>
              <p>{item.a}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  )
}

export default Faq
