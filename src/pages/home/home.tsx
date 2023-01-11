import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="w-full">
        <div className="flex flex-row flex-wrap" >
          <div className="w-96 bg-base-300 m-4 p-4 rounded-xl">
            <h1 className="text-2xl font-sans m-3 font-medium text-start">
              O que é a JUBAL?
            </h1>
            <article className="text-start ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas quidem quia voluptatem
                quibusdam voluptatibus quos quas voluptatibus quos quas quidem
                quia voluptatem quibusdam voluptatibus quos quas quidem quia
                voluptatem quibusdam voluptatibus quos quas quidem quia
                voluptatem quibusdam voluptatibus quos quas quidem quia
                voluptatem quibusdam voluptatibus quos quas quidem quia
                voluptatem
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
