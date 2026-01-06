// export default function Contact() {
//   return (<div style={{
//       backgroundColor: '#e5ebf1ff',
//         minHeight: "93vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//   }}>



// <div style={{marginBottom: '150px'}}>

//   <h1>Contact US</h1>
//   <p>Address: P.O. Box 171, Hicksville, OH 43526</p>
//   <p>Email: fhmministries@yahoo.com</p>
//   <p>Tel: 260-667-3807</p>

//   <h3>You can also contact us by using this form:</h3>
//   <form
//   action="mailto:smithdavid.0172@gmail.com"
//   method="post"
//   encType="text/plain"
// >
//   <input type="text" name="name" placeholder="Your Name" required />
//   <input type="email" name="email" placeholder="Your Email" required />
//   <textarea name="message" placeholder="Your Message" required></textarea>
//   <button type="submit">Send</button>
// </form>
// </div>
//   </div>)
// }

export default function Contact() {
  const fontFamily = "'Segoe UI', Tahoma, Arial, sans-serif";
  return (
    <div
      style={{
        backgroundColor: "#e5ebf1ff",
        minHeight: "93vh",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        textAlign: 'center',
        // padding: "20px",
        fontFamily
      }}
    >
      <div style={{ marginTop: '50px', maxWidth: "800px", width: "100%", textAlign: "center", }}>
        <h1 style={{marginBottom: '45px'}}>Contact Us</h1>
        <p style={{ fontSize: '28px'}}>Address: P.O. Box 171, Hicksville, OH 43526</p>
        <p style={{ fontSize: '28px'}}>Email: fhmministries@yahoo.com</p>
        <p style={{ fontSize: '28px'}}>Phone: 260-667-3807</p>

      </div>
    </div>
  );
}