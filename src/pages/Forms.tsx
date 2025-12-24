import PdfLink from "../components/PDFLink";

export default function Forms() {


     const cardStyle = {
  border: "1px solid #121314ff",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "50px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  width: "320px"
};


  return (<div style={{
      backgroundColor: '#e5ebf1ff',
        minHeight: "93vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
  }}>
     <div style={{marginBottom: '155px'}}>

  <h1>Forms</h1>

<div style={{...cardStyle, marginBottom: '50px' }}>
     <PdfLink fileUrl="/InformedConsentOfTreatment.pdf" fileName="InformedConsetnOfTreatment.pdf" />

<h2>Informed Consent of Treatment</h2>
<p style={{fontSize: '20px'}}>Consent form detailing rights and responsibilities of the client and therapist.</p>
    </div>


<div style={{...cardStyle, marginBottom: '50px', }}>
     <PdfLink fileUrl="/FeeSchedule.pdf" fileName="FeeSchedule.pdf" />
<h2>Telehealth Informed Consent</h2>
<p style={{fontSize: '20px'}}>Consent form detailing rights and responsibilities specific to Telehealth.</p>
     
</div>
<div style={cardStyle}>
     <PdfLink fileUrl="/TelehealthInformedConsent.pdf" fileName="TelehealthInformedConsent.pdf" />
<h2>Fee Schedule</h2>
<p style={{fontSize: '20px'}}>Form to disclose fees, payment and billing policies.</p>
     
</div>
     {/* <PdfLink fileUrl="/TelehealthInformedConsent.pdf" fileName="TelehealthInformedConsent.pdf" /> */}
  </div>
     </div>
  )
}
