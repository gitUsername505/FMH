import Footer from "../components/Footer";
import heroImage from '../assets/HeroImage.jpg';

export default function Home() {
  return (<>
  <div style={{
    // background:  'linear-gradient(rgba(246, 249, 252, 0.85),rgba(246, 249, 252, 0.85)),url("/public/HeroImage.jpg")',
    background:  `linear-gradient(rgba(246, 249, 252, 0.85),rgba(246, 249, 252, 0.85)),url(${heroImage})`,
     backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  //  backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
        // minHeight: "95vh",
        height: '86vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // padding: "2rem",
        paddingTop: 0
  // }
  }}>
  <h1>Fractured Hearts Counseling</h1>
  <h2 style={{marginBottom: '155px'}}>Helping you connect to God, others and self</h2>
  </div>
  <Footer />
  </>
  )
  
}