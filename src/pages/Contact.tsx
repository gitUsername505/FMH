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
        justifyContent: "center",
        alignItems: "center",
        // padding: "20px",
        fontFamily
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p>Address: P.O. Box 171, Hicksville, OH 43526</p>
        <p>Email: fhmministries@yahoo.com</p>
        <p>Tel: 260-667-3807</p>

        <h3 style={{ marginTop: "30px" }}>
          You can also contact us using this form:
        </h3>

        <form
          action="mailto:smithdavid.0172@gmail.com"
          method="post"
          encType="text/plain"
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#2f5fa7",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}