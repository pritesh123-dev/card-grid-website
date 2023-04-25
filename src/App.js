import "./App.css";
import Topbar from "./componets/topbar";
import NavMenu from './componets/navMenu'
import Card from './componets/card'
import Footer from './componets/footer'

function App() {

  const CardProducts = [
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
      alt : "big-data",
      cardTitle : "Challenges of Machine Learning in Big Data...",
      cardAuthor : "EdYoda",
      cardDate : "24 Aug 2019",
      cardDetails : "Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Datapromises to transform the way we work, live and think by enabling..."
    },
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
      alt : "cloud-computing",
      cardTitle : "Impact of Cloud Computing in various...",
      cardAuthor : "EdYoda",
      cardDate : "24 Aug 2019",
      cardDetails : "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud..."
    },
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
      alt : "cybersecurity",
      cardTitle : "Breaking the Myths around Cybersecurity",
      cardAuthor : "EdYoda",
      cardDate : "26 Aug 2019",
      cardDetails : "Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in front of..."
    },
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      alt : "mean-stack",
      cardTitle : "LAMP Stack Vs MEAN stack: Choosing the righ...",
      cardAuthor : "EdYoda",
      cardDate : "24 Aug 2019",
      cardDetails : "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many..."
    },
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      alt : "machine-learning",
      cardTitle : "Introduction To A Machine Learning Onlin...",
      cardAuthor : "EdYoda",
      cardDate : "23 Aug 2019",
      cardDetails : "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machin..."
    },
    {
      src : "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
      alt : "machine-learning",
      cardTitle : "Practical Machine Learning with Python...",
      cardAuthor : "Daniel Pyrathon",
      cardDate : "16 Oct 2019",
      cardDetails : "Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improv..."
    }
  ]
  return (
    <>
    <div className="appBody">
      <Topbar></Topbar>
      <main>
      <section>
      <h1 id="heading">Latest Posts</h1>
      <div id="filter-padding">
        <div class="fa fa-filter" id="filter"></div>
        <span id="filter-content"> Filter by Category</span>
      </div>
      </section>
      <nav id="link-category">
      <ul>
      <NavMenu content ="All" active={true}/>
      <NavMenu content ="Artificial Intelligence" active={false}/>
      <NavMenu content ="Cloud Computing" active={false}/>
      <NavMenu content ="Devops" active={false}/>
      <NavMenu content ="Programming Languages" active={false}/>
      <NavMenu content ="Mobile Application Development" active={false}/>
      <NavMenu content ="Technology and Tools" active={false}/>
      <NavMenu content ="Get a Job in a Tech Company" active={false}/>
      <NavMenu content ="Others" active={false}/>
      </ul>
    </nav>
      <section className="cardGrid">
        {CardProducts.map((card) => {
          return (
            <Card src={card.src} alt={card.alt} cardTitle={card.cardTitle} cardAuthor={card.cardAuthor} cardDate={card.cardDate} 
              cardDetails={card.cardDetails}/>
          )
        })}
      </section>
      </main>
    </div>
      <Footer></Footer>
      </>
  );
}

export default App;
